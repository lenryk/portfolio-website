"use client";
import { Icon } from "@/components/Icon";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type SidebarSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function SidebarSection({
  title,
  children,
  className = "",
}: SidebarSectionProps) {
  const itemsVisibleRef = useRef(false);
  const [itemsVisible, setItemsVisible] = useState(false);

  useLayoutEffect(() => {
    itemsVisibleRef.current = window.innerWidth >= 1024;
    const nextVisible = itemsVisibleRef.current;
    setItemsVisible(nextVisible);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      const nextVisible = window.innerWidth >= 1024;
      itemsVisibleRef.current = nextVisible;
      setItemsVisible(nextVisible);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div
        className={`border-lines bg-lines lg:bg-primary-midnight flex h-[41px] items-center gap-[11px] border-0 border-b select-none ${className}`}
      >
        <label htmlFor={title} className="flex cursor-pointer gap-[11px] pl-4">
          <Icon
            icon="arrow-right"
            size={24}
            rotate={itemsVisible}
            className=""
          />
          {title}
        </label>
      </div>
      <input
        type="checkbox"
        id={title}
        className="hidden"
        checked={itemsVisible}
        onChange={(event) => setItemsVisible(event.target.checked)}
      />
      {itemsVisible ? (
        <div className="border-lines flex flex-col gap-[11px] border-0 py-6 pl-6 lg:border-b">
          {children}
        </div>
      ) : null}
    </>
  );
}
