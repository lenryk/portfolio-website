"use client";
import { Icon } from "@/components/Icon";
import { useCallback, useRef, useState } from "react";
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
  const [itemsVisible, setItemsVisible] = useState(false);
  const headerNodeRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const handleHeaderRef = useCallback((node: HTMLDivElement | null) => {
    if (headerNodeRef.current === node) {
      return;
    }

    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    headerNodeRef.current = node;

    if (!node) {
      return;
    }

    function updateFromViewport() {
      const nextVisible = window.innerWidth >= 1024;
      setItemsVisible((prev) => (prev === nextVisible ? prev : nextVisible));
    }

    updateFromViewport();
    window.addEventListener("resize", updateFromViewport);

    cleanupRef.current = () => {
      window.removeEventListener("resize", updateFromViewport);
    };
  }, []);

  return (
    <>
      <div
        className={`border-lines bg-lines lg:bg-primary-midnight flex h-[41px] items-center gap-[11px] border-0 border-b select-none ${className}`}
        ref={handleHeaderRef}
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
