import Image from "next/image";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

const iconNames = [
  "arrow-down",
  "arrow-right",
  "close",
  "codewars",
  "contact",
  "folder-green",
  "folder-purple",
  "folder-red",
  "gamepad",
  "gatsby",
  "github",
  "hamburger-menu",
  "image",
  "javascript",
  "linkedin",
  "loader-2",
  "mail",
  "markdown",
  "netlify",
  "next.js",
  "pdf",
  "profile",
  "react",
  "redux",
  "sass",
  "storybook",
  "styled",
  "tailwind",
  "terminal-box",
  "testinglibrary",
  "typescript",
  "user",
] as const;

export type IconName = (typeof iconNames)[number];

type IconProps = Omit<
  ComponentPropsWithoutRef<typeof Image>,
  "src" | "alt" | "width" | "height"
> & {
  icon: IconName;
  alt?: string;
  className?: string;
  size?: number;
  rotate?: boolean;
};

export function Icon({
  alt = "",
  icon,
  className = "",
  size = 21,
  rotate = false,
  ...rest
}: IconProps) {
  return (
    <Image
      className={clsx(className, "transition-transform", {
        "rotate-90": rotate,
      })}
      src={`/icons/${icon}.svg`}
      alt={alt}
      width={size}
      height={size}
      {...rest}
    />
  );
}
