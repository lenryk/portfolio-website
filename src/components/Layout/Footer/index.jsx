import Icon from "@/components/Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative z-40 flex max-h-[56px] min-h-[56px]
     rounded-lg rounded-t-none border border-lines text-secondary-lynch"
    >
      <div
        id="name"
        className="ml-4 max-w-[146px] cursor-default border-r border-solid border-lines py-4.5 pr-4 lg:ml-6"
      >
        find me on:
      </div>
      <Link
        id="name"
        className="flex w-[52px] max-w-[52px] items-center justify-center border-r border-solid border-lines"
        href="https://www.linkedin.com/in/sam-carr-9a78b15b"
      >
        <Icon className="" icon="linkedin" />
      </Link>
      <Link
        id="name"
        className="ml-auto flex items-center gap-1 border-l border-solid border-lines px-4 py-4 lg:px-7 lg:py-4.5"
        href="https://github.com/lenryk"
      >
        @lenryk
        <Icon icon="github" size={24} />
      </Link>
    </footer>
  );
};

export default Footer;
