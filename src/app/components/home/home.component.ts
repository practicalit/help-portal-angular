import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Help Portal';

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.redirectToLogin();
  }

  /**
   * If the user hasn't logged in yet, then redirect to login page
   */
  redirectToLogin() {
    // check from services if the user has logged in.
    let navigate = ['home/help'];
    if (!this.authService.logged) {
      navigate = ['login'];
    }
    this.router.navigate(navigate);
  }

}
