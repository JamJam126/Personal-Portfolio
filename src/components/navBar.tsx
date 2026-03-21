import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-b-border backdrop-blur-md">
      <div className="max-w-3xl mx-auto flex justify-between items-center p-4 sm:p-8 md:p-0 h-16">
        <div className="font-bold text-2xl text-text">
          <Link href="/">
            VR
          </Link>
        </div>

        <div className="flex space-x-4 sm:space-x-8 font-medium text-sm sm:text-[16px] text-text">
          <Link href="/#about" className="hover:text-accent transition-colors">
            About Me
          </Link>
          <Link href="/#skills" className="hover:text-accent transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
