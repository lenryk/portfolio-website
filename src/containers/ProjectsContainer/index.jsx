"use client";
import Icon from "@/components/Icon";
import Filters from "@/components/Filters";
import PortfolioProjects from "@/components/PortfolioProjects";
import Sidebar from "@/components/Sidebar";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import { useReducer } from "react";

function reducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "setEnabledFilters": {
      return {
        ...state,
        enabledFilters: action.newEnabledFilters,
      };
    }
    case "setProjects": {
      return {
        ...state,
        projects: action.newProjects,
      };
    }
    case "setFilters": {
      return {
        ...state,
        filters: action.newFilters,
      };
    }
    case "setState": {
      return action.newState;
    }
    default:
      return state;
  }
}

export default function ProjectsContainer({ data }) {
  const [state, dispatch] = useReducer(reducer, {
    projects: data,
    enabledFilters: [],
    filters: {
      react: false,
      "next.js": false,
      netlify: false,
      tailwind: false,
    },
  });

  function handleFilters(filters) {
    console.log("updated filters are", filters);

    dispatch({
      type: "setState",
      newState: {
        newEnabledFilters: ["react"],
        newFilters: filters,
        newProjects: Object.fromEntries(
          Object.entries(data).filter(([_, metadata]) =>
            metadata.icons.some((element) => {
              return state.enabledFilters.includes(element);
            })
          )
        ),
      },
    });

    console.log(
      Object.entries(filters)
        .map(([name, checked]) => {
          if (checked) return name;
        })
        .filter((tech) => tech)
    );

    // dispatch({
    //   type: "setEnabledFilters",
    //   newEnabledFilters: Object.entries(filters)
    //     .map(([name, checked]) => {
    //       if (checked) return name;
    //     })
    //     .filter((tech) => tech),
    // });
    //
    // dispatch({
    //   type: "setFilters",
    //   newFilters: filters,
    // });

    console.log("enabledFilters", state.enabledFilters);
    console.log("new state after update is", state);

    if (state.enabledFilters.length < 1) {
      dispatch({ type: "setProjects", newProjects: data });
    }

    // dispatch({
    //   type: "setProjects",
    //   newProjects: Object.fromEntries(
    //     Object.entries(data).filter(([_, metadata]) =>
    //       metadata.icons.some((element) => {
    //         return state.enabledFilters.includes(element);
    //       })
    //     )
    //   ),
    // });
  }

  function resetFilters() {
    dispatch({
      type: "setProjects",
      newProjects: data,
    });
    dispatch({
      type: "setFilters",
      newFilters: {
        react: false,
        "next.js": false,
        netlify: false,
        tailwind: false,
      },
    });
    dispatch({
      type: "setEnabledFilters",
      newEnabledFilters: [],
    });
  }

  return (
    <>
      <Sidebar name="_projects">
        <SidebarSection title="tech-filter">
          <Filters handleFilters={handleFilters} filters={state.filters} />
        </SidebarSection>
      </Sidebar>
      <section className="flex w-full flex-col">
        <div className="flex w-full border-b border-t border-lines lg:h-[41px] lg:border-t-0">
          <div
            className="flex w-fit items-center gap-[48px]
          border-r border-lines p-3.5 text-secondary-lynch lg:h-[41px]"
          >
            {state.enabledFilters.length < 1
              ? "all"
              : state.enabledFilters.join("; ")}
            {";"}
            <Icon
              icon="close"
              size={20}
              onClick={resetFilters}
              className="cursor-pointer"
            />
          </div>
        </div>
        <PortfolioProjects projects={state.projects} />
      </section>
    </>
  );
}
