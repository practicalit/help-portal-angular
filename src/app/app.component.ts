import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Egna Legna';
  year:number = 2017;

  ngOnInit() {
    this.year = (new Date()).getFullYear();
  }
}
