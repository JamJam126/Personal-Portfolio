const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-99 w-full h-15 flex justify-center items-center">
      <div className="flex-1 h-full bg-primary border-b border-b-border"></div>

      <div className="w-3xl h-full border-b border-border bg-primary/70 backdrop-blur-md"></div>

      <div className="flex-1 h-full bg-primary border-b border-b-border"></div>
    </nav>
  );
};

export default NavBar;
