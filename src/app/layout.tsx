import "./globals.css";
import Container from "@/components/Layout/Container";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});

export const metadata = {
  title: "Sam Carr - Full Stack Software Engineer - UK",
  description:
    "This website was created with Next.js + Tailwind. Check my Github for the full source code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable} h-full`}>
      <body className="flex min-h-full bg-main-bg p-6">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
