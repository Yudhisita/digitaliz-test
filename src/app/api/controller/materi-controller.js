import { MateriService } from "../service/materi-service";
import { NextResponse } from "next/server";
import { errorResponse } from "../error/course-error";

export class MateriController {
  static async create(req) {
    try {
      const request = await req.json();
      const response = await MateriService.create(request);
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getAll() {
    try {
      const response = await MateriService.getAll();
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getOne(id) {
    try {
      const response = await MateriService.get(id);
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async getByCourseId(id) {
    try {
      const response = await MateriService.getMateriByCourseId(id);
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async update(req) {
    try {
      const request = await req.json();
      const response = await MateriService.update(request);
      return NextResponse.json({ data: response }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async remove(req) {
    try {
      const request = await req.json();
      await MateriService.remove(request);
      return NextResponse.json({ data: "OK!" }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
