import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MobileHeader } from "@/components/Layout/MobileHeader";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <main className="bg-primary-midnight text-secondary outline-lines flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-lg outline outline-1 outline-offset-[-1px]">
      <Header />
      <MobileHeader />
      <section className="min-h-0 flex-1 overflow-y-auto">{children}</section>
      <Footer />
    </main>
  );
}
