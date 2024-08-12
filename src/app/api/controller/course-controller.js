import { CourseService } from "../service/course-service";
import { NextResponse } from "next/server";
import { errorResponse } from "../error/course-error";

export class CouresController {
  static async create(req) {
    try {
      const request = await req.json();
      const response = await CourseService.create(request);
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async get() {
    try {
      const response = await CourseService.getAll();
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getOne(id) {
    try {
      const respone = await CourseService.getById(id);
      return NextResponse.json({ data: respone }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getCourseList() {
    try {
      const respone = await CourseService.getCourseList();
      return NextResponse.json({ data: respone }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async update(req) {
    try {
      const request = await req.json();
      const response = await CourseService.update(request);
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async remove(req) {
    try {
      const request = await req.json();
      await CourseService.remove(request);
      return NextResponse.json({ data: "OK!" }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
