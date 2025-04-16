import CustomTable from "../../../common/table";
import { useState } from "react";
import StudentDetailModal from "../../student-detail-modal";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Button from "../../../common/button";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { BsEye } from "react-icons/bs";

const FAQStudent = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/faqs/faqs.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">FAQ's</h1>
      </div>

      <CustomTable
        columns={[
          {
            key: "question",
            title: "Questions",
            dataIndex: "question",
            className: "",
            render: (value) => (
              <div className="flex items-center gap-1.5 no- ">
                <h1 className="!font-family-barlow text-base font-semibold text-secondary">
                  {value}
                </h1>
              </div>
            ),
          },

          {
            key: "action",
            align: "end",
            render: () => (
              <div className="flex items-end justify-end gap-3">
                <Button
                  className="!p-1.5 !rounded-md !bg-purple-500 !border-none !h-fit !w-fit"
                  onClick={() => setShowStudentProfile(true)}
                >
                  <MdOutlineEdit className="text-lg text-white" />
                </Button>
                <Button
                  className="!p-1.5 !rounded-md !bg-green-500 !border-none !h-fit !w-fit"
                  onClick={() => setShowStudentProfile(true)}
                >
                  <BsEye className="text-lg text-white" />
                </Button>
                <Button
                  className="!p-1.5 !rounded-md !bg-red-500 !border-none !h-fit !w-fit"
                  onClick={() => setShowStudentProfile(true)}
                >
                  <FaRegTrashCan className="text-lg text-white" />
                </Button>
              </div>
            ),
          },
        ]}
        data={[
          {
            question: "How to sign up?",
          },
          {
            question: "When will I appear in the search results?",
          },
          {
            question: "What if I do not provide educational documents?",
          },
          {
            question: "How to upload my documents and CNIC",
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

export default FAQStudent;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
