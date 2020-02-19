
import { MemberService } from './../../services/member.service';
import { Member } from './../../models/Member';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, private route: Router,) { }

  firstName: any = "";
  lastName: any = "";

  ngOnInit(){
    this.populateFirstLast()
  }
   

  /**
   * Take the current user to logout from the app
   * Also redirect to the login page
   * @todo: redirect the user to blog/news/current activities..
   */
  handleLogout() {
    this.authService.removeToken();
    this.route.navigate(['/login']);
  }

/**
 * Function to populate first and last name of the logger user
 */
populateFirstLast(){
  this.firstName = this.authService.getFirstName();
  this.lastName = this.authService.getLastName();
}

}
