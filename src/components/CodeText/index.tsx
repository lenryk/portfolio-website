"use client";
import { useCallback, useRef, useState } from "react";

type CodeTextProps = {
  html: string;
};

export function CodeText({ html }: CodeTextProps) {
  const [linesLength, setLinesLength] = useState(20);
  const [lineLengthVisible, setLineLengthVisible] = useState(false);
  const observerRef = useRef<ResizeObserver | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerPaddingRef = useRef(0);

  const updateLines = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) {
      return;
    }

    const containerHeight = Math.max(
      0,
      container.clientHeight - containerPaddingRef.current,
    );
    const contentHeight = content.scrollHeight;
    const targetHeight = Math.max(containerHeight, contentHeight);
    if (targetHeight <= 0) {
      return;
    }

    const lineHeight = 28;
    const needsContentLines = contentHeight > containerHeight;
    const nextLines = Math.max(
      1,
      needsContentLines
        ? Math.ceil(targetHeight / lineHeight)
        : Math.floor(targetHeight / lineHeight),
    );
    setLinesLength((prev) => (prev === nextLines ? prev : nextLines));
    setLineLengthVisible(true);
  }, []);

  const setupObserver = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) {
      return;
    }

    if (!observerRef.current) {
      observerRef.current = new ResizeObserver(() => {
        updateLines();
      });
    } else {
      observerRef.current.disconnect();
    }

    observerRef.current.observe(container);
    observerRef.current.observe(content);

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(() => {
      updateLines();
    });
  }, [updateLines]);

  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  const handleContainerRef = useCallback(
    (node: HTMLElement | null) => {
      if (containerRef.current === node) {
        return;
      }

      containerRef.current = node;

      if (!node) {
        cleanup();
        return;
      }

      const styles = window.getComputedStyle(node);
      containerPaddingRef.current =
        parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);

      setupObserver();
    },
    [cleanup, setupObserver],
  );

  const handleContentRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (contentRef.current === node) {
        return;
      }

      contentRef.current = node;

      if (!node) {
        cleanup();
        return;
      }

      setupObserver();
    },
    [cleanup, setupObserver],
  );

  return (
    <article
      className="text-secondary-lynch flex min-h-0 flex-1 overflow-y-auto p-6 text-lg lg:px-9"
      ref={handleContainerRef}
    >
      <div
        className={`hidden transition-opacity duration-500 lg:block lg:opacity-0 ${
          lineLengthVisible ? "lg:opacity-100" : ""
        }`}
      >
        {Array.from({ length: linesLength }, (_, i) => i + 1).map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <div
        className="lg:ml-5"
        ref={handleContentRef}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
