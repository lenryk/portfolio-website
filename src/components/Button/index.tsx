import { clsx } from "clsx";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  preset?: "primary" | "ghost";
};

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "link" | "a";
    href: string;
  };

type ButtonButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
    href?: never;
  };

type ButtonDivProps = ButtonBaseProps &
  HTMLAttributes<HTMLDivElement> & {
    as?: "div";
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonButtonProps | ButtonDivProps;

const isLinkButton = (props: ButtonProps): props is ButtonLinkProps =>
  props.as === "link" || props.as === "a";

const isNativeButton = (props: ButtonProps): props is ButtonButtonProps =>
  props.as === "button";

export function Button(props: ButtonProps) {
  const { className = "", preset } = props;
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

  if (isLinkButton(props)) {
    const { href, children, className: _className, preset: _preset, as: _as, ...rest } =
      props;
    const isExternal = /^https?:\/\//i.test(href);
    const externalProps = isExternal
      ? { target: "_blank", rel: "noreferrer" }
      : {};

    return (
      <Link className={combinedClasses} href={href} {...externalProps} {...rest}>
        <span className={clsx({ "text-primary": preset === "primary" })}>
          {children}
        </span>
      </Link>
    );
  }

  if (isNativeButton(props)) {
    const { children, className: _className, preset: _preset, as: _as, ...rest } =
      props;
    return (
      <button className={combinedClasses} {...rest}>
        <span className={clsx({ "text-primary": preset === "primary" })}>
          {children}
        </span>
      </button>
    );
  }

  const { children, className: _className, preset: _preset, as: _as, ...rest } =
    props;
  return (
    <div className={combinedClasses} {...rest}>
      <span className={clsx({ "text-primary": preset === "primary" })}>
        {children}
      </span>
    </div>
  );
}
