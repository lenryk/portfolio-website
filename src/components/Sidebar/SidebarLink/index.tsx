import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import type { MouseEventHandler } from "react";
import Link from "next/link";
import { clsx } from "clsx";

type SidebarLinkProps = {
  icon: IconName;
  name: string;
  url?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  page?: string | null;
};

export function SidebarLink({
  icon,
  name,
  url = "",
  onClick,
  page = null,
}: SidebarLinkProps) {
  const [removeExtension] = name.split(".");
  const isLink = Boolean(url);

  const className = clsx(
    "flex cursor-pointer select-none gap-[9px]",
    { "text-secondary": page === name.split(".")[0] },
    { "text-secondary-lynch": page !== name.split(".")[0] },
  );

  if (isLink) {
    return (
      <Link
        className={className}
        id={removeExtension}
        href={url}
        target="_blank"
      >
        <Icon icon={icon} size={24} />
        {name}
      </Link>
    );
  }

  return (
    <div className={className} onClick={onClick} id={removeExtension}>
      <Icon icon={icon} size={24} />
      {name}
    </div>
  );
}
