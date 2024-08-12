import { MateriController } from "@/app/api/controller/materi-controller";

export async function GET(req, { params: { materi_id } }) {
  return MateriController.getOne(materi_id);
}
