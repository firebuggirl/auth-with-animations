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
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var _contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-create/contact-create.component */ "./src/app/contact-create/contact-create.component.ts");
/* harmony import */ var _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-edit/contact-edit.component */ "./src/app/contact-edit/contact-edit.component.ts");
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
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'contact-details/:id',
        component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'contact-create',
        component: _contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_8__["ContactCreateComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'contact-edit/:id',
        component: _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_9__["ContactEditComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
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
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact-create/contact-create.component */ "./src/app/contact-create/contact-create.component.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-edit/contact-edit.component */ "./src/app/contact-edit/contact-edit.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
            _contact_create_contact_create_component__WEBPACK_IMPORTED_MODULE_16__["ContactCreateComponent"],
            _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__["ContactDetailComponent"],
            _contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_18__["ContactEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"].forRoot()
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
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"]],
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
    //callbackURL: 'http://localhost:7777'
    callbackURL: 'https://auth-example-with-anim.herokuapp.com'
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

/***/ "./src/app/contact-create/contact-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contact-create/contact-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"saveContact()\">\n          <h1 class=\"form-title\">Add New Contact</h1>\n        <div class=\"form-group \">\n          <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n          <div>\n            <input required name=\"name\" id=\"title\" [(ngModel)]=\"contact.name\" type=\"text\" class=\"input\" placeholder=\"Name\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"email\" class=\"col-2 col-form-label\">Email</label>\n          <div>\n            <input  required name=\"email\" id=\"email\" [(ngModel)]=\"contact.email\" type=\"text\" class=\"input\" placeholder=\"support@mlab.com\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"phone\" class=\"col-2 col-form-label\">Phone</label>\n          <div>\n            <input  required name=\"phone\" id=\"phone\" [(ngModel)]=\"contact.phone\" type=\"text\" class=\"input\" placeholder=\"1234567890\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"address\" class=\"col-2 col-form-label\">Address</label>\n          <div>\n            <input  required name=\"address\" id=\"address\" [(ngModel)]=\"contact.address\" type=\"text\" class=\"input\" placeholder=\"123 Tumbleweed Dr.\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"city\" class=\"col-2 col-form-label\">City</label>\n          <div>\n            <input  required name=\"city\" id=\"city\" [(ngModel)]=\"contact.city\" type=\"text\" class=\"input\" placeholder=\"Desert Springs\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"state\" class=\"col-2 col-form-label\">State</label>\n          <div>\n            <input  required name=\"state\" id=\"state\" [(ngModel)]=\"contact.state\" type=\"text\" class=\"input\" placeholder=\"CA\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label for=\"zipcode\" class=\"col-2 col-form-label\">Zipcode</label>\n          <div>\n            <input  required name=\"zipcode\" id=\"zipcode\" [(ngModel)]=\"contact.zipcode\" type=\"text\" class=\"input\" placeholder=\"90011\">\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <div class=\"control\">\n            <button class=\"button back\" routerLink=\"/contacts\"><i class=\"fas fa-arrow-left\"></i>Back</button>\n            <button class=\"button create\" type=\"submit\" [disabled]=\"!contactForm.valid\">Create</button>\n          </div>\n        </div>\n\n      </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact-create/contact-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-create/contact-create.component.ts ***!
  \************************************************************/
/*! exports provided: ContactCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCreateComponent", function() { return ContactCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ContactCreateComponent = class ContactCreateComponent {
    constructor(router, contactService) {
        this.router = router;
        this.contactService = contactService;
        this.contact = {};
    }
    saveContact() {
        this.contactService.insertContact(this.contact)
            .subscribe((res) => { this.router.navigate(['/contacts']); }, (err) => console.log(err));
    }
};
ContactCreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact-create',
        template: __webpack_require__(/*! ./contact-create.component.html */ "./src/app/contact-create/contact-create.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
], ContactCreateComponent);



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactDetail\">\n  <section >\n    <div >\n      <div class=\"detail-container\">\n        <h1 class=\"title\">{{ contact?.name }}</h1>\n        <h2 class=\"subtitle\">Email {{ contact?.email }}</h2>\n        <h2 class=\"subtitle\">Phone {{ contact?.phone }}</h2>\n        <h2 class=\"subtitle\">Address {{ contact?.address }}</h2>\n        <h2 class=\"subtitle\">City {{ contact?.city }}</h2>\n        <h2 class=\"subtitle\">State {{ contact?.state }}</h2>\n        <h2 class=\"subtitle\">Zipcode {{ contact?.zipcode }}</h2>\n        <!-- <h2 class=\"subtitle\">work phone {{ contact?.phone.work }}</h2>\n        <h2 class=\"subtitle\">mobile phone {{ contact?.phone.mobile }}</h2> -->\n      </div>\n    </div>\n    <div class=\"btn-column\">\n      <div class=\"column\">\n        <button class=\"btn btn-danger btn-lg btn-detail\" routerLink=\"/contacts\">Back</button>\n        <button *ngIf=\"contact\" class=\"btn btn-warning btn-lg btn-detail\" [routerLink]=\"['/contact-edit', contact?._id]\">Edit</button>\n        <button *ngIf=\"!contact\"  class=\"btn btn-warning btn-lg btn-detail\">Edit</button>\n        <button class=\"btn btn-danger btn-lg btn-detail\" (click)=\"deleteContact(contact?._id)\">Delete</button>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ContactDetailComponent = class ContactDetailComponent {
    constructor(router, route, contactService) {
        this.router = router;
        this.route = route;
        this.contactService = contactService;
    }
    ngOnInit() {
        this.getContactDetails(this.route.snapshot.params['id']);
    }
    getContactDetails(id) {
        this.contactService.getContact(id)
            .subscribe((data) => this.contact = data);
    }
    deleteContact(id) {
        this.contactService.deleteContact(id)
            .subscribe((res) => { this.router.navigate(['/contacts']); }, (err) => console.log(err));
    }
};
ContactDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact-detail',
        template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/contact-detail/contact-detail.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
], ContactDetailComponent);



/***/ }),

/***/ "./src/app/contact-edit/Contact-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-edit/Contact-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactEdit\">\n  <h1 class=\"form-title\">Update Contact</h1>\n  <div >\n    <div>\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"updateContact(contact._id)\">\n        <div class=\"field\">\n          <div class=\"control\">\n            <label for=\"name\">Name</label>\n            <input *ngIf=\"contact\" required name=\"name\" id=\"name\" [(ngModel)]=\"contact.name\" type=\"text\" class=\"input\">\n            <input *ngIf=\"!contact\" required name=\"name\" id=\"name\" type=\"text\" class=\"input\">\n          </div>\n        </div>\n        <div class=\"field\">\n          <div class=\"control\">\n            <label for=\"email\">Email</label>\n            <input *ngIf=\"contact\" required name=\"email\" id=\"email\" [(ngModel)]=\"contact.email\" type=\"text\" class=\"input\">\n            <input *ngIf=\"!contact\" required name=\"email\" id=\"email\" type=\"text\" class=\"input\">\n          </div>\n        </div>\n        <div class=\"field\">\n          <div class=\"control\">\n            <label for=\"phone\">Phone</label>\n            <input *ngIf=\"contact\" required name=\"phone\" id=\"phone\" [(ngModel)]=\"contact.phone\" type=\"text\" class=\"input\">\n            <input *ngIf=\"!contact\" required name=\"phone\" id=\"phone\" type=\"text\" class=\"input\">\n          </div>\n        </div>\n       <div class=\"control\">\n          <div class=\"field\">\n            <label for=\"address\">Address</label>\n            <input *ngIf=\"contact\" required name=\"address\" id=\"address\" [(ngModel)]=\"contact.address\" type=\"text\" class=\"input\">\n            <input *ngIf=\"!contact\" required name=\"address\" id=\"address\" type=\"text\" class=\"input\">\n          </div>\n       </div>\n      <div class=\"control\">\n          <div class=\"field\">\n            <label for=\"city\">City</label>\n            <input *ngIf=\"contact\" required name=\"city\" id=\"city\" [(ngModel)]=\"contact.city\" type=\"text\" class=\"input\">\n            <input *ngIf=\"!contact\" required name=\"city\" id=\"city\" type=\"text\" class=\"input\">\n          </div>\n      </div>\n      <div class=\"control\">\n          <div class=\"field\">\n            <label for=\"state\">State</label>\n            <input *ngIf=\"contact\" required name=\"state\" id=\"state\" [(ngModel)]=\"contact.state\" type=\"text\" class=\"input\">\n            <input *ngIf=\"!contact\" required name=\"state\" id=\"state\" type=\"text\" class=\"input\">\n        </div>\n      </div>\n      <div class=\"control\">\n            <div class=\"field\">\n              <label for=\"zipcode\">Zipcode</label>\n              <input *ngIf=\"contact\" required name=\"zipcode\" id=\"zipcode\" [(ngModel)]=\"contact.zipcode\" type=\"text\" class=\"input\">\n              <input *ngIf=\"!contact\" required name=\"zipcode\" id=\"zipcode\" type=\"text\" class=\"input\">\n           </div>\n      </div>\n      <div class=\"btn-column\">\n          <div class=\"control\">\n            <button class=\"btn btn-danger btn-edit\" routerLink=\"/contacts\"><i class=\"fas fa-arrow-left\"></i>Back</button>\n            <button class=\"btn btn-warning\" type=\"submit\" [disabled]=\"!contactForm.valid\">Update</button>\n          </div>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-edit/contact-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-edit/contact-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ContactEditComponent = class ContactEditComponent {
    constructor(router, route, contactService) {
        this.router = router;
        this.route = route;
        this.contactService = contactService;
    }
    ngOnInit() {
        this.getContactDetails(this.route.snapshot.params['id']);
    }
    getContactDetails(id) {
        this.contactService.getContact(id)
            .subscribe((data) => this.contact = data);
    }
    updateContact(id) {
        this.contactService.updateContact(id, this.contact)
            .subscribe((res) => this.router.navigate(['/contacts']), (err) => console.log(err));
    }
};
ContactEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-Contact-edit',
        template: __webpack_require__(/*! ./Contact-edit.component.html */ "./src/app/contact-edit/Contact-edit.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
], ContactEditComponent);



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
    }
    // GET ALL ContactS
    getAllContacts() {
        return this.http.get('api/contact');
    }
    // GET A Contact
    getContact(id) {
        return this.http.get(`api/contact/${id}`);
    }
    // SAVE A Contact
    insertContact(contact) {
        return this.http.post('api/contact', contact);
    }
    // UPDATE A Contact
    updateContact(id, contact) {
        return this.http.put(`api/contact/${id}`, contact);
    }
    // DELETE A Contact
    deleteContact(id) {
        return this.http.delete(`api/Contact/${id}`);
    }
};
ContactService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ContactService);



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactlist\" >\n  <h1 class=\"title\">Contact List\n    <a [routerLink]=\"['/contact-create']\" class=\"button is-link is-outlined\"><i class=\"fas fa-plus\"></i>Add</a>\n  </h1>\n  <table class=\"table is-striped is-hoverable is-fullwidth\" >\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Address</th>\n        <th>City</th>\n        <th>State</th>\n        <th>Zipcode</th>\n        <!-- <th>Work</th>\n        <th>Mobile</th> -->\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts\">\n        <td><a class=\"button is-text\" [routerLink]=\"['/contact-details', contact._id]\">{{ contact.name }}</a></td>\n        <td>{{ contact.email }}</td>\n        <td>{{ contact.phone }}</td>\n        <td>{{ contact.address }}</td>\n        <td>{{ contact.city }}</td>\n        <td>{{ contact.state }}</td>\n        <td>{{ contact.zipcode }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ContactComponent = class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.contactService.getAllContacts()
            .subscribe((data) => this.contacts = data);
    }
};
ContactComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
], ContactComponent);



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