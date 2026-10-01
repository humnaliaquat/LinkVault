import { ArrowDown, Copy, Link, Plus } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <div className="px-6 md:px-10 lg:px-30 flex flex-col items-center mt-20">
      <div className="grid grid-cols-2 gap-20">
        {/* left side col */}
        <div className="flex flex-col gap-5 ">
          <h1 className="text-7xl text-(--text) font-(family-name:--font-manrope) font-extrabold tracking-tight">
            Short links. Clear insights
          </h1>
          <p className="text-(--muted) text-lg max-w-lg">
            Create powerful short links and understand exactly how they're
            performing.
          </p>

          <div
            className="
    mt-4 flex w-full items-center gap-2
    rounded-lg border border-(--border)
    bg-(--surface) p-1.5
    transition-all duration-200
    focus-within:border-(--accent)
    focus-within:ring-2
    focus-within:ring-(--accent)/10 focus-within:shadow-(--shadow-pop)
  "
          >
            <input
              type="url"
              placeholder="Paste your long URL..."
              className="
      min-w-0 flex-1
      bg-transparent
      px-2 py-2
      text-sm text-(--text)
      outline-none
      placeholder:text-(--faint)
    "
            />

            <button
              type="button"
              className="
      shrink-0
      rounded-md
      bg-(--accent)
      px-5 py-3
      text-sm font-semibold
      text-(--accent-ink)
      transition-all duration-200
      hover:bg-(--accent-hover)
      active:scale-[0.98]
    "
            >
              Shorten
            </button>
          </div>
          <p className="text-xs text-(--muted) mt-4">
            Free to use · Fast redirects · Detailed analytics
          </p>

          <div className="rounded-lg border border-(--border) bg-(--surface) p-4 mt-2">
            {/* Original URL */}
            <div className="flex items-center gap-2 text-sm text-(--muted)">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-(--hover)">
                <Link className="h-3.5 w-3.5" />
              </span>

              <span className="truncate">example.com/very-long-url</span>
            </div>

            {/* Arrow */}
            <div className="my-2 ml-3.5 flex h-5 items-center">
              <ArrowDown className="h-4 w-4 text-(--faint)" />
            </div>

            {/* Shortened URL */}
            <div className="flex items-center justify-between gap-4 rounded-md border border-(--border) bg-(--bg) p-2.5">
              <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-(--text)">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-(--accent)/10 text-(--accent)">
                  <Link className="h-3.5 w-3.5" />
                </span>

                <span className="truncate">
                  linkvault.app/
                  <span className="text-(--accent)">a82Kx</span>
                </span>
              </div>

              <button
                type="button"
                className="
        flex shrink-0 items-center gap-1.5
        rounded-md border border-(--border)
        px-2.5 py-1.5
        text-xs font-medium text-(--muted)
        transition-colors duration-200
        hover:bg-(--hover)
        hover:text-(--text)
      "
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
            </div>
          </div>
        </div>
        {/* right side col */}
        <div>
          <div className="relative border border-(--border) rounded-md">
            <div className="absoulte right-3  border border-(--border) p-4">
              <div className="flex justify-between items-center">
                <p>linkvault.app/a82Kx</p>
                <p className="border border-(--border) rounded-full">
                  Last 7 days
                </p>
              </div>
              {/* analytics */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1.5">
                  <p className="text-(--muted) text-xs">Total clicks</p>
                  <h1 className="text-(--text) font-bold text-xl">1255</h1>
                  <p className="flex items-center text-(--ok) text-xs">
                    <Plus className="w-3 h-3 " />
                    12.5%
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-(--muted) text-xs">Total clicks</p>
                  <h1 className="text-(--text) font-bold text-xl">1255</h1>
                  <p className="flex items-center text-(--ok) text-xs">
                    <Plus className="w-3 h-3 " />
                    12.5%
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-(--muted) text-xs">Total clicks</p>
                  <h1 className="text-(--text) font-bold text-xl">1255</h1>
                  <p className="flex items-center text-(--ok) text-xs">
                    <Plus className="w-3 h-3 " />
                    12.5%
                  </p>
                </div>
              </div>
              {/* graph */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
