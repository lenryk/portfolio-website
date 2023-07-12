"use client";
import FilterRow from "@/components/Filters/FilterRow";
import { useState } from "react";

export default function Filters() {
  const [filters, setFilters] = useState({
    react: false,
    "next.js": false,
    netlify: false,
    tailwind: false,
  });

  function handleFilterClick(name) {
    setFilters((oldState) => ({ ...oldState, [name]: !filters[name] }));
  }

  return (
    <div className="pl-5">
      {Object.entries(filters).map(([name, checked]) => (
        <FilterRow
          key={name}
          onClick={handleFilterClick}
          name={name}
          checked={checked}
        />
      ))}
    </div>
  );
}
