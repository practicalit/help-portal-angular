import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-help',
  templateUrl: './add-help.component.html',
  styleUrls: ['./add-help.component.css']
})
export class AddHelpComponent implements OnInit {
public catagory:string="Advice Material Money";

  constructor() { }

  ngOnInit() {
  }
  onSubmitRequest(){
console.log("You successfully send the request will contact soon");
  }
}
