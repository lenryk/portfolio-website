import Image from "next/image";
import PropTypes from "prop-types";

const Icon = ({
  alt = "",
  icon,
  className = "",
  size = 21,
  rotate,
  ...rest
}) => {
  return (
    <Image
      className={`${className} transition-transform ${rotate && "rotate-90"}`}
      src={`/icons/${icon}.svg`}
      alt={alt}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export default Icon;

Icon.propTypes = {
  alt: PropTypes.string,
  icon: PropTypes.oneOf([
    "github",
    "arrow-down",
    "arrow-right",
    "close",
    "folder-green",
    "folder-purple",
    "folder-red",
    "gamepad",
    "hamburger-menu",
    "image",
    "javascript",
    "linkedin",
    "loader-2",
    "mail",
    "markdown",
    "terminal-box",
    "user",
    "gatsby",
    "typescript",
    "styled",
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};
