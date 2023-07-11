import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import PropTypes from "prop-types";
import CodeText from "@/components/CodeText";

const Container = ({ children }) => {
  return (
    <main className="flex h-full w-full flex-col rounded-lg bg-primary-midnight text-secondary outline outline-1 outline-offset-[-1px] outline-lines">
      <Header />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
};

export default Container;

CodeText.PropTypes = {
  children: PropTypes.node.isRequired,
};
