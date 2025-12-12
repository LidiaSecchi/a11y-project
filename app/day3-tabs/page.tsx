"use client";

import { useEffect, useState, useRef } from "react";
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
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {}, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    let newIndex = selectedTabIndex;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        newIndex = (selectedTabIndex + 1) % tabList.length;
        setSelectedTabIndex(newIndex);
        tabRefs.current[newIndex]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        newIndex = (selectedTabIndex - 1 + tabList.length) % tabList.length;
        setSelectedTabIndex(newIndex);
        tabRefs.current[newIndex]?.focus();
        break;
      case "Home":
        e.preventDefault();
        setSelectedTabIndex(0);
        tabRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        newIndex = tabList.length - 1;
        setSelectedTabIndex(newIndex);
        tabRefs.current[newIndex]?.focus();
        break;
      default:
        return;
    }
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
      <div className="tabs-wrapper">
        <div className="text-gray-700 dark:text-gray-300 tabs">
          <div role="tablist" aria-labelledby="tablist-1">
            {tabList.map((tab, index) => (
              <button
                key={tab.id}
                id={tab.id}
                type="button"
                role="tab"
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                aria-selected={index === selectedTabIndex ? "true" : "false"}
                aria-controls={tab.panelId}
                tabIndex={index === selectedTabIndex ? 0 : -1}
                onClick={() => setSelectedTabIndex(index)}
                onKeyDown={handleKeyDown}
              >
                <span className="focus">{tab.label}</span>
              </button>
            ))}
          </div>

          {panelList.map((panel, index) => (
            <div
              key={panel.id}
              id={panel.id}
              role="tabpanel"
              aria-labelledby={panel.tabId}
              className={`tabpanel ${
                index === selectedTabIndex ? "" : "is-hidden"
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
