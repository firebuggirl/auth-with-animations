import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from "./guard/auth.guard";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";


export const ROUTES: Routes = [
   { path: '', component: HomeComponent },

  // { path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
    //canActivate: [AuthGuard]
  },
  // {
  //   path: 'callback',
  //   component: CallbackComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
