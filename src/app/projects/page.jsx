import Icon from "@/components/Icon";
import Filters from "@/components/Filters";
import Card from "@/components/Card";

export default function Projects() {
  // TODO: move to database once I have enough projects :)
  const projects = {
    portfolio: {
      id: 1,
      coverImage: "",
      url: "https://samcarr.co.uk",
      githubUrl: "https://www.github.com/something",
      text: "Portfolio website (the one you are currently on!)",
      icons: ["react", "next.js", "netlify", "tailwind"],
    },
    gatsby: {
      id: 2,
      coverImage: "",
      url: "https://samcarr.co.uk",
      githubUrl: "https://www.github.com/something",
      text: "Im test text to see what this would look like in the future",
      icons: ["react", "next.js"],
    },
    react: {
      id: 3,
      coverImage: "",
      url: "https://samcarr.co.uk",
      githubUrl: "https://www.github.com/something",
      text: "Another amazing project but with more filler text",
      icons: ["netlify", "tailwind"],
    },
  };

  return (
    <section className="flex h-full">
      <div>
        <div className="flex h-[41px] w-[311px] items-center gap-[11px] border-b border-r border-lines pl-5">
          <Icon icon="folder-green" size={24} /> tech-filter
        </div>
        <div className="h-full w-[311px] border-r border-lines">
          <Filters />
        </div>
      </div>
      <div className="flex w-full flex-col ">
        <div className="flex h-[41px] w-full border-b border-lines">
          <div className="flex h-[41px] w-fit items-center gap-[48px] border-r border-lines pl-3.5 pr-3 text-secondary-lynch">
            projects-final.jsx <Icon icon="close" size={20} />
          </div>
        </div>
        <div className="flex h-full items-center justify-center gap-10">
          {Object.entries(projects).map(([name, metadata]) => (
            <Card key={metadata.id} name={name} metadata={metadata} />
          ))}
        </div>
      </div>
    </section>
  );
}
