import Button, { ButtonVariant } from "@/src/components/button";
import { GitHubIcon } from "@/src/components/icons/githubIcon";
import { GlobeIcon } from "@/src/components/icons/globeIcon";

type ProjectCardProps = {
  size?: "small" | "large";
};

const ProjectCard: React.FC<ProjectCardProps> = ({ size = 'large' }) => {

  return (
    <div
      className={
        `flex flex-col gap-6 ${size === "large" ? "p-8" : "p-6"} 
        w-full border border-border rounded-md`
      }
    >
      <div
        className={
          `w-full ${size === "large" ? "h-110" : "h-60"} 
          border border-border rounded-t-sm`
        }
      ></div>

      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-semibold text-lg text-text">Codifyx</h3>
        <p className="font-medium text-sm text-text-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>

      <div className="flex gap-3">
        <Button label="Website" icon={<GlobeIcon size={16} />} />

        <Button
          variant={ButtonVariant.Secondary}
          label="Source"
          icon={<GitHubIcon size={16} />}
        />
      </div>
    </div>
  );
}

export default ProjectCard;