import PaymentInfoTableIcon from "../../../assest/icons/payment-info-table";
import CustomTable from "../../common/table";

const PaymentInfoTable = () => {
  return (
    <div className="border border-primary-border bg-white px-5 py-7 rounded-primary flex flex-col gap-6 w-full">
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
        ]}
        data={[
          { id: "01", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "02", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "03", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Pending" },
          { id: "04", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "05", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "06", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Reversed" },
          { id: "07", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "08", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "09", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
          { id: "10", date: "May 10, 2024", time: "7:30:00 PM", instructor: "Mr Asad Sheikh", amount: "Rs. 5000", status: "Approved" },
        ]}
      />
    </div>
  );
};

export default PaymentInfoTable;
