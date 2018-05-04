webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__ = __webpack_require__("./src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contact_list_contact_list_component__ = __webpack_require__("./src/app/contacts/contact-list/contact-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    // { path: '',
    //   redirectTo: 'home',
    //   pathMatch: 'full'
    // },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_6__contacts_contact_list_contact_list_component__["a" /* ContactListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a" /* AuthGuard */]]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(ROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class='navbar navbar-inverse'>\n      <div class='container-fluid'style=\"padding-left: 0px; padding-right: 0px;\">\n          <ul class='nav navbar-nav'>\n              <li><a routerLink=\"/\">Home</a></li>\n              <li><a [routerLink]=\"['user']\">Users</a></li>\n              <li><a [routerLink]=\"['contacts']\">Contacts</a></li>\n              <li><h4 *ngIf=\"auth.isAuthenticated() ; else nologin\">\n                <a (click)=\"auth.logout()\" class=\"btn btn-warning\">Log Out</a>\n              </h4>\n              <ng-template #nologin>\n              <h4>\n               <a (click)=\"auth.login()\" class=\"btn btn-success\">Log In</a>\n              </h4>\n              </ng-template></li>\n          </ul>\n      </div>\n  </nav>\n  <div class='container'>\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Meta, Title } from "@angular/platform-browser";
var AppComponent = (function () {
    function AppComponent(auth, http) {
        this.auth = auth;
        this.http = http;
        // ping() {
        //   this.http.get('http://localhost:4200/api/user')
        //     .subscribe(
        //       data => console.log(data),
        //       err => console.log(err)
        //     );
        // }
        this.title = 'app';
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
    AppComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* isDevMode */])()) {
            console.log('👋 Development!');
        }
        else {
            console.log('💪 Production!');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contact_service__ = __webpack_require__("./src/app/contacts/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__ = __webpack_require__("./src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contacts_contact_details_contact_details_component__ = __webpack_require__("./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contacts_contact_list_contact_list_component__ = __webpack_require__("./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HttpModule } from '@angular/http';

//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


//import { ROUTES } from './app.routes';

//import { AppRoutingModule } from './app-routing.module';








//import { JwtModule } from '@auth0/angular-jwt';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_13__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contacts_contact_details_contact_details_component__["a" /* ContactDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__contacts_contact_list_contact_list_component__["a" /* ContactListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]
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
        providers: [__WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__contacts_contact_service__["a" /* ContactService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("./src/app/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //note: this file is hidden via .gitignore, cd into directory to view


//import { JwtHelperService } from '@auth0/angular-jwt';
var AuthService = (function () {
    //constructor(public router: Router, public jwtHelper: JwtHelperService) {}
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
        // const token = localStorage.getItem('token');
        // // Check whether the token is expired and return
        // // true or false
        // return !this.jwtHelper.isTokenExpired(token);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
//import { environment } from '../../environments/environment';
var AUTH_CONFIG = {
    clientID: 'nAG2jFnP2fqoF6lWtNxIVSYu2tEGC4vW',
    domain: 'juliettet.auth0.com',
    //callbackURL: 'http://localhost:7777'
    callbackURL: 'https://auth-example-with-anim.herokuapp.com'
};
//# sourceMappingURL=auth0-variables.js.map

/***/ }),

/***/ "./src/app/callback/callback.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-callback',
        template: __webpack_require__("./src/app/callback/callback.component.html"),
        styles: [__webpack_require__("./src/app/callback/callback.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/***/ (function(module, exports) {

module.exports = ".form-control{\n  background-color: #cec3af;\n\n}\n\n.form-control:focus{\n  border: 3px solid #f0ad4e;\n  background-color: #1b1408;\n}\n\n.form-control[type=text]{\n  color:red;\n}\n\ninput::-webkit-input-placeholder{/* Chrome/Opera/Safari */\n  color:red;\n}\n\ninput::-moz-placeholder{/* Firefox 19+ */\n  color:red;\n}\n\ninput:-ms-input-placeholder{/* IE 10+ */\n  color:red;\n  }\n\ninput:-moz-placeholder{/* Firefox 18- */\n    color:red;\n  }\n"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contact\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"contact._id\">Contact Details</h2>\n    <h2 *ngIf=\"!contact._id\">New Contact</h2>\n  </div>\n</div>\n<div *ngIf=\"contact\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"contact-name\">Name</label>\n      <input class=\"form-control\" name=\"contact-name\" [(ngModel)]=\"contact.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-email\">Email</label>\n      <input class=\"form-control\" name=\"contact-email\" [(ngModel)]=\"contact.email\" placeholder=\"support@mlab.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-phone-mobile\">Mobile</label>\n      <input class=\"form-control\" name=\"contact-phone-mobile\" [(ngModel)]=\"contact.phone.mobile\" placeholder=\"1234567890\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-phone-work\">Work</label>\n      <input class=\"form-control\" name=\"contact-phone-work\" [(ngModel)]=\"contact.phone.work\" placeholder=\"0123456789\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">Address</label>\n      <input class=\"form-control\" name=\"contact-address\" [(ngModel)]=\"contact.address\" placeholder=\"123 Dreamer Lane\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">City</label>\n      <input class=\"form-control\" name=\"contact-city\" [(ngModel)]=\"contact.city\" placeholder=\"City\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">State</label>\n      <input class=\"form-control\" name=\"contact-state\" [(ngModel)]=\"contact.state\" placeholder=\"State\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">Zipcode</label>\n      <input class=\"form-control\" name=\"contact-zipcode\" [(ngModel)]=\"contact.zipcode\" placeholder=\"111111\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!contact._id\" (click)=\"createContact(contact)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"contact._id\" (click)=\"updateContact(contact)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"contact._id\" (click)=\"deleteContact(contact._id)\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__("./src/app/contacts/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contacts/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailsComponent = (function () {
    function ContactDetailsComponent(contactService) {
        this.contactService = contactService;
    }
    ContactDetailsComponent.prototype.createContact = function (contact) {
        var _this = this;
        this.contactService.createContact(contact).then(function (newContact) {
            _this.createHandler(newContact);
        });
    };
    ContactDetailsComponent.prototype.updateContact = function (contact) {
        var _this = this;
        this.contactService.updateContact(contact).then(function (updatedContact) {
            _this.updateHandler(updatedContact);
        });
    };
    ContactDetailsComponent.prototype.deleteContact = function (contactId) {
        var _this = this;
        this.contactService.deleteContact(contactId).then(function (deletedContactId) {
            _this.deleteHandler(deletedContactId);
        });
    };
    return ContactDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactDetailsComponent.prototype, "contact", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContactDetailsComponent.prototype, "createHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContactDetailsComponent.prototype, "updateHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContactDetailsComponent.prototype, "deleteHandler", void 0);
ContactDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'contact-details',
        template: __webpack_require__("./src/app/contacts/contact-details/contact-details.component.html"),
        styles: [__webpack_require__("./src/app/contacts/contact-details/contact-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]) === "function" && _b || Object])
], ContactDetailsComponent);

var _a, _b;
//# sourceMappingURL=contact-details.component.js.map

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item{\n  background-color: #cec3af;\n  color: red;\n}\n\n.list-group-item.active{\n  border: 3px solid #f0ad4e;\n  background-color: #1b1408;\n}\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Contacts</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let contact of contacts\"\n        (click)=\"selectContact(contact)\"\n        [class.active]=\"contact === selectedContact\">\n        {{contact.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewContact()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <contact-details\n      [contact]=\"selectedContact\"\n      [createHandler]=\"addContact\"\n      [updateHandler]=\"updateContact\"\n      [deleteHandler]=\"deleteContact\">\n    </contact-details>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("./src/app/contacts/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactListComponent = (function () {
    function ContactListComponent(contactService) {
        var _this = this;
        this.contactService = contactService;
        this.getIndexOfContact = function (contactId) {
            return _this.contacts.findIndex(function (contact) {
                return contact._id === contactId;
            });
        };
        this.deleteContact = function (contactId) {
            var idx = _this.getIndexOfContact(contactId);
            if (idx !== -1) {
                _this.contacts.splice(idx, 1);
                _this.selectContact(null);
            }
            return _this.contacts;
        };
        this.addContact = function (contact) {
            _this.contacts.push(contact);
            _this.selectContact(contact);
            return _this.contacts;
        };
        this.updateContact = function (contact) {
            var idx = _this.getIndexOfContact(contact._id);
            if (idx !== -1) {
                _this.contacts[idx] = contact;
                _this.selectContact(contact);
            }
            return _this.contacts;
        };
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService
            .getContacts()
            .then(function (contacts) {
            _this.contacts = contacts.map(function (contact) {
                if (!contact.phone) {
                    contact.phone = {
                        mobile: '',
                        work: ''
                    };
                }
                return contact;
            });
        });
    };
    ContactListComponent.prototype.selectContact = function (contact) {
        this.selectedContact = contact;
    };
    ContactListComponent.prototype.createNewContact = function () {
        var contact = {
            name: '',
            email: '',
            phone: {
                work: '',
                mobile: ''
            },
            address: '',
            city: '',
            state: '',
            zipcode: ''
        };
        // By default, a newly-created contact will have the selected state.
        this.selectContact(contact);
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'contact-list',
        template: __webpack_require__("./src/app/contacts/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("./src/app/contacts/contact-list/contact-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]]
    })
    // @Injectable()
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === "function" && _a || Object])
], ContactListComponent);

var _a;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "./src/app/contacts/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.contactsUrl = '/api/contacts';
    }
    // get("/api/contacts")
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/contacts")
    ContactService.prototype.createContact = function (newContact) {
        return this.http.post(this.contactsUrl, newContact)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/contacts/:id") endpoint not used by Angular app
    // delete("/api/contacts/:id")
    ContactService.prototype.deleteContact = function (delContactId) {
        return this.http.delete(this.contactsUrl + '/' + delContactId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/contacts/:id")
    ContactService.prototype.updateContact = function (putContact) {
        var putUrl = this.contactsUrl + '/' + putContact._id;
        return this.http.put(putUrl, putContact)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ "./src/app/contacts/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, _authService) {
        this.router = router;
        this._authService = _authService;
    }
    AuthGuard.prototype.canActivate = function () {
        var isAuth = this._authService.isAuthenticated();
        if (isAuth)
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n\nh6{\n  color:beige;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <img src=\"../../assets/peter-gabas-1700w.jpg\"/>\n  <h6>Photo by Peter Gabas on Unsplash</h6>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth, meta, title) {
        this.auth = auth;
        title.setTitle('Auth0 example');
        meta.addTags([
            { name: 'twitter:card', content: 'by Peter Gabas' },
            { name: 'twitter:site', content: '@firebuggirl' }
            // ...
        ]);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"_authService.isAuthenticated() ; else nologin\">\n  You are logged in! <a (click)=\"_authService.logout()\" class=\"btn btn-warning\">Log Out</a>, Go to <a href=\"/user\" class=\"btn btn-info\">User Management</a>\n</h4>\n<ng-template #nologin>\n<h4>\n  You are not logged in! Please <a (click)=\"_authService.login()\" class=\"btn btn-success\">Log In</a> to continue.\n</h4>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_authService) {
        this._authService = _authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n\n.userP{\n\n  background-color: beige;\n  color:red;\n  padding: 15px;\n  border: 3px dashed #ad7a44;\n  margin: 30px 0px;\n\n  width: 90vw;\n\n}\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper\">\n<div @explainerAnim>\n   <div class=\"col userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n\n<div @explainerAnim2>\n   <div class=\"colOdd userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n\n<div @explainerAnim>\n   <div class=\"col userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n\n<div @explainerAnim2>\n   <div class=\"colOdd userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent() {
        this.isHere = false;
    }
    UserComponent.prototype.onGoClick = function () {
        this.signal = 'go';
    };
    UserComponent.prototype.onStopClick = function () {
        this.signal = 'stop';
    };
    UserComponent.prototype.onToggleClick = function () {
        this.isHere = !this.isHere;
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/user/user.component.html"),
        styles: [__webpack_require__("./src/app/user/user.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('explainerAnim', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.col', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-40px)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.col', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* stagger */])('500ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms 1.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
                    ])),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.col', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])('*'))
                    ])
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('explainerAnim2', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.colOdd', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(40px)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.colOdd', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* stagger */])('500ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms 1.2s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
                    ])),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.colOdd', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])('*'))
                    ])
                ])
            ])
        ]
        //   animations:[
        //          trigger('signal', [
        //              state('void', style({
        //                  'transform':'translateY(-100%)'
        //              })),
        //              state('go', style({
        //                  'background-color':'green',
        //                  'height':'100px'
        //              })),
        //              state('stop', style({
        //                  'background-color':'red',
        //                  'height':'50px'
        //              })),
        //              transition('void => *', animate(8000, keyframes([
        //                  style({'transform':'scale(0)'}),
        //                  style({'transform':'scale(.1)'}),
        //                  style({'transform':'scale(.9)'}),
        //                  style({'transform':'scale(1)'})
        //              ]))),
        //              transition('* => *', animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
        //          ])
        //      ],
        //   styles:[`
        //   .traffic-light{
        //     width: 100px;
        //     height: 100px;
        //     background-color: black;
        //   }
        //   `],
        //   template: `
        // <div
        //   [@signal]="signal"
        //   class="traffic-light"
        //   *ngIf="isHere"
        //   >
        //
        // </div>
        // <button (click)="onGoClick()">Go</button>
        // <button (click)="onStopClick()">Stop</button>
        // <hr>
        // <button (click)="onToggleClick()">Toggle</button>`
        //templateUrl: './user.component.html',
        //styleUrls: ['./user.component.css']
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
//require('dotenv').config({ path: '../.env' });
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map