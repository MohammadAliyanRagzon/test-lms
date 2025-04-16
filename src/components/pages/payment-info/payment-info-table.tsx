import PaymentInfoTableIcon from "../../../assest/icons/payment-info-table";
import CustomTable from "../../common/table";

const PaymentInfoTable = () => {
  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-6 w-full">
      <div className="flex items-center gap-2">
        <PaymentInfoTableIcon className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">
          Payment History
        </h1>
      </div>
      <CustomTable
        columns={[
          { title: "Id", dataIndex: "id" },
          { title: "Date", dataIndex: "date" },
          { title: "Time", dataIndex: "time" },
          { title: "Instructor", dataIndex: "instructor" },
          { title: "Amount", dataIndex: "amount" },
          { title: "Status", dataIndex: "status" },
          { title: "", dataIndex: "action" },
        ]}
        data={[]}
      />
    </div>
  );
};

export default PaymentInfoTable;
