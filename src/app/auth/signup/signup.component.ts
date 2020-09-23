import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  errorExists = false;
  errorText = "";
  constructor(private userService : UserService, private router : Router, private AppComponent: AppComponent) {}

  ngOnInit() {
    if(this.AppComponent.loggedIn) {
      this.router.navigate(['']);
    }
  }

  onSubmit(form: NgForm) {
    if (!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.email, form.value.password, form.value.fName, form.value.lName, form.value.adress, form.value.date, false);
      this.router.navigate(['/login']);
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists."
    }

    this.AppComponent.setLoggedIn(false);
  }
}
