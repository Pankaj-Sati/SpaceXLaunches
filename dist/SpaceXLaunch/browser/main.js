(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Workplace\Angular\SpaceXLaunch\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DmY+":
/*!******************************************************!*\
  !*** ./src/app/utility-components/utility.module.ts ***!
  \******************************************************/
/*! exports provided: UtilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "yQMu");




class UtilityModule {
}
UtilityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UtilityModule });
UtilityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UtilityModule_Factory(t) { return new (t || UtilityModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UtilityModule, { declarations: [_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UtilityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "JEeY":
/*!******************************************************!*\
  !*** ./src/app/interceptors/response.interceptor.ts ***!
  \******************************************************/
/*! exports provided: ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return ResponseInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app-settings.service */ "wgQU");






class ResponseInterceptor {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.count = 0;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err, event) => {
            console.log('Caught error', err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                this.count--;
                if (this.count <= 0) {
                    this.appSettings.hideLoader();
                    this.count = 0; //Reset the counter
                }
                console.log('Intercepting error response', this.count, this.appSettings.isLoaderDisplaying);
            }
            else {
                console.log('In else');
            }
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                //Response
                this.count--;
                if (this.count <= 0) {
                    this.appSettings.hideLoader();
                    this.count = 0; //Reset the counter
                }
            }
            else {
                //Request
                this.count++;
                this.appSettings.showLoader();
            }
            return event;
        }));
    }
}
ResponseInterceptor.ɵfac = function ResponseInterceptor_Factory(t) { return new (t || ResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"])); };
ResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResponseInterceptor, factory: ResponseInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResponseInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/app-settings.service */ "wgQU");
/* harmony import */ var _utility_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility-components/loading-screen/loading-screen.component */ "yQMu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(appSettings, platformId) {
        this.appSettings = appSettings;
        this.title = 'SpaceXLaunch';
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production && Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
            window.console.log = () => { }; //Disabling console log on production
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "loading-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_utility_components_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_4__["LoadingScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _launches_launches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./launches/launches.component */ "aNN5");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utility_components_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility-components/utility.module */ "DmY+");
/* harmony import */ var _interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/response.interceptor */ "JEeY");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_8__["ResponseInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _utility_components_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _launches_launches_component__WEBPACK_IMPORTED_MODULE_4__["LaunchesComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _utility_components_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _launches_launches_component__WEBPACK_IMPORTED_MODULE_4__["LaunchesComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _utility_components_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_8__["ResponseInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aNN5":
/*!************************************************!*\
  !*** ./src/app/launches/launches.component.ts ***!
  \************************************************/
/*! exports provided: LaunchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchesComponent", function() { return LaunchesComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-call.service */ "sKoQ");
/* harmony import */ var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app-settings.service */ "wgQU");








function LaunchesComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yearItem_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r0.filters.launch_year == yearItem_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", yearItem_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", yearItem_r3, "");
} }
function LaunchesComponent_div_31_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](id_r8);
} }
function LaunchesComponent_div_31_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LaunchesComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mission Ids:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LaunchesComponent_div_31_span_10_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LaunchesComponent_div_31_span_11_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Launch Year:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Successful Launch:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Successful Landing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", i_r5 < 10 ? item_r4.images.small : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r4.mission_name + " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-src", item_r4.images.small);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r4.mission_name, " #", item_r4.flight_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r4.mission_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4.mission_id.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.launch_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.launch_success);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.land_success);
} }
function LaunchesComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Record Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LaunchesComponent {
    constructor(apiService, platformId, activatedRoute, appSettings, location, router) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.appSettings = appSettings;
        this.location = location;
        this.router = router;
        this.launchItems = [];
        this.filters = {
            limit: 100,
            launch_success: '',
            land_success: '',
            launch_year: ''
        };
        this.launchYears = [];
        this.isPlatformBrowser = false;
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId);
        //Adding static year filters
        for (let i = 2006; i <= 2020; i++) {
            this.launchYears.push(i);
        }
        this.launchItems = this.activatedRoute.snapshot.data['launchItems']; //Get the data from state 
        console.log('Data from state', this.launchItems);
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (this.isPlatformBrowser) {
                    //Update the filters
                    console.log('Navigation End event triggered', this.router.parseUrl(this.router.url).queryParams);
                    const queryParams = Object.assign({}, this.router.parseUrl(this.router.url).queryParams);
                    Object.keys(queryParams).forEach(param => {
                        if (this.filters[param] != undefined) {
                            this.filters[param] = queryParams[param];
                        }
                    });
                }
            }
        });
    }
    ngOnInit() {
        //  this.getLaunchItems();
        this.activatedRoute.queryParams.subscribe(data => {
            console.log('Query Parameter changed', data);
        });
    }
    ngAfterContentInit() {
        if (this.isPlatformBrowser) {
            console.log("In ngAfterContentInit");
            document.addEventListener('scroll', this.lazyLoadImages);
            document.addEventListener('resize', this.lazyLoadImages);
            document.addEventListener('orientationChange', this.lazyLoadImages);
        }
    }
    lazyLoadImages() {
        let imgTags = document.getElementsByClassName('lazyLoad');
        let windowScrollPosition = window.pageYOffset;
        let windowInnerHeight = window.innerHeight;
        console.log('Called lazyLoadImages()', windowScrollPosition, windowInnerHeight);
        for (let i = 0; i < imgTags.length; i++) {
            let img = imgTags.item(i);
            if (img.getBoundingClientRect().top < (windowInnerHeight + windowScrollPosition)) {
                console.log('Each image', img.attributes.getNamedItem('data-src').value, img.getBoundingClientRect().top);
                img.setAttribute('src', img.attributes.getNamedItem('data-src').value);
                img.classList.remove('lazyLoad');
            }
        }
        if (imgTags.length == 0) {
            document.removeEventListener('scroll', this.lazyLoadImages);
            document.removeEventListener('resize', this.lazyLoadImages);
            document.removeEventListener('orientationChange', this.lazyLoadImages);
        }
    }
    //Event Bubbling implemented
    setYearFilter(event) {
        if (event.target.localName == "button") {
            let selectedYear = event.target.name;
            if (this.filters.launch_year == selectedYear) {
                //CLicked again
                this.filters.launch_year = '';
            }
            else {
                this.filters.launch_year = selectedYear;
            }
            this.getLaunchItems();
        }
    }
    setSuccessLaunchFilter(value) {
        console.log(value);
        if (this.filters.launch_success === value) {
            //Checked already
            this.filters.launch_success = '';
        }
        else {
            this.filters.launch_success = value;
        }
        this.getLaunchItems();
    }
    setSuccessLandingFilter(value) {
        console.log(value);
        if (this.filters.land_success === value) {
            //Checked already
            this.filters.land_success = '';
        }
        else {
            this.filters.land_success = value;
        }
        this.getLaunchItems();
    }
    getLaunchItems() {
        let queryParams = '';
        Object.keys(this.filters).forEach(filter => {
            if (this.filters[filter] !== '') {
                queryParams += filter + "=" + this.filters[filter] + "&";
            }
        });
        queryParams = queryParams.charAt(queryParams.length - 1) == '&' ? queryParams.substring(0, queryParams.length - 1) : queryParams;
        this.location.go('', queryParams); //For changing the query params of current page
        this.apiService.getLaunches(this.filters).subscribe((data) => {
            console.log('Got mapped data');
            this.launchItems = data;
        }, error => {
            console.log(error);
        });
    }
}
LaunchesComponent.ɵfac = function LaunchesComponent_Factory(t) { return new (t || LaunchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LaunchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LaunchesComponent, selectors: [["launches"]], decls: 37, vars: 11, consts: [[1, "container"], [1, "pageTitle"], [1, "contentContainer"], [1, "filters", "card"], [1, "filtersBody"], [1, "launchYears", "filter", 3, "click"], ["type", "button", 3, "name", "selected", 4, "ngFor", "ngForOf"], [1, "launchSuccess", "filter"], ["type", "button", 3, "click"], [1, "landSuccess", "filter"], [1, "launchItemsBody"], ["class", "launchitem card", 4, "ngFor", "ngForOf"], ["class", "errorMessage", 4, "ngIf"], [1, "heading"], ["type", "button", 3, "name"], [1, "launchitem", "card"], [1, "imageContainer"], [1, "image", "lazyLoad", 3, "src", "alt"], [1, "cardTitle"], [1, "cardContent"], [1, "key"], ["class", "ids", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ids"], [1, "errorMessage"]], template: function LaunchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SpaceX Launch Programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Launch Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LaunchesComponent_Template_div_click_12_listener($event) { return ctx.setYearFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LaunchesComponent_button_13_Template, 2, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Successful Launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LaunchesComponent_Template_button_click_18_listener() { return ctx.setSuccessLaunchFilter("true"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LaunchesComponent_Template_button_click_20_listener() { return ctx.setSuccessLaunchFilter("false"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Successful Landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LaunchesComponent_Template_button_click_26_listener() { return ctx.setSuccessLandingFilter("true"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LaunchesComponent_Template_button_click_28_listener() { return ctx.setSuccessLandingFilter("false"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LaunchesComponent_div_31_Template, 24, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LaunchesComponent_p_32_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Developed By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Pankaj Sati");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.launchYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.filters.launch_success === "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.filters.launch_success === "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.filters.land_success === "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.filters.land_success === "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.launchItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.appSettings.isLoaderDisplaying && (ctx.launchItems == null || ctx.launchItems.length == 0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  background-color: var(--backgroundColor);\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n}\n\n.contentContainer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  justify-items: stretch;\n  align-items: self-start;\n}\n.pageTitle[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: white;\n  margin: 10px;\n  width: 240px;\n  min-height: 400px;\n  box-shadow: 1px 2px 5px #afafaf;\n  border-radius: 10px;\n}\n\n.filters[_ngcontent-%COMP%] {\n  align-self: start;\n}\n.filtersBody[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 100;\n  margin: 15px 0px;\n}\n.filtersBody[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 5px 32px 20px 32px;\n}\n.filter[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(odd) {\n  justify-self: left;\n}\n.filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(even) {\n  justify-self: right;\n}\n\n.launchItemsBody[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.launchitem[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%] {\n  background-color: var(--backgroundColor);\n  width: 100%;\n  text-align: center;\n}\n.launchitem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  max-width: 100%;\n}\n.launchitem[_ngcontent-%COMP%]   .cardTitle[_ngcontent-%COMP%] {\n  color: var(--secondaryColor);\n  margin-bottom: 15px;\n  font-size: var(--text_1);\n  font-weight: 700;\n}\n.launchitem[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%] {\n  font-size: var(--text_1);\n  color: var(--secondaryColor);\n  word-break: break-word;\n}\n.launchitem[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-weight: 700;\n  margin-right: 10px;\n}\n.launchitem[_ngcontent-%COMP%]   .cardContent[_ngcontent-%COMP%]   .ids[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \",\";\n}\n\nfooter[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: var(--text_1);\n  word-break: break-word;\n  margin-top: 32px;\n}\nfooter[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: var(--textColor);\n  font-size: var(--text_lg);\n  font-weight: 700;\n}\n\n@media only screen and (min-width: 700px) and (max-width: 1024px) {\n  .contentContainer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 2fr;\n  }\n}\n@media only screen and (min-width: 1025px) and (max-width: 1440px) {\n  .contentContainer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 4fr;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .contentContainer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 4fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF1bmNoZXMvbGF1bmNoZXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsa0JBQUE7QUFDQTtFQUVJLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFWbUI7QUFPdkI7QUFNQSxxQkFBQTtBQUNBO0VBRUksYUFBQTtFQUNBLFNBakJtQjtFQWtCbkIsc0JBQUE7RUFDQSx1QkFBQTtBQUpKO0FBT0E7RUFFSSxlQUFBO0FBTEo7QUFRQTtFQUVJLGVBQUE7QUFOSjtBQVNBLE9BQUE7QUFFQTtFQUVJLGFBcENtQjtFQXFDbkIsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0EsVUFBQTtBQUVBO0VBRUksaUJBQUE7QUFWSjtBQWVJO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFnQkk7RUFFSSwwQkFBQTtBQWZSO0FBb0JBO0VBRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWxCSjtBQW9CSTtFQUVJLGtCQUFBO0FBbkJSO0FBcUJJO0VBRUksbUJBQUE7QUFwQlI7QUF5QkEsZUFBQTtBQUVBO0VBS0ksYUFBQTtFQUNBLGVBQUE7QUEzQko7QUFnQ0k7RUFFSSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTlCUjtBQWdDSTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQS9CUjtBQWtDSTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBakNSO0FBb0NJO0VBRUksd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBbkNSO0FBb0NRO0VBRUksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbkNaO0FBc0NRO0VBRUksWUFBQTtBQXJDWjtBQTJDQSxTQUFBO0FBQ0E7RUFFSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQXpDSjtBQTBDSTtFQUVJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQXpDUjtBQThDQSxnQkFBQTtBQVlBO0VBSUk7SUFFSSw4QkFBQTtFQTFETjtBQUNGO0FBbUVBO0VBR0k7SUFFSSw4QkFBQTtFQXBFTjtBQUNGO0FBNEVBO0VBR0k7SUFFSSw4QkFBQTtFQTdFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF1bmNoZXMvbGF1bmNoZXMuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29tbW9uU2VwZXJhdGlvblVuaXRzOjIwcHg7IC8vRm9yIGNvbW9uIGdhcHMsIG1hcmdpbiBhbmQgcGFkZGluZyBvZiBzZWN0aW9uc1xyXG5cclxuLypNYWluIENvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyXHJcbntcclxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy8gaGVpZ2h0OjEwMCU7XHJcbiAgICBwYWRkaW5nOiAkY29tbW9uU2VwZXJhdGlvblVuaXRzO1xyXG59XHJcblxyXG4vKiBjb250ZW50IENvbnRhaW5lciovXHJcbi5jb250ZW50Q29udGFpbmVyXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6ICRjb21tb25TZXBlcmF0aW9uVW5pdHM7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcbn1cclxuXHJcbi5wYWdlVGl0bGVcclxue1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuXHJcbmg1XHJcbntcclxuICAgIG1hcmdpbjo1cHggMHB4O1xyXG59XHJcblxyXG4vKkNhcmQqL1xyXG5cclxuLmNhcmRcclxue1xyXG4gICAgcGFkZGluZzogJGNvbW1vblNlcGVyYXRpb25Vbml0cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4ICNhZmFmYWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKkZpbHRlcnMqL1xyXG5cclxuLmZpbHRlcnNcclxue1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5maWx0ZXJzQm9keVxyXG57XHJcbiAgICBoNlxyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIG1hcmdpbjoxNXB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBoclxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbjo1cHggMzJweCAyMHB4IDMycHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZmlsdGVyXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6MTVweDtcclxuXHJcbiAgICBidXR0b246bnRoLWNoaWxkKG9kZClcclxuICAgIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKGV2ZW4pXHJcbiAgICB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qTGF1bmNoIEl0ZW1zKi9cclxuXHJcbi5sYXVuY2hJdGVtc0JvZHlcclxue1xyXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5heCgyNjBweCwxZnIpKTtcclxuICAgIC8vIGdhcDokY29tbW9uU2VwZXJhdGlvblVuaXRzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmxhdW5jaGl0ZW17XHJcblxyXG4gICAgLmltYWdlQ29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjIyMHB4O1xyXG4gICAgICAgIGhlaWdodDoyMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRUaXRsZVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS10ZXh0XzEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRDb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS10ZXh0XzEpO1xyXG4gICAgICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeUNvbG9yKTsgICAgXHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAua2V5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjp2YXIoLS10ZXh0Q29sb3IpOyAgIFxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDsgIFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5pZHM6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiLFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qRm9vdGVyKi9cclxuZm9vdGVyXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dF8xKTtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgLmhlYWRpbmdcclxuICAgIHtcclxuICAgICAgICBjb2xvcjp2YXIoLS10ZXh0Q29sb3IpOyAgXHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS10ZXh0X2xnKTsgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qTWVkaWEgUXVlcmllcyovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6NzAwcHgpXHJcbntcclxuICAgIFxyXG4gICAgLy9Gb3IgbW9iaWxlXHJcblxyXG4gICAgLy8gLmxhdW5jaEl0ZW1zQm9keVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzAwcHgpIGFuZCAobWF4LXdpZHRoOjEwMjRweClcclxue1xyXG4gICAgLy9Gb3IgdGFibGV0XHJcblxyXG4gICAgLmNvbnRlbnRDb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmxhdW5jaEl0ZW1zQm9keVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIGFuZCAobWF4LXdpZHRoOjE0NDBweClcclxue1xyXG4gICAgLy9Gb3IgRGVza3RvcFxyXG4gICAgLmNvbnRlbnRDb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmxhdW5jaEl0ZW1zQm9keVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aDoxNDQwcHgpXHJcbntcclxuICAgIC8vRm9yIGxhcmdlIHNjcmVlbnNcclxuICAgIC5jb250ZW50Q29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gICAgfVxyXG4gICAgLy8gLmxhdW5jaEl0ZW1zQm9keVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIHJlcGVhdCg0LDFmcik7XHJcbiAgICAvLyB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LaunchesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'launches',
                styleUrls: ['./launches.styles.scss'],
                templateUrl: './launches.template.html'
            }]
    }], function () { return [{ type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page Not found work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnN0eWxlcy5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                styleUrls: ['./page-not-found.styles.scss'],
                templateUrl: './page-not-found.template.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "sKoQ":
/*!**********************************************!*\
  !*** ./src/app/services/api-call.service.ts ***!
  \**********************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiCallService {
    constructor(http) {
        this.http = http;
    }
    getLaunches(params) {
        console.log('IN getLaunches()', params);
        return this.http.get(ApiCallService.API_ENDPOINT, {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log('Getting data to map');
            try {
                let trimmedResponse = [];
                data.forEach((launchItem) => {
                    let item = {
                        flight_number: launchItem.flight_number == null ? 'Not Available' : launchItem.flight_number,
                        mission_name: launchItem.mission_name == null ? 'Not Available' : launchItem.mission_name,
                        mission_id: launchItem.mission_id == null ? [] : launchItem.mission_id,
                        launch_year: launchItem.launch_year == null ? 'Not Available' : launchItem.launch_year,
                        launch_success: launchItem.launch_success == null ? 'Not Available' : launchItem.launch_success,
                        images: {
                            small: launchItem.links.mission_patch_small,
                            large: launchItem.links.mission_patch
                        },
                        land_success: launchItem.rocket.first_stage.cores[0].land_success == null ? 'Not Available' : launchItem.rocket.first_stage.cores[0].land_success
                    };
                    trimmedResponse.push(item);
                });
                return trimmedResponse;
            }
            catch (error) {
                console.log(error);
                // res.send(response.data);
                return [];
            }
        }));
    }
}
ApiCallService.API_ENDPOINT = "https://api.spaceXdata.com/v3/launches";
ApiCallService.ɵfac = function ApiCallService_Factory(t) { return new (t || ApiCallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiCallService, factory: ApiCallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiCallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _launches_launches_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./launches/launches.component */ "aNN5");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _services_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data-resolver.service */ "yxRX");







const routes = [
    {
        path: '', component: _launches_launches_component__WEBPACK_IMPORTED_MODULE_2__["LaunchesComponent"],
        resolve: {
            launchItems: _services_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["LaunchDataResolver"]
        }
    },
    {
        path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wgQU":
/*!**************************************************!*\
  !*** ./src/app/services/app-settings.service.ts ***!
  \**************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppSettingsService {
    constructor(platformId) {
        this.isLoader = false; //For displaying and hiding the loader
        this.isPlatformBrowser = false;
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId);
    }
    showLoader() {
        if (this.isPlatformBrowser) {
            this.isLoader = true;
        }
    }
    get isLoaderDisplaying() {
        return this.isLoader;
    }
    hideLoader() {
        this.isLoader = false;
    }
}
AppSettingsService.ɵfac = function AppSettingsService_Factory(t) { return new (t || AppSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
AppSettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppSettingsService, factory: AppSettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "yQMu":
/*!*******************************************************************************!*\
  !*** ./src/app/utility-components/loading-screen/loading-screen.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app-settings.service */ "wgQU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoadingScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoadingScreenComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
    }
}
LoadingScreenComponent.ɵfac = function LoadingScreenComponent_Factory(t) { return new (t || LoadingScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_settings_service__WEBPACK_IMPORTED_MODULE_1__["AppSettingsService"])); };
LoadingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingScreenComponent, selectors: [["loading-screen"]], decls: 1, vars: 1, consts: [["class", "loadingContainer", 4, "ngIf"], [1, "loadingContainer"]], template: function LoadingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingScreenComponent_div_0_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appSettings.isLoaderDisplaying);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".loadingContainer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: beige;\n  font-size: var(--text_lg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0eS1jb21wb25lbnRzL2xvYWRpbmctc2NyZWVuL2xvYWRpbmctc2NyZWVuLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvdXRpbGl0eS1jb21wb25lbnRzL2xvYWRpbmctc2NyZWVuL2xvYWRpbmctc2NyZWVuLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ0NvbnRhaW5lclxyXG57XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC43KTtcclxuICAgIGNvbG9yOmJlaWdlO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0X2xnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loading-screen',
                styleUrls: ['./loading-screen.style.scss'],
                templateUrl: './loading-screen.html'
            }]
    }], function () { return [{ type: src_app_services_app_settings_service__WEBPACK_IMPORTED_MODULE_1__["AppSettingsService"] }]; }, null); })();


/***/ }),

/***/ "yxRX":
/*!***************************************************!*\
  !*** ./src/app/services/data-resolver.service.ts ***!
  \***************************************************/
/*! exports provided: LaunchDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchDataResolver", function() { return LaunchDataResolver; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-call.service */ "sKoQ");








class LaunchDataResolver {
    constructor(apiService, platformId, stateTransfer) {
        this.apiService = apiService;
        this.stateTransfer = stateTransfer;
        this.isPlatformServer = false;
        this.isPlatformServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(platformId); //To know where our code is running
    }
    resolve(route, state) {
        const KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('launchItems');
        if (this.stateTransfer.hasKey(KEY)) {
            //If already our data is available, we will use it
            const data = this.stateTransfer.get(KEY, []);
            console.log('Data in state', data);
            this.stateTransfer.remove(KEY); //Remove the data once we have used it
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(data);
        }
        else {
            //Key not available, get the data 
            return this.apiService.getLaunches(route.queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
                console.log('Tapping data');
                if (this.isPlatformServer) {
                    //On server, we will set the data in Transfer State
                    this.stateTransfer.set(KEY, data);
                }
            }));
        }
    }
}
LaunchDataResolver.ɵfac = function LaunchDataResolver_Factory(t) { return new (t || LaunchDataResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"])); };
LaunchDataResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LaunchDataResolver, factory: LaunchDataResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LaunchDataResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _api_call_service__WEBPACK_IMPORTED_MODULE_5__["ApiCallService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map