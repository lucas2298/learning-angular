import { DatePipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormatDatePipe } from '../format-date-pipe';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  onCourseBooked($event: any) {
    throw new Error('Method not implemented.');
  }
  onAddToWishlist($event: any) {
    this.wishlist += $event.name + ' ';
  }

  title: string = 'Course List';
  wishlist: string = '';
  courses = [
    {
      id: 1,
      name: 'Beginner',
      description: 'Beginner course',
      isBooked: false,
      img: 'angular-logo.png',
      today: new Date(),
    },
    {
      id: 2,
      name: 'Intermediate',
      description: 'Intermediate course',
      isBooked: true,
      img: 'angular-logo.png',
      today: new Date(),
    },
  ];

  ngOnInit(): void {
    console.log('CourseList component initialized.');
  }
}
