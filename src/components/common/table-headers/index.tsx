import { Input } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../button";

interface propTypes {
  title?: string;
  icon?: React.ReactNode;
  [key: string]: unknown;
  input?: boolean;
  button?: boolean;
  onClick?: () => void;
  descriptions?: string;
  btnText?: string;
}

const TableHeaders = ({
  title,
  icon,
  input = true,
  button = false,
  onClick,
  descriptions,
  btnText,
  ...props
}: propTypes) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2 md:gap-3">
        {icon && icon}
        <div className="flex flex-col gap-2">
          {title && (
            <h1 className="text-xl md:text-2xl font-bold !font-family-barlow">
              {title}
            </h1>
          )}
          {descriptions && <h1 className="text-md ">{descriptions}</h1>}
        </div>
      </div>
      {button && (
        <Button variant="secondary" onClick={onClick}>
          {btnText}
        </Button>
      )}
      {input && (
        <div className="relative sm:w-60">
          <Input
            className="!w-full !text-xs !shadow-primary/20 !rounded-[59px] !h-8 !font-family-barlow !text-secondary focus:!border-gray-300 focus:!shadow-sm hover:!border-gray-300 hover:!shadow-none"
            {...props}
          />
          <IoSearchOutline className="absolute top-1/2 right-3 transform -translate-y-1/2" />
        </div>
      )}
    </div>
  );
};

export default TableHeaders;
