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

  // postavlja dijalog vrednost kao false(nije otvoren u ovom slucaju)
  profileOpened : boolean = false;

  constructor(private userService: UserService, private dialog: MatDialog, private router : Router) {}

  // otvara profil kao dijalog i uzima korisnika po id-ju
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

  // postavlja vrednost login-a na false na pocetku (pre logovanja korisnika)
  loggedIn : boolean = false;

  //prijavljuje korisnika
  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  // odjavljuje korisnika
  signOut() {
    this.loggedIn = false;
  }

}
