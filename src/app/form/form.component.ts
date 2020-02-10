import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
message:string ="Thanks" 
  constructor() { }

  ngOnInit() {
  }
afterForm(){
  alert('sucessfully submitted !! Thanks You visit Us');
//console.log(this.message);
}
}
