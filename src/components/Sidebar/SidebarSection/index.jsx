"use client";
import Icon from "@/components/Icon";
import { useState } from "react";

export default function SidebarSection({ title, children }) {
  const [itemsVisible, setItemsVisible] = useState(false);

  return (
    <>
      <div
        className="flex h-[41px] items-center gap-[11px]
        border-0 border-b border-lines bg-lines lg:bg-primary-midnight"
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
        checked={setItemsVisible}
        onClick={() => setItemsVisible((oldState) => !oldState)}
      />
      {itemsVisible && (
        <div className="flex-col gap-[8px] border-0 border-lines py-6 pl-6 lg:border-b">
          {children}
        </div>
      )}
    </>
  );
}
