import Icon from "@/components/Icon";
import ContactForm from "src/components/ContactForm";
import Sidebar from "@/components/Sidebar";
import ContactSidebar from "src/components/Sidebar/ContactSidebar";
import OtherProfiles from "@/components/Sidebar/OtherProfiles";

export default function ContactMe() {
  return (
    <section className="flex h-full flex-col lg:flex-row">
      <Sidebar>
        <div className="border-b border-lines py-5 pl-6 lg:hidden">
          _contact-me
        </div>
        <div className="flex flex-col gap-[3px]">
          <ContactSidebar />
          <OtherProfiles />
        </div>
      </Sidebar>

      <div className="flex w-full flex-col ">
        <div className="center flex h-[41px] w-full border-b border-t border-lines lg:border-t-0">
          <div className="flex h-[41px] w-fit items-center gap-[48px] border-r border-lines pl-3.5 pr-3 text-secondary-lynch">
            contact-me.jsx <Icon icon="close" size={20} />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
