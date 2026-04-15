import PageMeta from "../../components/common/PageMeta";
import LmsMetrics from "../../components/ecommerce/LmsMetrics";
import AcademicStatisticsChart from "../../components/ecommerce/AcademicStatisticsChart";
import AnnouncementsCard from "../../components/ecommerce/AnnouncementsCard";
import DegreeProgressCard from "../../components/ecommerce/DegreeProgress";
import StudyHoursChart from "../../components/ecommerce/StudyHoursChart";
import LevelupCard from "../../components/ecommerce/LevelupCard";
import RecentlyAccessedCourses from "../../components/ecommerce/RecentlyAccessedCourses";
import LmsStatsDetailed from "../../components/ecommerce/LmsStatsDetailed";
import TimelineCard from "../../components/ecommerce/TimelineCard";
import DashboardCalendar from "../../components/ecommerce/DashboardCalendar";
export default function Home() {
  return (
    <>
      <PageMeta
        title="Student Dashboard | University LMS"
        description="Your academic overview and course management."
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <AnnouncementsCard />
          <LmsMetrics />
          <RecentlyAccessedCourses />
          <LevelupCard />
          <LmsStatsDetailed />
          <TimelineCard />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-5">
          <AcademicStatisticsChart />
          <DegreeProgressCard />
          <StudyHoursChart />
          <DashboardCalendar />
        </div>
      </div>
    </>
  );
}
