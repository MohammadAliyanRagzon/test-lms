import CustomTable from "../../../common/table";
import { useState } from "react";
import StudentDetailModal from "../../student-detail-modal";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Button from "../../../common/button";
import { FaRegTrashCan } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";

const StudentTestimonials = () => {
  const [showStudentProfile, setShowStudentProfile] = useState(false);

  return (
    <div className="border border-primary-border px-5 py-7 rounded-primary flex flex-col gap-7 w-auto">
      <div className="flex items-center gap-2">
        <img src="/images/testimonials/img1.svg" className="h-6 w-6" />
        <h1 className="text-lg font-bold !font-family-barlow">Testimonials</h1>
      </div>

      <CustomTable
        columns={[
          {
            key: "name",
            title: "Name",
            dataIndex: "name",
            render: (value, render) => (
              <div className="flex items-center gap-1.5">
                <img
                  className="h-9 w-9 rounded-full"
                  src={render?.image}
                  alt="student"
                />
                <h1 className="!font-family-barlow text-base font-semibold text-secondary">
                  {value}
                </h1>
              </div>
            ),
          },
          {
            key: "qualification",
            title: "Title",
            dataIndex: "qualification",
            render: (value) => <p className="text-secondary">{value}</p>,
          },
          {
            key: "content",
            title: "Content",
            dataIndex: "content",
            render: (value) => (
              <p className="text-secondary text-sm max-w-[280px]">{value}</p>
            ),
          },
          {
            key: "rating",
            title: "Rating",
            dataIndex: "rating",
            align: "center",
            render: (value) => (
              <p className="text-yellow-500 font-medium">{value} ★</p>
            ),
          },
          {
            key: "subjectsCourses",
            title: "Enrolled Course/Class",
            dataIndex: "subjectsCourses",
            align: "center",
            render: (value) => (
              <p className="text-secondary text-sm text-center">{value}</p>
            ),
          },
          {
            key: "action",
            align: "end",
            render: () => (
              <div className="flex items-end justify-end gap-3">
                <Button
                  className="!px-2 !rounded-md "
                  onClick={() => setShowStudentProfile(true)}
                >
                  <FaRegTrashCan className="text-lg" />
                </Button>
                <Button
                  className="!px-2 !rounded-md "
                  onClick={() => setShowStudentProfile(true)}
                >
                  <BiEdit className="text-lg" />
                </Button>
              </div>
            ),
          },
        ]}
        data={[
          {
            image: "https://picsum.photos/200/300?random=1",
            name: "Jack Michel",
            qualification: "Very interesting course",
            content:
              "Etiam aliquam purus sit amet luctus venenatis lectus magna...",
            rating: "4.5",
            subjectsCourses: "Academic Information Seeking",
          },
          {
            image: "https://picsum.photos/200/300?random=2",
            name: "Asad Iqbal",
            qualification: "Very interesting course",
            content:
              "Etiam aliquam purus sit amet luctus venenatis lectus magna...",
            rating: "4.0",
            subjectsCourses: "Academic Information Seeking",
          },
          {
            image: "https://picsum.photos/200/300?random=3",
            name: "Ahsan Khan",
            qualification: "Very interesting course",
            content:
              "Etiam aliquam purus sit amet luctus venenatis lectus magna...",
            rating: "5.0",
            subjectsCourses: "Academic Information Seeking",
          },
        ]}
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

export default StudentTestimonials;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    border-radius: 10px;
  }
`;
