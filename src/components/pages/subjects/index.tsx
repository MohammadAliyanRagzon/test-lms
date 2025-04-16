import { useState } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";

import StudentDetailModal from "../student-detail-modal";

import SubjectCard from "../../common/subject-card";

const AllSubjects = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/subjects/book.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">All Subjects</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 items-center">
        <SubjectCard
          title="Mathematics"
          level="Matric"
          iconSrc="/images/subjects/lectures.svg"
          onEdit={() => setShowStudentProfile(true)}
          onDelete={() => setShowStudentProfile(true)}
        />
        <SubjectCard
          title="Mathematics"
          level="Matric"
          iconSrc="/images/subjects/lectures.svg"
          onEdit={() => setShowStudentProfile(true)}
          onDelete={() => setShowStudentProfile(true)}
        />
        <SubjectCard
          title="Mathematics"
          level="Matric"
          iconSrc="/images/subjects/lectures.svg"
          onEdit={() => setShowStudentProfile(true)}
          onDelete={() => setShowStudentProfile(true)}
        />
        <SubjectCard
          title="Mathematics"
          level="Matric"
          iconSrc="/images/subjects/lectures.svg"
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

export default AllSubjects;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
