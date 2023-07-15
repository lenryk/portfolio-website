import SidebarSection from "@/components/Sidebar/SidebarSection";
import SidebarLink from "@/components/Sidebar/SidebarLink";

export default function OtherProfiles() {
  return (
    <SidebarSection title="other-profiles" className="bg-secondary">
      <SidebarLink icon="codewars" name="Codewars" />
      <SidebarLink icon="linkedin" name="LinkedIn" />
      <SidebarLink icon="github" name="GitHub" />
    </SidebarSection>
  );
}
