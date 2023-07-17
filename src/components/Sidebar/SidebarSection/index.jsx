"use client";
import Icon from "@/components/Icon";
import { useEffect, useLayoutEffect, useState } from "react";

export default function SidebarSection({ title, children }) {
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const [itemsVisible, setItemsVisible] = useState(() => {
    if (isClient) {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  useLayoutEffect(() => {
    if (isClient) {
      setItemsVisible(window.innerWidth >= 1024);
    }
  }, [isClient]);

  useEffect(() => {
    function handleWindowResize() {
      setItemsVisible(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <div
        className="flex h-[41px] select-none items-center
        gap-[11px] border-0 border-b border-lines bg-lines lg:bg-primary-midnight"
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
        onClick={() => setItemsVisible((oldState) => !oldState)}
      />
      {itemsVisible ? (
        <div className="flex flex-col gap-[11px] border-0 border-lines py-6 pl-6 lg:border-b">
          {children}
        </div>
      ) : null}
    </>
  );
}
