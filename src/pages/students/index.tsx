import Button from "../../components/common/button";
import TableHeaders from "../../components/common/table-headers";
import { ROUTES } from "../../routes/routes";
import { STUDENTS } from "../../enums";
import { formatString } from "../../utils/format-string";
import { useParamKeys } from "../../hooks/use-param-keys";
import { useEffect } from "react";
import EnrolledStudent from "../../components/pages/students/enrolled-students";
import PendingRequests from "../../components/pages/students/pending-requests";
import RejectedStudent from "../../components/pages/students/rejected-students";
import DeactivatedStudent from "../../components/pages/students/deactivated-students";

const Students = () => {
  const { getParamKey, setParamKeys } = useParamKeys();
  const type = getParamKey("type");

  useEffect(() => {
    if (!type) {
      setParamKeys(ROUTES.STUDENTS, "type", STUDENTS.ENROLLED_STUDENTS);
    }
  }, []);

  return (
    <div className="flex flex-col gap-9 pt-8 lg:pt-7 w-full ">
      <TableHeaders title="Manage Students" placeholder="Search Students" />
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {Object.values(STUDENTS).map((item, index) => (
            <Button
              key={item + index}
              onClick={() => setParamKeys(ROUTES.STUDENTS, "type", item)}
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
    </div>
  );
};

export default Students;

const renderTable = (type: string) => {
  if (type === STUDENTS.ENROLLED_STUDENTS) {
    return <EnrolledStudent />;
  } else if (type === STUDENTS.PENDING_REQUESTS) {
    return <PendingRequests />;
  } else if (type === STUDENTS.REJECTED_STUDENTS) {
    return <RejectedStudent />;
  } else if (type === STUDENTS.DEACTIVATED_STUDENTS) {
    return <DeactivatedStudent />;
  } else {
    return <EnrolledStudent />;
  }
};
