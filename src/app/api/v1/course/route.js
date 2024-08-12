import { CouresController } from "../../controller/course-controller";

export async function POST(req, res) {
  return CouresController.create(req);
}

export async function GET(req, res) {
  return CouresController.get();
}

export async function PATCH(req, res) {
  return CouresController.update(req);
}

export async function DELETE(req, res) {
  return CouresController.remove(req);
}
