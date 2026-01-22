import { ContactSidebar } from "@/components/Sidebar/ContactSidebar";
import { Icon } from "@/components/Icon";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { Sidebar } from "@/components/Sidebar";
import { OtherProfiles } from "@/components/Sidebar/OtherProfiles";

export default function ContactMeSuccess() {
  return (
    <section className="flex h-full flex-col lg:flex-row">
      <Sidebar>
        <div className="flex flex-col gap-[3px]">
          <ContactSidebar />
          <OtherProfiles />
        </div>
      </Sidebar>
      <div className="flex h-full w-full flex-col">
        <div className="border-lines flex h-[41px] w-full border-t border-b lg:border-t-0">
          <div className="border-lines text-secondary-lynch flex h-[41px] w-fit items-center gap-[48px] border-r pr-3 pl-3.5">
            success-message.tsx <Icon icon="close" size={20} />
          </div>
        </div>
        <div className="my-auto flex flex-col items-center">
          <Heading size="h2">Thank you! 🤘</Heading>
          <p className="text-secondary-lynch mt-2.5 w-[380px] text-center">
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
