import Card from "@/components/Card";

export default function PortfolioProjects({ projects }) {
  return (
    <div className="flex h-full flex-wrap items-center justify-center gap-10 p-6">
      {Object.entries(projects ?? {}).map(([name, metadata]) => (
        <Card key={metadata.id} name={name} metadata={metadata} />
      ))}
    </div>
  );
}
