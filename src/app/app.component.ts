import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restoran';

  profileOpened : boolean = false;

  constructor(private userService: UserService, private dialog: MatDialog, private router : Router) {}

  openProfile(userId: number) {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: { user: this.userService.getUserById(userId) }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }

  loggedIn : boolean = false;

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  signOut() {
    this.loggedIn = false;
  }
}
