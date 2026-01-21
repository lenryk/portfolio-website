export type HeaderLink = {
  name: string;
  href: string;
};

export const headerLinks = [
  { name: "_hello", href: "/" },
  { name: "_about-me", href: "/about-me" },
  { name: "_projects", href: "/projects" },
  { name: "", href: "" },
  { name: "_contact-me", href: "/contact-me" },
] as const satisfies readonly HeaderLink[];
