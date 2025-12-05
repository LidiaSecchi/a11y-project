"use client";

import { useEffect, useRef } from "react";

const Day2 = () => {
  const trapRef = useRef<HTMLDivElement>(null);
  const outsideButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const { current: trapElement } = trapRef;
    if (!trapElement) return;

    const focusableElements = trapElement.querySelectorAll(
      'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const [firstEl, ...rest] = focusableElements;
    const lastEl = rest[rest.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("Key pressed:", e.key, firstEl, lastEl);

      if (e.key === "Escape") {
        outsideButtonRef.current?.focus(); // REFACTOR: move focus outside the trap
        return;
      }

      if (e.key !== "Tab") return;

      if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        (firstEl as HTMLElement).focus();
      }
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        (lastEl as HTMLElement).focus();
      }
    };

    trapElement.addEventListener("keydown", handleKeyDown);
    (firstEl as HTMLElement)?.focus();

    return () => {
      trapElement.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Day 2</h1>
      <div className="text-gray-700 dark:text-gray-300">
        <h2>Focus Trap</h2>
        <div
          ref={trapRef}
          className="mt-4 p-4 rounded bg-gray-50 dark:bg-gray-800 flex gap-4"
        >
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus-visible:outline-4 focus-visible:ring-2 focus-visible:ring-blue-400">
            Button 1
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus-visible:outline-4 focus-visible:ring-2 focus-visible:ring-blue-400">
            Button 2
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus-visible:outline-4 focus-visible:ring-2 focus-visible:ring-blue-400">
            Button 3
          </button>
          <button
            disabled
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-700"
          >
            Button 4
          </button>
        </div>
      </div>
      <button
        ref={outsideButtonRef}
        className="px-4 py-2 my-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus-visible:outline-4 focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        Button Outside
      </button>
    </div>
  );
};

export default Day2;
