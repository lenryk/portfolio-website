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

  const isLink = as === "link" || as === "a";
  const isExternal =
    isLink && typeof href === "string" && /^https?:\/\//i.test(href);

  const Element = as === "link" ? Link : as ? as : "div";
  const linkProps = isLink ? { href } : {};
  const externalProps = isExternal
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Element
      className={combinedClasses}
      {...linkProps}
      {...externalProps}
      {...rest}
    >
      <span className={clsx({ "text-primary": preset === "primary" })}>
        {children}
      </span>
    </Element>
  );
}
