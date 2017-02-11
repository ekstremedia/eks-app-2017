webpackJsonp([1,4],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gullkorn_service_service__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(GullkornService) {
        var _this = this;
        this.GullkornService = GullkornService;
        // this.gullkorn = GullkornService.getGullkorn();
        // console.log(this.gullkorn);
        GullkornService.getGullkorn()
            .subscribe(function (data) {
            _this.gullkorn = data;
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.doAnim();
    };
    LandingComponent.prototype.doAnim = function () {
        // let tl = new TimelineMax();
        var eks = document.getElementById("h1");
        // tl.play();
        TweenMax.fromTo(eks, 1, { autoAlpha: 0, ease: Power2.easeIn }, { autoAlpha: 1 });
    };
    LandingComponent.prototype.updateGk = function (GullkornService) {
        var _this = this;
        this.GullkornService.getGullkorn()
            .subscribe(function (data) {
            _this.gullkorn = data;
        });
        // this.doAnim();
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'gullkorn-visning',
            providers: [__WEBPACK_IMPORTED_MODULE_1__gullkorn_service_service__["a" /* GullkornService */]],
            template: __webpack_require__(744),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gullkorn_service_service__["a" /* GullkornService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__gullkorn_service_service__["a" /* GullkornService */]) === 'function' && _a) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/landing.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Side2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import TimelineMax from 'gsap';
// import {TimelineMax} from 'gsap';
var Side2Component = (function () {
    function Side2Component() {
        // let tl = new TimelineMax;
    }
    Side2Component.prototype.ngOnInit = function () {
        var tl = new TimelineMax();
        var p2tl = new TimelineMax();
        var h1 = document.getElementsByClassName("h1");
        var h2 = document.getElementById("h2");
        p2tl.repeat(-1);
        p2tl.repeatDelay(1);
        // tl.set('#h1', {transformOrigin:"0% 0%"}); 
        tl.from(h1, 1, { x: -2010, scale: 0.1, ease: Power4.easeInOut }, 0);
        tl.from(h2, 2, { y: -210, opacity: 0, ease: Bounce.easeOut }, "-=0.5");
        p2tl.to(h1, 0.6, { x: 250, ease: Power4.easeInOut }, "+=2");
        p2tl.to(h1, 0.6, { x: 0, ease: Power4.easeInOut }, "+=2");
        p2tl.to(h1, 0.6, { x: 420, ease: Power4.easeInOut }, "+=2");
        p2tl.to(h1, 0.6, { x: 30, ease: Power4.easeInOut }, "+=2");
        p2tl.to(h1, 0.6, { x: 0, ease: Power4.easeInOut }, "+=2");
        tl.play();
        p2tl.play();
    };
    Side2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-side2',
            template: __webpack_require__(747),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], Side2Component);
    return Side2Component;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/side2.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Side3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Side3Component = (function () {
    function Side3Component() {
    }
    Side3Component.prototype.ngOnInit = function () {
        var tl = new TimelineMax();
        var h1 = document.getElementById("h1");
        var h2 = document.getElementById("h2");
        var h3 = document.getElementById("h3");
        tl.set('#h1', { transformOrigin: "0% 0%" });
        var x1, x2, x3;
        x1 = Math.floor((Math.random() * 300) + -300);
        x2 = Math.floor((Math.random() * 300) + -300);
        x3 = Math.floor((Math.random() * 300) + -300);
        var t1 = Math.floor((Math.random() * 0) + 1);
        var t2 = Math.floor((Math.random() * 0) + 1);
        var t3 = Math.floor((Math.random() * 0) + 1);
        var tt1 = Math.floor((Math.random() * 0) + 9);
        var tt2 = Math.floor((Math.random() * 0) + 9);
        var tt3 = Math.floor((Math.random() * 0) + 9);
        var ut1 = t1 + "." + tt1;
        var ut2 = t1 + "." + tt1;
        var ut3 = t1 + "." + tt1;
        tl.from(h1, ut1, { autoAlpha: 0, x: x1, ease: Power4.easeInOut }, 0);
        tl.from(h2, ut2, { autoAlpha: 0, y: x2, ease: Power4.easeInOut }, 0);
        tl.from(h3, ut3, { autoAlpha: 0, x: x3, ease: Power4.easeInOut }, 0);
        // tl.to(h1, 0.4, {  scale: 2, ease: Power2.easeInOut }, "-=0.1");
        tl.play();
    };
    Side3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-side3',
            template: __webpack_require__(748),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], Side3Component);
    return Side3Component;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/side3.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var tl = new TimelineMax();
        var h1 = document.getElementById("h1");
        var h2 = document.getElementById("h2");
        // tl.set('#h1', {transformOrigin:"0% 0%"}); 
        tl.from(h1, 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, 0.4);
        tl.from(h2, 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "-=1");
        // tl.from(h2, 1, { y: -200, opacity:0, ease:  Power4.easeInOut  }, "-=0.5");
        // tl.to(h1, 0.4, { ease: Power2.easeInOut }, "-=0.5");
        // tl.to(h1, 0.4, { rotationY:360,transformOrigin:" -1%" }, "+=0.5");
        // tl.to(h2, 1, { y:100, scale: 2, ease:  Power4.easeInOut  }, "+=0.5");
        // tl.to(h2, 1, { rotateY:360, ease:  Power4.easeInOut  }, "+=0.5");
        // tl.to(h1,0.2,{css: { textTransform: "capitalize"}},"-=.1");
        // tl.play();  	
    };
    WelcomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__(749),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/welcome.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 457;


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(578);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/main.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'jquery';
// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;
// declare var $:JQueryStatic;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Angular 2 Quickstart';
    }
    AppComponent.prototype.ngOnInit = function () {
        // let tl = TimelineMax(); // this is free of errors now
        // tl.play();  
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'my-app',
            template: "\n  <nav-bar></nav-bar>\n  <h1>\n  &nbsp; \n  </h1>\n  <nav-meny></nav-meny>\n  \n <router-outlet class=\"fad\"></router-outlet>\n  ",
            styles: [
                __webpack_require__(737)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/app.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side2_side2_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sider_side3_side3_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_bar_meny_meny_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gullkorn_landing_landing_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/** Map relative paths to URLs. */
var map = {
    'gsap': 'vendor/gsap/src/minified/' // this tells to system.js loader: Hey when you see: "import 'gsap'" in any of my project files, you should load it form: vendor/gsap blah blah..
};
/** User packages configuration. */
var packages = {
    gsap: {
        defaultExtension: 'js',
        main: 'TweenMax.min.js' // the entry point for the gsap package.
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__side2_side2_component__["a" /* Side2Component */],
                __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sider_side3_side3_component__["a" /* Side3Component */],
                __WEBPACK_IMPORTED_MODULE_12__nav_bar_meny_meny_component__["a" /* MenyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__gullkorn_landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/app.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side2_side2_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sider_side3_side3_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gullkorn_landing_landing_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */]
    },
    {
        path: 'side2',
        component: __WEBPACK_IMPORTED_MODULE_1__side2_side2_component__["a" /* Side2Component */]
    },
    {
        path: 'side3',
        component: __WEBPACK_IMPORTED_MODULE_2__sider_side3_side3_component__["a" /* Side3Component */]
    },
    {
        path: 'gullkorn',
        component: __WEBPACK_IMPORTED_MODULE_4__gullkorn_landing_landing_component__["a" /* LandingComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/app.routing.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GullkornService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GullkornService = (function () {
    function GullkornService(http) {
        this.http = http;
    }
    GullkornService.prototype.getGullkorn = function () {
        // let result = this.result;
        return this.http.get('/eks-app-2017/test')
            .map(function (res) { return res.json(); });
        // but this one doesnt, so i cant return it 
    };
    GullkornService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GullkornService);
    return GullkornService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/gullkorn-service.service.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



this.parentRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */];
var MenyComponent = (function () {
    function MenyComponent() {
    }
    MenyComponent.prototype.ngOnInit = function () {
    };
    MenyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'nav-meny',
            template: __webpack_require__(745),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenyComponent);
    return MenyComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/meny.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;
var NavBarComponent = (function () {
    // parentRouter = this.parentRouter;
    // console.log(parentRouter);
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.av();
    };
    NavBarComponent.prototype.menuGo = function (url) {
        // parentRouter 
    };
    NavBarComponent.prototype.hideMeny = function () {
        this.hma();
    };
    NavBarComponent.prototype.hideMenyIf = function () {
        if (this.vis) {
            this.hma();
        }
    };
    NavBarComponent.prototype.av = function () {
        var eks = document.getElementById("eks-meny");
        TweenMax.set(eks, { autoAlpha: 0 });
        this.setNeg();
    };
    NavBarComponent.prototype.hma = function () {
        var eks = document.getElementById("eks-meny");
        var ball = document.getElementById("ball");
        this.flipBtn(ball);
        TweenMax.fromTo(eks, .5, { autoAlpha: 1 }, { autoAlpha: 0, x: 2020, ease: Power2.easeIn });
        this.setNeg();
    };
    NavBarComponent.prototype.showMeny = function () {
        // let tl = new TimelineMax();
        var eks = document.getElementById("eks-meny");
        var ball = document.getElementById("ball");
        this.flipBtn(ball);
        // tl.play();
        TweenMax.fromTo(eks, .5, { autoAlpha: 0, x: -2420, ease: Power2.easeIn }, { autoAlpha: 1, x: 0, ease: Elastic.easeOut.config(0.6, 0.7) });
        this.setPos();
    };
    NavBarComponent.prototype.flipBtn = function (cobj) {
        TweenMax.to(cobj, .6, { rotationY: 360, ease: Power4.easeOut, onComplete: resetRotation });
        function resetRotation() {
            TweenMax.set(cobj, { rotationY: 0 });
        }
    };
    NavBarComponent.prototype.cFlipBtn = function (ovbj) {
        TweenMax.to(ovbj, .4, { rotationY: 360, ease: Power4.easeOut, onComplete: resetRotation });
        function resetRotation() {
            TweenMax.set(ovbj, { rotationY: 0 });
        }
    };
    NavBarComponent.prototype.setNeg = function () {
        this.vis = false;
    };
    NavBarComponent.prototype.setPos = function () {
        this.vis = true;
    };
    NavBarComponent.prototype.menyToggle = function () {
        this.vis = !this.vis;
        if (this.vis) {
            this.showMeny();
        }
        if (!this.vis) {
            this.hideMeny();
        }
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__(746),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/nav-bar.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/eks-app-2017/src/environment.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.clickme {\n  float: right;\n  cursor: pointer;\n  color: #98DB21;\n  -webkit-transition: .2s ease-in-out all;\n  transition: .2s ease-in-out all; }\n\n.clickme:hover {\n  color: #102233; }\n\n.cap::first-letter {\n  text-transform: capitalize; }\n\nnav {\n  background-color: #102233 !important;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\nbody {\n  background-color: #050a0d;\n  font-size: 14px; }\n\n.redtext {\n  color: red; }\n\n.greentext {\n  color: #98DB21; }\n\n.greentext2 {\n  color: #537812; }\n\n.whitetext {\n  color: #FFF; }\n\na {\n  cursor: pointer; }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.eks-logo {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  float: left;\n  color: white;\n  font-size: 1.8em; }\n\n.eks-logo a {\n  margin-left: 5px; }\n\n.eks-boks {\n  margin-left: 10px;\n  font-size: 1.8em;\n  width: 250px;\n  height: 40px;\n  float: left; }\n\n#eks-meny {\n  position: fixed;\n  box-shadow: 0px 0px 6px #000;\n  top: 60px;\n  opacity: 0;\n  background: #537812;\n  width: 320px;\n  margin: 0 auto;\n  color: #152E45;\n  padding: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  z-index: 10000;\n  border-radius: 5px;\n  /* future proofing */\n  -khtml-border-radius: 5px;\n  /* for old Konqueror browsers */ }\n\n.x-btn {\n  opacity: 0.3;\n  font-size: 2em;\n  color: #FFF;\n  -webkit-transition: ease-in-out .4s all;\n  transition: ease-in-out .4s all; }\n\n.x-btn:hover {\n  color: maroon;\n  opacity: 0.8; }\n\n#eks-meny h2 {\n  color: white; }\n\n#eks-meny a {\n  color: #102233; }\n\n#eks-meny a:hover {\n  font-weight: bold; }\n\n.ts {\n  text-shadow: 0px 0px 25px transparent;\n  -webkit-transition: .6s ease-in-out all;\n  transition: .6s ease-in-out all; }\n\n.ts:hover {\n  text-shadow: 0px 0px 3px #418CD1; }\n\n.padcont {\n  margin-top: 10px;\n  padding-top: 20px;\n  color: #DEEDDF; }\n\nh2 {\n  color: #98DB21; }\n\nh5 {\n  color: #98DB21; }\n\n.eks-boks a {\n  color: #98DB21;\n  -webkit-transition: .4s ease-out color;\n  transition: .4s ease-out color;\n  text-decoration: none; }\n\n.eks-boks a:hover {\n  color: #418CD1; }\n\n.fad {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  opacity: 0;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */ }\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"container padcont\">\n    <span class=\"display-4\">Gullkornisator</span>\n    - Basert på data frå <a target=\"_blank\" href=\"http://gullkorn.lampefot.net\">http://gullkorn.lampefot.net/</a>\n    <button (click)=\"updateGk()\" class=\"btn btn-outline-success btn-sm clickme\">\n         <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n    </button>\n        <hr>\n    <div class=\"row\" id=\"h1\">\n        <div class=\"col\" *ngIf=\"gullkorn\">\n            <h2 class=\"cap\">{{ gullkorn[0] }}</h2>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\">{{gullkorn[number]}} </span>\n            </p>\n            <blockquote class=\"blockquote cap\">\n                <p class=\"mb-0 cap\"><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> {{ gullkorn[15] }} <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>\n                </p>\n            </blockquote>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [11,12,13,14,15,16,17]\">{{gullkorn[number]}} </span>\n            </p>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [59,60,61,62,63,64,65,66,67]\">{{gullkorn[number]}} </span>\n                <span class=\"cap\" *ngFor=\"let number of [68,69,70,71,72,73,74]\">{{gullkorn[number]}} </span>\n            </p>\n            <p class=\"cap\"><b>{{ gullkorn[18] }}</b></p>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [19,20,21,22,23,24,25,26,27,28]\">{{gullkorn[number]}} </span>\n            </p>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [29,30,31,32,33,34,35,36,37,38]\">{{gullkorn[number]}} </span>\n            </p>\n            <blockquote class=\"blockquote blockquote-reverse\">\n                <p class=\"mb-0 cap\">{{ gullkorn[42] }}</p>\n                <footer class=\"blockquote-footer\">\n                    <cite title=\"Source Title\">{{ gullkorn[84] }}</cite>\n                </footer>\n            </blockquote>\n            <p class=\"cap\"><b>{{ gullkorn[39] }}</b></p>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [40,41,42,43,44,45,46,47,48,49]\">{{gullkorn[number]}} </span>\n                <span class=\"cap\" *ngFor=\"let number of [50,51,52,53,54,55,56]\">{{gullkorn[number]}} </span>\n            </p>\n            <p class=\"cap\"><b>{{ gullkorn[57] }} {{ gullkorn[58] }}</b></p>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [75,76,77,78,79,80,81,82,83]\">{{gullkorn[number]}} </span>\n                <span class=\"cap\" *ngFor=\"let number of [84,85,86]\">{{gullkorn[number]}} </span>\n            </p>\n            <p class=\"cap\">\n                <span class=\"cap\" *ngFor=\"let number of [87,88,89,90,91,92,93,94,95]\">{{gullkorn[number]}} </span>\n                <span class=\"cap\" *ngFor=\"let number of [96,97,98,99]\">{{gullkorn[number]}} </span>\n            </p>\n            <!-- <li *ngFor=\"number of [0,1,2,3,4]\">{{number}}</li> -->\n            <!-- <span class=\"cap\" *ngFor=\"1 in 10; let i = index; \"> {{ gullkorn[i] }} </span>  -->\n            <!--         <span class=\"cap\" *ngFor=\"let gk of gullkorn; let i = index; \"> \n        <h4 *ngIf=\"i == 20\">\n            {{ gullkorn[i] }} \n        </h4>\n        <p *ngIf=\"i == 50\">\n            {{ gullkorn[i] }} \n        </p>    \n        <h4 *ngIf=\"i == 70\">\n            {{ gullkorn[i+2] }} \n        </h4>              \n        <span class=\"cap\" *ngIf=\"gullkorn[i+1]\">\n        {{ gullkorn[i+1] }} \n        </span> -->\n            <!-- </span>  -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<nav class=\"clearfix navbar navbar-toggleable-xs navbar-inverse fixed-top\">\r\n    <div>\r\n        <div class=\"eks-logo noselect\">\r\n            <div id=\"ball\">\r\n                <i (click)=\"menyToggle()\" class=\"fa fa-lg fa-eercast text-success ts\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"eks-boks noselect\">\r\n            <a class=\"toplink\" routerLink=\"/\" routerLinkActive=\"active\" (click)=\"hideMenyIf()\">\r\n                <span>Ekstremedia Angular 2</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div id=\"eks-meny\">\r\n    <i style=\"float: right;\" class=\"fa fa-lg fa-window-close-o  x-btn\" (click)=\"hideMenyIf()\"></i> Meny\r\n    <hr>\r\n    <a class=\"nav-link\" routerLink=\"/gullkorn\" routerLinkActive=\"active\" (click)=\"hideMenyIf()\"><span (click)=\"hideMenyIf()\"><b>Gullkorn</b></span></a>    \r\n    <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" (click)=\"hideMenyIf()\"><span >Home</span></a>\r\n    <a class=\"nav-link\" routerLink=\"/side2\" routerLinkActive=\"active\" (click)=\"hideMenyIf()\"><span>Page 2</span> <span class=\"sr-only\">(current)</span></a>\r\n    <a class=\"nav-link\" routerLink=\"/side3\" routerLinkActive=\"active\" (click)=\"hideMenyIf()\"><span (click)=\"hideMenyIf()\">Page 3</span></a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <p class=\"display-2 h1\">Page 2</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\" id=\"h2\">\r\n            <br>\r\n            <br>\r\n            <div class=\"greentext\">\r\n                <div class=\"container\">\r\n                    <pre class=\"greentext\">\r\nimport \"gsap\";\r\ndeclare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;\r\n\r\nexport class Side2Component implements OnInit &#123;\r\n\r\n  constructor() &#123; &#125;\r\n\r\n  ngOnInit() &#123;\r\n    let p2tl = new TimelineMax();\r\n    let h1 = document.getElementById(\"h1\");\r\n    p2tl.repeat(-1); p2tl.repeatDelay(1);     \r\n    p2tl.to(h1, 0.6, &#123;  x: 250, ease: Power4.easeInOut &#125;, \"+=2\");\r\n    p2tl.to(h1, 0.6, &#123;  x: 0, ease: Power4.easeInOut &#125;, \"+=2\");\r\n    p2tl.to(h1, 0.6, &#123;  x: 420, ease: Power4.easeInOut &#125;, \"+=2\");\r\n    p2tl.to(h1, 0.6, &#123;  x: 30, ease: Power4.easeInOut &#125;, \"+=2\");\r\n    p2tl.to(h1, 0.6, &#123;  x: 0, ease: Power4.easeInOut &#125;, \"+=2\");\r\n    p2tl.play();    \r\n   &#125;   \r\n&#125;      \r\n</pre>\r\n                </div>\r\n            </div>\r\n            <p>\r\n                <a href=\"https://github.com/ekstremedia/eks-app\" target=\"_blank\">https://github.com/ekstremedia/eks-app</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<section class=\"container padcont\" id=\"hovedvindu\">\r\n    <div class=\"row\">\r\n        <article class=\"col-md-4 col-sm-6\" id=\"h1\">\r\n            <header>\r\n                <h3>Sabeltanntigeren jobbet en fiskebåt</h3>\r\n            </header>\r\n            <p>En matros lurte en viking med en ballong. Dua malte en leilighet. </p>\r\n            <p>Cowboy flamberte</p>\r\n            Sjefskrepsen spylte araberen, skateren og gitaristene. Sjefsapekatten børstet narkolangeren, mafiabossen og krigerene. Tjuefem likbleke sjefer møtte tjuefem svære sabeltannhunder.\r\n            <p>Kamel spylte</p>\r\n            <p>En ungdom kjøpte seg en langhåret pelsdott. En kul kokk lo 200 ganger på tretten timer. 76 kroner måtte føreren betale. Flere sabeltanntigerer hinket da porcha som sprayet en robot bar en dvergpuddel litt bak medisinballen. </p>\r\n        </article>\r\n        <article class=\"col-md-4 col-sm-6\" id=\"h2\">\r\n            <h3>En bjørn limte en sykkellås</h3>\r\n            <p>Den kaotiske slipemaskinen traff komfyrene med en narkolanger som lekte ved en uredd tuba. Isbjørnen fornærmet en sebra elegant.</p>\r\n            <p>\r\n                Flere soldater reparerte da noen konkubiner som spylte astronauten malte en kokk bak peisen. Oter barberte Gradestokken kom eller brølte. Den blåe stokken traff gjerdestolpeene med en dvergpuddel som hacket gjennom en snill loff. Pusekatten degraderte en hammerhai med en jordsekk.\r\n            </p>\r\n            <p>Kamerat stakk 44 kamerater tastet en sinnsyk kalkulator på 200 dager. Tjuetre kaotiske neandertalerer møtte ni fantastiske tyskerer. Den kule søppeldunken traff sparkesykkelene med tanta som badet ved en fin telefon. Gassmotoren kom og lekte.</p>\r\n        </article>\r\n        <article class=\"col-md-4 col-sm-6\" id=\"h3\">\r\n            <h3>Banditten br&oslash;lte en ringperm</h3>\r\n            <span style=\" \">R&oslash;de prester fyllte luften, og en sebra gravde p&aring; en pelsdott. Hobittene forn&aelig;rmet mange venner. &Aring;tte kroner m&aring;tte russeren betale.&nbsp;</span>\r\n            <br />\r\n            <br />\r\n            <strong>Hobitt h&oslash;rte</strong>\r\n            <br />\r\n            <span style=\" \">En ungdom gjenopplivde en sjef til han fisket r&aring;tt ved siden av den sl&oslash;ve ub&aring;ten. Sjefsamerikaneren spylte sabeltanngiraffen, bukken og elefantene. Alvene narret mange krepser.&nbsp;</span>\r\n            <br />\r\n            <br />\r\n            <strong>Robot malte</strong>\r\n            <br />\r\n            <span style=\" \">Den rettferdige tingen traff luftballongene med en venn som komuniserte bak en slesk bok. Da assisterte bukken en skiskytter nerv&oslash;st. Sjefsjapaneren felte astronauten, soldaten og sebraene. En indianer tok s&aring; en brutal kabel og kastet den p&aring; kua.&nbsp;</span>\r\n            <br /> &nbsp;\r\n        </article>\r\n    </div>\r\n    <!-- .row -->\r\n</section>\r\n<!-- .container -->\r\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div class=\"container padcont\">\r\n    <div class=\"row\">\r\n        <div class=\"col\" id=\"h1\">\r\n            <h2>Hallodama fisket en dieseltank</h2> Ugla pusset kompressoren fint foran en farlig manet. Plutselig var dvergpuddelen der ved den svære gitaren, og mobbet alle indianerene hasardiøst. Noen bjørker lempet ei annen dundre latterlig.\r\n            <h5>Musiker klipte</h5> En kjempetiger tatoverte hullmaskinen til araberene. To kineserer filosoferte en nervøs ulldott på sytten dager. En lysegrønn kamerat nikket tolv ganger på 200 timer.\r\n            <h5>Sebra sprayet</h5> Fjorten kroner måtte en purk betale. En snut talte veldig fint. Plutselig var piloten der ganske nært den likbleke ballongen, og børstet alle kameratene usikkert. Noen prester lurte hobitten vinglete. En turist mobbet en nordboer til han komuniserte hensynsløst foran den svenske reservøren.\r\n            <h5>Manet sprayet</h5> Tjuefem snekkerer løftet en varm videomaskin på 76 dager. Tanta tok så en lysegrønn høvel og kastet den på en kaptein. Orangee fulger fyllte luften, og en russer brølte ganske nært en ski. En kokk stakk alpinisten vinglete. En stammeleder tok med seg 21 skier inn til snømåkeren. Hammerhaien assisterte ei skilpadde rått.\r\n            <h5>Stammeleder vasket foran en bil</h5> En ørn dyttet en helt til han luktet høflig ganske nært den enorme stokken. De så japaneren som jobbet provoserende litt bak en komfyr. Både kaninene og purkene klipte skytteren. En amerikaner tok så en svart matt traktor og kastet den på en neandertaler. Vimpelene ankom, mens brannfyrene spiste ved siden av lydmodulen. Alvene spant mange skuespillerer. En giraff tok så en lemlestet trompet og kastet den på indianeren. Amerikaneren løftet en aspirant sjokkert.\r\n            <h5>Figur ropte under en harddisk</h5> En helt ristet en cowboy rått. Sangerinna importerte en prest treffsikkert. En indianer hørte en kaptein til han jobbet brutalt over den trege busken. De små hammerhaiene hoppet i skjul. Stammelederen pusset ballongen provoserende ganske nært en presis øks. Plutselig var neandertaleren der under den ondskapsfulle loffen, og sprayet alle kineserene sjokkert. Fisken var sinnsyk og fryktløs. Prinsessa assisterte fjotten latterlig. Ni skaterer jobbet en fin bolt på to dager. Busken kom eller løftet. 16 juledverger falt en mørk komfyr på seks dager. Brannfyren tok så en sort meteor og kastet den på en ork. En kineser var svart matt og barberte en lojal sjef. Seks kroner måtte ei hoppe betale. Dama lyttet veldig uansvarlig. Nitten sauer syklet en mørkegrønn ballong på fjorten dager. Ti svart matte kineserer møtte 500 råe giraffer. Ei prinsesse dro en kineser med en stokk. En fører feide ei konkubine bestemt. Femti kroner måtte en aspirant betale. Den sløve busken traff fiskebåtene med banditten som flakset langt foran en hurtig stol.\r\n        </div>\r\n        <div class=\"col\" id=\"h2\">\r\n            <h2>En fenrisulv lå en kabel</h2> En snekker var hodeløs og ertet en langhåret cowboy. Fulgene tatoverte mange giraffer. De så en infanterist som stupte latterlig ved siden av en motor.\r\n            <h5>Finnmarking traff</h5> Det ble stille og amerikaneren viste hvordan den gule bueskytteren fungerte. De så en pusekatt som spiste fort langt foran en leilighet. De små elefantene spillte i skjul. Ei dronning sov veldig brutalt.\r\n            <h5>Demon knakk</h5> De så noen russere som rodde rått foran en meteor. Sykkellåsen kom eller badet. Ei katte snorket veldig nydelig. Den ondskapsfulle monitoren traff videoene med en rev som syklet over en heldig mobil.\r\n            <h5>Bueskytter klemte</h5> Det ble stille og grisen viste hvordan den slitene krigeren fungerte. Gullfisken var kjent og sort. En finnmarking spiste en bukk hensynsløst. Skiskytteren tok så en mystisk hekk og kastet den på brannfyren. Plutselig så de ni mafiabosser som kom gjennom ostehøvelen. Plutselig var giraffen der foran den kraftige felgen, og barberte alle grisene sjokkert.\r\n            <h5>Astronaut pusset foran en busk</h5> Huleboeren tok så en fantastisk do og kastet den på noen sjørøvere. En svensk asiater bukket seks ganger på 200 timer. De små sabeltannhundene filosoferte i skjul. Da friserte turisten en aspirant nervøst. En annen kamerat gurglet veldig hensynsløst. Brutale venner fyllte luften, og ei dronning tastet bak en toyta. En kineser tok med seg 1500 bokser inn til chileneren. Plutselig så de 17 skytterer som kom ved siden av ringpermen. Flere asiaterer lå da sebraen som sprayet sabeltanntigeren lurte en huleboer over leiligheten.\r\n            <h5>Egypter fisket litt bak en bil</h5> Ei kjerring hørte en apekatt til han svømte hasardiøst under den råe harddisken. Da fornærmet araberen en fenrisulv hensynsløst. Da lurte orken hammerhaien nydelig. De så en kanin som lå sjokkert gjennom en laks. En mafiaboss gravde veldig hardt. Både pilotene og sebraene ertet japaneren. De så purken som gravde vinglete langt foran en tankbåt. En tysker feide en fisk. Tjuetre provoserte demoner møtte tjueto farlige sabeltannkatter. Flere maneter bukket da noen aspiranter som importerte en tjukkas dro en robot under telefonen. En kamel tok så en grå hekk og kastet den på noen skilpadder. En ork degraderte en fjott rått. En astronaut felte en nordboer brutalt. Plutselig var mafiabossen der ved den røde meteoren, og kjente alle krepsene høflig. Skilpadda tok med seg tolv raketter inn til skiskytteren. Noen brannfyrer banket en ulldott. En isbjørn tok med seg to gradestokker inn til astronauten. En prest tok med seg 44 boker inn til dvergpuddelen. En bueskytter tok så en kjent monitor og kastet den på dvergpuddelen. Den store telefonen traff ostehøvelene med en ungdom som hoppet bak en provosert gradestokk. To rosae hobitter møtte tjueen sinnsyke rytterer.\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(458);


/***/ })

},[773]);
//# sourceMappingURL=main.bundle.map