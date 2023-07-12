import Checkbox from "@/components/Checkbox";
import Icon from "@/components/Icon";

export default function FilterRow({ name, checked, onClick }) {
  return (
    <div
      onClick={() => onClick(name)}
      className="flex cursor-pointer select-none gap-[10px] pt-4 text-secondary-lynch"
    >
      <Checkbox checked={checked} />
      <Icon
        alt={name}
        icon={name}
        size={24}
        className={checked ? "" : "opacity-40"}
      />{" "}
      <span
        className={checked && "text-secondary"}
      >{`${name[0].toUpperCase()}${name.substring(1)}`}</span>
    </div>
  );
}
