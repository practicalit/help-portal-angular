import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: number;
  transactions = [{"date": "Jan 10 2020", "amount": "200"}, {"date": "Feb 10 2020", "amount": "310"}];

  constructor(private memberService:MemberService) { }

  ngOnInit() {
    this.memberService.getBalance().subscribe(
      response => {
        if (response && response.success) {
          this.balance = response.object;
        }
      }
    );
  }

  /**
   * Called upon clicking of the tab on the view
   * Creates the list of the transactions adding up to the funds.
   * 
   */
  listTransactions() {
    this.transactions.push({"date": "Jan 27 2020", "amount": "500"})
  }

}
