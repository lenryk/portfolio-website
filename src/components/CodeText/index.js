export default function CodeText({ children }) {
  const length = 16;

  return (
    <article className="flex justify-center px-9 pt-[18px] text-lg text-secondary-lynch">
      <div>
        {Array.from({ length }, (_, i) => i + 1).map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <div className="justify-center pl-10 text-center">
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
