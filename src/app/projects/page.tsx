import { projects } from "@/data/projects";
import { ProjectsClient } from "./ProjectsClient";

export default function Projects() {
  return <ProjectsClient projects={projects} />;
}
