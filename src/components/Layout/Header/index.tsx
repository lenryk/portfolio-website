"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { headerLinks } from "@/data/headerLinks";

export function Header() {
  const currentRoute = usePathname();

  return (
    <nav className="border-lines text-secondary-lynch hidden h-[56px] min-h-[56px] justify-between border-b border-solid select-none lg:flex">
      <Link
        id="name"
        className="border-lines ml-6 max-w-[311px] border-solid py-4.5 lg:w-[311px] lg:border-r"
        href="/"
      >
        sam-carr
      </Link>
      {headerLinks.map((link, index) => {
        if (!link.name) {
          return (
            <div
              key="invisible"
              className="border-lines relative hidden flex-grow border-r px-7 py-4.5 lg:block"
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
              className={`bg-accent-atomic-tangerine absolute bottom-0 left-0 h-[3px] w-full ${
                currentRoute === link.href ? "" : "hidden"
              }`}
            ></div>
          </Link>
        );
      })}
    </nav>
  );
}
