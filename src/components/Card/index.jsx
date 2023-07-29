import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { clsx } from "clsx";
import Image from "next/image";
import PortfolioCover from "../../../public/assets/images/portfolio-homepage.jpg";
import MoreComingSoon from "../../../public/assets/images/loading.jpg";
import CashAppCover from "../../../public/assets/images/cash-app-project.jpg";

export default function Card({ name, metadata }) {
  const coverImages = {
    portfolio: PortfolioCover,
    "more-coming-soon": MoreComingSoon,
    "cash-app": CashAppCover,
  };

  return (
    <div>
      <p className="mb-3.5">
        <span className="text-secondary-indigo">
          <strong>Project {metadata.id}</strong>
        </span>
        <span className="text-secondary-lynch"> // _{name}</span>
      </p>
      <div className="flex max-w-[370px] flex-col overflow-hidden rounded-2xl border border-lines">
        <div className="border-1 relative h-[145px] w-full border-b border-lines bg-primary-blue-charcoal">
          <Image
            src={coverImages[name]}
            alt={`project-${name}`}
            fill
            className="bg-contain"
            placeholder="blur"
            priority
          />
          <div className="absolute bottom-0 left-0 mb-2 ml-2 flex gap-2">
            {metadata.icons.map((icon) => {
              const iconBackground = clsx("rounded-sm p-1", {
                "bg-gradient-turquoise": icon === "react",
                "bg-button-hover": icon === "next.js",
                "bg-accent-tonys-pink": icon === "netlify",
                "bg-secondary-indigo": icon === "tailwind",
                "bg-primary-blue-charcoal": icon === "gatsby",
                "bg-lines": icon === "styled",
                "bg-button-primary": icon === "typescript",
              });

              return (
                <div
                  title={icon.charAt(0).toUpperCase() + icon.slice(1)}
                  key={`${name}-${icon}`}
                  className={iconBackground}
                >
                  <Icon alt={`${name}ProjectIcon`} icon={icon} size={20} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-8 py-6">
          <p className="text-secondary-lynch">{metadata.text}</p>
          <div className="flex gap-5 pt-5">
            <Button preset="primary" as="link" href={metadata.url}>
              view-project
            </Button>
            <Button as="link" href={metadata.githubUrl}>
              view-code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
