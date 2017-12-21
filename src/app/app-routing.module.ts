import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from "./guard/auth.guard";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";

export const ROUTES: Routes = [
   { path: '', component: HomeComponent },
  // { path: 'callback', component: CallbackComponent },
  // { path: '**', redirectTo: '' }

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
