import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//import { ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
//import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { UserComponent } from './user/user.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

//import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CallbackComponent,
    UserComponent,
    ContactDetailsComponent,
    ContactListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return localStorage.getItem('access_token');
    //     },
    //     whitelistedDomains: ['localhost:4200', 'http://localhost:4200/home', 'http://localhost:4200/user']
    //   }
    // })
    //  Ng2Bs3ModalModule
    //RouterModule.forRoot(ROUTES)
  //  RouterModule.forRoot(AppRoutingModule)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
