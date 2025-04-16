import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface propTypes {
  path: string;
}

const NavigateButton = ({ path }: propTypes) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-1.5 text-xs font-medium !font-family-barlow group cursor-pointer !text-secondary min-w-fit"
    >
      <span className="transition-all duration-300 group-hover:underline">
        View All
      </span>
      <span className="h-4 w-4 bg-secondary rounded-full flex items-center justify-center text-white overflow-hidden relative">
        <IoIosArrowRoundForward
          size={12}
          className="absolute -left-2.5 group-hover:left-0.5 transition-all duration-300 "
        />
        <IoIosArrowRoundForward
          size={12}
          className="absolute left-0.5 group-hover:left-4 transition-all duration-300"
        />
      </span>
    </Link>
  );
};

export default NavigateButton;
