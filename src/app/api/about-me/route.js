import { NextResponse } from "next/server";

export async function GET(request) {
  const mdData = {
    "about-me": `Hello world!\n this text should have spaces \n`,
    interests: "I love computers and lots of other filler",
    experience: "I hve lots of dev experience and filler",
    skills: "much corporate skills much wow",
    readme: "testing the readme",
  };
  const params = request.nextUrl.searchParams;

  if (mdData[params.get("page")]) {
    return NextResponse.json({
      article: mdData[params.get("page")],
      success: true,
    });
  }

  throw new Error("No data found for that query parameter");
}
