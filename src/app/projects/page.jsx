"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Filters from "@/components/Filters";
import Icon from "@/components/Icon";
import PortfolioProjects from "@/components/PortfolioProjects";
import useSWR from "swr";
import SidebarSection from "@/components/Sidebar/SidebarSection";

export default function Projects() {
  async function fetcher(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      throw new Error(e);
    }
  }

  const { data: projectsData } = useSWR(`/api/projects`, fetcher);

  const [projects, setProjects] = useState(projectsData);
  const [enabledFilters, setEnabledFilters] = useState([]);
  const defaultFilters = {
    react: false,
    "next.js": false,
    netlify: false,
    tailwind: false,
    gatsby: false,
    styled: false,
    typescript: false,
  };

  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    setEnabledFilters(
      Object.entries(filters)
        .map(([name, checked]) => {
          if (checked) return name;
        })
        .filter((tech) => tech)
    );
  }, [filters]);

  useEffect(() => {
    if (enabledFilters.length < 1) {
      setProjects(projectsData);
      return;
    }

    setProjects(
      Object.fromEntries(
        Object.entries(projectsData).filter(([_, metadata]) =>
          metadata.icons.some((element) => {
            return enabledFilters.includes(element);
          })
        )
      )
    );
  }, [projectsData, enabledFilters]);

  function handleFilters(filters) {
    setFilters(filters);
  }

  function resetFilters() {
    setFilters(defaultFilters);
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
        <PortfolioProjects projects={projects} />
      </section>
    </section>
  );
}
