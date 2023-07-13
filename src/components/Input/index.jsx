export default function Input({ type, label, children }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2.5 text-secondary-lynch" htmlFor={label}>
        {children}
      </label>
      {type === "textarea" ? (
        <textarea
          className="h-[145px] resize-none rounded-lg border
          border-lines bg-primary-blue-charcoal p-4
          text-secondary-lynch focus:outline-none"
          id={label}
          required
        />
      ) : (
        <input
          className="h-[41px] rounded-lg border border-lines
          bg-primary-blue-charcoal pl-4 text-secondary-lynch
          outline-secondary-lynch focus:outline-none focus:outline "
          id={label}
          type={type}
          required
        />
      )}
    </div>
  );
}
