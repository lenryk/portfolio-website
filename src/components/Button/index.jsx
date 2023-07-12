import { clsx } from "clsx";
export default function Button({ children, preset }) {
  const className = clsx(
    "w-fit rounded-lg px-3.5 py-2.5 cursor-pointer text-sm",
    {
      [`bg-button-primary hover:bg-button-primary-hover`]: preset === "primary",
      [`bg-button-ghost outline-2 outline outline-secondary hover:outline-secondary/50`]:
        preset === "ghost",
      "bg-button hover:bg-button-hover": !preset,
    }
  );

  return (
    <div className={className}>
      <p className={preset === "primary" && "text-primary"}>{children}</p>
    </div>
  );
}
