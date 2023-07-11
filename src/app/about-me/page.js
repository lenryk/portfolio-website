import Icon from "@/components/Icon";
import CodeText from "@/components/CodeText";

export default function AboutMe() {
  return (
    <section className="flex h-full">
      <div className="flex h-full min-w-[68px] flex-col items-center gap-[33px] border-0 border-r border-lines pt-[18px]">
        <Icon icon="github" size={24} />
        <Icon icon="github" size={24} />
        <Icon icon="github" size={24} />
      </div>
      <div className="min-w-[243px] border-0 border-r border-lines">
        <div className="flex h-[41px] items-center gap-[11px] border-0 border-b border-lines pl-4">
          <Icon icon="github" size={24} /> personal-info
        </div>
        <div className="flex h-[185px] flex-col gap-[8px] border-0 border-b border-lines pl-4 pt-6">
          <div className="flex gap-[9px]">
            <Icon icon="github" size={24} /> <Icon icon="github" size={24} />{" "}
            bio
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="github" size={24} /> <Icon icon="github" size={24} />{" "}
            interests
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="github" size={24} /> <Icon icon="github" size={24} />{" "}
            education
          </div>
        </div>
        <div className="flex h-[40px] items-center gap-[11px] border-0 border-b border-lines pl-4">
          <Icon icon="github" size={24} /> contacts
        </div>
        <div className="flex flex-col gap-[9px] pl-4 pt-6">
          <div className="flex gap-[9px]">
            <Icon icon="github" size={24} /> user@gmail.com
          </div>
          <div className="flex gap-[9px]">
            <Icon icon="github" size={24} /> +3598246359
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="border-0 border-r border-lines">
          <div className="flex h-[41px] border-b border-lines">
            <div className="flex items-center border-r border-lines pl-3.5 pr-3">
              personal-info <Icon className="ml-7" icon="github" size={24} />
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
        <div className="">
          <div className="flex h-[41px] border-b border-lines">
            <div className="flex items-center border-r border-lines pl-3.5 pr-3">
              README.txt <Icon className="ml-7" icon="github" size={24} />
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
