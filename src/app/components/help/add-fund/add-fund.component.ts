import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StripeToken, StripeSource } from 'stripe-angular';
import { PaymentService } from 'src/app/services/payment.service';
import { Deposit } from 'src/app/models/Deposit';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {

  constructor(private paymentService: PaymentService, private authService: AuthenticationService, private router: Router) {}

  firstName: any;
  lastName: any;
  email: any;
  nameOnCard: string;
  amount: number;
  message: string = null;
  isValid = true;
  submitted = false;

  extraData = {
    name: this.nameOnCard,
    email: this.email,
    address_city: 'DC',
    address_line1: 'roader 12',
    address_line2: '234',
    address_state: 'MD',
    address_zip: '20910'
  };

  ngOnInit() {
    this.populateFirstLast();
    this.populateEmail();
    this.nameOnCard = `${this.firstName} ${this.lastName}`;
  }

  onStripeInvalid( error: Error ) {
    console.log('Validation Error', error);
  }

  /**
   * Called when successfully creates the token
   * @param token
   */
  setStripeToken( token: StripeToken ) {
    console.log('Stripe token', token);
    this.submitted = true;
    const payload: Deposit = {stripeToken: token.id, amount: this.amount, email: this.email};
    this.paymentService.addDeposit(payload).subscribe(
      response => {
        this.isValid = true;
        if (response.success) {
          this.message = 'Successfully added Fund! Thank you.';
        } else {
          this.isValid = false;
          this.message = 'There seems to be a problem with payment method. Lets try again.';
        }
      }
    );
  }

  setStripeSource( source: StripeSource ) {
    console.log('Stripe source', source);
  }

  onStripeError( error: Error ) {
    console.error('Stripe error', error);
  }

  populateFirstLast() {
    this.firstName = this.authService.getFirstName();
    this.lastName = this.authService.getLastName();
  }
populateEmail() {
  this.email = this.authService.getEmail();
}
}
