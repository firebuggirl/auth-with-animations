(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: ROUTES, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    // { path: '',
    //   redirectTo: 'home',
    //   pathMatch: 'full'
    // },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__["ContactListComponent"]
        //canActivate: [AuthGuard]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class='navbar navbar-inverse'>\n      <div class='container-fluid'style=\"padding-left: 0px; padding-right: 0px;\">\n          <ul class='nav navbar-nav'>\n              <li><a routerLink=\"/\">Home</a></li>\n              <li><a [routerLink]=\"['user']\">Users</a></li>\n              <li><a [routerLink]=\"['contacts']\">Contacts</a></li>\n              <li><h4 *ngIf=\"auth.isAuthenticated() ; else nologin\">\n                <a (click)=\"auth.logout()\" class=\"btn btn-warning\">Log Out</a>\n              </h4>\n              <ng-template #nologin>\n              <h4>\n               <a (click)=\"auth.login()\" class=\"btn btn-success\">Log In</a>\n              </h4>\n              </ng-template></li>\n          </ul>\n      </div>\n  </nav>\n  <div class='container'>\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Meta, Title } from "@angular/platform-browser";
let AppComponent = class AppComponent {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
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
    ngOnInit() {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.log('👋 Development!');
        }
        else {
            console.log('💪 Production!');
        }
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _contacts_contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts/contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';











//import { JwtModule } from '@auth0/angular-jwt';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
            _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_15__["ContactDetailsComponent"],
            _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__["ContactListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
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
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _contacts_contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-variables */ "./src/app/auth/auth0-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/src/index.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //note: this file is hidden via .gitignore, cd into directory to view


//import { JwtHelperService } from '@auth0/angular-jwt';
window.global = window; //need this to avoid this error in Angular 6:
// Uncaught ReferenceError: global is not defined
let AuthService = class AuthService {
    //constructor(public router: Router, public jwtHelper: JwtHelperService) {}
    constructor(router) {
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
            clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].clientID,
            domain: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain,
            responseType: 'token id_token',
            audience: `https://${_auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].domain}/userinfo`,
            redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_1__["AUTH_CONFIG"].callbackURL,
            scope: 'openid'
        });
    }
    login() {
        this.auth0.authorize();
    }
    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/home']);
            }
            else if (err) {
                this.router.navigate(['/home']);
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }
    setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }
    logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }
    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
        // const token = localStorage.getItem('token');
        // // Check whether the token is expired and return
        // // true or false
        // return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/auth/auth0-variables.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/auth0-variables.ts ***!
  \*****************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
//import { environment } from '../../environments/environment';
const AUTH_CONFIG = {
    clientID: 'nAG2jFnP2fqoF6lWtNxIVSYu2tEGC4vW',
    domain: 'juliettet.auth0.com',
    callbackURL: 'http://localhost:7777'
    //callbackURL:'https://auth-example-with-anim.herokuapp.com'
};


/***/ }),

/***/ "./src/app/callback/callback.component.css":
/*!*************************************************!*\
  !*** ./src/app/callback/callback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CallbackComponent = class CallbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
CallbackComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__(/*! ./callback.component.html */ "./src/app/callback/callback.component.html"),
        styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);



/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n  background-color: #cec3af;\n\n}\n\n.form-control:focus{\n  border: 3px solid #f0ad4e;\n  background-color: #1b1408;\n}\n\n.form-control[type=text]{\n  color:red;\n}\n\ninput::-webkit-input-placeholder{/* Chrome/Opera/Safari */\n  color:red;\n}\n\ninput::-moz-placeholder{/* Firefox 19+ */\n  color:red;\n}\n\ninput:-ms-input-placeholder{/* IE 10+ */\n  color:red;\n  }\n\ninput:-moz-placeholder{/* Firefox 18- */\n    color:red;\n  }\n"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contact\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"contact._id\">Contact Details</h2>\n    <h2 *ngIf=\"!contact._id\">New Contact</h2>\n  </div>\n</div>\n<div *ngIf=\"contact\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"contact-name\">Name</label>\n      <input class=\"form-control\" name=\"contact-name\" [(ngModel)]=\"contact.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-email\">Email</label>\n      <input class=\"form-control\" name=\"contact-email\" [(ngModel)]=\"contact.email\" placeholder=\"support@mlab.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-phone-mobile\">Mobile</label>\n      <input class=\"form-control\" name=\"contact-phone-mobile\" [(ngModel)]=\"contact.phone.mobile\" placeholder=\"1234567890\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-phone-work\">Work</label>\n      <input class=\"form-control\" name=\"contact-phone-work\" [(ngModel)]=\"contact.phone.work\" placeholder=\"0123456789\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">Address</label>\n      <input class=\"form-control\" name=\"contact-address\" [(ngModel)]=\"contact.address\" placeholder=\"123 Dreamer Lane\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">City</label>\n      <input class=\"form-control\" name=\"contact-city\" [(ngModel)]=\"contact.city\" placeholder=\"City\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">State</label>\n      <input class=\"form-control\" name=\"contact-state\" [(ngModel)]=\"contact.state\" placeholder=\"State\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contact-address\">Zipcode</label>\n      <input class=\"form-control\" name=\"contact-zipcode\" [(ngModel)]=\"contact.zipcode\" placeholder=\"111111\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!contact._id\" (click)=\"createContact(contact)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"contact._id\" (click)=\"updateContact(contact._id)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"contact._id\" (click)=\"deleteContact(contact._id)\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact */ "./src/app/contacts/contact.ts");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import 'rxjs/add/operator/toPromise';
let ContactDetailsComponent = class ContactDetailsComponent {
    constructor(router, route, contactService, location) {
        this.router = router;
        this.route = route;
        this.contactService = contactService;
        this.location = location;
        this.contactsUrl = '/api/contacts';
        this.getIndexOfContact = (contactId) => {
            return this.contacts.findIndex((contact) => {
                return contact._id === contactId;
            });
        };
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        if (id !== '0') {
            //this.operationText = 'Update';
            this.getContacts();
        }
        //this.getContact();
    }
    getContacts() {
        this.contactService.getContacts()
            .subscribe(contacts => this.contacts = contacts);
    }
    createContact(contact) {
        this.contactService.addContact(contact).subscribe((newContact) => {
            this.createHandler(newContact);
        });
    }
    goBack() {
        this.location.back();
    }
    updateContact(id) {
        this.contactService.updateContact(id).subscribe((updatedContact) => {
            this.updateHandler(updatedContact);
        });
    }
    deleteContact(contactId) {
        this.contactService.deleteContact(contactId).subscribe((deletedContactId) => {
            this.deleteHandler(deletedContactId);
        });
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ContactDetailsComponent.prototype, "contacts", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _contact__WEBPACK_IMPORTED_MODULE_1__["Contact"])
], ContactDetailsComponent.prototype, "selectedContact", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _contact__WEBPACK_IMPORTED_MODULE_1__["Contact"])
], ContactDetailsComponent.prototype, "contact", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Function)
], ContactDetailsComponent.prototype, "createHandler", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Function)
], ContactDetailsComponent.prototype, "updateHandler", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Function)
], ContactDetailsComponent.prototype, "deleteHandler", void 0);
ContactDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'contact-details',
        template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contacts/contact-details/contact-details.component.html"),
        styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contacts/contact-details/contact-details.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], ContactDetailsComponent);



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\n  background-color: #cec3af;\n  color: red;\n}\n\n.list-group-item.active{\n  border: 3px solid #f0ad4e;\n  background-color: #1b1408;\n}\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Contacts</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let contact of contacts\"\n        (click)=\"selectContact(contact)\"\n        [class.active]=\"contact === selectedContact\">\n        {{contact.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewContact()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <contact-details\n      [contact]=\"selectedContact\"\n      [createHandler]=\"addContact\"\n      [updateHandler]=\"updateContact\"\n      [deleteHandler]=\"deleteContact\">\n   </contact-details>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Contact, ContactResponse } from '../shared/interfaces';


window.global = window;
let ContactListComponent = 
// @Injectable()
class ContactListComponent {
    // errorMessage: string;
    constructor(//private router: Router,
    //private route: ActivatedRoute,
    contactService, location) {
        this.contactService = contactService;
        this.location = location;
        this.contactsUrl = '/api/contacts';
        this.getIndexOfContact = (contactId) => {
            return this.contacts.findIndex((contact) => {
                return contact._id === contactId;
            });
        };
        this.deleteContact = (contactId) => {
            var idx = this.getIndexOfContact(contactId);
            if (idx !== -1) {
                this.contacts.splice(idx, 1);
                this.selectContact(null);
            }
            return this.contacts;
        };
        this.addContact = (contact) => {
            this.contacts.push(contact);
            this.selectContact(contact);
            return this.contacts;
        };
    }
    ngOnInit() {
        this.getContacts();
    }
    //
    getContacts() {
        this.contactService.getContacts()
            .subscribe(contacts => this.contacts = contacts);
    }
    selectContact(contact) {
        this.selectedContact = contact;
    }
    createNewContact() {
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
    }
    // updateContact = (contact: Contact) => {
    //   var idx = this.getIndexOfContact(this.contacts);
    //   if (idx !== -1) {
    //     this.contacts[idx] = contact;
    //     this.selectContact(contact);
    //   }
    //   return this.contacts;
    // }
    goBack() {
        this.location.back();
    }
    updateContact() {
        this.contactService.updateContact(this.contact)
            .subscribe(() => this.goBack());
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ContactListComponent.prototype, "contact", void 0);
ContactListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'contact-list',
        template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contacts/contact-list/contact-list.component.html"),
        styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")],
        providers: [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]]
    })
    // @Injectable()
    ,
    __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], ContactListComponent);



/***/ }),

/***/ "./src/app/contacts/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/contacts/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let ContactService = class ContactService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.contactsUrl = 'api/contacts'; // URL to web api
        this.contactUrl = 'api/contacts/:id;';
    }
    /** GET contacts from the server */
    getContacts() {
        return this.http.get(this.contactsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(contacts => this.log(`fetched contacts`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getContacts', [])));
    }
    /** GET contact by id. Return `undefined` when id not found */
    getContactNo404(id) {
        const url = `${this.contactUrl}/?id=${id}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(contacts => contacts[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(c => {
            const outcome = c ? `fetched` : `did not find`;
            this.log(`${outcome} contact id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getContact id=${id}`)));
    }
    /** GET contact by id. Will 404 if id not found */
    getContact(id) {
        const url = `${this.contactUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched contact id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getContact id=${id}`)));
    }
    addContact(contact) {
        return this.http.post(this.contactsUrl, contact, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((contact) => this.log(`added contact`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addContact')));
    }
    updateContact(contact) {
        return this.http.put(this.contactsUrl + '/' + contact._id, contact).pipe(//http://localhost:7777/api/contacts/undefined
        //return this.http.put(this.contactsUrl, contact._id, httpOptions).pipe(
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`updated contact id=${contact._id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateContact')));
    }
    deleteContact(contact) {
        //const id = contact._id;
        const url = `${this.contactsUrl}`;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted contact id=${contact}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteContact')));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    /** Log a contactService message with the MessageService */
    log(message) {
        this.messageService.add('ContactService: ' + message);
    }
};
ContactService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
], ContactService);



/***/ }),

/***/ "./src/app/contacts/contact.ts":
/*!*************************************!*\
  !*** ./src/app/contacts/contact.ts ***!
  \*************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
}


/***/ }),

/***/ "./src/app/contacts/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], MessageService);



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(router, _authService) {
        this.router = router;
        this._authService = _authService;
    }
    canActivate() {
        const isAuth = this._authService.isAuthenticated();
        if (isAuth)
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n\nh6{\n  color:beige;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <img src=\"../../assets/peter-gabas-1700w.jpg\"/>\n  <h6>Photo by Peter Gabas on Unsplash</h6>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomeComponent = class HomeComponent {
    constructor(auth, meta, title) {
        this.auth = auth;
        title.setTitle('Auth0 example');
        meta.addTags([
            { name: 'twitter:card', content: 'by Peter Gabas' },
            { name: 'twitter:site', content: '@firebuggirl' }
            // ...
        ]);
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"_authService.isAuthenticated() ; else nologin\">\n  You are logged in! <a (click)=\"_authService.logout()\" class=\"btn btn-warning\">Log Out</a>, Go to <a href=\"/user\" class=\"btn btn-info\">User Management</a>\n</h4>\n<ng-template #nologin>\n<h4>\n  You are not logged in! Please <a (click)=\"_authService.login()\" class=\"btn btn-success\">Log In</a> to continue.\n</h4>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LoginComponent = class LoginComponent {
    constructor(_authService) {
        this._authService = _authService;
    }
    ngOnInit() {
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\n\n.userP{\n\n  background-color: beige;\n  color:red;\n  padding: 15px;\n  border: 3px dashed #ad7a44;\n  margin: 30px 0px;\n\n  width: 90vw;\n\n}\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper\">\n<div @explainerAnim>\n   <div class=\"col userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n\n<div @explainerAnim2>\n   <div class=\"colOdd userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n\n<div @explainerAnim>\n   <div class=\"col userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n\n<div @explainerAnim2>\n   <div class=\"colOdd userP\">\n     you probably haven't heard of them roof party chia sartorial drinking vinegar Vice brunch asymmetrical gluten-free High Life fashion axe cliche Cosby sweater VHS McSweeney's occupy fixie hoodie ugh selvage Marfa Banksy fap quinoa post-ironic swag Etsy meh food truck hashtag ethical next level selfies kitsch narwhal bicycle rights trust fund salvia Pinterest meggings sustainable irony bitters squid flexitarian 3 wolf moon plaid actually heirloom 90's Tumblr lo-fi chillwave banh mi vinyl beard Pitchfork try-hard deep v pour-over authentic Blue Bottle pork belly +1 wayfarers keffiyeh aesthetic scenester skateboard Wes Anderson cred vegan synth Schlitz twee four loko Godard keytar pug banjo cray paleo retro butcher normcore stumptown fanny pack blog polaroid photo booth Williamsburg mumblecore messenger bag direct trade lomo artisan iPhone tote bag raw denim distillery cardigan Austin fingerstache small batch seitan Kickstarter Bushwick tofu semiotics pickled Carles umami tousled Odd Future kogi Echo Park art party church-key 8-bit master cleanse DIY mixtape chambray PBR XOXO yr crucifix disrupt pop-up locavore single-origin coffee forage viral organic slow-carb Portland American Apparel tattooed sriracha kale chips Truffaut ennui wolf cornhole readymade gentrify flannel dreamcatcher shabby chic craft beer Tonx jean shorts before they sold out Intelligentsia literally farm-to-table Shoreditch Neutra typewriter hella Brooklyn whatever street art PBR&B put a bird on it mustache Helvetica leggings gastropub bespoke biodiesel freegan letterpress YOLO Thundercats mlkshk\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UserComponent = class UserComponent {
    constructor() {
        this.isHere = false;
    }
    onGoClick() {
        this.signal = 'go';
    }
    onStopClick() {
        this.signal = 'stop';
    }
    onToggleClick() {
        this.isHere = !this.isHere;
    }
    ngOnInit() {
    }
};
UserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('explainerAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.col', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-40px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.col', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('500ms', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('800ms 1.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                    ])),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.col', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])('*'))
                    ])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('explainerAnim2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.colOdd', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(40px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.colOdd', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('500ms', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('800ms 1.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                    ])),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.colOdd', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])('*'))
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



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
//require('dotenv').config({ path: '../.env' });
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/juliettetworsey/Desktop/auth-example-with-anim/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map