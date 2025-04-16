import { BiChevronLeft } from "react-icons/bi";
import { ROUTES } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const ManageBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="py-7 flex flex-col gap-6">
      <h1
        className="text-lg !font-family-barlow font-bold text-secondary flex items-center  gap-1 relative -top-12  cursor-pointer select-none"
        onClick={() => navigate(`${ROUTES.BLOGS}`)}
      >
        <BiChevronLeft className="text-3xl" />
        <div>Manage Blog Post</div>
      </h1>
      <div className="flex flex-col gap-6 md:gap-4">
        <div className="h-64 w-full border-2 border-dotted border-gray-300 bg-white rounded-xl flex flex-col gap-5 py-10  justify-center items-center  ">
          <img
            src="/images/blog/blogupload.svg"
            className="h-20 w-20"
          />
          <p className="font-medium text-base !font-family-barlow">
            Drag and drop your files here or click to
          </p>
          <Button className="w-fit !font-family-barlow" variant="secondary">
            Browse File
          </Button>
        </div>
      </div>
      <div className="border-2 border-gray-300 w-full bg-white rounded-xl ">
        <h1 className="font-bold text-2xl !font-family-barlow py-6 border-b-2 w-full text-center border-gray-300 ">
          Add Blog Details
        </h1>

        <div className="p-7 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="!font-family-barlow text-lg font-semibold">
                Title
              </label>
              <Input placeholder="Title" className="!py-4" />
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="!font-family-barlow text-lg font-semibold">
                Author
              </label>
              <Input placeholder="Author" className="!py-4" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <label className="!font-family-barlow text-lg font-semibold">
              Blog Content
            </label>
            <TextArea rows={10} placeholder="Write here" />
          </div>
          <Button className="w-fit self-end !px-10 " variant="secondary">
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;
