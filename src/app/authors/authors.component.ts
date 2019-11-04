import { Component, OnInit } from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {
authors;

  constructor(private authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit() {
  }

}
