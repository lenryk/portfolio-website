import SidebarLink from "@/components/Sidebar/SidebarLink";
import dynamic from "next/dynamic";

const SidebarSection = dynamic(
  () => import("@/components/Sidebar/SidebarSection"),
  {
    ssr: false,
  }
);

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
