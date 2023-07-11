import Icon from "@/components/Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex max-h-[56px] min-h-[56px] border-t border-lines text-secondary-lynch">
      <div
        id="name"
        className="w-[146px] max-w-[146px] cursor-default border-r border-solid border-lines py-4.5 pl-6"
      >
        find me on:
      </div>
      <Link
        id="name"
        className="flex w-[52px] max-w-[52px] items-center justify-center border-r border-solid border-lines"
        href="https://www.linkedin.com/in/sam-carr-9a78b15b"
      >
        <Icon className="" icon="LinkedInFill" />
      </Link>
      {/*<div className="flex-grow border-t border-solid border-lines"></div>*/}
      <Link
        id="name"
        className="ml-auto flex items-center gap-1 border-l border-solid border-lines px-7 py-4.5"
        href="https://github.com/lenryk"
      >
        @lenryk
        <Icon icon="GithubFill" size={24} />
      </Link>
    </footer>
  );
};

export default Footer;
