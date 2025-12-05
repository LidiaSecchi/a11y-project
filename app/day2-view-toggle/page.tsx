"use client";

import { useEffect } from "react";

const Day2ViewToggle = () => {
  useEffect(() => {
    const trigger = document.querySelector(".disclosure-widget > button");
    const panel = document.querySelector(".disclosure-widget > .panel");

    if (!trigger || !panel) return;

    function togglePanel(this: HTMLElement) {
      if (this.getAttribute("aria-expanded") === "true") {
        this.setAttribute("aria-expanded", "false");
        panel?.classList.remove("open");
      } else {
        this.setAttribute("aria-expanded", "true");
        panel?.classList.add("open");
      }
    }

    trigger.classList.remove("start");
    panel?.classList.remove("open");
    trigger.addEventListener("click", togglePanel);
  }, []);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Day 2</h1>
      <div className="text-gray-700 dark:text-gray-300">
        <h2>View Toggle</h2>
        <div>
          <details open name="details">
            <summary className="cursor-pointer text-lg font-medium">
              Toggle View
            </summary>
            Sample 1
          </details>
          <details name="details">
            <summary className="cursor-pointer text-lg font-medium">
              Toggle View
            </summary>
            Sample 3
          </details>
          <details name="details">
            <summary className="cursor-pointer text-lg font-medium">
              Toggle View
            </summary>
            Sample 2
          </details>
        </div>

        <div className="disclosure-widget">
          <button
            aria-expanded="false"
            className="start flex items-center gap-2"
            aria-controls="panel"
          >
            <svg
              className="w-5 h-5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Detail 1
          </button>
          <div className="panel open" id="panel">
            Sample
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day2ViewToggle;
