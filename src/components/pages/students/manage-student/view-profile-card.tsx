import { CiLocationOn } from "react-icons/ci";
import Button from "../../../common/button";
import Chip from "../../../common/chip";
import { useState } from "react";

export default function ProfileCard() {
  const [toggleBtn, setToggleBtn] = useState(true);

  return (
    <div className=" w-full border-1 border-gray-200 bg-white rounded-xl flex flex-col py-8 px-5  ">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              className="w-28 h-28 border-8 border-[#d19af7] rounded-full"
            />
            <div>
              <h1 className="font-semibold text-2xl !font-family-barlow">
                Tom Wilson
              </h1>
              <div className="flex items-center gap-1">
                <CiLocationOn className="text-lg" />
                <p className="text-base">Lahore</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          onClick={() => setToggleBtn(!toggleBtn)}
          className={`w-fit  ${
            toggleBtn ? `!bg-[#02D326]` : `!bg-[#EC1C24]`
          } !border-none !h-10 !py-3 !px-9`}
          variant="secondary"
        >
          {toggleBtn ? `Active` : `Deactivated`}
        </Button>
      </div>
      <hr className="border-gray-200 my-8" />

      <div className=" flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <h1 className="!font-family-barlow font-bold text-xl">
            About Tom Wilson
          </h1>
          <p className="rounded-sm border border-gray-200 py-2.5 px-3.5">
            I am dedicated and passionate learner with a keen interest in the
            sciences. Born with a curious mind and a thirst for knowledge, I
            have always been drawn to understanding the intricacies of the
            natural world. Throughout my academic journey, I have consistently
            demonstrated a strong work ethic, an analytical mindset, and a
            commitment to excellence.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="!font-family-barlow font-bold text-xl">Education</h1>
          <div className="rounded-sm border border-gray-200 py-2.5 px-3.5 flex flex-col gap-4">
            <div className=" flex gap-2.5 items-center">
              <img
                src="https://picsum.photos/200/300"
                alt="pic"
                className="w-9 h-9 rounded-full"
              />
              <p className="text-base font-semibold">Qazi Pilot High School</p>
            </div>
            <div className=" flex gap-2.5 items-center">
              <img
                src="https://picsum.photos/200/300"
                alt="pic"
                className="w-9 h-9 rounded-full"
              />
              <p className="text-base font-semibold">
                Punjab Group of Colleges
              </p>
            </div>
            <div className=" flex gap-2.5 items-center">
              <img
                src="https://picsum.photos/200/300"
                alt="pic"
                className="w-9 h-9 rounded-full"
              />
              <p className="text-base font-semibold">
                Lahore Garrison University
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="!font-family-barlow font-bold text-xl">Interests</h1>
          <div className="rounded-sm border border-gray-200 py-2.5 px-3.5 flex items-center gap-2.5 flex-wrap">
            <Chip children="Reading" />
            <Chip children="Writing" />
            <Chip children="Traveling" />
            <Chip children="Cricket" />
            <Chip children="Singing" />
          </div>
        </div>
      </div>
    </div>
  );
}
