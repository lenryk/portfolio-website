import Icon from "@/components/Icon";

const Footer = () => {
  return (
    <footer className="flex max-h-[56px] min-h-[56px] text-secondary-lynch">
      {" "}
      <div
        id="name"
        className="w-[146px] max-w-[146px] border-r border-t border-solid border-lines py-4.5 pl-6"
      >
        find me on:
      </div>
      <div
        id="name"
        className="flex w-[52px] max-w-[52px] items-center justify-center border-r border-t border-solid border-lines"
      >
        <Icon className="" icon="LinkedInFill" />
      </div>
      <div className="flex-grow border-t border-solid border-lines"></div>
      <div
        id="name"
        className="flex items-center gap-1 border-l border-r border-t border-solid border-lines px-7 py-4.5"
      >
        @username
        <Icon icon="GithubFill" size={24} />
      </div>
    </footer>
  );
};

export default Footer;
