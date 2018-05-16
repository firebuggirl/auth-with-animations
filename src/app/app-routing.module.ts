import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from "./guard/auth.guard";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";

import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


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
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
     path: 'contact-details/:id',
     component: ContactDetailComponent,
     canActivate: [AuthGuard]
   },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    canActivate: [AuthGuard]
  }
  // {
  //   path: 'contacts',
  //   component: ContactListComponent
  //   //canActivate: [AuthGuard]
  // },
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
