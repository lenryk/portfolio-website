import "./globals.css";
import Container from "src/components/Layout/Container";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});

export const metadata = {
  title: "Sam Carr - Web Developer",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable}`}>
      <body className="flex h-screen items-center bg-main-bg p-16">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
