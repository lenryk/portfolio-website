import "./globals.css";
import { Container } from "@/components/Layout/Container";
import localFont from "next/font/local";

const firaCode = localFont({
  src: [
    { path: "../fonts/FiraCode-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/FiraCode-700.ttf", weight: "700", style: "normal" },
  ],
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
      <body className="bg-main-bg flex h-full overflow-hidden p-4 sm:p-6">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
