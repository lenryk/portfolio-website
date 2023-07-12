import PropTypes from "prop-types";
const Heading = ({ children, className, size: HeadingSize }) => {
  const headingSizeStyling = HeadingSize === "h1" ? "text-6xl" : "text-3xl";

  return (
    <HeadingSize className={`${headingSizeStyling} ${className}`}>
      {children}
    </HeadingSize>
  );
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: "h1",
  className: "",
};
