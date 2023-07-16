"use client";
import Sidebar from "@/components/Sidebar";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import ContactSidebar from "@/components/Sidebar/ContactSidebar";
import Icon from "@/components/Icon";
import CodeText from "@/components/CodeText";
import useSWR from "swr";
import { useState } from "react";

export default function AboutMe() {
  const [page, setPage] = useState("about-me");

  async function fetcher(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  }

  const { data: fileExplorerData, isLoading: fileExplorerIsLoading } = useSWR(
    `/api/about-me?page=${page}`,
    fetcher
  );

  const { data: readmeData, isLoading: readMeIsLoading } = useSWR(
    `/api/about-me?page=readme`,
    fetcher
  );

  function handleClick(event) {
    setPage(event.target.id);
  }

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <Sidebar name="_about-me">
        <div className="flex flex-col gap-[3px]">
          <SidebarSection title="file-explorer">
            <SidebarLink
              icon="markdown"
              name="about-me.md"
              onClick={handleClick}
            />
            <SidebarLink
              icon="markdown"
              name="interests.md"
              onClick={handleClick}
            />
            <SidebarLink
              icon="markdown"
              name="experience.md"
              onClick={handleClick}
            />
            <SidebarLink
              icon="markdown"
              name="skills.md"
              onClick={handleClick}
            />
            <SidebarLink
              icon="pdf"
              name="cv-final(3).pdf"
              url="http://google.com"
            />
            <SidebarLink icon="javascript" name="not-a-virus.js" />
          </SidebarSection>
          <ContactSidebar />
        </div>
      </Sidebar>

      <section className="flex basis-full flex-col lg:flex-row">
        <div className="mb-5 basis-3/6 border-0 border-r border-lines lg:mb-0">
          <div className="flex h-[41px] border-b border-t border-lines lg:border-t-0">
            <div className="flex items-center border-r border-lines pl-6 pr-3 text-secondary-lynch lg:pl-3.5">
              {page}.md <Icon className="ml-7" icon="close" size={20} />
            </div>
            <div className="border-b border-lines" />
          </div>
          <CodeText isLoading={fileExplorerIsLoading}>
            {fileExplorerData}
          </CodeText>
        </div>
        <div className="mb-5 basis-3/6 lg:mb-0">
          <div className="flex h-[41px] border-b border-t border-lines lg:border-t-0">
            <div className="flex items-center border-r border-lines pl-6 pr-3 text-secondary-lynch lg:pl-3.5">
              README.txt <Icon className="ml-7" icon="close" size={20} />
            </div>
            <div className="h-[41px] border-b border-lines" />
          </div>
          <CodeText isLoading={readMeIsLoading}>{readmeData}</CodeText>
        </div>
      </section>
    </div>
  );
}
