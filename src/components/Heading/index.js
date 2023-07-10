const Heading = ({ children, className, size: HeadingSize = "h1" }) => {
  const headingSizeStyling = HeadingSize === "h1" ? "text-6xl" : "text-3xl";

  return (
    <HeadingSize className={`${headingSizeStyling} ${className}`}>
      {children}
    </HeadingSize>
  );
};

export default Heading;
