const Header = () => {
  return (
    <nav className="min-h-56 flex text-secondary-lynch">
      <div
        id="name"
        className="w-[311px] max-w-[311px] border-b border-r border-solid border-lines py-4.5 pl-6"
      >
        Sam Carr
      </div>
      <div id="hello" className="border-b border-r border-lines px-7 py-4.5">
        _hello
      </div>
      <div id="about" className="border-b border-r border-lines px-7 py-4.5">
        _about-me
      </div>
      <div id="projects" className="border-b border-r border-lines px-7 py-4.5">
        _projects
      </div>
      <div className="flex-grow border-b border-lines px-7 py-4.5"></div>
      <div
        id="contact"
        className="ml-auto border-b border-l border-lines px-7 py-4.5"
      >
        _contact-me
      </div>
    </nav>
  );
};

export default Header;
