import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "antd";

interface SubjectCardProps {
  title: string;
  level?: string;
  iconSrc: string;
  onEdit: () => void;
  onDelete: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  level,
  iconSrc,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="py-7 px-5 border border-gray-300 rounded-xl flex justify-between items-center">
      <div className="flex gap-3.5">
        <div className="rounded-lg p-2 bg-[#f0e4ff] flex flex-col justify-center items-center w-fit border-2 border-[#8607DD]">
          <img src={iconSrc} className="h-8 w-8" />
        </div>
        <div className="w-8/10">
          <h1 className="text-xl font-semibold">{title}</h1>
          {level && <p className="text-[16px]">{level}</p>}
        </div>
      </div>
      <div className="flex gap-2.5">
        <Button
          className="!p-1.5 !rounded-md !bg-purple-500 !border-none !h-fit !w-fit"
          onClick={onEdit}
        >
          <MdOutlineEdit className="text-lg text-white" />
        </Button>
        <Button
          className="!p-1.5 !rounded-md !bg-red-500 !border-none !h-fit !w-fit"
          onClick={onDelete}
        >
          <FaRegTrashCan className="text-lg text-white" />
        </Button>
      </div>
    </div>
  );
};

export default SubjectCard;
