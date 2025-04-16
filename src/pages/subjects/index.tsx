import TableHeaders from "../../components/common/table-headers";
import Button from "../../components/common/button";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import StudentDetailModal from "../../components/pages/student-detail-modal";
import AllSubjects from "../../components/pages/subjects";

const Subjects = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-7 w-full ">
      <TableHeaders
        title="Manage Subjects"
        placeholder="Search Subject"
        descriptions="These subjects will be shown on the platform to all tutors and students."
      />
      <Button
        className="w-fit "
        variant="secondary"
        onClick={() => setShowStudentProfile(true)}
      >
        Add New Subject
      </Button>
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap"></div>
        <AllSubjects />
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

export default Subjects;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
