"use client";
import Icon from "@/components/Icon";
import CodeText from "@/components/CodeText";
import { useState } from "react";

export default function AboutMe() {
  const [fileExplorerVisibility, setFileExplorerVisibility] = useState(false);

  return (
    <section className="flex h-full flex-col lg:flex-row">
      <div className="min-w-[243px] border-0 border-r border-lines">
        <div className="border-b border-lines py-5 pl-6 lg:hidden">
          _about-me
        </div>
        <div
          className="flex h-[41px] items-center gap-[11px]
        border-0 border-b border-lines bg-lines lg:bg-primary-midnight"
        >
          <label
            htmlFor="toggleFileExplorer"
            className="flex cursor-pointer gap-[11px] pl-4"
          >
            <Icon
              icon="arrow-down"
              size={24}
              className="hidden peer-checked/toggleExplorer:hidden lg:block"
            />
            <Icon
              icon="arrow-right"
              size={24}
              className="peer-checked/toggleExplorer:rotate-90 lg:hidden"
            />
            file-explorer
          </label>
        </div>
        <input
          type="checkbox"
          id="toggleFileExplorer"
          className="peer/toggle hidden"
          checked={fileExplorerVisibility}
          onClick={() => setFileExplorerVisibility((oldState) => !oldState)}
        />
        <div className="hidden flex-col gap-[8px] border-0 border-b border-lines py-6 pl-6 peer-checked/toggle:flex">
          <div className="flex gap-[9px]">
            <Icon icon="markdown" size={24} />
            about-me.md
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="markdown" size={24} />
            interests.md
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="markdown" size={24} />
            experience.md
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="markdown" size={24} />
            skills.md
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="pdf" size={24} />
            cv-final(3).pdf
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="javascript" size={24} />
            not-a-virus.js
          </div>
        </div>
        <div
          className="flex h-[41px] items-center gap-[11px] border-0
        border-b border-lines bg-lines pt-[3px] lg:bg-primary-midnight"
        >
          <label
            htmlFor="toggleContacts"
            className="flex cursor-pointer gap-[11px] pl-4"
          >
            <Icon
              icon="arrow-down"
              size={24}
              className="hidden peer-checked/toggleContacts:hidden lg:block"
            />
            <Icon
              icon="arrow-right"
              size={24}
              className="peer-checked/toggleContacts:hidden lg:hidden"
            />
            contacts
          </label>
        </div>
        <input
          type="checkbox"
          id="toggleContacts"
          className="peer/toggleContacts hidden"
        />
        <div className="hidden flex-col gap-[9px] py-6 pl-6 text-secondary-lynch peer-checked/toggleContacts:flex">
          <div className="flex gap-[9px]">
            <Icon icon="mail" size={24} /> user@gmail.com
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="mail" size={24} /> +3598246359
          </div>
        </div>
      </div>
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
