import { useState } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import CustomTable from "../../common/table";
import Button from "../../common/button";
import StudentDetailModal from "../student-detail-modal";

const AllBlogs = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  const blogData = [
    {
      cover: "https://picsum.photos/200/300?random=1",
      title: "The Top Technical Skills All Employees Need in 2022",
      author: "Abdul Rehman",
    },
    {
      cover: "https://picsum.photos/200/300?random=2",
      title: "The Top Technical Skills All Employees Need in 2022",
      author: "Ahmed Sheikh",
    },
    {
      cover: "https://picsum.photos/200/300?random=3",
      title: "The Top Technical Skills All Employees Need in 2022",
      author: "Abdul Rehman",
    },
  ];

  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/students/enrolled-students.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">Blogs</h1>
      </div>

      <CustomTable
        columns={[
          {
            key: "cover",
            title: "Cover",
            dataIndex: "cover",
            render: (value) => (
              <img
                src={value}
                alt="cover"
                className="w-[130px] h-[88px] object-cover rounded"
              />
            ),
          },
          {
            key: "title",
            title: "Title",
            dataIndex: "title",
            render: (value) => (
              <h1 className="!font-family-barlow text-base font-semibold text-secondary">
                {value}
              </h1>
            ),
          },
          {
            key: "author",
            title: "Author",
            dataIndex: "author",
            render: (value) => (
              <h1 className="!font-family-barlow text-base font-medium text-secondary">
                {value}
              </h1>
            ),
          },
          {
            key: "action",
            align: "end",
            render: () => (
              <div className="flex items-end justify-end gap-3">
                <Button
                  className="!p-1.5 !rounded-md !bg-purple-500 !border-none !h-fit !w-fit"
                  onClick={() => setShowStudentProfile(true)}
                >
                  <MdOutlineEdit className="text-lg text-white" />
                </Button>
                <Button
                  className="!p-1.5 !rounded-md !bg-red-500 !border-none !h-fit !w-fit"
                  onClick={() => setShowStudentProfile(true)}
                >
                  <FaRegTrashCan className="text-lg text-white" />
                </Button>
              </div>
            ),
          },
        ]}
        data={blogData}
      />

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

export default AllBlogs;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
