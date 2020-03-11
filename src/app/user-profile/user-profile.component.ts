import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService, private route: Router,private member: MemberService) { }

  firstName: any = "";
  lastName: any = "";
  email: any = "";

  ngOnInit() {
    this.populateFirstLast()
  }

populateFirstLast(){
  this.firstName = this.authService.getFirstName();
  this.lastName = this.authService.getLastName();
  this.email=this.member.resetPassword(this.email);
}
handleLogout() {
  this.authService.removeToken();
  this.route.navigate(['/login']);
}
}
