import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { Sidebar } from "@/components/Sidebar";
import { ContactSidebar } from "@/components/Sidebar/ContactSidebar";
import { OtherProfiles } from "@/components/Sidebar/OtherProfiles";

export default function ContactMe() {
  return (
    <section className="flex h-full flex-col lg:flex-row">
      <Sidebar name="_contact-me">
        <div className="flex flex-col gap-[3px]">
          <ContactSidebar />
          <OtherProfiles />
        </div>
      </Sidebar>

      <div className="flex w-full flex-col">
        <div className="center border-lines flex h-[41px] w-full border-t border-b lg:border-t-0">
          <div className="border-lines text-secondary-lynch flex h-[41px] w-fit items-center gap-[48px] border-r pr-3 pl-3.5">
            contact-me.tsx <Icon icon="close" size={20} />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
