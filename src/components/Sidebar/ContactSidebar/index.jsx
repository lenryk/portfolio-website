import SidebarSection from "@/components/Sidebar/SidebarSection";
import SidebarLink from "@/components/Sidebar/SidebarLink";

export default function Contact() {
  return (
    <SidebarSection title="contacts" className="bg-secondary">
      <SidebarLink icon="mail" name="sam@gmail.com" />
      <SidebarLink icon="mail" name="+3598246359" />
    </SidebarSection>
  );
}
