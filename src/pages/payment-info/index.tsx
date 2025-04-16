import Button from "../../components/common/button";
import TableHeaders from "../../components/common/table-headers";
import { ROUTES } from "../../routes/routes";
import { PAYMENTINFO } from "../../enums";
import { formatString } from "../../utils/format-string";
import { useParamKeys } from "../../hooks/use-param-keys";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";
import StudentDetailModal from "../../components/pages/student-detail-modal";
import StudentPaymentInfo from "../../components/pages/payment-info/students";
import TutorPaymentInfo from "../../components/pages/payment-info/tutors";

const PaymentInfo = () => {
  const { getParamKey, setParamKeys } = useParamKeys();
  const type = getParamKey("type");
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  useEffect(() => {
    if (!type) {
      setParamKeys(ROUTES.PAYMENT_INFO, "type", PAYMENTINFO.STUDENTS);
    }
  }, []);

  return (
    <div className="flex flex-col gap-9 pt-8 lg:pt-7 w-full ">
      <TableHeaders
        title="Payment Info"
        onClick={() => setShowStudentProfile(true)}
        placeholder={type === "Students" ? "Search Student" : "Search Tutor"}
      />
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {Object.values(PAYMENTINFO).map((item, index) => (
            <Button
              key={item + index}
              onClick={() => setParamKeys(ROUTES.PAYMENT_INFO, "type", item)}
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

export default PaymentInfo;

const renderTable = (type: string) => {
  if (type === PAYMENTINFO.STUDENTS) {
    return <StudentPaymentInfo />;
  } else if (type === PAYMENTINFO.TUTORS) {
    return <TutorPaymentInfo />;
  } else {
    return <StudentPaymentInfo />;
    }
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
