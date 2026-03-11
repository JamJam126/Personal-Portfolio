
export type TechStackCardData = {
  label: string;
  svg: React.ReactNode; // DEFAULT SVG
  svgHover: React.ReactNode; // HOVER SVG
};

type TechStackCardProps = {
  data: TechStackCardData;
};

const TechStackCard: React.FC<TechStackCardProps> = ({ data }) => {

  return (
    <div>
      <div className="group flex flex-col gap-2 items-center p-4 w-full 
                      hover:bg-hover border border-border rounded-md 
                      cursor-default transition-all duration-300"
      >
        <div className="group w-6 h-6">
          <div className="absolute transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
            {data.svg}
          </div>

          <div className="absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            {data.svgHover}
          </div>
        </div>

        <h3 className="font-medium text-xs text-text">{data.label}</h3>
      </div>
    </div>
  );
}

export default TechStackCard;