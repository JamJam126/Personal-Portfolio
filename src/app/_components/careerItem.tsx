type CareerItemProps = {
  title: string;
  active?: boolean;
  onClick?: () => void;
};

const CareerItem: React.FC<CareerItemProps> = ({
  title,
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 w-full cursor-pointer hover:bg-hover ${
        active ? "bg-focus" : ""
      } transition-colors duration-150`}
    >
      <h3 className="text-sm text-text">{title}</h3>
    </div>
  );
};

export default CareerItem;
