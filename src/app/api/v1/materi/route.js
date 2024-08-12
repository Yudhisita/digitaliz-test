import { MateriController } from "../../controller/materi-controller";

export async function POST(req) {
  return MateriController.create(req);
}

export async function GET(req) {
  return MateriController.getAll();
}

export async function PATCH(req) {
  return MateriController.update(req);
}

export async function DELETE(req) {
  return MateriController.remove(req);
}
