import { NextResponse } from "next/server";
export async function GET() {
  const projects = {
    portfolio: {
      id: 1,
      url: "https://samcarr.co.uk",
      githubUrl: "https://github.com/lenryk/portfolio-website",
      text: "My portfolio website (the one you are currently on!) inspired by a free figma design and modified for my needs.",
      icons: ["react", "next.js", "netlify", "tailwind"],
    },
    "cash-app": {
      id: 2,
      url: "https://cashappmain.gatsbyjs.io/",
      githubUrl: "https://github.com/lenryk/cash-app",
      text: "A responsive Cash App single page website clone built in Gatsby & Styled components, based on a free figma design.",
      icons: ["react", "gatsby", "styled", "typescript"],
    },
    "more-coming-soon": {
      id: 3,
      url: "",
      githubUrl: "",
      text: "Currently in the process of making a range of different projects, so be sure to come back soon!",
      icons: ["react", "next.js"],
    },
  };

  return NextResponse.json(projects);
}
