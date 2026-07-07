import { Controller, Body, Get, Post } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private enrollmentService: EnrollmentService) {}
  @Get()
  getEnrollments() {
    return this.enrollmentService.getEnrollments();
  }

  @Post()
  enrollStudent(@Body('studentName') studentName: string,
    @Body('courseId') courseId: string
  ) {
    return this.enrollmentService.enrollStudentInCourse(studentName, courseId);
  }
}
