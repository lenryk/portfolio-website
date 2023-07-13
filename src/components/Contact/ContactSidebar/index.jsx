import Icon from "@/components/Icon";
import Link from "next/link";

export default function ContactSidebar() {
  return (
    <div className="w-[311px] border-r border-lines">
      <div className="flex h-[41px] w-[311px] items-center gap-[11px] border-b border-r border-lines pl-5">
        <Icon icon="contact" size={24} /> contacts
      </div>
      <div>
        <div className="mb-7 flex flex-col gap-[9px] pl-5 pt-6 text-secondary-lynch">
          <div className="flex gap-[9px]">
            <Icon icon="mail" size={24} /> user@gmail.com
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="mail" size={24} /> +3598246359
          </div>
        </div>
        <div className="flex h-[41px] w-[311px] items-center gap-[11px] border-b border-t border-lines pl-5">
          <Icon icon="profile" size={24} /> other-profiles
        </div>
        <div className="flex flex-col gap-[9px] pl-5 pt-6 text-secondary-lynch">
          <Link
            className="flex gap-[9px]"
            href="https://www.codewars.com/users/Lenry"
          >
            <Icon icon="codewars" size={24} /> Codewars
          </Link>
          <Link
            className="flex gap-[9px]"
            href="https://www.linkedin.com/in/sam-carr-9a78b15b"
          >
            <Icon icon="linkedin" size={24} /> LinkedIn
          </Link>
          <Link className="flex gap-[9px]" href="https://github.com/lenryk">
            <Icon icon="github" size={24} /> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
