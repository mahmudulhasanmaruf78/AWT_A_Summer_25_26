import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class EnrollmentService {
  constructor(
    private courseService: CourseService,
    @Inject(forwardRef(() => NotificationService))
    private notificationService: NotificationService,
  ) {}

  enrollStudent(studentName: string, courseId: string) {
    const course = this.courseService.getCourseById(courseId);
    const notification = this.notificationService.sendNotification(
    studentName,
    `You have been enrolled in the course: ${courseId}`,
    );

    return {
      message: 'Student enrolled in course',
      data: { studentName, courseId },
    };
  }

  getEnrollments() {
    return { message: 'All enrollments fetched', data: [] };
  }
}
