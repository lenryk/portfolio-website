import type { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
  name?: string | null;
};

export function Sidebar({ children, name = null }: SidebarProps) {
  return (
    <div className="border-lines min-w-[243px] border-0 border-r">
      {name ? (
        <div className="border-lines border-b py-5 pl-6 lg:hidden">{name}</div>
      ) : null}
      {children}
    </div>
  );
}
