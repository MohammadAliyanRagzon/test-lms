import TableHeaders from "../../components/common/table-headers";
import styled from "@emotion/styled";
import { useState } from "react";
import StudentDetailModal from "../../components/pages/student-detail-modal";
import { Modal } from "antd";
import ContactDetails from "../../components/pages/contact-us";

const ContactUs = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  return (
    <div className="flex flex-col gap-9 pt-8 lg:pt-7 w-full ">
      <TableHeaders title="Contact Detail" input={false} />
      <div className="flex flex-col gap-6 ">
        <ContactDetails />
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

export default ContactUs;
const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
