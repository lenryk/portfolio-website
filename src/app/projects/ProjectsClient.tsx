"use client";
import { useMemo, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Filters } from "@/components/Filters";
import { Icon } from "@/components/Icon";
import { PortfolioProjects } from "@/components/PortfolioProjects";
import { SidebarSection } from "@/components/Sidebar/SidebarSection";
import { projectIcons } from "@/data/projects";
import type { ProjectIcon, Projects } from "@/data/projects";

type FiltersState = Record<ProjectIcon, boolean>;

type ProjectsClientProps = {
  projects: Projects;
};

const createDefaultFilters = (): FiltersState =>
  Object.fromEntries(projectIcons.map((icon) => [icon, false])) as FiltersState;

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [filters, setFilters] = useState<FiltersState>(createDefaultFilters);

  const enabledFilters = useMemo(() => {
    return (Object.entries(filters) as [ProjectIcon, boolean][])
      .filter(([, checked]) => checked)
      .map(([name]) => name);
  }, [filters]);

  const visibleProjects = useMemo(() => {
    if (enabledFilters.length === 0) {
      return projects;
    }

    return Object.fromEntries(
      Object.entries(projects).filter(([, metadata]) =>
        metadata.icons.some((icon) => enabledFilters.includes(icon))
      )
    ) as Projects;
  }, [projects, enabledFilters]);

  function handleFilters(nextFilters: FiltersState) {
    setFilters(nextFilters);
  }

  function resetFilters() {
    setFilters(createDefaultFilters());
  }

  return (
    <section className="flex h-full flex-col lg:flex-row">
      <Sidebar name="_projects">
        <SidebarSection title="tech-filter">
          <Filters handleFilters={handleFilters} filters={filters} />
        </SidebarSection>
      </Sidebar>
      <section className="flex w-full flex-col">
        <div className="flex w-full border-b border-t border-lines lg:h-[41px] lg:border-t-0">
          <div
            className="flex w-fit items-center gap-[48px]
          border-r border-lines p-3.5 text-secondary-lynch lg:h-[41px]"
          >
            {enabledFilters.length < 1 ? "all" : enabledFilters.join("; ")}
            {";"}
            <Icon
              icon="close"
              size={20}
              onClick={resetFilters}
              className="cursor-pointer"
            />
          </div>
        </div>
        <PortfolioProjects projects={visibleProjects} />
      </section>
    </section>
  );
}
