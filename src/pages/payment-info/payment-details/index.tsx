import { useNavigate, useParams } from "react-router-dom";
import PaymentInfoPayable from "../../../assest/icons/payment-info-payable";
import PaymentInfoPending from "../../../assest/icons/payment-info-pending";
import PaymentInfoSpending from "../../../assest/icons/payment-info-spending";
import PaymentInfoCard from "../../../components/pages/payment-info/payment-info-card";
import PaymentInfoChart from "../../../components/pages/payment-info/payment-info-chart";
import PaymentInfoTable from "../../../components/pages/payment-info/payment-info-table";
import { BiChevronLeft } from "react-icons/bi";
import { ROUTES } from "../../../routes/routes";

const PaymentDetails = () => {
  const { studentName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="py-7 flex flex-col gap-6">
      <h1
        className="text-lg !font-family-barlow font-bold text-secondary flex items-center  gap-1 relative -top-12  cursor-pointer select-none"
        onClick={() =>
          navigate(`${ROUTES.PAYMENT_INFO}`)
        }
      >
        <BiChevronLeft className="text-2xl" />
        <div>Payment Info</div>
      </h1>
      <div className="flex flex-col gap-6 md:gap-4">
        <h1 className="text-2xl !font-family-barlow font-bold text-secondary">
          {studentName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 xl:gap-6">
          <PaymentInfoCard
            title="Total Spending"
            price="Rs. 10,000"
            Icon={PaymentInfoSpending}
          />
          <PaymentInfoCard
            title="Total Payable"
            price="Rs. 3,000"
            Icon={PaymentInfoPayable}
          />
          <PaymentInfoCard
            title="Pending Payment"
            price="Rs. 5,000"
            Icon={PaymentInfoPending}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <PaymentInfoChart />
        <PaymentInfoTable />
      </div>
    </div>
  );
};

export default PaymentDetails;
