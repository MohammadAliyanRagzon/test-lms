import Button from "../../components/common/button";
import TableHeaders from "../../components/common/table-headers";
import { ROUTES } from "../../routes/routes";
import { TUTORS } from "../../enums";
import { formatString } from "../../utils/format-string";
import { useParamKeys } from "../../hooks/use-param-keys";
import { useEffect } from "react";
import EnrolledTutors from "../../components/pages/tutors/enrolled-tutors";
import PendingRequests from "../../components/pages/tutors/pending-requests";
import RejectedTutor from "../../components/pages/tutors/rejected-tutors";
import DeactivatedTutors from "../../components/pages/tutors/deactivated-tutors";

const Tutors = () => {
  const { getParamKey, setParamKeys } = useParamKeys();
  const type = getParamKey("type");

  useEffect(() => {
    if (!type) {
      setParamKeys(ROUTES.TUTORS, "type", TUTORS.ENROLLED_TUTORS);
    }
  }, []);

  return (
    <div className="flex flex-col gap-9 pt-8 lg:pt-7 w-full ">
      <TableHeaders title="Manage Tutors" placeholder="Search Tutors" />
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {Object.values(TUTORS).map((item, index) => (
            <Button
              key={item + index}
              onClick={() => setParamKeys(ROUTES.TUTORS, "type", item)}
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

export default Tutors;

const renderTable = (type: string) => {
  if (type === TUTORS.ENROLLED_TUTORS) {
    return <EnrolledTutors />;
  } else if (type === TUTORS.PENDING_REQUESTS) {
    return <PendingRequests />;
  } else if (type === TUTORS.REJECTED_TUTORS) {
    return <RejectedTutor />;
  } else if (type === TUTORS.DEACTIVATED_TUTORS) {
    return <DeactivatedTutors />;
  } else {
    return <EnrolledTutors />;
  }
};
