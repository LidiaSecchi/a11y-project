"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const Menu = () => {
  const trapRef = useRef<HTMLUListElement>(null);
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
      const target = e.target as HTMLElement;
      if (e.key === "Escape") {
        outsideButtonRef.current?.focus();
        return;
      }

      if (e.key === "Enter") {
        const submenu = target.parentElement?.querySelector(".submenu");
        console.log("ENTER pressed on", target, submenu);
        if (submenu) {
          const isExpanded = target.getAttribute("aria-expanded") === "true";
          target.setAttribute("aria-expanded", isExpanded ? "false" : "true");
          submenu.classList.toggle("opacity-100");
          submenu.classList.toggle("visible");
          submenu.classList.toggle("opacity-0");
          submenu.classList.toggle("invisible");
        }
        return;
      }

      if (e.key === "Tab") {
        const currentElement = document.activeElement as HTMLElement;
        const currentLi = currentElement.closest(
          "li:has(button[aria-expanded])"
        );

        setTimeout(() => {
          if (currentLi) {
            const button = currentLi.querySelector("button[aria-expanded]");
            const submenu = currentLi.querySelector(".submenu");
            const newFocus = document.activeElement as HTMLElement;

            if (button && submenu && !currentLi.contains(newFocus)) {
              button.setAttribute("aria-expanded", "false");
              submenu.classList.add("opacity-0", "invisible");
              submenu.classList.remove("opacity-100", "visible");
            }
          }
        }, 0);

        if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          (firstEl as HTMLElement).focus();
        }
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          (lastEl as HTMLElement).focus();
        }
      }
    };

    trapElement.addEventListener("keydown", handleKeyDown);
    (firstEl as HTMLElement)?.focus();

    return () => {
      trapElement.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <header>
      <nav className="bg-gray-800 dark:bg-gray-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <ul role="list" ref={trapRef} className="flex gap-6 items-center">
            <li>
              <Link
                className="px-4 py-2 rounded hover:text-gray-300 transition-colors"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <button
                className="px-4 py-2 rounded hover:text-gray-300 transition-colors flex items-center gap-1"
                aria-controls="submenuDay2"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Day 2 menu"
              >
                Day 2
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul
                id="submenuDay2"
                className="submenu absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-[.focus-within]:opacity-100 group-[.focus-within]:visible transition-all"
              >
                <li>
                  <Link
                    href="/day2-focus-trap"
                    className="block px-4 py-2 hover:bg-gray-600 rounded-t-md"
                  >
                    Focus Trap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/day2-form"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/day2-view-toggle"
                    className="block px-4 py-2 hover:bg-gray-600 rounded-b-md"
                  >
                    View Toggle
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button
                className="px-4 py-2 rounded hover:text-gray-300 transition-colors flex items-center gap-1"
                aria-controls="submenuDay3"
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Day 3 menu"
              >
                Day 3
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul
                role="list"
                id="submenuDay3"
                className="submenu absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-[.focus-within]:opacity-100 group-[.focus-within]:visible transition-all"
              >
                <li>...coming soon</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
