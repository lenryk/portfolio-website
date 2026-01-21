import Image from "next/image";
import { clsx } from "clsx";

export const Icon = ({
  alt = "",
  icon,
  className = "",
  size = 21,
  rotate = false,
  ...rest
}) => {
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
};
