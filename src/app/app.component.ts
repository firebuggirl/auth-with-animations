import { Component, OnInit, isDevMode } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';
//import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';
   ngOnInit() {
    if (isDevMode()) {
      console.log('👋 Development!');
    } else {
      console.log('💪 Production!');
    }
  }
  
  constructor(public auth: AuthService, public http: HttpClient) {
  //constructor(public auth: AuthService, meta: Meta, title: Title) {
    auth.handleAuthentication();


 //    title.setTitle('My Spiffy Home Page');
 //     meta.addTags([
 //     { name: 'twitter:card', content: 'summary_large_image' },
 //     { name: 'twitter:site', content: '@firebuggirl' }
 //   // ...
 // ]);
 //
 // const viewport = meta.getTag('name=viewport');
 //  console.log(viewport.content); // width=device-width, initial-scale=1

  }

  // ping() {
  //   this.http.get('http://localhost:4200/api/user')
  //     .subscribe(
  //       data => console.log(data),
  //       err => console.log(err)
  //     );
  // }





}
