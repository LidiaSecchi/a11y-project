import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            A11y Sample Project
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Put your accessibility stuff here.
          </p>
          <div className="flex w-full gap-4 focus-visible:outline-2 focus-visible:outline-orange-700">
            <Link
              className="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500 transition-colors pointer-events-none"
              aria-label="Day 1 - Coming soon"
              href="/day2"
            >
              Day1
            </Link>
            <Link
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors"
              title="Go to the day2 page"
              aria-label="Go to the day2 page"
              href="/day2-focus-trap"
            >
              Day2 - trap focus example
            </Link>
            <Link
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors"
              title="Go to the day2 page"
              aria-label="Go to the day2 page"
              href="/day2-form"
            >
              Day2 - form
            </Link>
            <Link
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors"
              title="Go to the day2 page"
              aria-label="Go to the day2 page"
              href="/day2-view-toggle"
            >
              Day2 - view toggle
            </Link>
            <Link
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors"
              title="Go to the day3 page"
              aria-label="Go to the day3 page"
              href="/day3-tabs-better"
            >
              Day3 - tabs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
