import { BsThreeDotsVertical } from "react-icons/bs";
import NavigateButton from "../../common/navigate-button";
import { ROUTES } from "../../../routes/routes";

const PendingTutorCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg h-full flex flex-col gap-3  w-full p-5 border border-gray-200">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-lg font-bold !font-family-barlow flex items-center gap-2">
            Pending Tutors
          </h2>
          <div className="flex gap-2 items-center">
            <p className="!font-family-barlow font-medium text-sm">
              <NavigateButton path={`${ROUTES.TUTORS}?type=pendingRequests`} />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              className="w-12 h-12 border-4 border-[#d19af7] rounded-full"
            />
            <div>
              <div>
                <h1 className="font-semibold text-base !font-family-barlow">
                  Tom Wilson
                </h1>
                <p className="text-xs">Teaches Chemistry</p>
              </div>
            </div>
          </div>
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
        </div>
        <hr className="border-gray-200" />

        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              className="w-12 h-12 border-4 border-[#d19af7] rounded-full"
            />
            <div>
              <div>
                <h1 className="font-semibold text-base !font-family-barlow">
                  Tom Wilson
                </h1>
                <p className="text-xs">Teaches Chemistry</p>
              </div>
            </div>
          </div>
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              className="w-12 h-12 border-4 border-[#d19af7] rounded-full"
            />
            <div>
              <div>
                <h1 className="font-semibold text-base !font-family-barlow">
                  Tom Wilson
                </h1>
                <p className="text-xs">Teaches Chemistry</p>
              </div>
            </div>
          </div>
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
        </div>
        <hr className="border-gray-200" />

        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200/300"
              alt="pic"
              className="w-12 h-12 border-4 border-[#d19af7] rounded-full"
            />
            <div>
              <div>
                <h1 className="font-semibold text-base !font-family-barlow">
                  Tom Wilson
                </h1>
                <p className="text-xs">Teaches Chemistry</p>
              </div>
            </div>
          </div>
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default PendingTutorCard;
