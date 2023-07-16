"use client";
import Icon from "@/components/Icon";
import Filters from "@/components/Filters";
import PortfolioProjects from "@/components/PortfolioProjects";
import Sidebar from "@/components/Sidebar";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import { useEffect, useState } from "react";

export default function ProjectsContainer({ data }) {
  const [projects, setProjects] = useState(data);
  const [enabledFilters, setEnabledFilters] = useState([]);
  const [filters, setFilters] = useState({
    react: false,
    "next.js": false,
    netlify: false,
    tailwind: false,
  });

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
      setProjects(data);
      return;
    }

    setProjects(
      Object.fromEntries(
        Object.entries(data).filter(([_, metadata]) =>
          metadata.icons.some((element) => {
            return enabledFilters.includes(element);
          })
        )
      )
    );
  }, [data, enabledFilters]);

  function handleFilters(filters) {
    setFilters(filters);
  }

  function resetFilters() {
    setFilters({
      react: false,
      "next.js": false,
      netlify: false,
      tailwind: false,
    });
  }

  return (
    <>
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
    </>
  );
}
