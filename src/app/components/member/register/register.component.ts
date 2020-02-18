import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/Member';

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
   firstName: new FormControl('Henry',[Validators.required]),
   lastName: new FormControl('Wang', [Validators.required]),
    email: new FormControl('henry1@want.com',[Validators.email]),
    password: new FormControl('121212', [Validators.required]),
    dateOfBirth: new FormControl('1990-09-01', Validators.required)
  });

  constructor(private memberService: MemberService) { }

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
      'password': this.registrationForm.get('password').value
    }
    
    this.memberService.save(member).subscribe( 
      data => {
        console.log(data);
        if (data.success) {
          console.log('testing this');
        }
        if (data.success) {
          this.success = true;
        }
      }
    );
  }
}
