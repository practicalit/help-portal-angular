import { Member } from '../../../models/Member';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: Boolean = false;
  loginFailed: Boolean = false;
  showSppinning: Boolean =false;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    if (this.authService.logged) {
      this.redirectToHome();
    }

    this.loginForm = this.formBuilder.group({
     email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Lets have easier access to the input controls of the form
   */
  get form() {
    return this.loginForm.controls;
  }

  /**
   * Handler for the page submission
   */
  onSubmit() {
    this.submitted = true;
    this.showSppinning = true;
    if (this.loginForm.invalid) {
      return;
     
    }

    this.authService.authenticate(this.form.email.value, 
      this.form.password.value).subscribe(user => {
       console.log(user);
        if (user.success && user.object.token) {
          this.authService.storeToken(user);
          this.redirectToHome();
          this.showSppinning = true;
        } else {
          this.loginFailed = true;
          this.authService.removeToken();
          return ;           }
      });
  }

  private redirectToHome() {
    this.router.navigate(['/home']);
  }
}