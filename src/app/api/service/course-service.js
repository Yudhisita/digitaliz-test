import { Validation } from "../validation/validation";
import { CouresValidation } from "../validation/courseValidation";
import { prisma } from "@/lib/database";
import { ErrorResponse } from "../error/errorResponse";
import { revalidateTag } from "next/cache";

export class CourseService {
  static async isExistCourse(id) {
    if (!id) throw new ErrorResponse(400, "Course ID is required");

    const course = await prisma.course.findUnique({
      where: {
        id: id,
      },
    });

    if (!course) throw new ErrorResponse(404, "Course not found");

    return course;
  }

  static async create(req) {
    const userRequest = Validation.validate(CouresValidation.CREATE, req);

    const course = await prisma.course.create({
      data: userRequest,
    });

    return course;
  }

  static async getAll() {
    const course = await prisma.course.findMany();
    let count = await prisma.course.count();

    return {
      count,
      course,
    };
  }

  static async getById(id) {
    return await this.isExistCourse(id);
  }

  static async update(req) {
    const userRequest = Validation.validate(CouresValidation.UPDATE, req);

    let course = await this.isExistCourse(userRequest.id);

    course = await prisma.course.update({
      where: {
        id: userRequest.id,
      },
      data: userRequest,
    });

    return course;
  }

  static async remove(req) {
    const userRequest = req;
    let course = await this.isExistCourse(userRequest.id);

    course = await prisma.course.delete({
      where: {
        id: userRequest.id,
      },
    });

    return course;
  }
}
