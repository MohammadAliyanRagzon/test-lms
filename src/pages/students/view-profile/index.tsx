import { BiChevronLeft } from "react-icons/bi";
import { ROUTES } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import PaymentInfoTable from "../../../components/pages/payment-info/payment-info-table";
import ProfileCard from "../../../components/pages/students/manage-student/view-profile-card";

const ManageStudent = () => {
  const navigate = useNavigate();

  return (
    <div className="py-7 flex flex-col gap-6">
      <h1
        className="text-lg !font-family-barlow font-bold text-secondary flex items-center  gap-1 relative -top-12  cursor-pointer select-none"
        onClick={() => navigate(`${ROUTES.STUDENTS}`)}
      >
        <BiChevronLeft className="text-3xl" />
        <div>Manage Students</div>
      </h1>
      <div className="flex flex-col gap-6 md:gap-4">
        <h1 className="text-2xl !font-family-barlow font-bold text-secondary">
          Student History
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <ProfileCard />
        <PaymentInfoTable />
      </div>
    </div>
  );
};

export default ManageStudent;
