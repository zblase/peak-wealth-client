import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serviceBtns: any[] = [];

  constructor() {}


  ngOnInit(): void {
    for (var i = 0; i < 8; i++) {
      this.serviceBtns.push({});
    }
  }

}
