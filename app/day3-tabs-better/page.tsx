"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import "../../style/tabs.css";

const tabList = [
  {
    id: "tab-1",
    label: "Tab 1",
    panelId: "tabpanel-1",
  },
  {
    id: "tab-2",
    label: "Tab 2",
    panelId: "tabpanel-2",
  },
  {
    id: "tab-3",
    label: "Tab 3",
    panelId: "tabpanel-3",
  },
  {
    id: "tab-3d",
    label: "Tab Disabled",
    panelId: "tabpanel-3",
  },
  {
    id: "tab-4",
    label: "Tab 4",
    panelId: "tabpanel-4",
  },
  {
    id: "tab-5",
    label: "Tab 5",
    panelId: "tabpanel-5",
  },
  {
    id: "tab-6",
    label: "Tab 6",
    panelId: "tabpanel-6",
  },
  {
    id: "tab-6b",
    label: "Last Tab Disabled",
    panelId: "tabpanel-6",
  },
];

const panelList = [
  {
    id: "tabpanel-1",
    label: "Panel 1",
    tabId: "tab-1",
    content: (
      <p>
        <a href="https://red.software.systems">Red</a> content Tab 1
      </p>
    ),
  },
  {
    id: "tabpanel-2",
    label: "Panel 2",
    tabId: "tab-2",
    content: <p>Content 2</p>,
  },
  {
    id: "tabpanel-3",
    label: "Panel 3",
    tabId: "tab-3",
    content: <p>Content 3</p>,
  },
  {
    id: "tabpanel-4",
    label: "Panel 4",
    tabId: "tab-4",
    content: <p>Content 4</p>,
  },
  {
    id: "tabpanel-5",
    label: "Panel 5",
    tabId: "tab-5",
    content: <p>Content 5</p>,
  },
  {
    id: "tabpanel-6",
    label: "Panel 6",
    tabId: "tab-6",
    content: <p>Content 6</p>,
  },
];

const Day3Tabs = () => {
  const [focusedTabId, setFocusedTabId] = useState("tab-1");
  const [selectedTabId, setSelectedTabId] = useState("tab-1");
  const [showDisabledTabs, setShowDisabledTabs] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {}, []);

  const isTabEnabled = (tabId: string) => {
    return panelList.findIndex((i) => i.tabId === tabId) !== -1;
  };

  const visibleList = useMemo(() => {
    if (showDisabledTabs) {
      return tabList;
    }
    return tabList.filter((tab) => isTabEnabled(tab.id));
  }, [showDisabledTabs]);

  const findEnabledTab = (
    currentTabId: string,
    direction: "next" | "previous"
  ) => {
    const currentIndex = tabList.findIndex((t) => t.id === currentTabId);
    if (currentIndex === -1) return currentTabId;

    const isPrev = direction === "previous";
    const indexToBe = isPrev
      ? currentIndex - 1 + tabList.length
      : currentIndex + 1;

    let index = indexToBe % tabList.length;
    while (index !== currentIndex) {
      if (isTabEnabled(tabList[index].id)) {
        return tabList[index].id;
      }
      index =
        (isPrev ? index - 1 + tabList.length : index + 1) % tabList.length;
    }
    return currentTabId;
  };

  const findFirstEnabledTab = () => {
    for (let i = 0; i < tabList.length; i++) {
      if (isTabEnabled(tabList[i].id)) {
        return tabList[i].id;
      }
    }
    return tabList[0].id;
  };

  const findLastEnabledTab = () => {
    for (let i = tabList.length - 1; i >= 0; i--) {
      if (isTabEnabled(tabList[i].id)) {
        return tabList[i].id;
      }
    }
    return tabList[tabList.length - 1].id;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    let newTabId = focusedTabId;

    switch (e.key) {
      case "Tab":
        if (focusedTabId === selectedTabId) {
          // Allow Tab to move into the panel content
          return;
        }
        e.preventDefault();
        break;
      case "ArrowRight":
        e.preventDefault();
        newTabId = findEnabledTab(focusedTabId, "next");
        break;
      case "ArrowLeft":
        e.preventDefault();
        newTabId = findEnabledTab(focusedTabId, "previous");
        break;
      case "Home":
        e.preventDefault();
        newTabId = findFirstEnabledTab();
        break;
      case "End":
        e.preventDefault();
        newTabId = findLastEnabledTab();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (focusedTabId !== selectedTabId) {
          setSelectedTabId(focusedTabId);
        } else {
          newTabId = findEnabledTab(focusedTabId, "next");
          setSelectedTabId(newTabId);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (focusedTabId !== selectedTabId) {
          setSelectedTabId(focusedTabId);
        } else {
          newTabId = findEnabledTab(focusedTabId, "previous");
          setSelectedTabId(newTabId);
        }
        break;
      default:
        return;
    }
    setFocusedTabId(newTabId);
    tabRefs.current[newTabId]?.focus();
  };

  return (
    <div className="mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Day 3</h1>
      <h2
        className="text-2xl font-semibold mb-6 dark:text-white"
        id="tablist-1"
      >
        Tabs Sample
      </h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setShowDisabledTabs(!showDisabledTabs)}
        aria-pressed={showDisabledTabs}
      >
        {showDisabledTabs ? "Hide" : "Show"} Disabled Tabs
      </button>
      <div className="tabs-wrapper">
        <div className="text-gray-700 dark:text-gray-300 tabs">
          <div role="tablist" aria-labelledby="tablist-1">
            {visibleList.map((tab) => {
              const hasPanel = panelList.find((i) => i.tabId === tab.id);
              return (
                <button
                  key={tab.id}
                  id={tab.id}
                  type="button"
                  role="tab"
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  disabled={!hasPanel}
                  aria-selected={tab.id === selectedTabId ? "true" : "false"}
                  aria-controls={tab.panelId}
                  tabIndex={tab.id === focusedTabId && hasPanel ? 0 : -1}
                  onClick={() => setFocusedTabId(tab.id)}
                  onKeyDown={handleKeyDown}
                >
                  <span className="focus">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {panelList.map((panel) => (
            <div
              key={panel.id}
              id={panel.id}
              role="tabpanel"
              aria-labelledby={panel.tabId}
              className={`tabpanel ${
                panel.tabId === selectedTabId ? "" : "is-hidden"
              }`}
            >
              {panel.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day3Tabs;
