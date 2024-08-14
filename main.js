"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/archive/archive.component */ 349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: ':language?',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: ':language?/proyectos',
  component: _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_1__.ArchiveComponent
},
// {path: 'profile'        ,   component: ProfileComponent         , canActivate: [AuthGuard]},
// {path: 'users'          ,   component: UsersComponent           , canActivate: [AuthGuard]},
// {path: 'register-user'  ,   component: RegisterUserComponent    , canActivate: [AuthGuard]},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: '/'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 9263);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/header/header.component */ 3538);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 678);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);









class AppComponent {
  constructor(titleService, metaService, translateService, location, languageService) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.translateService = translateService;
    this.location = location;
    this.languageService = languageService;
    this.title = 'portfolio';
  }
  ngOnInit() {
    this.languageService.initLanguage();
    this.titleService.setTitle("");
    this.metaService.addTags([{
      name: 'keywords',
      content: ''
    }, {
      name: 'description',
      content: ''
    }]);
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3908);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 2864);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);






// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';









function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule,
    // AnimateOnScrollModule.forRoot(),
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }),
    // NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule,
    // AnimateOnScrollModule.forRoot(),
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule]
  });
})();

/***/ }),

/***/ 349:
/*!*********************************************************!*\
  !*** ./src/app/components/archive/archive.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArchiveComponent: () => (/* binding */ ArchiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


function ArchiveComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@archiveAnimation", undefined);
  }
}
class ArchiveComponent {
  constructor() {
    this.state = false;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = true;
    }, 1);
  }
  static #_ = this.ɵfac = function ArchiveComponent_Factory(t) {
    return new (t || ArchiveComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArchiveComponent,
    selectors: [["app-archive"]],
    decls: 1,
    vars: 1,
    consts: [["class", "section archive", 4, "ngIf"], [1, "section", "archive"], [1, "container"], [1, "archive-title"], [1, "archive-table-container"]],
    template: function ArchiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArchiveComponent_section_0_Template, 4, 1, "section", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state);
      }
    },
    styles: ["\n\n.archive[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1600px;\n  min-height: 100vh;\n  padding-top: 135px;\n  padding-bottom: 200px;\n}\n.archive[_ngcontent-%COMP%]   .archive-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: 0 0 10px 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n.archive[_ngcontent-%COMP%]   .archive-subtitle[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;\n  margin: 100px -20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:focus {\n  background-color: #112240;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-date[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 16px;\n  font-weight: normal;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n  width: 10%;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  color: #ccd6f6;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-company[_ngcontent-%COMP%] {\n  width: 15%;\n  padding-top: 15px;\n  font-size: 18px;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 1.5;\n  padding: 10px 20px;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  display: inline-block;\n}\n.archive[_ngcontent-%COMP%]   .archive-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 1.5;\n  padding: 12.9px 20px;\n}\n\n@media (max-width: 768px) {\n  .proyect-company[_ngcontent-%COMP%], .proyect-skills[_ngcontent-%COMP%], .hide-on-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUpERUc7QUNGWDtBQUVJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBGREhHO0VDSUgsbUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR0k7RUFDSSxtQkFBQTtFQUFxQixVQUFBO0VBQVksbUVBQUE7RUFDakMsNEhBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFDWjtBQUNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDaEI7QUFFZ0I7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDJLQUFBO0FBQXBCO0FBR29CO0VBQ0kseUJBQUE7QUFEeEI7QUFJb0I7RUFDSSxjQUFBO0VBQ0EsMEZEcENiO0VDcUNhLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZ4QjtBQUtvQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSHhCO0FBTW9CO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSnhCO0FBTW9CO0VBQ0ksZUFBQTtFQUNBLDBGRGpFYjtFQ2tFYSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUp4QjtBQU9vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTHhCO0FBUW9CO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBTnhCO0FBVWdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFScEI7O0FBaUJBO0VBQ0k7SUFDSSxhQUFBO0VBZE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiRSZWQgICAgICAgICAgOiAjZjY0YTRhO1xyXG4kRGFya1JlZCAgICAgIDogI2I5MWMxYztcclxuJEJsYWNrICAgICAgICA6ICMwMDAwMDA7XHJcbiRHcmF5ICAgICAgICAgOiAjNmU3NjgxO1xyXG4kTGlnaHRHcmF5ICAgIDogI2QxZDVkYjtcclxuJExpZ2h0ZXN0R3JheSA6ICNmMWY1Zjk7XHJcbiREYXJrR3JheSAgICAgOiAjNDQ0OTUwO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG5cclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vdGhlbWVzLnNjc3NcIjtcclxuXHJcbi5hcmNoaXZle1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTM1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcblxyXG4gICAgLmFyY2hpdmUtdGl0bGUgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGl0bGUtaGVhZGVyLWNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRNYWluRm9udDtcclxuICAgIH1cclxuICAgIC5hcmNoaXZlLXN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRleHQtaGlnaGxpZ2h0LWNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcmNoaXZlLXRhYmxlLWNvbnRhaW5lcntcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpOyBcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDAuMnMsIHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwLjJzO1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggLTIwcHg7XHJcblxyXG4gICAgICAgIHRhYmxle1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgICAgICAgICAgIHRoZWFkIHRoe1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Ym9keXsgXHJcbiAgICAgICAgICAgICAgICB0cntcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzLCBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzLCB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0LWJveC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJveWVjdC1kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJveWVjdC10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRpdGxlLWhlYWRlci1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm95ZWN0LWNvbXBhbnl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJveWVjdC1za2lsbHN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm95ZWN0LWxpbmtze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlcGFyYXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMi45cHggMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5wcm95ZWN0LWNvbXBhbnksIC5wcm95ZWN0LXNraWxscywgLmhpZGUtb24tbW9iaWxle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)("archiveAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        opacity: 0,
        transform: "translateY(100%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.stagger)(15, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)("500ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 678:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);





function FooterComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_li_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.analyticsService.sendAnalyticEvent("click_github", "footer", "github"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "AboutUs.Github"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function FooterComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_li_5_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "linkedin"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "AboutUs.LinkedIn"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class FooterComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 17,
    vars: 10,
    consts: [[1, "footer-left-bar", "d-none", "d-md-block"], [4, "ngIf"], [1, "footer-right-bar", "d-none", "d-md-block"], ["target", "_blank", 3, "click", "href"], [1, "footer-credits", "text-center"], ["href", "", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], [1, "mt-2"], [1, "fab", "fa-github"], [1, "fab", "fa-linkedin-in"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FooterComponent_li_3_Template, 4, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FooterComponent_li_5_Template, 4, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_8_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_11_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio", "footer", "click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Created by SRB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_14_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio", "footer", "click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Designed by Arrows Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "AboutUs?.Github"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "AboutUs?.LinkedIn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "AboutUs.Email"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUNJLGNBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFSO0FBR0k7RUFDSSxnQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRlI7QUFJUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRlo7QUFLUTtFQUNJLGdCQUFBO0FBSFo7QUFLWTtFQUNJLG1CQUFBO0FBSGhCO0FBUUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTlI7QUFRUTtFQUNJLHdCQUFBO0FBTlo7QUFTUTtFQUNJLDBGRDdCRDtFQzhCQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQWjtBQVVJO0VBQ0ksMEZENUNHO0VDNkNILGVBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQVRSO0FBV1E7RUFDSSxjQUFBO0VBRUEsMERBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxvQkFBQTtBQVRaO0FBV1k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFUaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xyXG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcclxuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kUmVkICAgICAgICAgIDogI2Y2NGE0YTtcclxuJERhcmtSZWQgICAgICA6ICNiOTFjMWM7XHJcbiRCbGFjayAgICAgICAgOiAjMDAwMDAwO1xyXG4kR3JheSAgICAgICAgIDogIzZlNzY4MTtcclxuJExpZ2h0R3JheSAgICA6ICNkMWQ1ZGI7XHJcbiRMaWdodGVzdEdyYXkgOiAjZjFmNWY5O1xyXG4kRGFya0dyYXkgICAgIDogIzQ0NDk1MDtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuXHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3RoZW1lcy5zY3NzXCI7XHJcblxyXG5mb290ZXJ7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0Ym94LWZvb3Rlci10ZXh0LWNvbG9yKTtcclxuXHJcbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyLCAuZm9vdGVyLXJpZ2h0LWJhcjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHByb3llY3Rib3gtZm9vdGVyLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGVmdC1iYXIgbGksIC5mb290ZXItcmlnaHQtYmFyIGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LWJhcntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAtMTZweDtcclxuICAgICAgICBsZWZ0OiA1MXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgcHJveWVjdGJveC1mb290ZXItdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1yaWdodC1iYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICAgICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgcHJveWVjdGJveC1mb290ZXItdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1jcmVkaXRze1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0Ym94LWZvb3Rlci10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)("animateFooter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: "translateY(100%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 2864:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralModule: () => (/* binding */ GeneralModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 678);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3538);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);











function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
  static #_ = this.ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
  });
})();

/***/ }),

/***/ 3538:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 9263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);









const _c0 = a0 => ({
  "pointer-events": a0
});
function HeaderComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "First content");
  }
}
function HeaderComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
  }
}
function HeaderComponent_img_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 27);
  }
}
function HeaderComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_img_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
  }
}
function HeaderComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Hindi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor(router, analyticsService, languageService) {
    this.router = router;
    this.analyticsService = analyticsService;
    this.languageService = languageService;
    this.responsiveMenuVisible = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
    this.cvName = "";
  }
  ngOnInit() {
    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val));
    this.languageFormControl.setValue(this.languageService.language);
  }
  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({
        behavior: 'smooth'
      }));
    }
    this.responsiveMenuVisible = false;
  }
  downloadCV() {
    this.languageService.translateService.get("Header.cvName").subscribe(val => {
      this.cvName = val;
      console.log(val);
      // app url
      let url = window.location.href;
      // Open a new window with the CV
      window.open(url + "/../assets/cv/" + this.cvName, "_blank");
    });
  }
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset;
  }
  changeLanguage(language) {
    this.languageFormControl.setValue(language);
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
          return ctx.getScrollPosition(ctx.getScrollPosition($event));
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 112,
    vars: 55,
    consts: [["nav", "ngbNav"], [1, "navbar", "main-navbar", "on-top"], [1, "container"], [1, "navbar-brand", "text-light", 3, "routerLink"], ["src", "assets/images/logo.png", "width", "25"], ["ngbNav", "", 1, "menu-ul"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "menu-ul", "underline", "nav-text", "cv-btn", 3, "click"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "language-container"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English", 4, "ngIf"], ["class", "flag-text", 4, "ngIf"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/in-flag.gif", "alt", "Hindi", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "arrow-language"], ["d", "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "language-container", "language-container-selector", "active", 2, "border-bottom-left-radius", "0px !important", "border-bottom-right-radius", "0px !important", 3, "click"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/in-flag.gif", "alt", "Hindi"], [1, "flag-text"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check2", "arrow-active"], ["d", "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"], [1, "language-container", "language-container-selector", 2, "margin-top", "1px !important", "border-top-left-radius", "0px !important", "border-top-right-radius", "0px !important", 3, "click"], ["width", "20px", "src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], [1, "main-btn", "cv-btn", 3, "click"], [1, "language-container"], ["src", "https://www.worldometers.info/img/flags/sp-flag.gif", "alt", "Espa\u00F1ol"], ["src", "https://www.worldometers.info/img/flags/us-flag.gif", "alt", "English"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 5, 0)(6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("about"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("jobs"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HeaderComponent_ng_template_21_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("proyects"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, HeaderComponent_ng_template_29_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("contact"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, HeaderComponent_ng_template_37_Template, 1, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 11)(39, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.downloadCV());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "div", 13)(44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, HeaderComponent_img_45_Template, 1, 0, "img", 15)(46, HeaderComponent_span_46_Template, 2, 0, "span", 16)(47, HeaderComponent_img_47_Template, 1, 0, "img", 17)(48, HeaderComponent_span_48_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 20)(52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_52_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.changeLanguage("hi"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.changeLanguage("en"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 28)(65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_65_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 30)(67, "aside", 31)(68, "nav")(69, "ol")(70, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_71_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("about"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_76_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_77_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("jobs"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_82_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_83_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("proyects"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_88_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_89_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll("proyects"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li")(95, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_95_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.downloadCV());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li")(99, "div", 34)(100, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_100_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.changeLanguage("es"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_106_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.changeLanguage("en"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 33, "Header.Item1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 35, "Header.Item2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 37, "Header.Item3"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 39, "Header.Item4"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 41, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "hi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.languageFormControl.value == "hi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](53, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 43, "Header.Item1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 45, "Header.Item2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 47, "Header.Item3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](93, 49, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](97, 51, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.languageFormControl.value == "en");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLinkBase, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["\n\n.main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #0a192f;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n\n  .dropdown-toggle::after {\n  display: none;\n}\n\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBGRGdCUztBQ2ZYO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBR0U7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtBQURKO0FBR007RUFDRSx3QkFBQTtBQURSO0FBR007RUFDRSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHTTtFQUNFLGFBQUE7QUFEUjtBQUVRO0VBQ0UsV0FBQTtBQUFWO0FBS0U7RUFDRSw2REFBQTtFQUNBLFVBQUE7QUFISjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBGRGpETztFQ2tEUCxxREFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQUhKO0FBSUk7RUFDRSxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZOO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURSO0FBRVE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFBVjtBQUNVO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNVO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7QUFDWjtBQUtFO0VBQ0UsNEJBQUE7QUFISjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjtBQUlJO0VBQ0UsY0FBQTtBQUZOO0FBS0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUhKO0FBS0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLRTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSEo7QUFJSTs7O0VBR0UsV0FBQTtFQUNBLGFBQUE7QUFGTjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGTjtBQUdNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZHQUFBO0FBRFI7QUFJTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwwR0FBQTtBQUZSO0FBS007RUFDRSxrQ0FBQTtBQUhSO0FBSVE7RUFDRSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSwwR0FBQTtBQUZWO0FBS1E7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FBQTtBQUhWOztBQVdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkRBQUE7QUFSRjs7QUFXQTtFQUVJO0lBQ0UsU0FBQTtJQUNBLHNCQUFBO0VBVEo7QUFDRjtBQWFBO0VBQ0U7SUFDRSxhQUFBO0VBWEY7QUFDRjtBQWNBO0VBQ0U7O0lBRUUsYUFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwRkRsTlM7QUNxTVg7O0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFiRjs7QUFnQkE7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQWJGOztBQWdCQTtFQUNFLDhCQUFBO0FBYkY7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXpCRjs7QUE0QkE7RUFDRSxhQUFBO0FBekJGOztBQTRCQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrREFBQTtBQXpCRjs7QUE0QkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF6QkY7O0FBNkJFO0VBQ0UsbUJBQUE7QUExQkoiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xyXG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcclxuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kUmVkICAgICAgICAgIDogI2Y2NGE0YTtcclxuJERhcmtSZWQgICAgICA6ICNiOTFjMWM7XHJcbiRCbGFjayAgICAgICAgOiAjMDAwMDAwO1xyXG4kR3JheSAgICAgICAgIDogIzZlNzY4MTtcclxuJExpZ2h0R3JheSAgICA6ICNkMWQ1ZGI7XHJcbiRMaWdodGVzdEdyYXkgOiAjZjFmNWY5O1xyXG4kRGFya0dyYXkgICAgIDogIzQ0NDk1MDtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuXHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3RoZW1lcy5zY3NzXCI7XHJcbi5tYWluLW5hdmJhciB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQ6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgaGVhZGVyLWNvbG9yKTtcclxuICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gIC5tZW51LXVsIHtcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luOiAwcHggMTNweDtcclxuICAgIH1cclxuICAgIC8vIEZpcnN0IGFuZCBMYXN0IGxpIGhhcyBubyBtYXJnaW5cclxuICAgIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lbnUtcmVzcG9uc2l2ZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuICAgIGxpIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jdi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sYW5ndWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hc2lkZS1zaG93IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICByaWdodDogMHB4O1xyXG4gIH1cclxuICBhc2lkZSB7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgcHJveWVjdC1ib3gtY29sb3IpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC02MjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMiwgMTIsIDI3LCAwLjcpIC0xMHB4IDBweCAzMHB4IC0xNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbiAgICBuYXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIG1lbnUtbGluay1jb2xvcik7XHJcbiAgICAgIG9sIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRleHQtaGlnaGxpZ2h0LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDIwcHggMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmN2LWJ0biB7XHJcbiAgICBwYWRkaW5nOiA3cHggMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAubmF2LW51bWJlciB7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5uYXYtdGV4dCB7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBtZW51LWxpbmstY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAubWVudS13cmFwcGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICAuaGFtYnVyZ2VyLW1lbnUsXHJcbiAgICAuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIsXHJcbiAgICAuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogMS41cHg7XHJcbiAgICB9XHJcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcclxuICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuICAgICAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgJi5hbmltYXRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub24tdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG59XHJcblxyXG4ubmF2LXNoYWRvdyB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xMHB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubWFpbi1uYXZiYXIge1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgyN3B4KSB7XHJcbiAgbmF2IC5uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MjdweCkge1xyXG4gIC5tZW51LXdyYXBwZXIsXHJcbiAgLm1lbnUtcmVzcG9uc2l2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZsYWctdGV4dCB7XHJcbiAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgbWVudS1saW5rLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNzJhNDU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMGExOTJmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDExcHggOHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzE3MmE0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZTphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIiBcIjtcclxuLy8gICAgIGJhY2tncm91bmQ6ICM1OGUyYzQ7XHJcbi8vICAgICB3aWR0aDogNjElO1xyXG4vLyAgICAgaGVpZ2h0OiAxcHg7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjFweDtcclxuLy8gfVxyXG4uYXJyb3ctbGFuZ3VhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgZmlsbDogIzY0ZmZkYTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNjY2Q2ZjYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYigyIDEyIDI3IC8gNzAlKTtcclxufVxyXG5cclxuLmFycm93LWFjdGl2ZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjVweDtcclxuICBmaWxsOiAjNjRmZmRhO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xyXG4gIC5hcnJvdy1hY3RpdmUge1xyXG4gICAgdmlzaWJpbGl0eTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateMenu", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0,
        transform: "translateY(-50%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 2541:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);




function AboutComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 15);
  }
  if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function AboutComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r2);
  }
}
class AboutComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 20,
    vars: 9,
    consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skills-list"], ["class", "skill-element", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "about-img-container"], ["width", "400", "height", "300", "src", "assets/images/me4.jpg", "alt", "", 1, "rounded", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 1, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AboutComponent_li_15_Template, 3, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_19_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_image", "about", "image");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, "AboutMe.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, "AboutMe.Paragraphs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, "AboutMe.Technologies"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["@charset \"UTF-8\";\n\n\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border: 2px solid #64ffda;\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 394px;\n  height: 305px;\n  border-radius: 3px;\n  bottom: 290px;\n  left: 23px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  color: #8892b0;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRE47QUFJSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUZOO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwRkN6Qk87RUQwQlAsY0FBQTtBQUxKO0FBTUk7RUFDRSxtQkFBQTtBQUpOO0FBT0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxOOztBQVVBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFQRjtBQUNGO0FBVUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBVEo7RUFXRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFUSjtBQUNGO0FBYUE7RUFFSTtJQUNFLFdBQUE7RUFaSjtFQWNJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFaTjtFQWVJO0lBQ0UsYUFBQTtFQWJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi90aGVtZXMuc2Nzc1wiO1xyXG5cclxuLmFib3V0IHtcclxuICAuYWJvdXQtZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzI0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMzk0cHg7XHJcbiAgICAgIGhlaWdodDogMzA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYm90dG9tOiAyOTBweDtcclxuICAgICAgbGVmdDogMjNweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNDBweCwgMjAwcHgpKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5za2lsbC1lbGVtZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgYm9keS10ZXh0LWNvbG9yKTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCLDosKWwrlcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuYWJvdXQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hYm91dCB7XHJcbiAgICAuYWJvdXQtaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtaW1nLWNvbnRhaW5lcjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgYm90dG9tOiAxOTBweDtcclxuICAgICAgbGVmdDogNzRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hYm91dCB7XHJcbiAgICAuYWJvdXQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xyXG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcclxuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kUmVkICAgICAgICAgIDogI2Y2NGE0YTtcclxuJERhcmtSZWQgICAgICA6ICNiOTFjMWM7XHJcbiRCbGFjayAgICAgICAgOiAjMDAwMDAwO1xyXG4kR3JheSAgICAgICAgIDogIzZlNzY4MTtcclxuJExpZ2h0R3JheSAgICA6ICNkMWQ1ZGI7XHJcbiRMaWdodGVzdEdyYXkgOiAjZjFmNWY5O1xyXG4kRGFya0dyYXkgICAgIDogIzQ0NDk1MDtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 155:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerComponent: () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);




class BannerComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function BannerComponent_Factory(t) {
    return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BannerComponent,
    selectors: [["app-banner"]],
    decls: 22,
    vars: 16,
    consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], ["href", "mailto:sourabh.joshi@gmail.com", "target", "_black", 1, "main-btn", 3, "click"]],
    template: function BannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_19_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "banner", "email");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bannerTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Banner.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "Banner.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "Banner.Subtitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 12, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 14, "Banner.ActionBtn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["\n\n.banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNHQTtFQUNJLGlCQUFBO0FBREo7QUFHSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBRFI7QUFHUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFEWjtBQUdZO0VBQ0ksZ0JBQUE7QUFEaEI7QUFJWTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBGREhMO0FDQ1g7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1KRFpMO0FDU1g7QUFNWTtFQUNJLGNBQUE7QUFKaEI7QUFNWTtFQUNJLGNBQUE7QUFKaEI7QUFPWTtFQUNJLG1CQUFBO0FBTGhCO0FBUVk7RUFDSSxnQkFBQTtBQU5oQjtBQVNZO0VBQ0ksWUFBQTtBQVBoQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiRSZWQgICAgICAgICAgOiAjZjY0YTRhO1xyXG4kRGFya1JlZCAgICAgIDogI2I5MWMxYztcclxuJEJsYWNrICAgICAgICA6ICMwMDAwMDA7XHJcbiRHcmF5ICAgICAgICAgOiAjNmU3NjgxO1xyXG4kTGlnaHRHcmF5ICAgIDogI2QxZDVkYjtcclxuJExpZ2h0ZXN0R3JheSA6ICNmMWY1Zjk7XHJcbiREYXJrR3JheSAgICAgOiAjNDQ0OTUwO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG5cclxuIiwiXHJcbkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3RoZW1lcy5zY3NzXCI7XHJcblxyXG4uYmFubmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgLnNlY3Rpb24tYm94LWJhbm5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiwgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJE1haW5Gb250O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRpdGxlLWhlYWRlci1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7ICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIGJvZHktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYW5uZXItZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpdi1idG4tYmFubmVye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgfSAgICBcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: "translateX(-50px)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: "none"
      }))])])])])]
    }
  });
}

/***/ }),

/***/ 7301:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



class ContactComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 17,
    vars: 12,
    consts: [["id", "contact", 1, "section"], [1, "container", "contact"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:meet2sourabh@gmail.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "click"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_14_listener() {
          return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" 05. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Contact.Pretitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Contact.Content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "Contact.Btn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["\n\n.contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0k7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBRFI7QUFJSTtFQUVJLGtCQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFIUjtBQUtJO0VBQ0ksa0JBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwRkRoQ0c7RUNpQ0gsbUJBQUE7RUFDQSxtQkFBQTtFQUlBLHVCQUFBO0VBQ0Esa0JBQUE7QUFIUjs7QUFRQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VBTk47RUFRTTtJQUNJLG1CQUFBO0lBQ0Esc0JBQUE7RUFOVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJFJlZCAgICAgICAgICA6ICNmNjRhNGE7XHJcbiREYXJrUmVkICAgICAgOiAjYjkxYzFjO1xyXG4kQmxhY2sgICAgICAgIDogIzAwMDAwMDtcclxuJEdyYXkgICAgICAgICA6ICM2ZTc2ODE7XHJcbiRMaWdodEdyYXkgICAgOiAjZDFkNWRiO1xyXG4kTGlnaHRlc3RHcmF5IDogI2YxZjVmOTtcclxuJERhcmtHcmF5ICAgICA6ICM0NDQ5NTA7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcblxyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi90aGVtZXMuc2Nzc1wiO1xyXG5cclxuLmNvbnRhY3R7XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC10aXRsZXtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRpdGxlLWhlYWRlci1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXByZS10aXRsZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIFxyXG4gICAgLmNvbnRhY3R7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuXHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/jobs.component */ 2019);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyects/proyects.component */ 9717);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 5237);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 7301);








class HomeComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.analyticsService.sendAnalyticPageView("/about-me", "My introduction");
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 7,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-banner")(2, "app-about")(3, "app-jobs")(4, "app-proyects")(5, "app-more-proyects")(6, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__.JobsComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_4__.ProyectsComponent, _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__.MoreProyectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3908:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2865);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 155);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs/jobs.component */ 2019);
/* harmony import */ var _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-proyects/more-proyects.component */ 5237);
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proyects/proyects.component */ 9717);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__.JobsComponent, _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_6__.ProyectsComponent, _more_proyects_more_proyects_component__WEBPACK_IMPORTED_MODULE_5__.MoreProyectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule]
  });
})();

/***/ }),

/***/ 2019:
/*!********************************************************!*\
  !*** ./src/app/components/home/jobs/jobs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsComponent: () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);





function JobsComponent_li_12_ng_template_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const jobDescriptionParagraph_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function JobsComponent_li_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, JobsComponent_li_12_ng_template_3_p_6_Template, 2, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
  }
  if (rf & 2) {
    const job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", job_r3.Title, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r3.Tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r3.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r3.Description);
  }
}
function JobsComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JobsComponent_li_12_ng_template_3_Template, 8, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", job_r3.Tab)("ngbNavItem", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r3.Tab);
  }
}
class JobsComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
    this.active = 0;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobsComponent_Factory(t) {
    return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: JobsComponent,
    selectors: [["app-jobs"]],
    decls: 15,
    vars: 8,
    consts: [["nav", "ngbNav"], ["id", "jobs", 1, "section"], [1, "container", "jobs"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeIdChange", "activeId"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]],
    template: function JobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5)(5, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "ul", 8, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("activeIdChange", function JobsComponent_Template_ul_activeIdChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.active, $event) || (ctx.active = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobsComponent_li_12_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const nav_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Experience.Jobs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", nav_r5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["@charset \"UTF-8\";\n\n\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 114.33px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #ccd6f6;\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: rgb(48, 60, 85);\n}\n\n.jobs[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2pvYnMvam9icy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEVBQUE7QURFQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLGVBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRkNwQ087RURxQ1AsZUFBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7QUFKSjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtBQUxOO0FBU0U7RUFDRSwwRkNqRU87RURrRVAsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJKO0FBVUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQVJOOztBQWFBO0VBRUk7SUFDRSxZQUFBO0VBWEo7RUFjQTtJQUNFLHlCQUFBO0VBWkY7RUFjRTtJQUNFLDJCQUFBO0VBWko7RUFlRTtJQUNFLGNBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBYko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3RoZW1lcy5zY3NzXCI7XHJcblxyXG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzOHB4O1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTE0LjMzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHByb3llY3QtYm94LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgcHJveWVjdC1ib3gtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgbWVudS1saW5rLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbWFwLWdldCgkQ3VycmVudFRoZW1lLCBibG9jay1iYWNrZ3JvdW5kKTtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDQ4LCA2MCwgODUpO1xyXG4gIH1cclxufVxyXG5cclxuLmpvYnMge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAudGl0bGUtdGFiLWNvbnRlbnQge1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGl0bGUtaGVhZGVyLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgLmNvbXBhbnktdGFiLWNvbnRlbnQge1xyXG4gICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuam9iLXRpbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0Ym94LWZvb3Rlci10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuam9iLWRlc2NyaXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIsOiwpbCuVwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRleHQtaGlnaGxpZ2h0LWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5qb2JzIHtcclxuICAgIC5qb2ItZGVzY3JpcHRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuam9icy10YWJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcbiRSZWQgICAgICAgICAgOiAjZjY0YTRhO1xyXG4kRGFya1JlZCAgICAgIDogI2I5MWMxYztcclxuJEJsYWNrICAgICAgICA6ICMwMDAwMDA7XHJcbiRHcmF5ICAgICAgICAgOiAjNmU3NjgxO1xyXG4kTGlnaHRHcmF5ICAgIDogI2QxZDVkYjtcclxuJExpZ2h0ZXN0R3JheSA6ICNmMWY1Zjk7XHJcbiREYXJrR3JheSAgICAgOiAjNDQ0OTUwO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5237:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/more-proyects/more-proyects.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreProyectsComponent: () => (/* binding */ MoreProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);






function MoreProyectsComponent_div_11_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r4);
  }
}
function MoreProyectsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreProyectsComponent_div_11_Template_div_click_0_listener($event) {
      const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.redirect(project_r2["demoLink"], $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14)(6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreProyectsComponent_div_11_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.analyticsService.sendAnalyticEvent("click_pokemonlist_external_link", "proyects", "click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreProyectsComponent_div_11_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.analyticsService.sendAnalyticEvent("click_pokemonlist_github", "proyects", "click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoreProyectsComponent_div_11_li_16_Template, 3, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r2["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r2["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r2.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r2.Technologies);
  }
}
class MoreProyectsComponent {
  constructor(router, analyticsService) {
    this.router = router;
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  redirect(route, event) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return;
    }
    window.open(route, '_blank');
  }
  static #_ = this.ɵfac = function MoreProyectsComponent_Factory(t) {
    return new (t || MoreProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MoreProyectsComponent,
    selectors: [["app-more-proyects"]],
    decls: 13,
    vars: 6,
    consts: [[1, "section", "more-proyects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "n-section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 proyect-col", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "proyect-col", 3, "click"], [1, "more-proyect-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["src", "assets/icons/folder.svg", "width", "40"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "click", "href"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-proyect-title", "mt-4"], [1, "other-proyect-description"], [1, "more-proyects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"]],
    template: function MoreProyectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MoreProyectsComponent_div_11_Template, 17, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "OtherProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, "OtherProjects.Projects"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["\n\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL21vcmUtcHJveWVjdHMvbW9yZS1wcm95ZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0dJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFEUjtBQUdRO0VBQ0ksa0RBQUE7RUFFQSwwREFBQTtFQUlBLGFBQUE7RUFJQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0Esc0JBQUE7RUFJQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwREFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURaO0FBR1k7RUFHSSwyQkFBQTtBQURoQjtBQUdZO0VBQ0ksa0RBQUE7QUFEaEI7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZoQjtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhoQjtBQU1ZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFKaEI7QUFPWTtFQUlJLGFBQUE7RUFJQSxxQkFBQTtFQUlBLFlBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFPZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRkR0RVQ7QUNpRVg7QUFNb0I7RUFDSSxxQkFBQTtBQUp4Qjs7QUFjQTtFQUVRO0lBQ0ksWUFBQTtFQVpWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xyXG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcclxuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG4kUmVkICAgICAgICAgIDogI2Y2NGE0YTtcclxuJERhcmtSZWQgICAgICA6ICNiOTFjMWM7XHJcbiRCbGFjayAgICAgICAgOiAjMDAwMDAwO1xyXG4kR3JheSAgICAgICAgIDogIzZlNzY4MTtcclxuJExpZ2h0R3JheSAgICA6ICNkMWQ1ZGI7XHJcbiRMaWdodGVzdEdyYXkgOiAjZjFmNWY5O1xyXG4kRGFya0dyYXkgICAgIDogIzQ0NDk1MDtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuXHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3RoZW1lcy5zY3NzXCI7XHJcblxyXG4ubW9yZS1wcm95ZWN0c3tcclxuICAgIC5wcm95ZWN0LWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgIC5tb3JlLXByb3llY3QtYm94IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLDEyLDI3LDAuNyk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDEuNzVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgcHJveWVjdC1ib3gtY29sb3IpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwxMiwyNywwLjcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRleHQtaGlnaGxpZ2h0LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm90aGVyLXByb3llY3QtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGl0bGUtaGVhZGVyLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm90aGVyLXByb3llY3QtZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0Ym94LWZvb3Rlci10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vcmUtcHJveWVjdHMtc2tpbGxze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIGJvZHktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnVuZGVybGluZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMzAwcHgpe1xyXG4gICAgLm1vcmUtcHJveWVjdHN7XHJcbiAgICAgICAgLnByb3llY3QtY29se1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9717:
/*!****************************************************************!*\
  !*** ./src/app/components/home/proyects/proyects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProyectsComponent: () => (/* binding */ ProyectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);





const _c0 = ["imgContainer"];
function ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r3.Title);
  }
}
function ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template, 3, 2, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r3.Title + ctx_r5.slide + i_r5);
  }
}
function ProyectsComponent_div_9_owl_carousel_o_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r3.imgs);
  }
}
function ProyectsComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r3.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r3.imgs[0]);
  }
}
function ProyectsComponent_div_9_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r7);
  }
}
function ProyectsComponent_div_9_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r3["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProyectsComponent_div_9_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r3["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r3.Title);
  }
}
function ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r3 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r3.Title + ctx_r5.slide + i_r5);
  }
}
function ProyectsComponent_div_9_owl_carousel_o_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r5.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r3.imgs);
  }
}
function ProyectsComponent_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r3.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r3.imgs[0]);
  }
}
function ProyectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectsComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 9)(2, ProyectsComponent_div_9_div_2_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11)(4, "div", 12)(5, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProyectsComponent_div_9_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.debug());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProyectsComponent_div_9_li_13_Template, 3, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProyectsComponent_div_9_a_15_Template, 2, 1, "a", 20)(16, ProyectsComponent_div_9_a_16_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProyectsComponent_div_9_owl_carousel_o_17_Template, 2, 2, "owl-carousel-o", 9)(18, ProyectsComponent_div_9_div_18_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", project_r3.img, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("proyect-info-right", i_r5 % 2 == 0)("proyect-info-left", i_r5 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r5 % 2 == 0)("text-left", i_r5 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 33, "FeatureProjects.Label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r5 % 2 == 0)("text-left", i_r5 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r3.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", project_r3.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("justify-content-end", i_r5 % 2 == 0)("justify-content-start", i_r5 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r3.Technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r5 % 2 == 0)("text-left", i_r5 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r3["ghLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r3["demoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 % 2 != 0);
  }
}
class ProyectsComponent {
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      navSpeed: 700,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000
    };
  }
  ngOnInit() {}
  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function ProyectsComponent_Factory(t) {
    return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProyectsComponent,
    selectors: [["app-proyects"]],
    viewQuery: function ProyectsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
      }
    },
    decls: 12,
    vars: 6,
    consts: [["imgContainer", ""], ["id", "proyects", 1, "section", "proyects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["class", "d-flex proyect-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "proyect-container"], ["class", "owl-carousel-o", 3, "options", 4, "ngIf"], ["class", "img-feature-proyect-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], [1, "h-100"], [1, "proyect-box"], [1, "feature-proyect"], [1, "proyect-name"], [1, "proyect-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], [1, "proyect-skills"], ["class", "ml-3", 4, "ngFor", "ngForOf"], [1, "proyect-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], [1, "owl-carousel-o", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "img-container"], [1, "img-feature-proyect", "rounded", 3, "src", "alt"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-proyect-container"], [1, "img-feature-proyect-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-proyect", "rounded", 3, "src", "alt"], [1, "ml-3"], [1, "underline", "technology"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "ml-3", "fab", "fa-github"], [1, "ml-3", "fas", "fa-external-link-alt"]],
    template: function ProyectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5)(5, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProyectsComponent_div_9_Template, 19, 35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "FeatureProjects.Projects"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["\n\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%] {\n  height: 360px;\n  margin: 100px 0;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .feature-proyect[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.img-feature-proyect-container[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%]   .img-feature-proyect-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%]   .img-feature-proyect[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyect-info-right[_ngcontent-%COMP%], .proyect-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .proyect-info-right[_ngcontent-%COMP%], .proyect-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .img-feature-proyect-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .proyects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%], .proyects[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: rgba(10, 25, 47, 0.8901960784);\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n\n  .owl-theme .owl-dots .owl-dot span {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 320px;\n  overflow: auto;\n  border-radius: 3px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb3llY3RzL3Byb3llY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUFSO0FBQ1E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUNRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ1o7QUFDUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBGREpMO0VDS0ssZ0JBQUE7RUFDQSxjQUFBO0FBRWhCO0FBQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRWhCO0FBQVk7RUFDSSxrREFBQTtFQUVBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVoQjtBQUFZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBSUEsYUFBQTtFQUdBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQURnQjtFQUNJLGVBQUE7RUFDQSwwRkR4Q1Q7RUN5Q1MsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR3BCO0FBRm9CO0VBQ0UsbUJBQUE7QUFJdEI7QUFBWTtFQUNJLGdCQUFBO0FBRWhCO0FBRGdCO0VBQ0ksZUFBQTtBQUdwQjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksYUFBQTtFQUFOO0VBRUU7SUFDSSxVQUFBO0lBQ0EseUJBQUE7SUFDQSw4QkFBQTtFQUFOO0VBQ007SUFDSSxtQkFBQTtJQUNBLHNCQUFBO0VBQ1Y7RUFDTTtJQUNJLFdBQUE7RUFDVjtFQUVFOztJQUVJLFVBQUE7RUFBTjtBQUNGO0FBR0E7RUFFSTs7SUFFSSxpQ0FBQTtFQUZOO0FBQ0Y7QUFLQTtFQUNJO0lBQ0ksYUFBQTtFQUhOO0VBTU07SUFDSSx1QkFBQTtJQUNBLHlCQUFBO0VBSlY7RUFLVTtJQUNJLFdBQUE7RUFIZDtFQUtVO0lBQ0ksV0FBQTtFQUhkO0VBS1U7SUFDSSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLHdDQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQUhkO0VBS1U7O0lBRUkseUJBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0VBSGQ7RUFJYzs7SUFDSSxjQUFBO0VBRGxCO0VBSVU7SUFDSSxhQUFBO0VBRmQ7RUFLTTs7SUFFSSxZQUFBO0VBSFY7RUFLTTs7SUFFSSw2QkFBQTtFQUhWO0VBS007SUFDSSxrQ0FBQTtFQUhWO0VBS007SUFDSSxrQ0FBQTtFQUhWO0VBT007O0lBRUksYUFBQTtJQUNBLDBDQUFBO0VBTFY7QUFDRjtBQVNBOztFQUVJLGtDQUFBO0FBUEo7O0FBVUE7RUFDSSxvQ0FBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUEo7O0FBV0EsVUFBQTtBQUVBO0VBQ0ksVUFBQTtBQVRKOztBQWFBLFVBQUE7QUFFQztFQUNHLGlDQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFlQSxXQUFBO0FBRUM7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBaUJBLG9CQUFBO0FBRUM7RUFDRyxtQkFBQTtBQWZKIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuJFJlZCAgICAgICAgICA6ICNmNjRhNGE7XHJcbiREYXJrUmVkICAgICAgOiAjYjkxYzFjO1xyXG4kQmxhY2sgICAgICAgIDogIzAwMDAwMDtcclxuJEdyYXkgICAgICAgICA6ICM2ZTc2ODE7XHJcbiRMaWdodEdyYXkgICAgOiAjZDFkNWRiO1xyXG4kTGlnaHRlc3RHcmF5IDogI2YxZjVmOTtcclxuJERhcmtHcmF5ICAgICA6ICM0NDQ5NTA7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcblxyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi90aGVtZXMuc2Nzc1wiO1xyXG4ucHJveWVjdHMge1xyXG4gICAgLnByb3llY3QtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggMDtcclxuICAgICAgICAucHJveWVjdC1pbmZvLWxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb3llY3QtaW5mby1yaWdodCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNTdweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJveWVjdC1ib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAuZmVhdHVyZS1wcm95ZWN0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm95ZWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHRpdGxlLWhlYWRlci1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb3llY3QtZGVzY3JpcHRpb24tYm94IHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0LWJveC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBwcm95ZWN0Ym94LWZvb3Rlci10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJveWVjdC1za2lsbHMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkQ3VycmVudFRoZW1lLCBib2R5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIC50ZWNobm9sb2d5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb3llY3QtbGlua3Mge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm93bC1jYXJvdXNlbC1ve1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5pbWctZmVhdHVyZS1wcm95ZWN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAgbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAub3dsLWNhcm91c2VsLW97XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbWctZmVhdHVyZS1wcm95ZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICAuaW1nLWZlYXR1cmUtcHJveWVjdC1ib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWZlYXR1cmUtcHJveWVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm95ZWN0LWluZm8tcmlnaHQsXHJcbiAgICAucHJveWVjdC1pbmZvLWxlZnQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5wcm95ZWN0LWluZm8tcmlnaHQsXHJcbiAgICAucHJveWVjdC1pbmZvLWxlZnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAub3dsLWNhcm91c2VsLW97XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5wcm95ZWN0cyB7XHJcbiAgICAgICAgLnByb3llY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzNweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5wcm95ZWN0LWluZm8tbGVmdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJveWVjdC1pbmZvLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm95ZWN0LWRlc2NyaXB0aW9uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRDdXJyZW50VGhlbWUsIHByb3llY3Rib3gtZm9vdGVyLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm95ZWN0LWluZm8tcmlnaHQsXHJcbiAgICAgICAgICAgIC5wcm95ZWN0LWluZm8tbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgLnByb3llY3QtYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLWZlYXR1cmUtcHJveWVjdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJveWVjdC1pbmZvLXJpZ2h0LFxyXG4gICAgICAgIC5wcm95ZWN0LWluZm8tbGVmdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtcmlnaHQsXHJcbiAgICAgICAgLnRleHQtbGVmdCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuanVzdGlmeS1jb250ZW50LWVuZCB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5wcm95ZWN0LWluZm8tcmlnaHQgLnByb3llY3QtYm94LFxyXG4gICAgICAgIC5wcm95ZWN0LWluZm8tbGVmdCAucHJveWVjdC1ib3gge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGExOTJmZTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sXHJcbiA6Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogN3B4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggIzg4OTJiMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkQ3VycmVudFRoZW1lLCB0ZXh0LWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJEN1cnJlbnRUaGVtZSwgdGV4dC1oaWdobGlnaHQtY29sb3IpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 213:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 6711);


class AnalyticsService {
  constructor($gaService) {
    this.$gaService = $gaService;
  }
  sendAnalyticEvent(action, category, label) {
    this.$gaService.event(action, category, label);
  }
  sendAnalyticPageView(path, title) {
    this.$gaService.pageView(path, title);
  }
  static #_ = this.ɵfac = function AnalyticsService_Factory(t) {
    return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnalyticsService,
    factory: AnalyticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9263:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



class LanguageService {
  constructor(translateService, location) {
    this.translateService = translateService;
    this.location = location;
  }
  initLanguage() {
    this.translateService.addLangs(["en", "hi"]);
    let language = navigator.language || navigator.userLanguage;
    language = language.split("-").includes("hi") ? "hi" : "en";
    this.translateService.setDefaultLang(language);
    // Change the URL without navigate:
    this.location.go(language);
    this.language = language;
  }
  changeLanguage(language) {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
  static #_ = this.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  trackAnalyticID: "G-ZXTV3WS9GX" // my bmsrb@gmail analytics id
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map