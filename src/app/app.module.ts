import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MenuComponent } from './menu/menu.component';

import { UserService } from './auth/user.service';
import { MenuService } from './menu/menu.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditComponent } from './credit/credit.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    ProfileComponent,
    CartComponent,
    PaymentComponent,
    CreditComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService, MenuService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent, PaymentComponent]
})
export class AppModule { }
