import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormatDatePipe } from '../format-date-pipe';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [FormatDatePipe, NgStyle],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  onAddToWishlist(): void {
    this.courseAddedToWishlist.emit(this.course);
  }
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() courseAddedToWishlist = new EventEmitter<any>();

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }
}
