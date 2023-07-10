import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const Container = ({ children }) => {
  return (
    <main className="flex h-full max-h-[941px] w-full flex-col rounded-lg bg-primary-midnight text-secondary outline outline-1 outline-offset-[-1px] outline-lines">
      <Header />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
};

export default Container;
