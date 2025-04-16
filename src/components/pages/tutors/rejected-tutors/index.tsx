import CustomTable from "../../../common/table";
import { useState } from "react";
import StudentDetailModal from "../../student-detail-modal";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Button from "../../../common/button";
import { FaRegTrashCan } from "react-icons/fa6";
import Chip from "../../../common/chip";

const RejectedTutor = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/tutors/rejected-tutors.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">
          Rejected Tutor
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
                <div className="relative">
                  {/* <span className="h-3 w-3 rounded-full bg-main-green border-[1.5px] border-white absolute top-0 -right-0.5"></span> */}
                  <img
                    className="h-9 w-9 rounded-full"
                    src={render?.image ?? ""}
                    alt="tutor"
                  />
                </div>
                <h1 className="!font-family-barlow text-sm font-semibold text-secondary">
                  {value}
                </h1>
              </div>
            ),
          },
          {
            key: "qualification",
            title: "Qualification",
            dataIndex: "qualification",
            render: (value) => <p className="text-secondary">{value}</p>,
          },
          {
            key: "subjectsCourses",
            title: "Subjects/Courses",
            dataIndex: "subjectsCourses",
            align: "center",
            render: (value) => (
              <div className="flex flex-wrap max-w-2xs justify-center items-center  gap-2 ">
                {value.split(",").map((subject: string, index: number) => (
                  <Chip key={index}>{subject.trim()}</Chip>
                ))}
              </div>
            ),
          },
          {
            key: "enrolledDate",
            title: "Enrolled Date",
            dataIndex: "enrolledDate",
            align: "center",
            render: (value) => <p className="text-secondary">{value}</p>,
          },
          {
            key: "action",
            title: "",
            dataIndex: "action",
            align: "end",

            render: () => (
              <div className="flex items-end justify-end gap-3 w-1/2">
                <Button
                  className="!px-2 !rounded-md "
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
            image: "https://picsum.photos/200/300",
            name: "Dr. Sarah Johnson",
            qualification: "PhD in Physics",
            subjectsCourses: "Mechanics, Quantum Physics, Thermodynamics",
            enrolledDate: "2023-09-15",
          },
          {
            image: "https://picsum.photos/200/301",
            name: "Prof. Michael Chen",
            qualification: "MSc in Mathematics",
            subjectsCourses: "Linear Algebra, Calculus, Differential Equations",
            enrolledDate: "2023-09-14",
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

export default RejectedTutor;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
