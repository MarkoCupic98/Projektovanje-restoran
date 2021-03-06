import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = "";
  constructor(private userService : UserService, private router : Router, private AppComponent: AppComponent) {}

  ngOnInit() {
    if(this.AppComponent.loggedIn) {
      this.router.navigate(['']);
    }
  }

  onSubmit (form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user with the e-mail: " + email;
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);

    if(!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Password is incorrect!";
      return;
    }

    this.errorExists = false;
    this.AppComponent.setLoggedIn(true);
    this.router.navigate(['/menu']);
  }
}
