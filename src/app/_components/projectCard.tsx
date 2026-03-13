import Button, { ButtonVariant } from "@/src/components/button";
import Image from "next/image";
import { GitHubIcon } from "@/src/components/icons/githubIcon";
import { GlobeIcon } from "@/src/components/icons/globeIcon";
import { StaticImageData } from "next/image";



export type ProjectCardData = {
  title: string;
  type: string;
  date: string;
  description: string;
  thumbnail: StaticImageData;
  thumbnailBackground: StaticImageData;
  demoLink?: string;
  src: string;
  images: StaticImageData[]
};

type ProjectCardProps = {
  size?: "small" | "large";
  data: ProjectCardData;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  size = 'large',
  data,
  onClick,
}) => {

  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-between gap-6 ${size === "large" ? "p-8" : "p-6"} 
        w-full border border-border rounded-md cursor-pointer`}
    >
      <div className="flex flex-col gap-6">
        <div
          className={`relative w-full ${size === "large" ? "h-110" : "h-60"} 
                    border border-border rounded-t-sm overflow-hidden`}
        >
          <Image
            src={data.thumbnailBackground}
            alt=""
            fill
            className="object-cover blur-[5px] opacity-70"
          />

          <Image
            src={data.thumbnail}
            alt=""
            fill
            className="object-contain z-10"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg text-text">{data.title}</h3>
            <span className="flex gap-2 text-xs text-text-sub">
              <p>{data.type}</p> <span>•</span> <p>{data.date}</p>
            </span>
          </div>
          <p className="font-medium text-sm text-text-sub">
            {data.description}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        {data.demoLink && (
          <Button
            label="Website"
            icon={<GlobeIcon size={16} />}
            href={data.demoLink}
          />
        )}

        <Button
          variant={ButtonVariant.Secondary}
          label="Source"
          icon={<GitHubIcon size={16} />}
          href={data.src}
        />
      </div>
    </div>
  );
};

export default ProjectCard;