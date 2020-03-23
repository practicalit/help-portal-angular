import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { MemberService } from '../../../services/member.service';
import { Member } from 'src/app/models/Member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService, 
    private memberService: MemberService, private formBuilder: FormBuilder) { }

  /*firstName: string;
  lastName: string;
  email: string;*/

  updateForm: FormGroup;
  message: string;
  isValid: boolean = true;
  submitted: boolean = false;

  ngOnInit() {

    console.log(this.authService.getFirstName());
    this.updateForm = this.formBuilder.group({
      firstName: [this.authService.getFirstName(), Validators.required],
      lastName: [this.authService.getLastName(), Validators.required],
      email: [this.authService.getEmail(), Validators.email]
    });
  }

  get form() {
    return this.updateForm.controls;
  }

  /**
   * Profile handler for the first and last name
   * @todo this has to be done either with form builder or ngModel
   * @param firstName 
   * @param lastName
   * @param email 
   */
  updateProfile() {
    this.submitted = true;
    //validate
    if (this.updateForm.invalid) {
      this.message = "Please provide values";
      console.log(this.message);
      this.isValid = false;
    }

    let member = new Member();
    member.firstName = this.form.firstName.value;
    member.lastName = this.form.lastName.value;
    member.email = this.form.email.value;

    this.memberService.update(member).subscribe(response => {
      console.log(response);
    });
  }
}
