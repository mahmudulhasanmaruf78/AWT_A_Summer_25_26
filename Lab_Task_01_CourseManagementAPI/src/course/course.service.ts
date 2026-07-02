import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): string {
    return 'Get All Courses - from Service';
  }
  getCourseById(id: number): string {
    return `Get Course by ID: ${id} - from Service`;
  }
  createCourse(course: any): string {
    return 'Create Course - from Service';
  }
  updateCourse(id: number, course: any): string {
    return `Update Course ${id} - from Service`;
  }
  patchCourse(id: number, course: any): string {
    return `Patch Course ${id} - from Service`;
  }
  deleteCourse(id: number): string {
    return `Delete Course ${id} - from Service`;
  }
}
