"use client";
import { FilterRow } from "@/components/Filters/FilterRow";
import type { ProjectIcon } from "@/data/projects";

type FiltersState = Record<ProjectIcon, boolean>;

type FiltersProps = {
  filters: FiltersState;
  handleFilters: (nextFilters: FiltersState) => void;
};

export function Filters({ handleFilters, filters }: FiltersProps) {
  function handleFilterClick(name: ProjectIcon) {
    handleFilters({ ...filters, [name]: !filters[name] });
  }

  return (
    <>
      {(Object.entries(filters) as [ProjectIcon, boolean][]).map(
        ([name, checked]) => (
        <FilterRow
          key={name}
          onClick={handleFilterClick}
          name={name}
          checked={checked}
        />
        )
      )}
    </>
  );
}
