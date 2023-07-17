"use client";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export default function CodeText({ children, isLoading }) {
  const length = 16;

  return (
    <article className="flex px-6 text-lg text-secondary-lynch lg:px-9 lg:pt-[18px]">
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
      <div className="w-full">
        <br />
        {isLoading ? (
          <div role="status" className="max-w-full animate-pulse">
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <ReactMarkdown rehypePlugins={rehypeRaw}>{children}</ReactMarkdown>
        )}
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
