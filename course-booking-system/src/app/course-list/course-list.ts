import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  title: string = 'Course List';
  course = [
    {id: 1, name: 'Beginner', description: 'Beginner course', isBooked: false, img: "angular-logo.png"},
    {id: 2, name: 'Intermediate', description: 'Intermediate course', isBooked: true, img: "angular-logo.png"},
  ]
}
