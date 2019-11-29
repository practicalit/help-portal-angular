import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  title = "Help Portal";

  ngOnInit() {
    this.redirectToLogin();
  }

  /**
   * If the user hasn't logged in yet, then redirect to login page
   */
  redirectToLogin() {
    //check from services if the user has logged in.
    let isLogged = true; //read from service or something to check if session is active
    if (!isLogged) {
      this.router.navigate(['login']);
    }
  }

}
