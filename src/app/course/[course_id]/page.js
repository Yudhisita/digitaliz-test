import Materi from "@/components/materi/Materi";
import Course from "@/components/course/Course";

const CoursePage = async ({ params: { course_id } }) => {
  return (
    <section>
      <Course courseId={course_id} />
      <Materi courseId={course_id} />
    </section>
  );
};

export default CoursePage;
