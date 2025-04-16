import { useState } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";

import StudentDetailModal from "../student-detail-modal";

import SubjectCard from "../../common/subject-card";

const AllCourses = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/students/enrolled-students.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">All Courses</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <SubjectCard
          title="Interaction Design Specialization"
          iconSrc="/images/courses/courses.svg"
          onEdit={() => setShowStudentProfile(true)}
          onDelete={() => setShowStudentProfile(true)}
        />
        <SubjectCard
          title="Interaction Design Specialization"
          iconSrc="/images/courses/courses.svg"
          onEdit={() => setShowStudentProfile(true)}
          onDelete={() => setShowStudentProfile(true)}
        />
      </div>

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

export default AllCourses;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
