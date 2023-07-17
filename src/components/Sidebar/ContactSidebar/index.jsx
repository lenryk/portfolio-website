import SidebarSection from "@/components/Sidebar/SidebarSection";
import SidebarLink from "@/components/Sidebar/SidebarLink";

export default function Contact() {
  return (
    <SidebarSection title="contacts" className="bg-secondary">
      <SidebarLink
        icon="mail"
        name="hi@samcarr.co.uk"
        url="mailto:hi@samcarr.co.uk"
      />
    </SidebarSection>
  );
}
