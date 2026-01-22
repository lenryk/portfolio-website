import { Checkbox } from "@/components/Checkbox";
import { Icon } from "@/components/Icon";
import type { ProjectIcon } from "@/data/projects";

type FilterRowProps = {
  name: ProjectIcon;
  checked: boolean;
  onClick: (name: ProjectIcon) => void;
};

export function FilterRow({ name, checked, onClick }: FilterRowProps) {
  return (
    <div
      onClick={() => onClick(name)}
      className="text-secondary-lynch flex cursor-pointer gap-[10px] select-none"
    >
      <Checkbox checked={checked} />
      <Icon
        alt={name}
        icon={name}
        size={24}
        className={checked ? "" : "opacity-40"}
      />{" "}
      <span className={checked ? "text-secondary" : ""}>
        {`${name[0].toUpperCase()}${name.substring(1)}`}
      </span>
    </div>
  );
}
