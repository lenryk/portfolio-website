"use client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type CodeTextProps = {
  children: string;
};

export function CodeText({ children }: CodeTextProps) {
  const [isClient, setIsClient] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(() => contentRef.current?.offsetHeight);
  const [linesLength, setLinesLength] = useState(20);
  const [lineLengthVisible, setLineLengthVisible] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  function updateHeight() {
    const nextHeight = contentRef.current?.firstElementChild?.clientHeight;
    if (nextHeight !== undefined) {
      setHeight(nextHeight);
    }
  }

  useLayoutEffect(() => {
    if (isClient) {
      updateHeight();
    }
  }, [isClient, children]);

  useLayoutEffect(() => {
    setLinesLength(Math.round(height / 28) + 1);
    setLineLengthVisible(true);
  }, [height]);

  useEffect(() => {
    function handleWindowResize() {
      updateHeight();
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <article className="flex p-6 text-lg text-secondary-lynch lg:px-9">
      <div
        className={`hidden transition-opacity duration-500 lg:block lg:opacity-0 ${
          lineLengthVisible ? "lg:opacity-100" : ""
        }`}
      >
        {Array.from({ length: linesLength }, (_, i) => i + 1).map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <div className="lg:ml-5" ref={contentRef}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {children}
        </ReactMarkdown>
      </div>
    </article>
  );
}
