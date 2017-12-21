import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Meta, Title } from '@angular/platform-browser';
import {DomAdapter, getDOM} from '@angular/platform-browser/src/dom/dom_adapter';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, meta: Meta, title: Title) {

     title.setTitle('Auth0 example');
      meta.addTags([
      { name: 'twitter:card', content: 'by Peter Gabas' },
      { name: 'twitter:site', content: '@firebuggirl' }
      // ...
    ]);
   }


  ngOnInit() {
  }

}
