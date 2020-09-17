import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { SignupComponent } from '../signup/signup.component';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, private AppComponent: AppComponent) { }

  ngOnInit() {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      password: this.data.user.password,
      fName: this.data.user.fName,
      lName: this.data.user.lName,
      adress: this.data.user.adress,
      date: this.data.user.date,
      admin: this.data.user.admin
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.adress = this.profileForInput.adress;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

}
