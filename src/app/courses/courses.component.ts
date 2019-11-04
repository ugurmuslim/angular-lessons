import {Component, Injectable, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';
import {AutoGrowDirective} from '../auto-grow.directive';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [ AutoGrowDirective ],
})
export class CoursesComponent implements OnInit {
  title = 'Naber iyilik senden';
  courses;
  constructor(private coursesService: CoursesService) {
      this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

}
