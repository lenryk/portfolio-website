"use client";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export default function CodeText({ children, isLoading }) {
  const [skeleton, setSkeleton] = useState(false);
  const length = 16;

  useEffect(() => {
    // Stop skeleton from loading on requests that take less than 100ms (to stop flashing)
    setSkeleton(false);
    if (!children?.article) {
      setTimeout(() => {
        if (!children?.article) {
          setSkeleton(true);
        }
      }, 10);
    }
  }, [children, isLoading]);

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
        <p>{isLoading.toString()}</p>
        {isLoading && skeleton ? (
          <div role="status" className="max-w-full animate-pulse">
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <div className="mb-4 h-2.5 max-w-full rounded-full bg-secondary-lynch"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          children?.article
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
