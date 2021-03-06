import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CreditComponent } from './credit/credit.component';
import { FinishComponent } from './finish/finish.component';

const rute: Routes = [
    {path : '', component: WelcomeComponent},
    {path : 'signup', component: SignupComponent},
    {path : 'login', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'cart', component: CartComponent},
    {path: 'credit', component: CreditComponent},
    {path: 'finish', component: FinishComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})

export class RoutingModule {}