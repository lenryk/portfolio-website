import SidebarLink from "@/components/Sidebar/SidebarLink";
import dynamic from "next/dynamic";

const SidebarSection = dynamic(
  () => import("@/components/Sidebar/SidebarSection"),
  {
    ssr: false,
  }
);

export default function OtherProfiles() {
  return (
    <SidebarSection title="other-profiles" className="bg-secondary">
      <SidebarLink
        icon="codewars"
        name="Codewars"
        url="https://www.codewars.com/users/Lenry"
      />
      <SidebarLink
        icon="linkedin"
        name="LinkedIn"
        url="https://www.linkedin.com/in/sam-carr-9a78b15b/"
      />
      <SidebarLink
        icon="github"
        name="GitHub"
        url="https://github.com/lenryk"
      />
    </SidebarSection>
  );
}
