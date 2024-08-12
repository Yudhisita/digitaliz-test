import { MateriController } from "@/app/api/controller/materi-controller";

export async function GET(req, { params: { course_id } }) {
  return MateriController.getByCourseId(course_id);
}
