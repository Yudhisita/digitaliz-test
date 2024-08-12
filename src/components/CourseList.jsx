import Card from "./card/Card";
import UploadCourse from "./UploadCourse";

const requestData = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/course`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CourseList = async () => {
  const responseDate = await requestData();

  return (
    <section className="py-6">
      <div className="flex justify-between items-center py-5">
        <div className="font-bold text-xl mb-4">
          Jumlah Course : {responseDate.data.count}
        </div>
        <UploadCourse />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-center items-center">
        <Card data={responseDate.data.course} />
      </div>
    </section>
  );
};

export default CourseList;
