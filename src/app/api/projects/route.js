import { NextResponse } from "next/server";
export async function GET() {
  const projects = {
    portfolio: {
      id: 1,
      coverImage: "portfolioWebsite.jpg",
      url: "https://samcarr.co.uk",
      githubUrl: "https://www.github.com/something",
      text: "Portfolio website (the one you are currently on!)",
      icons: ["react", "next.js", "netlify", "tailwind"],
    },
    gatsby: {
      id: 2,
      coverImage: "",
      url: "https://samcarr.co.uk",
      githubUrl: "https://www.github.com/something",
      text: "Im test text to see what this would look like in the future",
      icons: ["react", "next.js"],
    },
    react: {
      id: 3,
      coverImage: "",
      url: "https://samcarr.co.uk",
      githubUrl: "https://www.github.com/something",
      text: "Another amazing project but with more filler text",
      icons: ["netlify", "tailwind"],
    },
  };

  return NextResponse.json(projects);
}
