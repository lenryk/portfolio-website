import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  size?: "h1" | "h2";
};

export function Heading({
  children,
  className = "",
  size = "h1",
}: HeadingProps) {
  const headingSizeStyling = size === "h1" ? "text-6xl" : "text-3xl";
  const HeadingTag = size;

  return (
    <HeadingTag className={`${headingSizeStyling} ${className}`}>
      {children}
    </HeadingTag>
  );
}
