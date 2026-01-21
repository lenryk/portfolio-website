import { Card } from "@/components/Card";
import type { Projects } from "@/data/projects";

type PortfolioProjectsProps = {
  projects: Projects;
};

export function PortfolioProjects({ projects }: PortfolioProjectsProps) {
  return (
    <div className="flex h-full flex-wrap items-center justify-center gap-10 p-6">
      {Object.entries(projects).map(([name, metadata]) => (
        <Card key={metadata.id} name={name} metadata={metadata} />
      ))}
    </div>
  );
}
