import { BiChevronLeft } from "react-icons/bi";
import { ROUTES } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
const ManageTutor = () => {
  const navigate = useNavigate();

  return (
    <div className="py-7 flex flex-col gap-6">
      <h1
        className="text-lg !font-family-barlow font-bold text-secondary flex items-center  gap-1 relative -top-12  cursor-pointer select-none"
        onClick={() => navigate(`${ROUTES.TUTORS}`)}
      >
        <BiChevronLeft className="text-3xl" />
        <div>Manage Tutors</div>
      </h1>
      <div className="flex flex-col gap-6 md:gap-4">
        <div className="h-64 w-full border-2 border-dotted border-gray-300 bg-white rounded-xl flex flex-col gap-5 py-10  justify-center items-center  "></div>
      </div>
    </div>
  );
};

export default ManageTutor;
