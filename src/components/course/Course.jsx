import { RemoveCourse } from "./RemoveCourse";
import AddMateri from "../materi/AddMateri";
import UpdateCourse from "./UpdateCourse";

const getDataCourse = async (course_id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/course/${course_id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Course = async (props) => {
  const { courseId } = props;
  const responseCourse = await getDataCourse(courseId);

  return (
    <>
      <div className="bg-purple-500 text-white p-3 rounded-xl shadow-md min-h-40 ">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-xl">{responseCourse.data.title}</h1>
          <div className="flex items-center justify-center gap-2">
            <RemoveCourse id={courseId} name={responseCourse.data.title} />
            <UpdateCourse id={courseId} data={responseCourse.data} />
            <AddMateri course_id={courseId} />
          </div>
        </div>
        <p>{responseCourse.data.description}</p>
        <span>Durasi {responseCourse.data.duration} Jam</span>
      </div>
    </>
  );
};

export default Course;
