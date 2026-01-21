"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import headerLinks from "@/utils/headerLinks";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <nav
      className="hidden h-[56px] min-h-[56px] select-none
    justify-between border-b border-solid border-lines text-secondary-lynch lg:flex"
    >
      <Link
        id="name"
        className="ml-6 max-w-[311px] border-solid border-lines py-4.5 lg:w-[311px] lg:border-r"
        href="/"
      >
        sam-carr
      </Link>
      {Object.entries(headerLinks).map(([name, url], index) => {
        if (!name) {
          return (
            <div
              key="invisible"
              className="relative hidden flex-grow border-r border-lines px-7 py-4.5 lg:block"
            />
          );
        }

        return (
          <Link
            key={url}
            id={name}
            className={`relative hidden ${
              index !== Object.entries(headerLinks).length - 1 ? "border-r" : ""
            } border-lines px-7 py-4.5 lg:block ${
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
        );
      })}
    </nav>
  );
}
