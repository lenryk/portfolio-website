import Icon from "@/components/Icon";
import Filters from "@/components/Filters";
import PortfolioProjects from "@/components/PortfolioProjects";

async function getData() {
  const res = await fetch(`${process.env.URL}/api/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects data");
  }

  return res.json();
}

export default async function Projects() {
  const data = await getData();

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
        <PortfolioProjects projects={data} />
      </div>
    </section>
  );
}
