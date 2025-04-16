import Button from "../../components/common/button";
import TableHeaders from "../../components/common/table-headers";
import { ROUTES } from "../../routes/routes";
import { FAQS } from "../../enums";
import { formatString } from "../../utils/format-string";
import { useParamKeys } from "../../hooks/use-param-keys";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";
import StudentDetailModal from "../../components/pages/student-detail-modal";
import FAQStudent from "../../components/pages/faq/students";
import FAQTutor from "../../components/pages/faq/tutors";

const FAQ = () => {
  const { getParamKey, setParamKeys } = useParamKeys();
  const type = getParamKey("type");
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  useEffect(() => {
    if (!type) {
      setParamKeys(ROUTES.FAQS, "type", FAQS.FAQSFORSTUDENTS);
    }
  }, []);

  return (
    <div className="flex flex-col gap-9 pt-8 lg:pt-7 w-full ">
      <TableHeaders
        title="Frequently Asked Questions"
        btnText="Add New"
        button
        input={false}
        onClick={() => setShowStudentProfile(true)}
      />
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {Object.values(FAQS).map((item, index) => (
            <Button
              key={item + index}
              onClick={() => setParamKeys(ROUTES.FAQS, "type", item)}
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

export default FAQ;

const renderTable = (type: string) => {
  if (type === FAQS.FAQSFORSTUDENTS) {
    return <FAQStudent />;
  } else if (type === FAQS.FAQSFORTUTORS) {
    return <FAQTutor />;
  } else {
    return <FAQStudent />;
  }
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
