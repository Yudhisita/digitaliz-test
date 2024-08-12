import { CouresController } from "@/app/api/controller/course-controller";

export async function GET(req, { params: { course_id } }) {
  return CouresController.getOne(course_id);
}
