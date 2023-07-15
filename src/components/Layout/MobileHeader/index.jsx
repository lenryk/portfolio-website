"use client";
import Icon from "@/components/Icon";
import Link from "next/link";
import headerLinks from "@/utils/headerLinks";
import { useState } from "react";

export default function MobileMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="">
      <nav
        className="flex h-[56px] min-h-[56px] flex-wrap justify-between
    overflow-clip border-b border-solid border-lines text-secondary-lynch lg:hidden"
      >
        <Link
          id="name"
          className="ml-4 max-w-[311px] border-solid border-lines py-4.5 lg:w-[311px] lg:border-r"
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
        onClick={() => setVisible((oldState) => !oldState)}
      />
      <div
        className="invisible relative z-40 min-h-full opacity-10 transition-opacity
      duration-300 peer-checked:visible peer-checked:opacity-100 peer-checked:lg:hidden"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen flex-col transition">
          <ul className="relative z-40 mx-px min-h-full bg-primary-midnight">
            {Object.entries(headerLinks).map(([name, url]) => {
              if (!name) {
                return null;
              }
              return (
                <li key={url}>
                  <Link
                    href={url}
                    className="block border-b border-lines bg-primary-midnight px-6 py-5"
                    onClick={() => setVisible(false)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            <li className="mx-px min-h-[999%] bg-primary-midnight " />
          </ul>
        </div>
      </div>
    </div>
  );
}
