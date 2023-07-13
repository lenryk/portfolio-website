"use client";
import Icon from "@/components/Icon";
import Filters from "@/components/Filters";
import PortfolioProjects from "@/components/PortfolioProjects";
import { useState } from "react";

export default function ProjectsContainer({ data }) {
  const [projects, setProjects] = useState(() => data);
  const [enabledFilters, setEnabledFilters] = useState([]);

  function handleFilters(filters) {
    setEnabledFilters(
      Object.entries(filters)
        .map(([name, checked]) => {
          if (checked) return name;
        })
        .filter((tech) => tech)
    );

    if (enabledFilters.length < 1) {
      setProjects(data);
      return;
    }

    setProjects(() =>
      Object.fromEntries(
        Object.entries(data).filter(([_, metadata]) =>
          metadata.icons.some((element) => {
            return enabledFilters.includes(element);
          })
        )
      )
    );
  }

  return (
    <>
      <div className="border-r border-lines">
        <div className="flex h-[41px] w-[311px] items-center gap-[11px] border-b border-r border-lines pl-5">
          <Icon icon="folder-green" size={24} /> tech-filter
        </div>
        <div className="h-full w-[311px]">
          <Filters handleFilters={handleFilters} />
        </div>
      </div>
      <div className="flex w-full flex-col ">
        <div className="flex h-[41px] w-full border-b border-lines">
          <div className="flex h-[41px] w-fit items-center gap-[48px] border-r border-lines pl-3.5 pr-3 text-secondary-lynch">
            {enabledFilters.length < 1 ? "all" : enabledFilters.join("; ")}
            {";"}
            <Icon icon="close" size={20} />
          </div>
        </div>
        <PortfolioProjects projects={projects} />
      </div>
    </>
  );
}
