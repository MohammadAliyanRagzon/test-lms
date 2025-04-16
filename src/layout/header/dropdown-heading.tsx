import { GoDotFill } from "react-icons/go";

interface propTypes {
  className?: string;
  title: string;
}

const DropdownHeading = ({ className, title }: propTypes) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <GoDotFill size={8} />
      {title}
    </div>
  );
};

export default DropdownHeading;
