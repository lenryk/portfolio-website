"use client";
import FilterRow from "@/components/Filters/FilterRow";

export default function Filters({ handleFilters, filters }) {
  function handleFilterClick(name) {
    handleFilters({ ...filters, [name]: !filters[name] });
  }

  return (
    <>
      {Object.entries(filters).map(([name, checked]) => (
        <FilterRow
          key={name}
          onClick={handleFilterClick}
          name={name}
          checked={checked}
        />
      ))}
    </>
  );
}
