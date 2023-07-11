"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const currentRoute = usePathname();

  const middleButtons = {
    _hello: "/",
    "_about-me": "/about-me",
    _projects: "/projects",
  };

  return (
    <nav className="flex h-[56px] min-h-[56px] justify-between border-b border-solid border-lines text-secondary-lynch">
      <Link
        id="name"
        className="w-[311px] max-w-[311px] border-r border-solid border-lines py-4.5 pl-6"
        href="/"
      >
        sam-carr
      </Link>
      {Object.entries(middleButtons).map(([name, url]) => (
        <Link
          key={url}
          id={name}
          className={`relative border-r border-lines px-7 py-4.5 ${
            currentRoute === url ? "text-secondary" : ""
          }`}
          href={url}
        >
          {name}
          <div
            className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
              currentRoute === url ? "" : "hidden"
            }`}
          ></div>
        </Link>
      ))}
      <Link
        id="contact"
        className="relative ml-auto border-l border-lines px-7 py-4.5"
        href="/contact-me"
      >
        _contact-me
        <div
          className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
            currentRoute === "/contact-me" ? "" : "hidden"
          }`}
        ></div>
      </Link>
    </nav>
  );
}
