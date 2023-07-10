import LinkedInBox from "@/assets/icons/linkedin-box-fill.svg";
import LinkedInFill from "@/assets/icons/linkedin-fill.svg";
import GithubFill from "@/assets/icons/github-fill.svg";
import Image from "next/image";

const Icon = ({ alt, icon, className, size = 21 }) => {
  const icons = { LinkedInBox, LinkedInFill, GithubFill };

  return (
    <Image
      className={className}
      src={icons[icon]}
      alt={alt}
      width={size}
      height={size}
    />
  );
};

export default Icon;
