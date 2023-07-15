import Icon from "@/components/Icon";

export default function SidebarLink({ icon, name }) {
  return (
    <div className="flex gap-[9px]">
      <Icon icon={icon} size={24} />
      {name}
    </div>
  );
}
