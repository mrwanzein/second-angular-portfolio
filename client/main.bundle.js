webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_5__components_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__components_contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n        grid-template-areas: \r\n    \"about\"\r\n    \"skills\";\r\n    background: rgb(247, 247, 247);\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    padding: 15px;\r\n    height: 100%;\r\n}\r\n\r\n.about {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: about;\r\n    margin: 10px;\r\n    padding: 25px;\r\n    background: rgba(223, 223, 223, 0.3);\r\n    -webkit-box-shadow: -3px 3px 5px 3px rgba(0, 0, 0, 0.600);\r\n            box-shadow: -3px 3px 5px 3px rgba(0, 0, 0, 0.600);\r\n    line-height: 1.3em;\r\n}\r\n\r\n.skills {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: skills;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    font-size: 0.80em;\r\n}\r\n\r\n.lit {\r\n    color: red;\r\n}\r\n\r\n@media only screen and (min-width: 450px) {\r\n    .about {\r\n        height: 350px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 520px) {\r\n    .about {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        font-size: 1.15em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n    .grid {\r\n        -ms-grid-columns: 250px 1fr 250px;\r\n            grid-template-columns: 250px 1fr 250px;\r\n            grid-template-areas: \r\n        \". about .\"\r\n        \". skills .\";\r\n        background: rgb(247, 247, 247);\r\n    }\r\n\r\n    .about {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        grid-area: about;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        height: 600px;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        font-size: 1.3em;\r\n        line-height: 1.4em;\r\n    }\r\n\r\n    .skills {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        grid-area: skills;\r\n        font-size: 1.2em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1500px) {\r\n    .grid {\r\n        -ms-grid-columns: 400px 1fr 400px;\r\n            grid-template-columns: 400px 1fr 400px;\r\n            grid-template-areas: \r\n        \". about .\"\r\n        \". skills .\";\r\n        background: rgb(247, 247, 247);\r\n    }\r\n\r\n    .about {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        grid-area: about;\r\n        font-size: 1.6em;\r\n        line-height: 1.6em;\r\n    }\r\n\r\n    .skills {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        grid-area: skills;\r\n        font-size: 1.2em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"grid\">\n    <div class=\"about\">Hi, my name is Mrwan - pronounced mahr-wan - , I live in Cananda Montreal and I started my journey into \n      programming with a focus on web developement since november 2nd 2017. Most of the knowledge that I gained was through \n      the internet(Udemy, freecodecamp, youtube, etc...), so I had to be very disciplined and dedicated about it if I wanted \n      to grow. I am very eager to work with a team of developers, I can easily be coached so I can refine my craft to the \n      next level in order to provide a valuable service. I continiously learn outside of the job since I know how dynamic the software \n      developement world can be. Thank you for reading!\n    </div>\n    <div class=\"skills\">\n      <h2>TECHNICAL SKILLS</h2>\n      <h3 style=\"text-decoration: underline;\">Front-end</h3>\n      <p>\n        HTML &nbsp; <i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire\"></i>\n      </p>\n      <p style=\"font-size: 98%\">\n        CSS / FLEXBOX / CSS GRID &nbsp; <i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i>\n      </p>\n      <p>\n        JAVASCRIPT &nbsp; <i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i>\n      </p>\n      <p>\n        ANGULAR 5 &nbsp; <i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i>\n      </p>\n      <h3 style=\"text-decoration: underline;\">Back-end</h3>\n      <p>\n        NODE.JS (EXPRESS) &nbsp; <i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i>\n      </p>\n      <p>\n        MONGODB &nbsp; <i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire lit\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i><i class=\"fas fa-fire\"></i>\n      </p>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\r\n    background: rgb(247, 247, 247);\r\n    padding: 20px 0 20px 0;\r\n    height: 100vh;\r\n}\r\n\r\nform {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n        grid-template-areas: \r\n    \"name\"\r\n    \"subject\"\r\n    \"email\"\r\n    \"msg\"\r\n    \"btn\"\r\n    \"msgSuccess\";\r\n    grid-gap: 30px;\r\n    padding: 0 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\ninput, textarea {\r\n    text-indent: 10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n\r\ntextarea::-webkit-input-placeholder {\r\n      padding-top: 5px; \r\n  }\r\n\r\ntextarea:-ms-input-placeholder {\r\n      padding-top: 5px; \r\n  }\r\n\r\ntextarea::-ms-input-placeholder {\r\n      padding-top: 5px; \r\n  }\r\n\r\ntextarea::placeholder {\r\n      padding-top: 5px; \r\n  }\r\n\r\n#inputName {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: name;\r\n}\r\n\r\n#inputSubject {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: subject;\r\n}\r\n\r\n#inputEmail {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: email;\r\n}\r\n\r\n#inputMsg {\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: msg;\r\n}\r\n\r\n#inputName, #inputSubject, #inputEmail, #inputMsg {\r\n    border-color: #2471FF;\r\n    border-radius: 3px;\r\n}\r\n\r\n#inputName, #inputSubject, #inputEmail {\r\n    height: 30px;\r\n}\r\n\r\n#msgSuccess {\r\n    -ms-grid-row: 6;\r\n    -ms-grid-column: 1;\r\n    grid-area: msgSuccess;\r\n    color: green;\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    text-align: center;\r\n    font-size: 1.1em;\r\n}\r\n\r\n#btn {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 1;\r\n    grid-area: btn;\r\n    background: #2471FF;\r\n    border: none;\r\n    padding: 10px 20px 10px 20px;\r\n    border-bottom: 3px solid #5994FF;\r\n    border-radius: 3px;\r\n    color: #D2E2FF;\r\n}\r\n\r\n#btn:hover {\r\n    background: rgba(47, 88, 165, 0.7);\r\n    cursor: pointer;\r\n}\r\n\r\n#btn:active {\r\n    background: rgb(105, 105, 105);\r\n}\r\n\r\n#inputErr {\r\n    color: red;\r\n}\r\n\r\nh3, h4 {\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    margin: 10px;\r\n}\r\n\r\nh4 {\r\n    margin: 20px 0 20px 10px;\r\n}\r\n\r\n@media only screen and (min-width: 375px) {\r\n    section {\r\n        height: calc(100vh - 130px);\r\n    }\r\n\r\n    .centered {\r\n        margin-top: 15%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\r\n    form {\r\n        -ms-grid-columns: 200px 1fr 1fr 200px;\r\n            grid-template-columns: 200px 1fr 1fr 200px;\r\n            grid-template-areas: \r\n        \". name name .\"\r\n        \". subject subject .\"\r\n        \". email email .\"\r\n        \". msg msg .\"\r\n        \". btn btn .\"\r\n        \". msgSuccess msgSuccess .\";\r\n    }\r\n\r\n    #inputName {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: name;\r\n    }\r\n    \r\n    #inputSubject {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: subject;\r\n    }\r\n    \r\n    #inputEmail {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: email;\r\n    }\r\n    \r\n    #inputMsg {\r\n        -ms-grid-row: 4;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: msg;\r\n    }\r\n\r\n    #msgSuccess {\r\n        -ms-grid-row: 6;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: msgSuccess;\r\n    }\r\n    \r\n    #btn {\r\n        -ms-grid-row: 5;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: btn;\r\n    }\r\n\r\n    h3, h4 {\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        margin: 50px 0;\r\n    }\r\n\r\n    section {\r\n        height: calc(100vh - 130px);\r\n    }\r\n\r\n    .centered {\r\n        margin: 5% 0;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"centered\">\n    <h3>Want to get in touch? Send me an email directly via this form.</h3>\n    <h4>All fields are required: &nbsp; <span id=\"inputErr\" *ngIf=\"bool == true\">{{ inputErr }}</span></h4>\n      <form onsubmit=\"return false\">\n        <input id=\"inputName\" type=\"text\" name=\"name\" placeholder=\"Your Name\" autocomplete=\"off\">\n        <input id=\"inputSubject\" type=\"text\" name=\"subject\" placeholder=\"Your Subject\" autocomplete=\"off\">\n        <input id=\"inputEmail\" type=\"text\" name=\"email\" placeholder=\"Your Email Address\" autocomplete=\"off\">\n        <textarea id=\"inputMsg\" name=\"text\" name=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Your Message\" autocomplete=\"off\"></textarea>\n        <button id=\"btn\" (click)=\"sendMail()\" type=\"submit\">SEND</button>\n      </form>\n    <h5 id=\"msgSuccess\" *ngIf=\"bool == false\">{{ msgSuccess }}</h5>\n  </div>   \n</section>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.inputErr = '*Please fill in missing input fields or fill a valid email address';
        this.msgSuccess = 'Your message has been sent!';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendMail = function () {
        var name = document.getElementById('inputName'), subject = document.getElementById('inputSubject'), email = document.getElementById('inputEmail'), msg = document.getElementById('inputMsg');
        var obj = {
            name: name.value,
            subject: subject.value,
            email: email.value,
            message: msg.value
        };
        var validateEmail = function () {
            var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;
            return re.test(email.value);
        };
        if (!name.value || !email.value || !msg.value || !subject.value || !validateEmail()) {
            this.bool = true;
        }
        else {
            this.bool = false;
            setTimeout(function () {
                window.location.reload();
            }, 1500);
            // http request must have return statement
            // no need to use json.stringify if you use body-parser
            return this.http.post('https://mrwanzein.herokuapp.com/client-contact', obj).subscribe();
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    background: black;\r\n    padding: 5px;\r\n    border-top: 1px solid rgb(15, 177, 15);\r\n}\r\n\r\np {\r\n    color: white;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n}\r\n\r\na:hover {\r\n    color: lightgrey;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"footer\">\n   <p>Copyright © 2018 Mrwan Zein &nbsp;&nbsp; <a href=\"https://github.com/mrwanzein\" target=\"_blank\"><i class=\"fab fa-github-square\" title=\"Github account\"></i></a></p>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner {\r\n    width: 100%;\r\n    height: calc(100vh - 130px);\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/app/components/img/amazing-background-beach.jpg")) + ");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    display: table; \r\n}\r\n\r\n.vertical-center {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\nsection h2 {\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    color: rgb(241, 241, 241);\r\n    text-shadow: 2px 2px 8px rgb(54, 54, 54); \r\n}\r\n\r\nsection h1 {\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    color: rgb(255, 255, 255);\r\n    text-shadow: 2px 2px 5px rgb(51, 51, 51); \r\n}\r\n\r\nsection.main div {\r\n    margin: 10px;\r\n    width: calc(100% - 20px);\r\n    height: 100px;\r\n    background: rgb(224, 206, 166);\r\n}\r\n\r\nsection.main div h3 {\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    color: black;\r\n}\r\n\r\nsection.main div:hover {\r\n   background: rgba(224, 206, 166, 0.700); \r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n    .banner {\r\n       height: 600px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner\">\n  <div class=\"vertical-center\">\n      <h2>WELCOME, I AM A SOFTWARE DEVELOPER AND I LIKE TO BUILD WEBSITES</h2>\n      <h1>I dwell in the front-end, but i'm not shy to get my feet wet in the back-end</h1>\n  </div>\n</section>\n\n<section class=\"main\">\n  <a routerLink='/portfolio'>  \n    <div>\n      <h3>Check out some side projects</h3>\n    </div>\n  </a>\n  <a routerLink='/about'>\n    <div>\n        <h3>A bit about me</h3>\n    </div>\n  </a>\n  <a routerLink='/contact'>  \n    <div>\n        <h3>Send me an email?</h3>\n    </div>\n  </a>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/img/amazing-background-beach.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "amazing-background-beach.f209d60c68cd332e2e19.jpg";

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    width: 100%;\r\n    height: 130px;\r\n}\r\n\r\nheader .header-main {\r\n    font-family: 'Port Lligat Slab', serif;\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    color: #111;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n}\r\n\r\nheader nav ul {\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n   -webkit-padding-start: 0px;\r\n   -webkit-box-pack: end;\r\n       -ms-flex-pack: end;\r\n           justify-content: flex-end;\r\n   margin: 22px 0 22px 30px;\r\n}\r\n\r\nheader nav ul li {\r\n    display: inline-block;\r\n    list-style: none;\r\n    padding: 0 16px;\r\n}\r\n\r\nheader nav ul li a {\r\n    font-family: 'Port Lligat Slab', serif;\r\n    font-size: 18px;\r\n    color: #111;\r\n}\r\n\r\nnav > ul > li > i {\r\n    color: rgb(15, 177, 15);\r\n    display: none;\r\n    font-size: 30px\r\n}\r\n\r\nheader a:hover {\r\n    border-bottom: 3px solid rgb(15, 177, 15);\r\n}\r\n\r\n.active {\r\n    border-bottom: 3px solid rgb(15, 177, 15);\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (min-width: 345px) {\r\n    header nav ul {\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n     }\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n    nav > ul > li > i {\r\n        display: initial;\r\n    }\r\n\r\n    header nav ul {\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n    }    \r\n\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <div class=\"center\">\n  <a routerLink='/home' routerLinkActive=\"active\" class=\"header-main\">Mrwan Zein</a>\n  </div>\n    <nav>\n        <ul>\n          <li><a routerLink='/portfolio' routerLinkActive=\"active\">Portfolio</a></li>\n          <li><a routerLink='/about' routerLinkActive=\"active\">About</a></li>\n          <li><a routerLink='/contact' routerLinkActive=\"active\">Contact</a></li>\n          <li><i class=\"fas fa-leaf\"></i></li>\n        </ul>\n    </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n        grid-template-areas: \r\n    \"title\"\r\n    \"img-1-title\"\r\n    \"arrow-1\"\r\n    \"img-1\"\r\n    \"img-2-title\"\r\n    \"arrow-2\"\r\n    \"img-2\"\r\n    \"img-3-title\"\r\n    \"arrow-3\"\r\n    \"img-3\"\r\n    \"img-4-title\"\r\n    \"arrow-4\"\r\n    \"img-4\";\r\n    background: rgb(27, 27, 27, 0.900);\r\n}\r\n\r\n.title {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: title;\r\n    padding: 20px 0;\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-weight: 900;\r\n    color: white;\r\n}\r\n\r\n.img-1 {\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: img-1;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/components/postimg/chat_app.png")) + ") center/cover;\r\n    height: 300px;\r\n}\r\n\r\n.img-2 {\r\n    -ms-grid-row: 7;\r\n    -ms-grid-column: 1;\r\n    grid-area: img-2;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/components/postimg/Web_template.png")) + ") center/cover;\r\n    height: 300px;\r\n}\r\n\r\n.img-3 {\r\n    -ms-grid-row: 10;\r\n    -ms-grid-column: 1;\r\n    grid-area: img-3;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/components/postimg/Wiki_viewer.png")) + ") center/cover;\r\n    height: 300px;\r\n}\r\n\r\n.img-4 {\r\n    -ms-grid-row: 13;\r\n    -ms-grid-column: 1;\r\n    grid-area: img-4;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/components/postimg/js_calculator.png")) + ") center/cover;\r\n    height: 300px;\r\n}\r\n\r\n.img-1-title {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: img-1-title;\r\n}\r\n\r\n.img-2-title {\r\n   -ms-grid-row: 5;\r\n   -ms-grid-column: 1;\r\n   grid-area: img-2-title;\r\n}\r\n\r\n.img-3-title {\r\n    -ms-grid-row: 8;\r\n    -ms-grid-column: 1;\r\n    grid-area: img-3-title;\r\n}\r\n\r\n.img-4-title {\r\n   -ms-grid-row: 11;\r\n   -ms-grid-column: 1;\r\n   grid-area: img-4-title;\r\n}\r\n\r\n.img-1-title, .img-2-title, .img-3-title, .img-4-title {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 80px;\r\n    padding: 8px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-weight: 200;\r\n    font-family: Verdana, Tahoma, sans-serif;\r\n    font-style: italic;\r\n    color: white;\r\n    border-top: 3px solid rgb(15, 177, 15);\r\n}\r\n\r\n.arrow-1 {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: arrow-1;\r\n}\r\n\r\n.arrow-2 {\r\n    -ms-grid-row: 6;\r\n    -ms-grid-column: 1;\r\n    grid-area: arrow-2;\r\n}\r\n\r\n.arrow-3 {\r\n    -ms-grid-row: 9;\r\n    -ms-grid-column: 1;\r\n    grid-area: arrow-3;\r\n}\r\n\r\n.arrow-4 {\r\n    -ms-grid-row: 12;\r\n    -ms-grid-column: 1;\r\n    grid-area: arrow-4;\r\n}\r\n\r\n.arrow-1, .arrow-2, .arrow-3, .arrow-4 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 15px;\r\n    height: 25px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.fas {\r\n    color: white;\r\n}\r\n\r\ndiv > a {\r\n    display: block;\r\n    width: inherit;\r\n    height: inherit;\r\n    max-width: inherit;\r\n    min-width:100%;\r\n    max-height: inherit;\r\n    min-height: 100%;\r\n}\r\n\r\ndiv > a:hover {\r\n    background: rgba(0, 0, 0, 0.500);\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n    .grid {\r\n        -ms-grid-columns: 200px 1fr 1fr 200px;\r\n            grid-template-columns: 200px 1fr 1fr 200px;\r\n        grid-gap: 0px;\r\n            grid-template-areas: \r\n        \". title title .\"\r\n        \". img-1-title img-2-title .\"\r\n        \". img-1 img-2 .\"\r\n        \". img-3-title img-4-title .\"\r\n        \". img-3 img-4 .\";\r\n        grid-gap: 10px;\r\n    }\r\n\r\n    .title {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 2;\r\n        -ms-grid-column-span: 2;\r\n        grid-area: title;\r\n    }\r\n    \r\n    .img-1 {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 2;\r\n        grid-area: img-1;\r\n    }\r\n    \r\n    .img-2 {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 3;\r\n        grid-area: img-2;\r\n    }\r\n    \r\n    .img-3 {\r\n        -ms-grid-row: 5;\r\n        -ms-grid-column: 2;\r\n        grid-area: img-3;\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n    .img-4 {\r\n        -ms-grid-row: 5;\r\n        -ms-grid-column: 3;\r\n        grid-area: img-4;\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n    .img-1-title {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 2;\r\n        grid-area: img-1-title;\r\n    }\r\n    \r\n    .img-2-title {\r\n       -ms-grid-row: 2;\r\n       -ms-grid-column: 3;\r\n       grid-area: img-2-title;\r\n    }\r\n\r\n    .img-3-title {\r\n        -ms-grid-row: 4;\r\n        -ms-grid-column: 2;\r\n        grid-area: img-3-title;\r\n    }\r\n    \r\n    .img-4-title {\r\n       -ms-grid-row: 4;\r\n       -ms-grid-column: 3;\r\n       grid-area: img-4-title;\r\n    }\r\n\r\n    div.arrow-1, div.arrow-2, div.arrow-3, div.arrow-4 {\r\n        display: none;\r\n    }\r\n\r\n    .img-1-title, .img-2-title, .img-3-title, .img-4-title {\r\n        border-bottom: 3px solid rgb(15, 177, 15);\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"grid\">\n    <div class=\"title\">Here is a couple of side projects</div>\n    <div class=\"img-1-title\">A chat app build with socket.io and node.js</div>\n    <div class=\"arrow-1\"><i class=\"fas fa-arrow-down\"></i></div>\n    <div class=\"img-1\"><a href=\"https://salty-meadow-33783.herokuapp.com\" target=\"_blank\"></a></div>\n    <div class=\"img-2-title\">A responsive mock template of a company build with html css and flexboxgrid</div>\n    <div class=\"arrow-2\"><i class=\"fas fa-arrow-down\"></i></div>\n    <div class=\"img-2\"><a href=\"https://codepen.io/Neo-dev/full/ppKqjp\" target=\"_blank\"></a></div>\n    <div class=\"img-3-title\">Wikipedia search bar connected to the wikipedia API</div>\n    <div class=\"arrow-3\"><i class=\"fas fa-arrow-down\"></i></div>\n    <div class=\"img-3\"><a href=\"https://codepen.io/Neo-dev/full/JOQgqZ\" target=\"_blank\"></a></div>\n    <div class=\"img-4-title\">Vanilla js calculator</div>\n    <div class=\"arrow-4\"><i class=\"fas fa-arrow-down\"></i></div>\n    <div class=\"img-4\"><a href=\"https://codepen.io/Neo-dev/full/GQoEzj\" target=\"_blank\"></a></div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/postimg/Web_template.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Web_template.93ff2eacda13d8dd2a40.png";

/***/ }),

/***/ "../../../../../src/app/components/postimg/Wiki_viewer.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Wiki_viewer.2a422e63cefac83cfa91.png";

/***/ }),

/***/ "../../../../../src/app/components/postimg/chat_app.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chat_app.39e79bd7092c324f93c5.png";

/***/ }),

/***/ "../../../../../src/app/components/postimg/js_calculator.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "js_calculator.b0de8a15dad93b1d256f.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map