import ProjectsContainer from "@/components/ProjectsContainer";

async function getData() {
  const res = await fetch(`${process.env.url}/api/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects data");
  }

  return res.json();
}

export default async function Projects() {
  const data = await getData();

  return (
    <section className="flex h-full">
      <ProjectsContainer data={data} />
    </section>
  );
}
