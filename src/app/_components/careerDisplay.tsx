import Image from "next/image";
import { GlobeIcon } from "@/src/components/icons/globeIcon";
import { Career } from "@/src/types/careers";
import TechIcon from "@/src/components/icons/technologies/techIcon";
import { LocationIcon } from "@/src/components/icons/locationIcon";
import { CalendarIcon } from "@/src/components/icons/calendarIcon";

type CareerDisplayProps = {
  career: Career;
};

const CareerDisplay: React.FC<CareerDisplayProps> = ({ career }) => {
  return (
    <div className="flex flex-col gap-4 max-w-120">
      <div className="flex flex-col gap-2">
        <div className="flex items-center sm:items-start gap-2.5">
          <Image
            alt={career.name}
            src={career.logo}
            className="w-10 h-10 rounded-md"
          />

          <div className="flex flex-col justify-between min-h-10">
            <h3 className="font-semibold text-text">{career.name}</h3>

            <p className="hidden sm:block text-sm text-text-sub">
              {career.degree}
            </p>
          </div>

          <div className="flex flex-col justify-start sm:justify-center gap-1 w-fill h-10 sm:h-6">
            <a
              href={career.website}
              target="_blank"
              className="text-text-sub hover:text-text transition-colors duration-150"
            >
              <GlobeIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 font-medium text-xs text-text-sub sm:whitespace-pre">
          <p className="block sm:hidden text-text-sub">{career.degree}</p>
          <div className="flex gap-1.5 items-center">
            <CalendarIcon className="block sm:hidden text-text" />
            <p>{career.date}</p>
          </div>
          <p className="hidden sm:block">•</p>
          <div className="flex gap-1.5 items-center">
            <LocationIcon className="block sm:hidden text-text" />
            <p>{career.location}</p>
          </div>
        </div>
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
              className="group flex justify-center items-center px-2 py-1.5 hover:bg-hover 
                        border border-border rounded-sm text-text transition-all duration-300"
              key={index}
            >
              <TechIcon name={t} size={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerDisplay;
