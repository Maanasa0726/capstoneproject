import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEvent(myName:any)
  {
    alert(myName+" have successfully logged in to your account. Press OK to continue!")
  }
}
