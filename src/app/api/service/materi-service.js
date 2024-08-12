import { prisma } from "@/lib/database";
import { Validation } from "../validation/validation";
import { MateriValidation } from "../validation/materiValidation";
import { CourseService } from "./course-service";
import { ErrorResponse } from "../error/errorResponse";

export class MateriService {
  static async isExistMateri(id) {
    if (!id) throw new ErrorResponse(400, "Materi ID is required");

    const materi = await prisma.material.findUnique({
      where: {
        id: id,
      },
    });

    if (!materi) throw new ErrorResponse(404, "Materi not found");

    return materi;
  }

  static async create(req) {
    const userRequest = Validation.validate(MateriValidation.CREATE, req);
    await CourseService.isExistCourse(userRequest.course_id);

    const materi = await prisma.material.create({
      data: userRequest,
    });

    return materi;
  }

  static async getAll() {
    const materi = await prisma.material.findMany();
    const count = await prisma.material.count();

    return {
      count,
      materi,
    };
  }

  static async get(id) {
    return await this.isExistMateri(id);
  }

  static async update(req) {
    const userRequest = Validation.validate(MateriValidation.UPDATE, req);
    await this.isExistMateri(userRequest.id);

    const materi = await prisma.material.update({
      where: {
        id: userRequest.id,
      },
      data: userRequest,
    });

    return materi;
  }

  static async getMateriByCourseId(id) {
    await CourseService.isExistCourse(id);

    const materi = await prisma.material.findMany({
      where: {
        course_id: id,
      },
    });

    return materi;
  }

  static async remove(req) {
    const userRequest = req;
    let materi = await this.isExistMateri(userRequest.id);

    materi = await prisma.material.delete({
      where: {
        id: userRequest.id,
      },
    });

    return materi;
  }
}
