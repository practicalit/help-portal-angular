import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/Member';
import { Router } from '@angular/router';

/**
 * Registration handler component
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success: Boolean = false;

  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  constructor(private memberService: MemberService,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * Event handler for the registration submit.
   */
  onSubmit() {
    //accessing values
    console.log('getting values');
    let member:Member = {'firstName': this.registrationForm.get(
      'firstName').value,
      'lastName': this.registrationForm.get('lastName').value,
      'email': this.registrationForm.get('email').value,
      'dateOfBirth': this.registrationForm.get('dateOfBirth').value,
      'password': this.registrationForm.get('password').value,
      'gender': this.registrationForm.get('gender').value
    }
    
    this.memberService.save(member).subscribe( 
      data => {
        console.log(data);
        if (data.success) {
          console.log('testing this');
        }
        if (data.success) {
          this.success = true;
          this.redirectToLogin();
        }
      }
    );
  }

  private redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
