import type { ReactNode } from "react";

type InputType = "text" | "email" | "textarea";

type InputProps = {
  type: InputType;
  label: string;
  children: ReactNode;
};

export function Input({ type, label, children }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-secondary-lynch mb-2.5" htmlFor={label}>
        {children}
      </label>
      {type === "textarea" ? (
        <textarea
          className="border-lines bg-primary-blue-charcoal text-secondary-lynch focus:border-secondary-lynch h-[145px] resize-none rounded-lg border p-4 outline-none focus:outline-1"
          id={label}
          name={label}
          required
        />
      ) : (
        <input
          className="border-lines bg-primary-blue-charcoal text-secondary-lynch focus:border-secondary-lynch h-[41px] rounded-lg border pl-4 outline-none focus:outline-1"
          id={label}
          name={label}
          type={type}
          required
        />
      )}
    </div>
  );
}
