import { clsx } from "clsx";
import Link from "next/link";
export default function Button({
  children,
  className,
  preset,
  as,
  href = "",
  ...rest
}) {
  const combinedClasses = clsx(
    className,
    "w-fit rounded-lg px-3 lg:px-3.5 py-2.5 cursor-pointer text-sm",
    {
      [`bg-button-primary hover:bg-button-primary-hover`]: preset === "primary",
      [`bg-button-ghost outline-2 outline outline-secondary hover:outline-secondary/50`]:
        preset === "ghost",
      "bg-button hover:bg-button-hover": !preset,
    }
  );

  const Element = as === "link" ? Link : as ? as : "div";

  return (
    <Element className={combinedClasses} href={href} {...rest}>
      <span className={preset === "primary" && "text-primary"}>{children}</span>
    </Element>
  );
}
