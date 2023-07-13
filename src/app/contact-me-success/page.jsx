import ContactSidebar from "@/components/Contact/ContactSidebar";
import Icon from "@/components/Icon";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function ContactMeSuccess() {
  return (
    <section className="flex h-full">
      <ContactSidebar />
      <div className="flex h-full w-full flex-col ">
        <div className="flex h-[41px] w-full border-b border-lines">
          <div className="flex h-[41px] w-fit items-center gap-[48px] border-r border-lines pl-3.5 pr-3 text-secondary-lynch">
            contact-me.jsx <Icon icon="close" size={20} />
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
