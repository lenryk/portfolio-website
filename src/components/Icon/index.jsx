import Image from "next/image";
import PropTypes from "prop-types";

const Icon = ({ alt, icon, className, size, rotate }) => {
  return (
    <Image
      className={`${className} transition-transform ${rotate && "rotate-90"}`}
      src={`/icons/${icon}.svg`}
      alt={alt}
      width={size}
      height={size}
    />
  );
};

export default Icon;

Icon.PropTypes = {
  alt: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([
    "github",
    "arrow-down",
    "arrow-right",
    "close",
    "folder-green",
    "folder-purple",
    "folder-red",
    "gamepad",
    "image",
    "javascript",
    "linkedin",
    "mail",
    "markdown",
    "terminal-box",
    "user",
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  className: "",
  size: 21,
};
