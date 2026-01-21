import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MobileHeader } from "@/components/Layout/MobileHeader";

export function Container({ children }) {
  return (
    <main
      className="flex
    w-full flex-col overflow-clip
    rounded-lg bg-primary-midnight text-secondary
    outline outline-1 outline-offset-[-1px] outline-lines"
    >
      <Header />
      <MobileHeader />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
}
