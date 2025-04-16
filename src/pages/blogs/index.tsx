import TableHeaders from "../../components/common/table-headers";
import Button from "../../components/common/button";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import StudentDetailModal from "../../components/pages/student-detail-modal";
import AllBlogs from "../../components/pages/blogs";

const Blogs = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  return (
    <div className="flex flex-col gap-6 pt-8 lg:pt-7 w-full ">
      <TableHeaders title="Manage Blog Posts" placeholder="Search Post" />
      <Button
        className="w-fit "
        variant="secondary"
        onClick={() => setShowStudentProfile(true)}
      >
        Create New Post
      </Button>
      <div className="flex flex-col ">
        <AllBlogs />
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

export default Blogs;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
