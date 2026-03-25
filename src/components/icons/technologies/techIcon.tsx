import { CIcon, CIconHover } from "./CIcon";
import { CppIcon, CppIconHover } from "./CppIcon";
import { CSS3Icon, CSS3IconHover } from "./CSS3Icon";
import { HTML5Icon, HTML5IconHover } from "./HTML5Icon";
import { JavaIcon, JavaIconHover } from "./JavaIcon";
import { JavaScriptIcon, JavaScriptIconHover } from "./JavaScriptIcon";
import { PostgreSQLIcon, PostgreSQLIconHover } from "./PostgreSQLIcon";
import { ReactIcon, ReactIconHover } from "./ReactIcon";

type TechIconPair = {
  default: React.FC<{ className?: string; size?: number }>;
  hover: React.FC<{ className?: string; size?: number }>;
};

const techMap: Record<string, TechIconPair> = {
  C: { default: CIcon, hover: CIconHover },
  Cpp: { default: CppIcon, hover: CppIconHover },
  Java: { default: JavaIcon, hover: JavaIconHover },
  'HTML5': { default: HTML5Icon, hover: HTML5IconHover },
  'CSS3': { default: CSS3Icon, hover: CSS3IconHover },
  JavaScript: { default: JavaScriptIcon, hover: JavaScriptIconHover },
  React: { default: ReactIcon, hover: ReactIconHover },
  PostgreSQL: { default: PostgreSQLIcon, hover: PostgreSQLIconHover },
};

type TechIconProps = {
  name: string;
  className?: string;
  size?: number;
};

const TechIcon: React.FC<TechIconProps> = ({ name, className, size }) => {
  const iconPair = techMap[name];
  if (!iconPair) return null;

  const DefaultIcon = iconPair.default;
  const HoverIcon = iconPair.hover;

  const iconSize = size ?? 12;

  return (
    <div
      className="relative inline-block group"
      style={{ width: iconSize, height: iconSize }}
    >
      <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <DefaultIcon className={className} size={iconSize} />
      </div>
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <HoverIcon className={className} size={iconSize} />
      </div>
    </div>
  );
};

export default TechIcon