import { Component, OnInit } from '@angular/core';
import { StripeToken, StripeSource } from "stripe-angular"
import { PaymentService } from 'src/app/services/payment.service';
import { Deposit } from 'src/app/models/Deposit';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {

  constructor(private paymentService: PaymentService) {

  }

  nameOnCard: string;
  email: string;
  amount: number;
  message:string = null;
  isValid = true;
  submitted = false;

  ngOnInit(){}

  extraData = {
    "name": this.nameOnCard,
    "email": this.email,
    "address_city": "DC",
    "address_line1": "roader 12",
    "address_line2": "234",
    "address_state": "MD",
    "address_zip": "20910"
  }

  onStripeInvalid( error:Error ){
    console.log('Validation Error', error)
  }

  /**
   * Called when successfully creates the token
   * @param token 
   */
  setStripeToken( token:StripeToken ){
    console.log('Stripe token', token)
    this.submitted = true;
    let payload: Deposit = {'stripeToken': token.id, 'amount': this.amount, 'email': this.email};
    this.paymentService.addDeposit(payload).subscribe(
      response => {
        this.isValid = true;
        if (response.success) {
          this.message = "Successfully added Fund! Thank you."
        } else {
          this.isValid = false;
          this.message = "There seems to be a problem with payment method. Lets try again."
        }
      }
    );
  }

  setStripeSource( source:StripeSource ){
    console.log('Stripe source', source)
  }

  onStripeError( error:Error ){
    console.error('Stripe error', error)
  }
}
