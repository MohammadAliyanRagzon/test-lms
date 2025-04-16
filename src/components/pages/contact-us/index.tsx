import { useState } from "react";
import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import { FaRegTrashCan } from "react-icons/fa6";
import CustomTable from "../../common/table";
import StudentDetailModal from "../student-detail-modal";

const ContactDetails = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/contact-us/phone.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">Contact Us</h1>
      </div>
      <CustomTable
        columns={[
          {
            key: "name",
            title: "Name",
            dataIndex: "name",
            render: (value) => (
              <h1 className="!font-family-barlow text-base font-semibold text-secondary">
                {value}
              </h1>
            ),
          },
          {
            key: "email",
            title: "Email",
            dataIndex: "email",
            render: (value) => <p className="text-secondary">{value}</p>,
          },
          {
            key: "phone",
            title: "Phone no.",
            dataIndex: "phone",
            render: (value) => <p className="text-secondary">{value}</p>,
          },
          {
            key: "queryType",
            title: "Query Type",
            dataIndex: "queryType",
            render: (value) => <p className="text-secondary">{value}</p>,
          },
          {
            key: "message",
            title: "Message",
            dataIndex: "message",
            className: "w-2/10",
            render: (value) => (
              <p className="text-secondary line-clamp-2 w-fit">{value}</p>
            ),
          },
          {
            key: "action",
            title: "",
            dataIndex: "action",
            align: "end",
            render: () => (
              <div className="flex items-center justify-center">
                <Button
                  className="!px-2 !rounded-md"
                  onClick={() => setShowStudentProfile(true)}
                >
                  <FaRegTrashCan className="text-lg" />
                </Button>
              </div>
            ),
          },
        ]}
        data={[
          {
            name: "Ahmed Rana",
            email: "ahmedrana@gmail.com",
            phone: "+92 321 2125635",
            queryType: "Payment",
            message:
              "I hope this message finds you well. I am writing to request...",
          },
          {
            name: "Abdul Hadi",
            email: "abdulhadi@gmail.com",
            phone: "+92 325 2516635",
            queryType: "Student",
            message:
              "I hope this message finds you well. I am writing to request...",
          },
          {
            name: "Ahmed Rana",
            email: "ahmedrana@gmail.com",
            phone: "+92 321 2125635",
            queryType: "Payment",
            message:
              "I hope this message finds you well. I am writing to request...",
          },
          {
            name: "Abdul Hadi",
            email: "abdulhadi@gmail.com",
            phone: "+92 325 2516635",
            queryType: "Student",
            message:
              "I hope this message finds you well. I am writing to request...",
          },
          {
            name: "Ahmed Rana",
            email: "ahmedrana@gmail.com",
            phone: "+92 321 2125635",
            queryType: "Payment",
            message:
              "I hope this message finds you well. I am writing to request...",
          },
          {
            name: "Abdul Hadi",
            email: "abdulhadi@gmail.com",
            phone: "+92 325 2516635",
            queryType: "Student",
            message:
              "I hope this message finds you well. I am writing to request...",
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

export default ContactDetails;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
