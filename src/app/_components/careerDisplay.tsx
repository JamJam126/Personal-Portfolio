import Image from "next/image";
import { GlobeIcon } from "@/src/components/icons/globeIcon";
import { Career } from "@/src/types/careers";
import TechIcon from "@/src/components/icons/technologies/techIcon";

type CareerDisplayProps = {
  career: Career;
};

const CareerDisplay: React.FC<CareerDisplayProps> = ({ career }) => {
  return (
    <div className="flex flex-col gap-4 max-w-120">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2.5">
          <Image
            alt={career.name}
            src={career.logo}
            className="w-10 h-10 rounded-md"
          />

          <div className="flex flex-col justify-between min-h-10">
            <h3 className="font-semibold text-text">{career.name}</h3>

            <p className="text-sm text-text-sub">{career.degree}</p>
          </div>

          <div className="flex items-center gap-1 w-fill h-6">
            <a
              href={career.website}
              target="_blank"
              className="text-text-sub hover:text-text transition-colors duration-150"
            >
              <GlobeIcon />
            </a>
          </div>
        </div>

        <p className="font-medium text-sm text-text-sub whitespace-pre">
          {career.date} • {career.location}
        </p>
      </div>

      <ul className="text-sm text-text-sub list-disc pl-5 space-y-1">
        {career.highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <h1 className="text-sm text-text">Technologies</h1>
        <div className="flex gap-2">
          {career.technologies.map((t, index) => (
            <div
              className="group flex justify-center items-center px-2 py-2 hover:bg-hover 
                        border border-border rounded-sm text-text transition-all duration-300"
              key={index}
            >
              <TechIcon name={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerDisplay;
