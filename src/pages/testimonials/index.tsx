import Button from "../../components/common/button";
import TableHeaders from "../../components/common/table-headers";
import { ROUTES } from "../../routes/routes";
import { TESTIMONIALS } from "../../enums";
import { formatString } from "../../utils/format-string";
import { useParamKeys } from "../../hooks/use-param-keys";
import { useEffect, useState } from "react";
import AdminTestimonials from "../../components/pages/testimonials/admin";
import StudentTestimonials from "../../components/pages/testimonials/students";
import TutorTestimonials from "../../components/pages/testimonials/tutors";
import RequestsTestimonials from "../../components/pages/testimonials/requests";
import { Modal } from "antd";
import styled from "@emotion/styled";
import StudentDetailModal from "../../components/pages/student-detail-modal";

const Testimonials = () => {
  const { getParamKey, setParamKeys } = useParamKeys();
  const type = getParamKey("type");
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  useEffect(() => {
    if (!type) {
      setParamKeys(ROUTES.TESTIMONIALS, "type", TESTIMONIALS.ADMIN);
    }
  }, []);

  return (
    <div className="flex flex-col gap-9 pt-8 lg:pt-7 w-full ">
      <TableHeaders
        title="Manage Testimonials"
        btnText="Add Testimonials"
        button
        input={false}
        onClick={() => setShowStudentProfile(true)}
      />
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {Object.values(TESTIMONIALS).map((item, index) => (
            <Button
              key={item + index}
              onClick={() => setParamKeys(ROUTES.TESTIMONIALS, "type", item)}
              variant="secondary"
              size="md"
              outline={type !== item}
              className="!rounded-[36px] capitalize"
            >
              {formatString(item)}
            </Button>
          ))}
        </div>
        {renderTable(type ?? "")}
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

export default Testimonials;

const renderTable = (type: string) => {
  if (type === TESTIMONIALS.ADMIN) {
    return <AdminTestimonials />;
  } else if (type === TESTIMONIALS.STUDENTS) {
    return <StudentTestimonials />;
  } else if (type === TESTIMONIALS.TUTORS) {
    return <TutorTestimonials />;
  } else if (type === TESTIMONIALS.REQUESTS) {
    return <RequestsTestimonials />;
  } else {
    return <AdminTestimonials />;
  }
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
