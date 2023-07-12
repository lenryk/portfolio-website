export default function Checkbox({ checked }) {
  return (
    <div className="pointer relative pl-6">
      <input
        type="checkbox"
        className="absolute h-0 w-0 cursor-pointer opacity-0"
      />
      <span
        className={`absolute left-0 top-0 block h-[19px]
      w-[19px] rounded-sm border border-secondary-lynch
      outline-offset-0 outline-secondary-lynch/30
      hover:outline hover:outline-2 ${checked && "bg-secondary-lynch"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${checked ? "" : "hidden"}`}
        >
          <path
            d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
      </span>
    </div>
  );
}
