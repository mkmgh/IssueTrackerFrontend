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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<router-outlet></router-outlet>\r\n<ng4-loading-spinner [loadingText]=\"'Please wait...'\"></ng4-loading-spinner>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TrackerProject-Frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tracker_tracker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker/tracker.module */ "./src/app/tracker/tracker.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//for Http service

//for toast message



//import statement to use font awesome library

//for loading spinner




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCountriesPipe"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__["ServerErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _tracker_tracker_module__WEBPACK_IMPORTED_MODULE_3__["TrackerModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _tracker_tracker_module__WEBPACK_IMPORTED_MODULE_3__["TrackerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
                    { path: 'page-not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"] },
                    { path: 'server-error', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__["ServerErrorComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
                ])
            ],
            providers: [_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCountriesPipe"], _app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for using cookies

//Importing the required files for http services.

//import { Observable } from 'rxjs';

var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://api-issuetracker.emayurm.in.net';
        this.baseURL = this.url + "/api/v1";
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        //Method to get country list
        this.getCountryList = function () {
            var response = _this.http.get('../assets/countries.json');
            return response;
        }; //end
        //method to get country code
        this.getCountryCode = function () {
            var response = _this.http.get('../assets/country-code-list.json');
            return response;
        }; //end
        //Method to verify email
        this.verifyEmail = function (data) {
            return _this.http.get(_this.url + "/api/v1/users/" + data + "/verifyUser");
        };
        //Get All Users:
        this.getAllpeople = function (token) {
            return _this.http.get(_this.baseURL + "/users/view/allUsers?authToken=" + token);
        };
        //Method to get All issues
        this.getIssues = function (token) {
            return _this.http.get(_this.url + "/api/v1/issues/allIssues?authToken=" + token);
        };
        //end method
        //Creating a new Issue:
        this.createIssue = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("issueTitle", data.issueTitle)
                .set("reporterId", data.reporterId)
                .set("reporterName", data.reporterName)
                .set("status", data.status)
                .set("description", data.description)
                .set("attachments", data.attachments)
                .set("assignee", data.assignee);
            return _this.http.post(_this.baseURL + "/issues/registerIssue?authToken=" + token, params);
        };
        //Method to get single issue details
        this.getIssue = function (issueId, token) {
            return _this.http.get(_this.url + "/api/v1/issues/" + issueId + "/getIssue?authToken=" + token);
        };
        //end method
        //Method to edit issue title
        this.editIssue = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('issueTitle', data.issueTitle)
                .set('status', data.status)
                .set('description', data.description)
                .set('assignee', data.assignee);
            return _this.http.put(_this.baseURL + "/issues/" + data.issueId + "/editIssue?authToken=" + token, params);
        };
        //add a new comment to issue:
        this.addComment = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("issueId", data.issueId)
                .set("userId", data.userId)
                .set("userName", data.userName)
                .set("comment", data.comment);
            return _this.http.post(_this.baseURL + "/comments/addComment?authToken=" + token, params);
        };
        //Method to get all comments on Issue
        this.getAllCommentOnIssue = function (issueId, token) {
            return _this.http.get(_this.baseURL + "/comments/" + issueId + "/getCommentsOnIssue?authToken=" + token);
        };
    }
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('country', data.country);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    //end method
    AppService.prototype.sendResetLink = function (email) {
        // console.log(this.url+"/api/v1/users/forgotPassword");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email);
        return this.http.post(this.url + "/api/v1/users/forgotPassword", params);
    }; // end of sendResetLink function.
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/resetPassword", params);
    }; //end resetPassword Function
    //end method
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken'));
        return this.http.post(this.baseURL + "/users/logout", params);
    }; // end logout function
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div>\n    <div class=\"row mt-5\">\n      <div class=\"col-12\">\n        <img src=\"../../assets/not_found.jpg\" style=\"width:102vmin;height:52vmin\"\n          class=\"img-fluid d-block mx-auto\">\n      </div>\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n          <div class=\"alert alert-danger\" role=\"alert\">\n              User not available, with given email address\n          </div>\n        <h5 class=\"text-danger\">Create account, \n          <a [routerLink]=\"['/signup']\">Signup</a>\n        </h5>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div>\n    <div class=\"row mt-5\">\n      <div class=\"col-12\">\n        <img src=\"https://i.stack.imgur.com/QQOcg.jpg\" style=\"width:102vmin;height:52vmin\"\n          class=\"img-fluid d-block mx-auto\">\n      </div>\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h5 class=\"text-danger\">Try Again after email verification\n            <a [routerLink]=\"['/login']\">Redirect to Login</a>\n        </h5>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseurl = "http://api-issuetracker.emayurm.in.net";
        //Authentication Section:
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("verify-user", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        this.setUser = function (token) {
            _this.socket.emit("set-user", token);
        };
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("onlineUsers", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        //list create socket service for multi user
        this.createIssue = function (userName) {
            _this.socket.emit("createIssue", userName);
        };
        this.issueAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("createIssue-res", function (data) {
                    observer.next(data);
                    console.log(data);
                });
            });
        };
        //issue title update(edit) respose
        this.updateIssue = function (userName) {
            _this.socket.emit("updateIssue", userName);
        };
        this.issueUpdatedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("updateIssue-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //comments on issue response
        this.addComment = function (userName) {
            _this.socket.emit("addComment", userName);
        };
        this.commentAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("addComment-res", function (data) {
                    observer.next(data);
                });
            });
        };
        /*
        public disconnect = () => {
          return Observable.create((observer) => {
            this.socket.on('disconnect', () => {
              observer.next();
            });//end On method
          });//end observable
      
        }//end disconnect
        */
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", ""); //end Socket
        }; //end disconnectedSocket
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        /**
         * Issue watch functionality
         */
        //Add As Watcher:
        this.addAsWatcher = function (data) {
            _this.socket.emit("watch", data);
        };
        this.responseAlreadyWatcher = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("alreadyWatcher", function (data) {
                    observer.next(data);
                });
            });
        };
        this.save_watch = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("savewatch", function (data) {
                    observer.next(data);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.baseurl);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/sort-by.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/sort-by.pipe.ts ***!
  \*********************************/
/*! exports provided: SortByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByPipe", function() { return SortByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByPipe = /** @class */ (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (value, orderType, field) {
        if (value != undefined) {
            value.sort(function (a, b) {
                var temp1;
                var temp2;
                if (field == "status") {
                    temp1 = a.status;
                    temp2 = b.status;
                }
                else if (field == "issueTitle") {
                    temp1 = a.issueTitle;
                    temp2 = b.issueTitle;
                }
                else if (field == "reporterName") {
                    temp1 = a.reporterName;
                    temp2 = b.reporterName;
                }
                else if (field == "reportedOn") {
                    var date1 = new Date(a.reportedOn);
                    temp1 = date1.getTime();
                    //console.log(temp1)
                    var date2 = new Date(b.reportedOn);
                    temp2 = date2.getTime();
                    //console.log(temp2)
                }
                else {
                }
                if (temp1 == undefined && temp2 == undefined)
                    return 0; //cheching for undefined values.
                if (temp1 == undefined && temp2 != undefined)
                    return orderType ? 1 : -1;
                if (temp1 != undefined && temp2 == undefined)
                    return orderType ? -1 : 1;
                if (temp1 == temp2)
                    return 0; //equality check
                //checking for the lesser or greater value and arranging accordingly.
                return orderType ? (temp1.toString().toLowerCase() > temp2.toString().toLowerCase() ? -1 : 1) : (temp2.toString().toLowerCase() > temp1.toString().toLowerCase() ? -1 : 1);
            });
            return value; //finally returning the sorted array to the view for display.
        }
        else {
        }
    };
    SortByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortBy'
        })
    ], SortByPipe);
    return SortByPipe;
}());



/***/ }),

/***/ "./src/app/sort-countries.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/sort-countries.pipe.ts ***!
  \****************************************/
/*! exports provided: SortCountriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCountriesPipe", function() { return SortCountriesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortCountriesPipe = /** @class */ (function () {
    function SortCountriesPipe() {
    }
    SortCountriesPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        var finalArray = array.sort(function (a, b) {
            var textA = a['value'].toLowerCase();
            var textB = b['value'].toLowerCase();
            return textA < textB ? -1 : (textA > textB) ? 1 : 0;
        });
        return finalArray;
    };
    SortCountriesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortCountries'
        })
    ], SortCountriesPipe);
    return SortCountriesPipe;
}());



/***/ }),

/***/ "./src/app/tracker/dashboard/dashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tracker/dashboard/dashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  table {\r\n    width: 100%;\r\n  }\r\n\r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n\r\n  .header{\r\n    background-color:#db5964;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n  }\r\n\r\n  .navbar{\r\n    cursor: pointer;\r\n  }\r\n\r\n  .user{\r\n    background-color:#4eb9c7;\r\n    color:black;\r\n    padding:5%;\r\n    display:block;\r\n    width:100%;\r\n    font-size:1.2em;\r\n    text-align:center;\r\n    font-family:sans-serif;\r\n  }\r\n\r\n  .fasquare{\r\n    float: center;\r\n    margin-top:3%;\r\n  }\r\n\r\n  .fasquare:hover{\r\n    color:rgb(22, 83, 37);\r\n    cursor:pointer;\r\n  }\r\n\r\n  .aside{\r\n    background:  #f5f5f5;\r\n    overflow:auto;\r\n    margin-top:2%;\r\n  }\r\n\r\n  .aside1{\r\n    overflow:auto;\r\n    margin-top:2%;\r\n  }"

/***/ }),

/***/ "./src/app/tracker/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/tracker/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"col-12 header\">\n        <h1>Issue Tracker Tool</h1>\n    </div>\n    <!--Navigation Bar-->\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n\n                <li class=\"nav-item\">\n                    <b><a class=\"nav-link\" (click)=logout()>Logout</a></b>\n                </li>\n\n            </ul>\n        </div>\n    </nav>  \n\n\n\n\n\n    <!--Modal to register issue-->\n\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <h4 class=\"modal-title w-100 font-weight-bold\">Register Issue</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body mx-3\">\n\n                    <div class=\"md-form mb-5\">\n                      <label data-error=\"wrong\" data-success=\"right\">Issue Title</label>\n                      <input  [(ngModel)]=\"issueTitle\" type=\"Title\" class=\"form-control validate\" required>\n                    </div>\n    \n                    <div class=\"md-form mb-4\">\n                        <label data-error=\"wrong\"  for=\"inputGroupSelect01\" data-success=\"right\">Status</label>\n                        <!--\n                        <input [(ngModel)]=\"status\"  type=\"status\" class=\"form-control validate\">\n                        -->\n                        <select  [(ngModel)]=\"status\" class=\"custom-select\" id=\"inputGroupSelect01\" required>\n                            <option selected>Choose...</option>\n                            <option value=\"backlog\">backlog</option>\n                            <option value=\"in-progress\">in-progress</option>\n                            <option value=\"in-test\">in-test</option>\n                            <option value=\"done\">done</option>\n                        </select>\n\n                    </div>\n\n\n                          \n                    <div class=\"md-form mb-4\">\n                        <label data-error=\"wrong\" data-success=\"right\">description</label>\n                        <!--\n                        <textarea [(ngModel)]=\"description\"  type=\"description\" class=\"form-control validate\"></textarea>\n                        -->\n                        <app-ngx-editor [placeholder]=\"'Enter description here...'\" [spellcheck]=\"true\" [(ngModel)]=\"description\"></app-ngx-editor>\n\n                    </div>\n\n\n                    <div class=\"md-form mb-4\">\n                            <label data-error=\"wrong\"  for=\"inputGroupSelect01\" data-success=\"right\">Assignee</label>\n                            <!--\n                            <input [(ngModel)]=\"status\"  type=\"status\" class=\"form-control validate\">\n                            -->\n                            <select  [(ngModel)]=\"assignee\" class=\"custom-select\" id=\"inputGroupSelect01\" required>\n                                    <option selected>Choose...</option>\n                                    <!--\n                                        <option  *ngFor=\"let user of users1\" value=\"{{user.firstName}} {{user.lastName}}\">\n                                            <p *ngIf=\"user.firstName+' '+user.lastName!=fullName\">{{user.firstName}} {{user.lastName}}</p>\n                                        </option>\n                                    -->    \n\n                                    <option  *ngFor=\"let user of users2\" value=\"{{user.firstName}} {{user.lastName}}\">\n                                        <p>{{user.firstName}} {{user.lastName}}</p>\n                                    </option>\n                            </select>\n    \n                    </div>\n\n\n\n                    <div class=\"md-form mb-4\">\n                            <label data-error=\"wrong\"  for=\"inputGroupSelect01\" data-success=\"right\">Attachments</label>\n                            <input type=\"file\" (change)=\"fileEvent($event)\" name=\"imageUpload\" id=\"imageUpload\"/>\n\n                    </div>\n\n\n\n                    \n                </div>\n                <div class=\"modal-footer d-flex justify-content-center\">\n                    <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"newIssue()\">Create Issue</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n    <!--Modal to show issues repoted by me-->\n\n    <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header text-center\">\n                        <h4 class=\"modal-title w-100 font-weight-bold\">Issues Reported by Me</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n\n\n                    <div>\n\n                        <table class=\"table table-dark\">\n                            <thead>\n                            <tr>\n                                <th scope=\"col\">Status</th>\n                                <th scope=\"col\">Title</th>\n                                <th scope=\"col\">Reporter</th>\n                                <th scope=\"col\">Date</th>\n                            </tr>\n                            </thead>\n                            <tbody *ngFor=\"let issue of reportedIssue;\">\n                            <tr style=\"cursor: pointer;\" routerLink=\"/issueDetails/{{issue.issueId}}\"  data-dismiss=\"modal\">\n                                <td>{{issue.status}}</td>\n                                <td>{{issue.issueTitle}}</td>\n                                <td>{{issue.reporterName}}</td>\n                                <td>{{issue.reportedOn|date}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n        \n                    </div>\n            \n            \n\n\n\n\n\n\n\n                </div>\n            </div>\n    </div>\n\n\n    <!--Modal to show issues related to other users-->\n\n    <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <h4 class=\"modal-title w-100 font-weight-bold\">Other Issues</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n\n\n                <div>\n\n                    <table class=\"table table-dark\">\n                        <thead>\n                        <tr>\n                            <th scope=\"col\">Status</th>\n                            <th scope=\"col\">Title</th>\n                            <th scope=\"col\">Reporter</th>\n                            <th scope=\"col\">Date</th>\n                        </tr>\n                        </thead>\n                        <tbody *ngFor=\"let issue of otherUsersRealatedIssue;\">\n                        <tr style=\"cursor: pointer;\" routerLink=\"/issueDetails/{{issue.issueId}}\"  data-dismiss=\"modal\">\n                            <td>{{issue.status}}</td>\n                            <td>{{issue.issueTitle}}</td>\n                            <td>{{issue.reporterName}}</td>\n                            <td>{{issue.reportedOn|date}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n    \n                </div>\n\n\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-3 aside\">\n          <span class=\"user\" >\n              <b> Welcome! {{fullName}}</b><br>\n              <small style=\"font-weight:bold;\">Issue Tracker Tool</small>\n          </span>\n          <div col-sm-12>\n              \n              <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-success fasquare\">New Issue</button>\n\n                <br><br>\n              <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n                <div class=\"form-group  col-md-8\">\n                  <input type=\"text\" class=\"form-control btn-outline-success\" name=\"filterName\" [(ngModel)]=\"filterName.issueTitle\" placeholder=\"Search by Issue Title\" />\n                </div>\n              </form>\n              \n              <br><br>\n\n              <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"btn btn-danger fasquare\">Repotered by me</button><br>\n\n              <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal2\" class=\"btn btn-danger fasquare\">Other Issues</button>\n\n\n          </div>\n          <hr class=\"lead\">      \n      </div>\n\n      <div class=\"table-responsive col-md-9 aside1\">\n          <div>\n\n                <h2>Issues Assigned to me </h2>\n                <table class=\"table table-dark\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">Status <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('status')\"></i></th>\n                      <th scope=\"col\">Title <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('issueTitle')\"></i></th>\n                      <th scope=\"col\">Reporter <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('reporterName')\"></i></th>\n                      <th scope=\"col\">Date <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('reportedOn')\"></i></th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let issue of assignedIssue | sortBy: sortOrder : field   | filterBy: filterName | paginate: { itemsPerPage: 5, currentPage: p };\">\n                    <tr  style=\"cursor: pointer;\" routerLink=\"/issueDetails/{{issue.issueId}}\">\n                      <td>{{issue.status}}</td>\n                      <td>{{issue.issueTitle}}</td>\n                      <td>{{issue.reporterName}}</td>\n                      <td>{{issue.reportedOn|date:'medium'}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <pagination-controls style=\"float:right\" (pageChange)=\"p = $event\"></pagination-controls>\n\n\n\n          </div>\n\n\n\n\n\n\n      </div>\n\n\n    </div>\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/tracker/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tracker/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//file upload by browse

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(socketService, appService, toastr, router) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.otherUsersRealatedIssue = [];
        this.reportedIssue = [];
        this.assignedIssue = [];
        this.users2 = [];
        this.p = 1;
        this.q = 1;
        //for sorting
        this.sortOrder = false;
        //for filter
        this.filterName = { issueTitle: '' };
        //for selecting files
        this.selectedFiles = [];
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople(_this.token).subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllIssues = function () {
            _this.appService.getIssues(_this.token).subscribe(function (apiResponse) {
                _this.AllIssues = apiResponse.data;
                //sorting issue which are assigned to me
                _this.assignedIssue = [];
                _this.reportedIssue = [];
                _this.otherUsersRealatedIssue = [];
                if (_this.AllIssues != null) {
                    for (var _i = 0, _a = _this.AllIssues; _i < _a.length; _i++) {
                        var iss = _a[_i];
                        if (_this.fullName == iss.assignee) {
                            _this.assignedIssue.push(iss);
                        }
                    }
                    for (var _b = 0, _c = _this.AllIssues; _b < _c.length; _b++) {
                        var iss = _c[_b];
                        if (_this.fullName == iss.reporterName) {
                            _this.reportedIssue.push(iss);
                        }
                    }
                    for (var _d = 0, _e = _this.AllIssues; _d < _e.length; _d++) {
                        var iss = _e[_d];
                        if (_this.fullName != iss.reporterName && _this.fullName != iss.assignee) {
                            _this.otherUsersRealatedIssue.push(iss);
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        };
        //for creating OR registering new issue
        this.newIssue = function () {
            _this.getAllUsers();
            if (!_this.issueTitle) {
                _this.toastr.warning("Issue title is required");
            }
            else if (!_this.status) {
                _this.toastr.warning("Please select status option");
            }
            else {
                var values = {
                    issueTitle: _this.issueTitle,
                    reporterId: _this.userId,
                    reporterName: _this.fullName,
                    status: _this.status,
                    description: _this.description,
                    attachments: _this.data,
                    assignee: _this.assignee
                };
                _this.appService.createIssue(values, _this.token).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.issueDetails = apiResponse.data;
                        _this.newIssueId = apiResponse.data.issueId;
                        _this.newIssueStatus = apiResponse.status;
                        _this.issueTitle = "";
                        _this.status = "";
                        _this.description = "";
                        _this.getAllIssues();
                        _this.socketService.createIssue(_this.fullName);
                        setTimeout(function () {
                            _this.router.navigate(["/issueDetails/" + _this.newIssueId]);
                        }, 1000);
                        _this.getAllIssues();
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.newIssueAddedResponse = function () {
            _this.socketService.issueAddedResponse().subscribe(function (response) {
                _this.getAllIssues();
                _this.toastr.success(response);
            });
        };
        //listening event for edit title
        this.issueUpdatedResponse = function () {
            _this.socketService.issueUpdatedResponse().subscribe(function (response) {
                _this.getAllIssues();
                _this.toastr.success(response);
            });
        };
        //listening event for comment on issue
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.getAllIssues();
                _this.toastr.success(response);
            });
        };
        //Logout:
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('authToken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getAllUsers();
        this.getAllIssues();
        this.newIssueAddedResponse();
        this.issueUpdatedResponse();
        this.commentAddedResponse();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    DashboardComponent.prototype.fileEvent = function (fileInput) {
        var _this = this;
        var AWSService = aws_sdk__WEBPACK_IMPORTED_MODULE_6__;
        var region = 'us-east-1';
        var bucketName = 'issue-bucket';
        var IdentityPoolId = 'us-east-1:52d98cae-8b34-4d73-b9be-4fc95204002d';
        var file = fileInput.target.files[0];
        //Configures the AWS service and initial authorization
        AWSService.config.update({
            region: region,
            credentials: new AWSService.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });
        var aws = function () {
            return new Promise(function (resolve, reject) {
                //adds the S3 service, make sure the api version and bucket are correct
                var s3 = new AWSService.S3({
                    apiVersion: '2006-03-01',
                    params: { Bucket: bucketName }
                });
                //I store this in a variable for retrieval later
                console.log(file);
                s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read' }, function (err, data) {
                    if (err) {
                        console.log(err, 'there was an error uploading your file');
                        reject(err);
                    }
                    else {
                        console.log(data, 'File Uploaded');
                        this.image = data.Location;
                        resolve(data);
                    }
                });
            });
        };
        aws()
            .then(function (response) {
            _this.data = response['Location'];
            console.log(_this.data);
        })
            .catch(console.error);
    };
    //for sorting
    DashboardComponent.prototype.changeOrder = function (field) {
        this.sortOrder = !this.sortOrder;
        this.field = field;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/tracker/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/tracker/dashboard/dashboard.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/tracker/issue-view/issue-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tracker/issue-view/issue-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .header{\r\n    background-color:#db5964;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n  }\r\n  .navbar{\r\n    cursor: pointer;\r\n  }\r\n  .user{\r\n    background-color:#4eb9c7;\r\n    color:black;\r\n    padding:5%;\r\n    display:block;\r\n    width:100%;\r\n    font-size:1.2em;\r\n    text-align:center;\r\n    font-family:sans-serif;\r\n  }\r\n  .description-window{\r\n    margin-top:2%;\r\n  }\r\n  .edit1{\r\n    color: rgb(199, 9, 9);\r\n    float:right;\r\n    font-size:2em;\r\n    cursor:pointer;\r\n    padding-right: 0.2em;\r\n  }\r\n  .edit1:hover{\r\n    color: rgb(92, 7, 7);\r\n    float:right;\r\n    font-size:2em;\r\n    cursor:pointer;\r\n    padding-right: 0.2em;\r\n  }\r\n  .fasquare{\r\n    float: center;\r\n    margin-top:3%;\r\n  }\r\n  .fasquare:hover{\r\n    color:rgb(22, 83, 37);\r\n    cursor:pointer;\r\n  }\r\n  .aside{\r\n    background:  #f5f5f5;\r\n    overflow:auto;\r\n    margin-top:2%;\r\n  }\r\n  .aside1{\r\n    overflow:auto;\r\n    margin-top:2%;\r\n  }\r\n  .comments {\r\n    width: 100%;\r\n    float: left;\r\n    background: #F2F5F8;\r\n    border-top-right-radius: 0.3em;\r\n    border-bottom-right-radius: 0.3em;\r\n    color: #304388;\r\n    margin-bottom: 40px;\r\n  }\r\n  .blankContent{\r\n    height: 50vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 3rem;\r\n    color: #999;\r\n  }\r\n  .scrollbar {\r\n    margin-top: 2%;\r\n    padding-top: 2%;\r\n    padding-right: 2%;\r\n   \r\n    height: 300px;\r\n    background: rgb(175, 241, 250);\r\n    overflow-y: scroll;\r\n    margin-bottom: 25px;\r\n  }\r\n  .force-overflow {\r\n      min-height: 300px;\r\n  }\r\n  .textarea{\r\n    margin: 2%;\r\n    width: 70%\r\n  }\r\n  /*\r\n  for testing\r\n  */\r\n  .my-comment {\r\n    background: #86BB71;\r\n    margin: .5%;\r\n    border-radius: 7px;\r\n    float: right;\r\n    padding: 2%;\r\n  }\r\n  .other-comment {\r\n    background: #94C2ED;\r\n    margin: .5%;\r\n    border-radius: 7px;\r\n    float: left;\r\n    padding: 2%;\r\n\r\n  }\r\n  .floatLeft{\r\n    float: left;\r\n  }\r\n  .floatRight{\r\n    float: right;\r\n  }\r\n  .fieldName{\r\n    color: rgb(3, 2, 3);\r\n    float:left\r\n  }\r\n  .fieldName1{\r\n    float: right;\r\n  }\r\n  table {\r\n      font-family: arial, sans-serif;\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n  }\r\n  td, th {\r\n      border: 1px solid #0a0707;\r\n      text-align: left;\r\n      padding: 8px;\r\n  }\r\n  tr:nth-child(even) {\r\n      background-color: #a59c9c;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/tracker/issue-view/issue-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tracker/issue-view/issue-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"col-12 header\">\n        <h1>Issue Tracker Tool</h1>\n    </div>\n\n\n    <!--Modal to update issue-->\n\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                    <h4 class=\"modal-title w-100 font-weight-bold\">Update Issue Details</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body mx-3\">\n\n                    <div class=\"md-form mb-5\">\n                      <label data-error=\"wrong\" data-success=\"right\">Issue Title</label>\n                      <input  [(ngModel)]=\"issueTitle\" type=\"Title\" class=\"form-control validate\" required>\n                    </div>\n    \n                    <div class=\"md-form mb-4\">\n                        <label data-error=\"wrong\"  for=\"inputGroupSelect01\" data-success=\"right\">Status</label>\n                        <!--\n                        <input [(ngModel)]=\"status\"  type=\"status\" class=\"form-control validate\">\n                        -->\n                        <select  [(ngModel)]=\"status\" class=\"custom-select\" id=\"inputGroupSelect01\" required>\n                            <option selected>Choose...</option>\n                            <option value=\"backlog\">backlog</option>\n                            <option value=\"in-progress\">in-progress</option>\n                            <option value=\"in-test\">in-test</option>\n                            <option value=\"done\">done</option>\n                        </select>\n\n                    </div>\n\n\n                          \n                    <div class=\"md-form mb-4\">\n                        <label data-error=\"wrong\" data-success=\"right\">Description</label>\n                        <!--\n                        <textarea [(ngModel)]=\"description\"  type=\"description\" class=\"form-control validate\"></textarea>\n                        -->\n                        <app-ngx-editor [placeholder]=\"'Enter description here...'\" [spellcheck]=\"true\" [(ngModel)]=\"description\"></app-ngx-editor>\n\n                    </div>\n\n\n                    <div class=\"md-form mb-4\">\n                            <label data-error=\"wrong\"  for=\"inputGroupSelect01\" data-success=\"right\">Assignee</label>\n                            <select  [(ngModel)]=\"assignee\" class=\"custom-select\" id=\"inputGroupSelect01\" required>\n                                    <option selected>Choose...</option>\n                                        <!--\n                                        <option  *ngFor=\"let user of users1\" value=\"{{user.firstName}} {{user.lastName}}\">\n                                            <p *ngIf=\"user.firstName+' '+user.lastName!=fullName\">{{user.firstName}} {{user.lastName}}</p>\n                                        </option>\n                                        -->\n                                    \n                                        <option  *ngFor=\"let user of users2\" value=\"{{user.firstName}} {{user.lastName}}\">\n                                            <p>{{user.firstName}} {{user.lastName}}</p>\n                                        </option>\n                                    \n\n\n                            </select>\n    \n                    </div>\n\n\n                    \n                </div>\n                <div class=\"modal-footer d-flex justify-content-center\">\n                    <button class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"updateIssue()\">Save Details</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-3 aside\">\n          <span class=\"user\" >\n              <b>{{fullName}}</b><br>\n              <small style=\"font-weight:bold;\">Issue Tracker Tool</small>\n          </span>\n          <div col-sm-12>\n              \n              <button type=\"button\" routerLink=\"/dashboard\" class=\"btn btn-success fasquare\">Back To Dashboard</button>\n\n          </div>\n          <hr class=\"lead\">      \n      </div>\n\n      <div class=\"col-lg-8 card text-center description-window\" style=\"background-color:bisque\">\n        <div class=\"card-header\" *ngIf='issueDetails'>\n            <u><h3 style=\"color:rgb(17, 8, 1)\">Issue Description View</h3></u>\n            <i class=\"fa fa-edit edit1\" title=\"Edit Issue Details\"  data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"setIssueDetails(issueDetails.issueId,issueDetails.issueTitle,issueDetails.status,issueDetails.description,issueDetails.assignee)\"></i>\n        </div>\n\n        <div class=\"card-body\" *ngIf='issueDetails'>\n                    \n            <div class=\"table-responsive-lg\">\n                <table class=\"table\">\n\n                    <tbody>\n                    <tr>\n                        <th scope=\"row\">Issue Title</th>\n                        <td><b class=\"fieldName1\">{{issueDetails.issueTitle}}</b></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Status of Bug</th>\n                        <td><b class=\"fieldName1\">{{issueDetails.status}}</b></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Reporter</th>\n                        <td><b class=\"fieldName1\">{{issueDetails.reporterName}}</b></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Assignee</th>\n                        <td><b class=\"fieldName1\">{{issueDetails.assignee}}</b></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Description</th>\n                        <td><p class=\"fieldName1\" [innerHTML]=\"issueDetails.description\">{{issueDetails.description}}</p></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">Date of Registration</th>\n                        <td><b class=\"fieldName1\">{{issueDetails.reportedOn |  date:'medium' }}</b></td>\n                    </tr>    \n                    <tr>\n                        <th scope=\"row\">Attachments</th>\n                        <td><a href=\"{{issueDetails.attachments}}\" target=\"_blank\" class=\"fieldName1\" title=\"Click here to download\">attached-file</a></td>\n                    </tr>    \n                \n                \n                    </tbody>\n                </table>\n                \n            </div>\n\n\n        \n            <h5 class=\"card-title\"><u class=\"fieldName\">Comments</u></h5><br><br>\n            <div class=\"col-12 col-sm-12 col-md-12 comments \">\n\n                <div class=\"scrollbar scrollbar-primary\">\n                    <div class=\"force-overflow\">\n                        <div *ngFor=\"let comment of AllCommentsOfIssue\">\n                            <div *ngIf=\"comment\">\n                                <span [ngClass]=\"{'floatRight': comment.userId == userId, 'floatLeft': comment.userId != userId}\">{{comment.commentedOn |  date}}</span><br>\n                                <span [ngClass]=\"{'my-comment': comment.userId == userId, 'other-comment': comment.userId != userId}\">{{comment.comment}}</span><br>\n                                <span [ngClass]=\"{'floatRight': comment.userId == userId, 'floatLeft': comment.userId != userId}\">{{comment.userName}}</span><br><br><br>\n                            </div>\n                        </div>    \n                        <div *ngIf=\"!AllCommentsOfIssue\" class=\"col-sm blankContent\">\n                                <span>Comment Not Available</span><br>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"row\"> \n                        <textarea class=\"textarea\"  [(ngModel)]=\"comment\" placeholder=\"Type your comment\"></textarea>\n                        \n                        <button type=\"button\" class=\"btn btn-primary\" style=\"margin:2%\" (click)=addNewComment()>Send</button>\n\n                </div>\n            </div>\n\n            <h5 class=\"card-title col-sm-12\"><u class=\"fieldName\">Watchers</u></h5><br><hr><br>\n            <div class=\"col-sm-12 floatLeft\" *ngIf=\"issueDetails.watchers\">\n                <p *ngFor=\"let watcher of issueDetails.watchers; let i = index\">\n                    <b>{{i+1}}. {{watcher.watcherName}}</b>\n                </p>\n            </div>\n\n\n\n        </div>\n\n\n        <div class=\"card-footer\">\n            <a class=\"btn btn-primary\"(click)=addAsWatcher(issueId)>Watch</a>\n        </div>\n      </div>\n\n\n\n\n    </div>\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/tracker/issue-view/issue-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tracker/issue-view/issue-view.component.ts ***!
  \************************************************************/
/*! exports provided: IssueViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueViewComponent", function() { return IssueViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IssueViewComponent = /** @class */ (function () {
    function IssueViewComponent(socketService, appService, _route, _router, toastr) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this._route = _route;
        this._router = _router;
        this.toastr = toastr;
        this.users1 = [];
        this.users2 = [];
        this.issueDetails = [];
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople(_this.token).subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                //  this.requests = apiResponse.data.requests;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllIssues = function () {
            _this.appService.getIssues(_this.token).subscribe(function (apiResponse) {
                _this.AllIssues = apiResponse.data;
            }, function (err) {
                console.log(err);
            });
        };
        this.getIssue = function () {
            var issueId = _this._route.snapshot.paramMap.get('issueId');
            _this.appService.getIssue(issueId, _this.token).subscribe(function (apiResponse) {
                _this.issueDetails = apiResponse.data;
                _this.issueId = _this.issueDetails.issueId;
            }, function (err) {
                console.log(err);
            });
        };
        //Getting All Items:
        this.getAllCommentsOnIssue = function () {
            var issueId = _this._route.snapshot.paramMap.get('issueId');
            //console.log(this.issueId)
            _this.appService.getAllCommentOnIssue(issueId, _this.token).subscribe(function (apiResponse) {
                _this.AllCommentsOfIssue = apiResponse.data;
            }, function (err) {
                console.log(err);
            });
        };
        //Update a issue details for all users:
        this.setIssueDetails = function (issueId, issueTitle, status, description, assignee) {
            _this.getAllUsers();
            _this.issueId = issueId;
            _this.issueTitle = issueTitle;
            _this.status = status;
            _this.description = description;
            _this.assignee = assignee;
        };
        this.updateIssue = function () {
            var data = {
                issueTitle: _this.issueTitle,
                issueId: _this.issueId,
                status: _this.status,
                description: _this.description,
                assignee: _this.assignee
            };
            _this.appService.editIssue(data, _this.token).subscribe(function (apiResponse) {
                _this.getIssue();
                _this.socketService.updateIssue(_this.fullName);
            }, function (err) {
                _this.toastr.error("Unable to update Issue details");
            });
        };
        this.issueUpdatedResponse = function () {
            _this.socketService.issueUpdatedResponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getIssue();
            });
        };
        //listening event for add issue  
        this.newIssueAddedResponse = function () {
            _this.socketService.issueAddedResponse().subscribe(function (response) {
                _this.toastr.success(response);
            });
        };
        //for creating OR registering new issue
        this.addNewComment = function () {
            if (!_this.comment) {
                _this.toastr.warning("Please enter comment");
            }
            else {
                var values = {
                    issueId: _this.issueId,
                    userId: _this.userId,
                    userName: _this.fullName,
                    comment: _this.comment
                };
                _this.appService.addComment(values, _this.token).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.comment = "";
                        _this.getAllCommentsOnIssue();
                        _this.socketService.addComment(_this.fullName);
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllCommentsOnIssue();
            });
        };
        //watch related functionalities
        this.addAsWatcher = function (issueId) {
            var data = {
                issueId: issueId,
                watcherId: _this.userId,
                watcherName: _this.fullName
            };
            _this.socketService.addAsWatcher(data);
            _this.getIssue();
            _this.getAllIssues();
        };
        this.responseAlreadyWatcher = function () {
            _this.socketService.responseAlreadyWatcher().subscribe(function (response) {
                _this.toastr.error(response);
            });
        };
        this.save_watch = function () {
            _this.socketService.save_watch().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllUsers();
                _this.getIssue();
            });
        };
    }
    IssueViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
        var issueId = this._route.snapshot.paramMap.get('issueId');
        this.appService.getIssue(issueId, this.token).subscribe(function (apiResponse) {
            _this.issueDetails = apiResponse.data;
            _this.issueId = _this.issueDetails.issueId;
        }, function (err) {
            console.log(err);
        });
        this.issueUpdatedResponse();
        this.newIssueAddedResponse();
        this.getAllIssues();
        this.getAllCommentsOnIssue();
        this.commentAddedResponse();
        this.responseAlreadyWatcher();
        this.save_watch();
        this.getIssue();
    };
    IssueViewComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    IssueViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-view',
            template: __webpack_require__(/*! ./issue-view.component.html */ "./src/app/tracker/issue-view/issue-view.component.html"),
            styles: [__webpack_require__(/*! ./issue-view.component.css */ "./src/app/tracker/issue-view/issue-view.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], IssueViewComponent);
    return IssueViewComponent;
}());



/***/ }),

/***/ "./src/app/tracker/tracker-route-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/tracker/tracker-route-guard.service.ts ***!
  \********************************************************/
/*! exports provided: TrackerRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerRouteGuardService", function() { return TrackerRouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackerRouteGuardService = /** @class */ (function () {
    function TrackerRouteGuardService(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    TrackerRouteGuardService.prototype.canActivate = function (route) {
        console.log("in guard service");
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authToken') === null) {
            this.toastr.error("Token Expired, Please login again");
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    TrackerRouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TrackerRouteGuardService);
    return TrackerRouteGuardService;
}());



/***/ }),

/***/ "./src/app/tracker/tracker.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tracker/tracker.module.ts ***!
  \*******************************************/
/*! exports provided: TrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerModule", function() { return TrackerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/tracker/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue-view/issue-view.component */ "./src/app/tracker/issue-view/issue-view.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _sort_by_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../sort-by.pipe */ "./src/app/sort-by.pipe.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _tracker_route_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tracker-route-guard.service */ "./src/app/tracker/tracker-route-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TrackerModule = /** @class */ (function () {
    function TrackerModule() {
    }
    TrackerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_tracker_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["TrackerRouteGuardService"]] },
                    { path: 'issueDetails/:issueId', component: _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_5__["IssueViewComponent"], canActivate: [_tracker_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["TrackerRouteGuardService"]] }
                ])
            ],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_5__["IssueViewComponent"], _sort_by_pipe__WEBPACK_IMPORTED_MODULE_7__["SortByPipe"]],
            providers: [_tracker_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["TrackerRouteGuardService"]]
        })
    ], TrackerModule);
    return TrackerModule;
}());



/***/ }),

/***/ "./src/app/user/email-verify/email-verify.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/email-verify/email-verify.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/email-verify/email-verify.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/email-verify/email-verify.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"success==1\">\n    <div class=\"row mt-5\">\n\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h2 class=\"text-success\">\n          <i class=\"fa fa-check-circle\"></i>Email Verified!</h2>\n        <h5 class=\"text-danger\">Thanks for signing up in TO-DO Application. Please\n          <a [routerLink]=\"['/login']\">Login</a>\n        </h5>\n      </div>\n    </div>\n  </div>\n  <!--success end-->\n  <!---failure start-->\n  <div *ngIf=\"failure==1\">\n    <div class=\"row mt-5\">\n\n    </div>\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h2 class=\"text-danger\">\n          <i class=\"fa fa-times-circle\"></i>Email Not Verified!</h2>\n        <h5 class=\"text-danger\">Oops!Some Error Occured!.Please again\n          <a [routerLink]=\"['/signup']\">SignUp</a>\n        </h5>\n      </div>\n    </div>\n\n  </div>\n  <!-- failure end -->\n</div>"

/***/ }),

/***/ "./src/app/user/email-verify/email-verify.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/email-verify/email-verify.component.ts ***!
  \*************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailVerifyComponent = /** @class */ (function () {
    function EmailVerifyComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
    }
    EmailVerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.route.snapshot.paramMap.get('userId');
        this.appService.verifyEmail(this.data).subscribe(function (Response) {
            if (Response.status === 200) {
                _this.success = 1;
            }
            else {
                _this.failure = 1;
            }
        }, function (error) {
        });
    };
    EmailVerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-verify',
            template: __webpack_require__(/*! ./email-verify.component.html */ "./src/app/user/email-verify/email-verify.component.html"),
            styles: [__webpack_require__(/*! ./email-verify.component.css */ "./src/app/user/email-verify/email-verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], EmailVerifyComponent);
    return EmailVerifyComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker Tool</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Signup</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Email Address</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"emailId.errors?.pattern\">\n       Warning : Email is invalid!\n\n      </div>\n      <div *ngIf=\"emailId.errors?.required\">\n       Warning : Email is required!\n      </div>\n    </div>\n\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"sendResetLinkFunction()\">Send Reset Link</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.sendResetLinkFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email address');
            }
            _this.appService.sendResetLink(_this.email)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Link Sent SuccessFully", "Success!");
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error! Try Again");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            });
        }; //end of sendResetLink 
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    }; //end goToSignUp
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker Tool</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click) = \"goToSignUp()\" >SignUp</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"  (keydown)=\"doLoginUsingKeypress($event)\" required>\n\n    <br>\n\n\n    <a [routerLink]=\"['/forgot-password']\">Forgot Password ?</a>\n\n    <br><br>\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click) = \"signinFunction()\" >Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import for toastr

//for loading spinner

var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr, spinnerService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.spinnerService.show();
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authToken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        //   this.router.navigate(['/']);
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/dashboard']);
                        }, 1000);
                    }
                    else {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.toastr.error(apiResponse.message);
                        }, 1000);
                    }
                }, function (err) {
                    if (err.status == 404) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/page-not-found']);
                        }, 1000);
                    }
                    else if (err.status == 500) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/server-error']);
                        }, 1000);
                    }
                    else if (err.status == 400) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.toastr.error('Password incorrect');
                        });
                    }
                    else {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/signup']);
                            _this.toastr.error('Please, create account');
                        });
                    }
                });
            } // end condition
        }; // end signinFunction
        this.doLoginUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.signinFunction();
            }
        }; // end sendMessageUsingKeypress
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker Tool</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Password Reset</h2>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" #pass=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" id=\"inputPassword\" class=\"form-control\"\n      [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n    <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"pass.errors?.pattern\">\n        Warning : Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!\n      </div>\n      <div *ngIf=\"pass.errors?.required\">\n        Warning : Password is required!\n      </div>\n    </div>\n\n\n\n\n\n\n    <label for=\"inputPassword\" class=\"sr-only\">Confirm Password</label>\n\n    <input type=\"password\" #conPass=\"ngModel\" id=\"inputPassword1\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\"\n      required>\n\n    <br>\n\n    <div [hidden]=\"conPass.pristine || password==confirmPassword\" class=\"alert alert-danger\">\n      <div *ngIf=\"password!=confirmPassword\">\n        Warning : Password and Confirm Password does not match!\n      </div>\n      <div *ngIf=\"conPass.errors?.required\">\n        Warning: Confirm Password is required!\n      </div>\n    </div>\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"resetPassword()\">Change Password</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.data = {};
        this.resetPassword = function () {
            if (_this.matchPassword()) {
                _this.data.userId = _this.userId;
                _this.data.password = _this.password;
                _this.appService.resetPassword(_this.data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success("Password Reset Succesfull", "Success!");
                        setTimeout(function () {
                            _this.router.navigate(['/']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                    }
                }, function (error) {
                    _this.toastr.error("Some Error Occurred", "Error!");
                });
            }
            else {
                _this.toastr.error("Password Mismatch", "Error!");
            }
        };
        this.matchPassword = function () {
            if (_this.password === _this.confirmPassword) {
                return true;
            }
            else {
                return false;
            }
        }; //end matchPassword
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker Tool</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"goToSignIn()\">SignIn</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up To Register your Issue</h2>\n\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" #first=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n    <div [hidden]=\"first.pristine || first.valid\" class=\"alert alert-danger\">\n      <div *ngIf=\"first.errors?.pattern\">\n        Warning : Please tart with Capital and contain only letters !\n            <div *ngIf=\"first.errors?.minlength\">\n              Warning : Minimum 2 letters required!\n            </div>\n      </div>\n      <div *ngIf=\"first.errors?.required\">\n        Warning : First Name is required!\n      </div>\n\n    </div>\n\n\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" #last=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n\n    <div [hidden]=\"last.pristine || last.valid\" class=\"alert alert-danger\">\n      <div *ngIf=\"last.errors?.pattern\">\n        Warning : Please tart with Capital and contain only letters !\n        <div *ngIf=\"last.errors?.minlength\">\n          Warning : Minimum 2 letters required!\n        </div>\n      </div>\n      <div *ngIf=\"last.errors?.required\">\n        Warning : Last Name is required!\n      </div>\n\n    </div>\n<!--\n    <span>Mobile: </span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n    <input type=\"number\" id=\"inputMobileNumber\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile Number\" required>\n-->\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n    <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"emailId.errors?.pattern\">\n       Warning : Email is invalid!\n\n      </div>\n      <div *ngIf=\"emailId.errors?.required\">\n       Warning : Email is required!\n      </div>\n    </div>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" #pass=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n    <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"pass.errors?.pattern\">\n       Warning : Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!\n      </div>\n      <div *ngIf=\"pass.errors?.required\">\n       Warning : Password is required!\n      </div>\n    </div>\n\n\n    <span class=\"sub-heading\">Confirm Password: </span>\n\n    <label for=\"inputConPassword\" class=\"sr-only\">Confirm Password</label>\n\n    <input type=\"password\" #conPass=\"ngModel\"  id=\"inputConPassword\" class=\"form-control\" name=\"conPass\" [(ngModel)]=\"confirmPassword\"\n      placeholder=\"Confirm Password\" required>\n\n    <br>\n   \n    <div [hidden]=\"conPass.pristine || password==confirmPassword\" class=\"alert alert-danger\">\n       <div *ngIf=\"password!=confirmPassword\">\n          Warning : Password and Confirm Password does not match!\n       </div>\n      <div *ngIf=\"conPass.errors?.required\">\n          Warning: Confirm Password is required!\n      </div>\n    </div>\n\n    <span class=\"sub-heading\">Country: </span>\n\n    <label for=\"inputCountry\" class=\"sr-only\">Country</label>\n    \n    <select [(ngModel)]=\"countryName\" #Country=\"ngModel\"  name=\"countryName\" class=\"form-control\" \n    id=\"inputCountry\" (change)=\"onChange()\" required>\n       <option value=\"\" >Select</option>\n      <option *ngFor=\"let country of finalCountryList\" [value]=\"country.key\">{{country.value}}</option>\n    </select>\n      <br>\n      <div [hidden]=\"Country.valid || Country.pristine  \" class=\"alert alert-danger\">\n      ** Country Name is required \n      </div>\n    \n\n    <span class=\"sub-heading\">Mobile: </span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n    <div class=\"input-group\">\n        <div class=\"input-group-text\">+{{code}}</div>\n        <input type=\"number\" #mobileNum=\"ngModel\" pattern=\"^\\d{10}$\" id=\"inputMobile\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"mobile\"\n        placeholder=\"Mobile\" required>\n      </div>\n \n\n    <br>\n    <div [hidden]=\"mobileNum.valid || mobileNum.pristine\" class=\"alert alert-danger\">\n      <div *ngIf=\"mobileNum.errors?.pattern\">\n        Mobile Number should only start contain only 10 digits!\n\n      </div>\n      <div *ngIf=\"mobileNum.errors?.required\">\n        Mobile Number is required!\n      </div>\n    </div>\n\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import for toastr

//for spinner loading

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, sortCountries, spinnerService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.sortCountries = sortCountries;
        this.spinnerService = spinnerService;
        this.countryName = "";
        this.finalCountryList = [];
        this.codeList = [];
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else if (!_this.password) {
                _this.toastr.warning('Select country');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email,
                    password: _this.password,
                    mobileNumber: "+" + _this.code + "-" + _this.mobileNumber,
                    country: _this.countryName
                };
                _this.spinnerService.show();
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.spinnerService.hide();
                        _this.toastr.success('Account Created');
                        _this.toastr.warning('Check for Email ID confirmation mail!');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else if (apiResponse.status == 404) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/page-not-found']);
                        }, 1000);
                    }
                    else if (apiResponse.status == 500) {
                        setTimeout(function () {
                            _this.spinnerService.hide();
                            _this.router.navigate(['/server-error']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, 'error occured');
                    }
                }, function (err) {
                    _this.toastr.error('Try Again', 'Error!');
                });
            } // end condition
        }; // end signupFunction
        this.onChange = function () {
            _this.appService.getCountryCode().subscribe(function (Response) {
                _this.codeList = Response;
                _this.code = _this.codeList[_this.countryName];
            });
        }; //end
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryList().subscribe(function (Response) {
            _this.countryList = Response;
            for (var prop in _this.countryList) {
                _this.finalCountryList.push({
                    'key': prop,
                    'value': _this.countryList[prop]
                });
            }
            _this.finalCountryList = _this.sortCountries.transform(_this.finalCountryList);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_3__["SortCountriesPipe"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-verify/email-verify.component */ "./src/app/user/email-verify/email-verify.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
                    { path: 'email-verify/:userId', component: _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_7__["EmailVerifyComponent"] },
                    { path: 'reset-password/:userId', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_7__["EmailVerifyComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ProjectTRACKER - Copy\TrackerProject-Frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map