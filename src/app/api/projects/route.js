import { NextResponse } from "next/server";
export async function GET() {
  const projects = {
    portfolio: {
      id: 1,
      url: "https://samcarr.co.uk",
      githubUrl: "https://github.com/lenryk/portfolio-website",
      text: "My portfolio website (the one you are currently on!)",
      icons: ["react", "next.js", "netlify", "tailwind"],
    },
    "more-coming-soon": {
      id: 2,
      url: "#",
      githubUrl: "#",
      text: "Currently in the process of making a range of different projects, so be sure to come back soon!",
      icons: ["react", "next.js"],
    },
    // react: {
    //   id: 3,
    //   image: "portfolio-homepage.jpg",
    //   url: "https://samcarr.co.uk",
    //   githubUrl: "https://www.github.com/something",
    //   text: "Another amazing project but with more filler text",
    //   icons: ["netlify", "tailwind"],
    // },
  };

  return NextResponse.json(projects);
}
