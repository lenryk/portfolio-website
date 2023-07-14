import Icon from "@/components/Icon";
import Link from "next/link";
import headerLinks from "@/utils/headerLinks";

export default function MobileMenu() {
  return (
    <div className="">
      <nav
        className="flex h-[56px] min-h-[56px] flex-wrap justify-between
    border-b border-solid border-lines text-secondary-lynch lg:hidden"
      >
        <Link
          id="name"
          className="ml-4 max-w-[311px] border-solid border-lines py-4.5 lg:w-[311px] lg:border-r"
          href="/"
        >
          sam-carr
        </Link>
        <label htmlFor="menu-toggle" className="block cursor-pointer p-4">
          <Icon icon="hamburger-menu" className="lg:hidden" />
        </label>
      </nav>
      <input type="checkbox" id="menu-toggle" className="peer hidden" />
      <div className="relative z-40 hidden h-full peer-checked:block peer-checked:lg:hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen flex-col">
          <ul className="mx-px bg-primary-midnight">
            {Object.entries(headerLinks).map(([name, url]) => {
              if (!name) {
                return null;
              }
              return (
                <li key={url}>
                  <Link
                    href={url}
                    className="block border-b border-lines py-2 pl-4 "
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mx-px min-h-full bg-primary-midnight " />
        </div>
      </div>
    </div>
  );
}
