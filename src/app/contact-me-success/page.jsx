import ContactSidebar from "src/components/Sidebar/ContactSidebar";
import Icon from "@/components/Icon";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import OtherProfiles from "@/components/Sidebar/OtherProfiles";

export default function ContactMeSuccess() {
  return (
    <section className="flex h-full flex-col lg:flex-row">
      <Sidebar>
        <div className="flex flex-col gap-[3px]">
          <ContactSidebar />
          <OtherProfiles />
        </div>
      </Sidebar>
      <div className="flex h-full w-full flex-col ">
        <div className="flex h-[41px] w-full border-b border-t border-lines lg:border-t-0">
          <div
            className="flex h-[41px] w-fit items-center gap-[48px]
          border-r border-lines pl-3.5 pr-3 text-secondary-lynch"
          >
            success-message.jsx <Icon icon="close" size={20} />
          </div>
        </div>
        <div className="my-auto flex flex-col items-center">
          <Heading size="h2">Thank you! 🤘</Heading>
          <p className="mt-2.5 w-[380px] text-center text-secondary-lynch">
            Your message has been sent. You will receive an answer real soon!
          </p>
          <Button className="mt-9" as="link" href="/contact-me">
            send-new-message
          </Button>
        </div>
      </div>
    </section>
  );
}
