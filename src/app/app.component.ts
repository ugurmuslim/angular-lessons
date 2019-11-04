import { Component } from '@angular/core';
import {CoursesService} from './courses/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CoursesService]
})
export class AppComponent {
  title = 'angular-lessons';
}
