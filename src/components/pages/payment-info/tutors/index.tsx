import CustomTable from "../../../common/table";
import { useState } from "react";
import StudentDetailModal from "../../student-detail-modal";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Button from "../../../common/button";
import { BsEye } from "react-icons/bs";
import { ROUTES } from "../../../../routes/routes";
import { useNavigate } from "react-router-dom";

const TutorsPaymentInfo = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/students/enrolled-students.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">
          Tutors Payment
        </h1>
      </div>

      <CustomTable
        columns={[
          {
            key: "name",
            title: "Name",
            dataIndex: "name",
            render: (value, render) => (
              <div className="flex items-center gap-1.5">
                <img
                  className="h-9 w-9 rounded-full"
                  src={render?.image}
                  alt="student"
                />
                <h1 className="!font-family-barlow text-base font-semibold text-secondary">
                  {value}
                </h1>
              </div>
            ),
          },
          {
            key: "enrolledDate",
            title: "Enrolled Date",
            dataIndex: "enrolledDate",
          },
          {
            key: "timeSpend",
            title: "Time Spend",
            dataIndex: "timeSpend",
          },
          {
            key: "totalSpending",
            title: "Total Spending",
            dataIndex: "totalSpending",
          },
          {
            key: "action",
            align: "end",
            render: (record) => (
              <div className="flex items-end justify-end gap-3">
                <Button
                  className="!p-1.5 !rounded-md !bg-purple-500 !border-none !h-fit !w-fit"
                  onClick={() =>
                    navigate(
                      `${ROUTES.PAYMENT_INFO}/${encodeURIComponent(
                        record.name
                      )}`
                    )
                  }
                >
                  <BsEye className="text-lg text-white" />
                </Button>
              </div>
            ),
          },
        ]}
        data={[
          {
            image: "https://picsum.photos/200/300?random=1",
            name: "Jack Michel",
            enrolledDate: "May 05, 2023",
            timeSpend: "3 Months",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=2",
            name: "Mujtaba Farooq",
            enrolledDate: "May 02, 2024",
            timeSpend: "20 Days",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=3",
            name: "Waqar Yasir",
            enrolledDate: "May 22, 2023",
            timeSpend: "1 Year",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=4",
            name: "Talha Javed",
            enrolledDate: "May 05, 2023",
            timeSpend: "3 Months",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=5",
            name: "Arslan Ahmed",
            enrolledDate: "May 05, 2023",
            timeSpend: "3 Months",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=6",
            name: "Wajid Ali",
            enrolledDate: "May 05, 2023",
            timeSpend: "3 Months",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=7",
            name: "Shahzaib Khan",
            enrolledDate: "May 05, 2023",
            timeSpend: "3 Months",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=8",
            name: "Jack Michel",
            enrolledDate: "May 05, 2023",
            timeSpend: "3 Months",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=9",
            name: "Mujtaba Farooq",
            enrolledDate: "May 02, 2024",
            timeSpend: "20 Days",
            totalSpending: "Rs. 15,000",
          },
          {
            image: "https://picsum.photos/200/300?random=10",
            name: "Waqar Yasir",
            enrolledDate: "May 22, 2023",
            timeSpend: "1 Year",
            totalSpending: "Rs. 15,000",
          },
        ]}
      />

      <StyledModal
        open={showStudentProfile}
        footer={false}
        onCancel={() => setShowStudentProfile(false)}
        centered
        className="!p-0"
        width={625}
      >
        <StudentDetailModal />
      </StyledModal>
    </div>
  );
};

export default TutorsPaymentInfo;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
