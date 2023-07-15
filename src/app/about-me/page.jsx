"use client";
import Icon from "@/components/Icon";
import CodeText from "@/components/CodeText";
import Sidebar from "@/components/Sidebar";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import Contact from "src/components/Sidebar/Contact";

export default function AboutMe() {
  return (
    <section className="flex h-full flex-col lg:flex-row">
      <Sidebar>
        <div className="border-b border-lines py-5 pl-6 lg:hidden">
          _about-me
        </div>
        <div className="flex flex-col gap-[3px]">
          <SidebarSection title="file-explorer">
            <SidebarLink icon="markdown" name="about-me.md" />
            <SidebarLink icon="markdown" name="interests.md" />
            <SidebarLink icon="markdown" name="experience.md" />
            <SidebarLink icon="markdown" name="skills.md" />
            <SidebarLink icon="pdf" name="cv-final(3).pdf" />
            <SidebarLink icon="javascript" name="not-a-virus.js" />
          </SidebarSection>
          <Contact />
        </div>
      </Sidebar>

      <div className="flex flex-col justify-evenly lg:flex-row">
        <div className="mb-5 border-0 border-r border-lines lg:mb-0">
          <div className="flex h-[41px] border-b border-t border-lines lg:border-t-0">
            <div className="flex items-center border-r border-lines pl-6 pr-3 text-secondary-lynch lg:pl-3.5">
              personal-info <Icon className="ml-7" icon="close" size={20} />
            </div>
            <div className="border-b border-lines" />
          </div>
          <CodeText>
            Hey everyone, my name is sam and i'm a full on developer hehehe. A
            little about me? well i love making things and having the creative
            freedom to do so.
            <br />
            <br />
            When im not updating my portfolio website or playing around with new
            technology i am probably thinking up the next side hustle i can
            start
          </CodeText>
        </div>
        <div className="mb-5 lg:mb-0">
          <div className="flex h-[41px] border-b border-t border-lines lg:border-t-0">
            <div className="flex items-center border-r border-lines pl-6 pr-3 text-secondary-lynch lg:pl-3.5">
              README.txt <Icon className="ml-7" icon="close" size={20} />
            </div>
            <div className="h-[41px] border-b border-lines" />
          </div>
          <CodeText>
            Hey everyone, my name is sam and i'm a full on developer hehehe. A
            little about me? well i love making things and having the creative
            freedom to do so.
            <br />
            <br />
            When im not updating my portfolio website or playing around with new
            technology i am probably thinking up the next side hustle i can
            start
          </CodeText>
        </div>
      </div>
    </section>
  );
}
