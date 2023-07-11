"use client";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();

  const middleButtons = {
    _hello: "/",
    "_about-me": "/about-me",
    _projects: "/projects",
  };

  return (
    <nav className="flex max-h-[56px] min-h-[56px] text-secondary-lynch">
      <div
        id="name"
        className="w-[311px] max-w-[311px] border-b border-r border-solid border-lines py-4.5 pl-6"
      >
        sam-carr
      </div>
      <div
        id="hello"
        className="relative border-b border-r border-lines px-7 py-4.5 "
      >
        _hello
        <div
          className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
            currentRoute === "/" ? "" : "hidden"
          }`}
        ></div>
      </div>
      <div
        id="about"
        className=" relative border-b border-r border-lines px-7 py-4.5"
      >
        _about-me
        <div
          className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
            currentRoute === "/about-me" ? "" : "hidden"
          }`}
        ></div>
      </div>
      <div
        id="projects"
        className="relative border-b border-r border-lines px-7 py-4.5"
      >
        _projects
        <div
          className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
            currentRoute === "/projects" ? "" : "hidden"
          }`}
        ></div>
      </div>
      <div className="flex-grow border-b border-lines px-7 py-4.5"></div>
      <div
        id="contact"
        className="relative ml-auto border-b border-l border-lines px-7 py-4.5"
      >
        _contact-me
        <div
          className={`absolute bottom-0 left-0 h-[3px] w-full bg-accent-atomic-tangerine ${
            currentRoute === "/contact-me" ? "" : "hidden"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Header;
