import { GoLocation } from "react-icons/go";

import Button from "../../common/button";
import ProfileContainer from "../../common/profile-container";
import { Tag } from "antd";

const StudentDetailModal = () => {
  return (
    <div className="bg-white p-5 sm:p-7 !pt-11 rounded-primary flex flex-col gap-5 w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="https://picsum.photos/200/300"
            className="h-12 w-12 rounded-full border-4 border-primary/50"
          />
          <div className="flex flex-col gap-2 text-secondary">
            <h1 className="text-xl !font-family-barlow font-semibold">
              Tom Wilson
            </h1>
            <p className="flex items-center gap-2.5 text-xs">
              <GoLocation size={14} />
              Lahore
            </p>
          </div>
        </div>
        <Button variant="secondary" size="sm" className="!rounded">
          Message
        </Button>
      </div>
      <ProfileContainer label="About Tom Wilson">
        <p className="text-xs text-secondary">
          I am dedicated and passionate learner with a keen interest in the
          sciences. Born with a curious mind and a thirst for knowledge, I have
          always been drawn to understanding the intricacies of the natural
          world. Throughout my academic journey, I have consistently
          demonstrated a strong work ethic, an analytical mindset, and a
          commitment to excellence.
        </p>
      </ProfileContainer>

      <ProfileContainer label="Education">
        <div className="flex items-center gap-2.5">
          <img
            src="https://picsum.photos/200/300"
            className="h-7 w-7 min-7 rounded-full"
          />
          <div className="flex items-center justify-between flex-wrap gap-3 w-full">
            <p className="text-xs text-secondary">Qazi Pilot High School</p>
            <h1 className="text-xs font-semibold text-secondary">
              Matric (Science)-2012
            </h1>
          </div>
        </div>
      </ProfileContainer>

      <ProfileContainer label="Interests">
        <div className="flex items-center flex-wrap gap-2.5">
          <Tag title="Reading" />
          <Tag title="Writing" />
        </div>
      </ProfileContainer>
    </div>
  );
};

export default StudentDetailModal;
