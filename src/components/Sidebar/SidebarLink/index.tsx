import Icon from "@/components/Icon";
import Link from "next/link";
import { clsx } from "clsx";

export default function SidebarLink({
  icon,
  name,
  url,
  onClick = null,
  page = null,
}) {
  const [removeExtension] = name.split(".");
  const Element = url ? Link : "div";

  const className = clsx(
    "flex cursor-pointer select-none gap-[9px]",
    { "text-secondary": page === name.split(".")[0] },
    { "text-secondary-lynch": page !== name.split(".")[0] }
  );

  return (
    <Element
      className={className}
      onClick={onClick}
      id={removeExtension}
      href={url}
      target="_blank"
    >
      <Icon icon={icon} size={24} />
      {name}
    </Element>
  );
}
