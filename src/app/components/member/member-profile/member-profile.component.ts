import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
  firstname:any;
  lastname:any;
  email:any;
  constructor(private authService: AuthenticationService ) { }

  ngOnInit() {
    this.populateFirstLast();
    this.populateEmail();
  }
 // populate first and last name 
 populateFirstLast(){
  this.firstname = this.authService.getFirstName();
  this.lastname = this.authService.getLastName();
}
// populate email
populateEmail(){
  this.email = this.authService.getEmail();
}
}

