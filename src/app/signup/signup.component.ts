import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupEvent(myName:any)
  {
    alert(myName+" have successfully created an account. Press OK to continue!")
  }
}
