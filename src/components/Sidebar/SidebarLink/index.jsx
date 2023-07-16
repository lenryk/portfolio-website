import Icon from "@/components/Icon";
import Link from "next/link";

export default function SidebarLink({ icon, name, url, onClick = null }) {
  const [removeExtension] = name.split(".");
  const Element = url ? Link : "div";

  return (
    <Element
      className="flex cursor-pointer select-none gap-[9px]"
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
