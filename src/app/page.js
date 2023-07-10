import Heading from "@/components/Heading";

export default function Home() {
  return (
    <section>
      <Heading size="h1">Sam Carr</Heading>
      <Heading
        size="h2"
        className="text-secondary-indigo"
      >{`> Front-end developer`}</Heading>
    </section>
  );
}
