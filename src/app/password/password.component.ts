import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
hidden: boolean = false
hiddenMoves = [];
colorful = [];
  constructor() { }

  ngOnInit() {
  }

  makeHidden() {
    if (!this.hidden) {
    this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.hiddenMoves.push(new Date());
  }
}
