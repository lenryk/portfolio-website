"use client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useCallback, useRef, useState } from "react";

type CodeTextProps = {
  children: string;
};

export function CodeText({ children }: CodeTextProps) {
  const [linesLength, setLinesLength] = useState(20);
  const [lineLengthVisible, setLineLengthVisible] = useState(false);
  const observerRef = useRef<ResizeObserver | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const handleContentRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    if (!node) {
      return;
    }

    function updateLines() {
      const nextHeight = node.firstElementChild?.clientHeight;
      if (nextHeight === undefined) {
        return;
      }
      setLinesLength(Math.round(nextHeight / 28) + 1);
      setLineLengthVisible(true);
    }

    const observer = new ResizeObserver(() => {
      updateLines();
    });

    observer.observe(node);
    observerRef.current = observer;

    rafIdRef.current = requestAnimationFrame(() => {
      updateLines();
    });
  }, []);

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
      <div className="lg:ml-5" ref={handleContentRef}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
      </div>
    </article>
  );
}
