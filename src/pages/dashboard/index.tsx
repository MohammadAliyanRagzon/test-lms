import InfoCard from "../../components/pages/dashboard/info-card";
import LectureChart from "../../components/pages/dashboard/lectures-chart";
import PendingTutorCard from "../../components/pages/dashboard/pending-tutor-card";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 my-9">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-6">
        <InfoCard
          title="Total Tutors"
          total={8502}
          subtitle="Current Tutors: 5024"
          imageSrc="/images/dashboard/students.svg"
        />
        <InfoCard
          title="Total Students"
          total={"20,000"}
          subtitle="Current Students: 5024"
          imageSrc="/images/dashboard/enrolledstudent.svg"
        />
        <InfoCard
          title="Total Lectures"
          total={"10k+"}
          subtitle="Daily Lectures: 100+"
          imageSrc="/images/dashboard/takenlecture.svg"
        />
      </div>
      {/* <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:flex-[0.36]">
          <PendingTutorCard />
        </div>
        <div className="w-full md:flex-[0.74]">
          <LectureChart />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:flex-[0.74]">
          <LectureChart />
        </div>
        <div className="w-full md:flex-[0.36]">
          <PendingTutorCard />
        </div>
      </div>
    </div>
  );
}
