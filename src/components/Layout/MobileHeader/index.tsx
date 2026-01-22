"use client";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { headerLinks } from "@/data/headerLinks";
import { useState } from "react";

export function MobileHeader() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="">
      <nav className="border-lines text-secondary-lynch flex h-[56px] min-h-[56px] flex-wrap justify-between overflow-clip border-b border-solid lg:hidden">
        <Link
          id="name"
          className="border-lines ml-4 max-w-[311px] border-solid py-4.5 lg:w-[311px] lg:border-r"
          href="/"
        >
          sam-carr
        </Link>
        <label htmlFor="menuToggle" className="block cursor-pointer p-4">
          <Icon icon="hamburger-menu" className="lg:hidden" />
        </label>
      </nav>
      <input
        type="checkbox"
        id="menuToggle"
        className="peer hidden"
        checked={visible}
        onChange={(event) => setVisible(event.target.checked)}
      />
      <div className="invisible relative z-40 min-h-full opacity-10 transition-opacity duration-300 peer-checked:visible peer-checked:opacity-100 peer-checked:lg:hidden">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex h-screen flex-col transition">
          <ul className="bg-primary-midnight relative z-40 mx-px min-h-full">
            {headerLinks.map((link) => {
              if (!link.name) {
                return null;
              }
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="border-lines bg-primary-midnight block border-b px-6 py-5"
                    onClick={() => setVisible(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="bg-primary-midnight mx-px min-h-[999%]" />
          </ul>
        </div>
      </div>
    </div>
  );
}
