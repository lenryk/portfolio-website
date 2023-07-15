import PropTypes from "prop-types";
export default function CodeText({ children }) {
  const length = 16;

  return (
    <article className="flex justify-center px-6 text-lg text-secondary-lynch lg:px-9 lg:pt-[18px]">
      <div className="hidden lg:block">
        {Array.from({ length }, (_, i) => i + 1).map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <div className="hidden justify-center pl-8 text-center lg:block">
        {Array.from({ length: length - 1 }, (_, i) => (i === 0 ? "/**" : "*"))
          .concat("‎ */")
          .map((e) => (
            <div key={e}>{e}</div>
          ))}
      </div>
      <div>
        <br />
        {children}
      </div>
    </article>
  );
}

/**
 *
 */

CodeText.PropTypes = {
  children: PropTypes.node.isRequired,
};
