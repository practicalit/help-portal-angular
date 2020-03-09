import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isValid:Boolean = true;
  message:string = null;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    
  }

  /**
   * Email reset handler. 
   * See how the email is passed to this method using template variable
   * @param email 
   */
  resetEmail(email) {
    email = email.value;
    this.isValid = true;
    if (email == "" || email == null) {
      this.isValid = false;
      return;
    }

    this.memberService.resetPassword(email).subscribe(
      response => {
        if (!response.success) {
          this.isValid = false;
        }
        let message = response.messages;
        this.message = message[0];
      }
    );
  }
}