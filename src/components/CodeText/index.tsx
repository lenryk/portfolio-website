"use client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useRef, useState } from "react";

type CodeTextProps = {
  children: string;
};

export function CodeText({ children }: CodeTextProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [linesLength, setLinesLength] = useState(20);
  const [lineLengthVisible, setLineLengthVisible] = useState(false);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) {
      return;
    }

    function updateLines() {
      const nextHeight = content.firstElementChild?.clientHeight;
      if (nextHeight === undefined) {
        return;
      }
      setLinesLength(Math.round(nextHeight / 28) + 1);
      setLineLengthVisible(true);
    }

    const observer = new ResizeObserver(() => {
      updateLines();
    });

    observer.observe(content);

    const rafId = requestAnimationFrame(() => {
      updateLines();
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [children]);

  return (
    <article className="text-secondary-lynch flex p-6 text-lg lg:px-9">
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
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
      </div>
    </article>
  );
}
