import Icon from "@/components/Icon";
import ContactForm from "src/components/Contact/ContactForm";
import ContactSidebar from "@/components/Contact/ContactSidebar";

export default function ContactMe() {
  return (
    <section className="flex h-full">
      <ContactSidebar />
      <div className="flex w-full flex-col ">
        <div className="flex h-[41px] w-full border-b border-lines">
          <div className="flex h-[41px] w-fit items-center gap-[48px] border-r border-lines pl-3.5 pr-3 text-secondary-lynch">
            contact-me.jsx <Icon icon="close" size={20} />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
