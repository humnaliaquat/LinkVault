import Link from "next/link";
import React from "react";
import { Link as LinkIcon } from "lucide-react";

const links = [
  { id: 1, name: "Product", href: "#product" },
  { id: 2, name: "Analytics", href: "#analytics" },
  { id: 3, name: "Features", href: "#features" },
  { id: 4, name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight transition-opacity hover:brightness-110"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-(--text) text-(--bg)">
            <LinkIcon className="h-3 w-3" strokeWidth={2.2} />
          </span>

          <span>LinkVault</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-(--muted) transition-colors duration-200 hover:bg-(--hover) hover:text-(--text)"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-(--hover) sm:block "
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-md bg-(--accent) px-4 py-2 text-sm font-semibold text-(--accent-ink) transition-all duration-200 hover:bg-(--accent-hover) "
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
