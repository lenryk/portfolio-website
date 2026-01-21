"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { headerLinks } from "@/data/headerLinks";

export function Header() {
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
      {headerLinks.map((link, index) => {
        if (!link.name) {
          return (
            <div
              key="invisible"
              className="relative hidden flex-grow border-r border-lines px-7 py-4.5 lg:block"
            />
          );
        }

        return (
          <Link
            key={link.href}
            id={link.name}
            className={`relative hidden ${
              index !== headerLinks.length - 1 ? "border-r" : ""
            } border-lines px-7 py-4.5 lg:block ${
              currentRoute === link.href ? "text-secondary" : ""
            }`}
            href={link.href}
          >
            {link.name}
            <div
              className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
                currentRoute === link.href ? "" : "hidden"
              }`}
            ></div>
          </Link>
        );
      })}
    </nav>
  );
}
