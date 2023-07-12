import Button from "@/components/Button";

export default function Card({ name, metadata }) {
  return (
    <div>
      <p className="mb-3.5">
        <span className="text-secondary-indigo">
          <strong>Project {metadata.id}</strong>
        </span>
        <span className="text-secondary-lynch"> // _{name}</span>
      </p>
      <div className="flex w-[370px] flex-col overflow-hidden rounded-2xl border border-lines">
        <div className="h-[145px] w-full bg-secondary-lynch"></div>
        <div className="px-8 py-6">
          <p className="text-secondary-lynch">{metadata.text}</p>
          <div className="flex gap-5 pt-5">
            <Button preset="primary">view-project</Button>
            <Button>view-code</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
