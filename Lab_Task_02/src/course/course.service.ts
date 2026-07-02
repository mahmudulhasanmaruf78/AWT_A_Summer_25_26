import { Injectable } from '@nestjs/common';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  private courses = [];

  getAllCourses() {
    return { message: 'Get All Courses - from Service', data: this.courses };
  }

  getCourseById(id: string) {
    return { message: 'Get Course with ID - from Service', id };
  }

  createCourse(dto: CreateCourseDto) {
    this.courses.push(dto);
    return { message: 'Create Course - from Service', data: dto };
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    return { message: 'Update Course - from Service', id, data: dto };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
    return {
      message: 'Patch Course - from Service',
      id,
      updatedFields: Object.keys(dto),
    };
  }

  deleteCourse(id: string) {
    return { message: 'Delete Course - from Service', id };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    return {
      message: 'Upload Course Material - from Service',
      id,
      fileName: file.filename,
      path: `uploads/${file.filename}`,
    };
  }
}
