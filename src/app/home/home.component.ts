import { Component, OnInit } from '@angular/core';
declare global {
  interface Window {
    MyNamespace: any;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
  }
}
