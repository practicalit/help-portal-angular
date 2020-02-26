import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {
month:string='January.Feburary,March,April,May,June,July,August,September,October,November,December';

  constructor() { }

  ngOnInit() {
  }

}
