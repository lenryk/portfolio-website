import type { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  name?: string | null;
};

export function Sidebar({ children, name = null }: SidebarProps) {
  return (
    <div className="min-w-[243px] border-0 border-r border-lines">
      {name ? (
        <div className="border-b border-lines py-5 pl-6 lg:hidden">{name}</div>
      ) : null}
      {children}
    </div>
  );
}
