webpackJsonp([1,4],{402:function(e,n,t){"use strict";var r=t(0),a=t(580),o=t(72);t.n(o);t.d(n,"a",function(){return l});var s=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function e(e){var n=this;this.GullkornService=e,e.getGullkorn().subscribe(function(e){n.gullkorn=e})}return e.prototype.ngOnInit=function(){},e.prototype.updateGk=function(e){var n=this;this.GullkornService.getGullkorn().subscribe(function(e){n.gullkorn=e})},e=s([t.i(r.Q)({selector:"gullkorn-visning",providers:[a.a],template:t(742),styles:[t(736)]}),i("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],e);var n}()},403:function(e,n,t){"use strict";var r=t(0),a=t(72);t.n(a);t.d(n,"a",function(){return i});var o=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},s=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=function(){function e(){}return e.prototype.ngOnInit=function(){var e=new TimelineMax,n=new TimelineMax,t=document.getElementsByClassName("h1"),r=document.getElementById("h2");n.repeat(-1),n.repeatDelay(1),e.from(t,1,{x:-2010,scale:.1,ease:Power4.easeInOut},0),e.from(r,2,{y:-210,opacity:0,ease:Bounce.easeOut},"-=0.5"),n.to(t,.6,{x:250,ease:Power4.easeInOut},"+=2"),n.to(t,.6,{x:0,ease:Power4.easeInOut},"+=2"),n.to(t,.6,{x:420,ease:Power4.easeInOut},"+=2"),n.to(t,.6,{x:30,ease:Power4.easeInOut},"+=2"),n.to(t,.6,{x:0,ease:Power4.easeInOut},"+=2"),e.play(),n.play()},e=o([t.i(r.Q)({selector:"app-side2",template:t(745),styles:[t(739)]}),s("design:paramtypes",[])],e)}()},404:function(e,n,t){"use strict";var r=t(0),a=t(72);t.n(a);t.d(n,"a",function(){return i});var o=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},s=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=function(){function e(){}return e.prototype.ngOnInit=function(){var e=new TimelineMax,n=document.getElementById("h1"),t=document.getElementById("h2"),r=document.getElementById("h3");e.set("#h1",{transformOrigin:"0% 0%"});var a,o,s;a=Math.floor(300*Math.random()+-300),o=Math.floor(300*Math.random()+-300),s=Math.floor(300*Math.random()+-300);var i=Math.floor(0*Math.random()+1),l=(Math.floor(0*Math.random()+1),Math.floor(0*Math.random()+1),Math.floor(0*Math.random()+9)),c=(Math.floor(0*Math.random()+9),Math.floor(0*Math.random()+9),i+"."+l),p=i+"."+l,f=i+"."+l;e.from(n,c,{autoAlpha:0,x:a,ease:Power4.easeInOut},0),e.from(t,p,{autoAlpha:0,y:o,ease:Power4.easeInOut},0),e.from(r,f,{autoAlpha:0,x:s,ease:Power4.easeInOut},0),e.play()},e=o([t.i(r.Q)({selector:"app-side3",template:t(746),styles:[t(740)]}),s("design:paramtypes",[])],e)}()},405:function(e,n,t){"use strict";var r=t(0),a=t(72);t.n(a);t.d(n,"a",function(){return i});var o=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},s=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=function(){function e(){}return e.prototype.ngOnInit=function(){var e=new TimelineMax,n=document.getElementById("h1"),t=document.getElementById("h2");e.from(n,1,{x:-200,opacity:0,ease:Power4.easeInOut},.4),e.from(t,1,{x:200,opacity:0,ease:Power4.easeInOut},"-=1")},e=o([t.i(r.Q)({selector:"app-welcome",template:t(747),styles:[t(741)]}),s("design:paramtypes",[])],e)}()},457:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=457},458:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(544),a=t(0),o=t(583),s=t(578);o.a.production&&t.i(a.a)(),t.i(r.a)().bootstrapModule(s.a)},577:function(e,n,t){"use strict";var r=t(0);t.d(n,"a",function(){return s});var a=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},s=function(){function e(){this.title="My Angular 2 Quickstart"}return e.prototype.ngOnInit=function(){},e=a([t.i(r.Q)({selector:"my-app",template:'\n  <nav-bar></nav-bar>\n  <h1>\n  &nbsp; \n  </h1>\n  <nav-meny></nav-meny>\n  \n <router-outlet class="fad"></router-outlet>\n  ',styles:[t(735)],encapsulation:r.O.None}),o("design:paramtypes",[])],e)}()},578:function(e,n,t){"use strict";var r=t(155),a=t(0),o=t(55),s=t(335),i=t(577),l=t(579),c=t(403),p=t(405),f=t(574),u=t(72),d=(t.n(u),t(582)),k=t(404),m=t(581),g=t(402);t.d(n,"a",function(){return v});var h=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},b=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},v=function(){function e(){}return e=h([t.i(a.b)({declarations:[i.a,c.a,p.a,d.a,k.a,m.a,g.a],imports:[r.a,o.a,s.a,l.a,f.a,s.b],providers:[],bootstrap:[i.a]}),b("design:paramtypes",[])],e)}()},579:function(e,n,t){"use strict";var r=t(353),a=t(403),o=t(404),s=t(405),i=t(402);t.d(n,"a",function(){return c});var l=[{path:"",component:s.a},{path:"side2",component:a.a},{path:"side3",component:o.a},{path:"gullkorn",component:i.a},{path:"**",component:s.a}],c=r.a.forRoot(l)},580:function(e,n,t){"use strict";var r=t(0),a=t(335),o=t(751);t.n(o);t.d(n,"a",function(){return l});var s=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function e(e){this.http=e}return e.prototype.getGullkorn=function(){return this.http.get("/eks-app-2017/test").map(function(e){return e.json()})},e=s([t.i(r.d)(),i("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.c&&a.c)&&n||Object])],e);var n}()},581:function(e,n,t){"use strict";var r=t(0),a=t(353),o=t(72);t.n(o);t.d(n,"a",function(){return l});var s=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};this.parentRouter=a.b;var l=function(){function e(){}return e.prototype.ngOnInit=function(){},e=s([t.i(r.Q)({selector:"nav-meny",template:t(743),styles:[t(737)]}),i("design:paramtypes",[])],e)}()},582:function(e,n,t){"use strict";var r=t(0),a=t(72);t.n(a);t.d(n,"a",function(){return i});var o=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(n,t,s):a(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},s=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=function(){function e(){}return e.prototype.ngOnInit=function(){this.av()},e.prototype.menuGo=function(e){},e.prototype.hideMeny=function(){this.hma()},e.prototype.hideMenyIf=function(){this.vis&&this.hma()},e.prototype.av=function(){var e=document.getElementById("eks-meny");TweenMax.set(e,{autoAlpha:0}),this.setNeg()},e.prototype.hma=function(){var e=document.getElementById("eks-meny"),n=document.getElementById("ball");this.flipBtn(n),TweenMax.fromTo(e,.5,{autoAlpha:1},{autoAlpha:0,x:2020,ease:Power2.easeIn}),this.setNeg()},e.prototype.showMeny=function(){var e=document.getElementById("eks-meny"),n=document.getElementById("ball");this.flipBtn(n),TweenMax.fromTo(e,.5,{autoAlpha:0,x:-2420,ease:Power2.easeIn},{autoAlpha:1,x:0,ease:Elastic.easeOut.config(.6,.7)}),this.setPos()},e.prototype.flipBtn=function(e){function n(){TweenMax.set(e,{rotationY:0})}TweenMax.to(e,.6,{rotationY:360,ease:Power4.easeOut,onComplete:n})},e.prototype.cFlipBtn=function(e){function n(){TweenMax.set(e,{rotationY:0})}TweenMax.to(e,.4,{rotationY:360,ease:Power4.easeOut,onComplete:n})},e.prototype.setNeg=function(){this.vis=!1},e.prototype.setPos=function(){this.vis=!0},e.prototype.menyToggle=function(){this.vis=!this.vis,this.vis&&this.showMeny(),this.vis||this.hideMeny()},e=o([t.i(r.Q)({selector:"nav-bar",template:t(744),styles:[t(738)]}),s("design:paramtypes",[])],e)}()},583:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r={production:!0}},735:function(e,n){e.exports='.clickme{float:right;cursor:pointer;color:#98db21;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.clickme:hover{color:#102233}.cap:first-letter{text-transform:capitalize}nav{background-color:#102233!important;box-shadow:0 3px 5px rgba(0,0,0,.2);border-bottom:1px solid rgba(0,0,0,.1)}body{background-color:#193752;font-size:14px;color:#418cd1}.redtext{color:red}.greentext{color:#98db21}.greentext2{color:#537812}.whitetext{color:#fff}a{cursor:pointer}.clearfix:after{content:"";clear:both;display:table}.eks-logo{cursor:pointer;width:40px;height:40px;float:left;color:#fff;font-size:1.8em}.eks-logo a{margin-left:5px}.eks-boks{margin-left:10px;font-size:1.8em;width:250px;height:40px;float:left}#eks-meny{position:fixed;box-shadow:0 0 6px #000;top:60px;opacity:0;background:#537812;width:320px;margin:0 auto;color:#152e45;padding:10px;margin-left:auto;margin-right:auto;left:0;right:0;z-index:10000;border-radius:5px;-khtml-border-radius:5px}.x-btn{opacity:.3;font-size:2em;color:#fff;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.x-btn:hover{color:maroon;opacity:.8}#eks-meny h2{color:#fff}#eks-meny a{color:#102233}#eks-meny a:hover{font-weight:700}.ts{text-shadow:0 0 25px transparent;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out}.ts:hover{text-shadow:0 0 3px #418cd1}.padcont{margin-top:10px;padding-top:20px;color:#deeddf}.eks-boks a,h2,h5{color:#98db21}.eks-boks a{-webkit-transition:color .4s ease-out;transition:color .4s ease-out;text-decoration:none}.eks-boks a:hover{color:#418cd1}.fad{-webkit-animation-duration:1s;animation-duration:1s;opacity:0;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}'},736:function(e,n){e.exports=""},737:function(e,n){e.exports=""},738:function(e,n){e.exports=""},739:function(e,n){e.exports=""},740:function(e,n){e.exports=""},741:function(e,n){e.exports=""},742:function(e,n){e.exports='<div class="container padcont">\n    <span class="display-4">Gullkornisator</span>\n    - Basert på data frå <a target="_blank" href="http://gullkorn.lampefot.net">http://gullkorn.lampefot.net/</a>\n    <button (click)="updateGk()" class="btn btn-outline-success btn-sm clickme">\n         <i class="fa fa-refresh" aria-hidden="true"></i>\n    </button>\n        <hr>\n    <div class="row">\n        <div class="col" id="h1" *ngIf="gullkorn">\n            <h2 class="cap">{{ gullkorn[0] }}</h2>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [1,2,3,4,5,6,7,8,9,10]">{{gullkorn[number]}} </span>\n            </p>\n            <blockquote class="blockquote cap">\n                <p class="mb-0 cap"><i class="fa fa-quote-left" aria-hidden="true"></i> {{ gullkorn[15] }} <i class="fa fa-quote-right" aria-hidden="true"></i>\n                </p>\n            </blockquote>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [11,12,13,14,15,16,17]">{{gullkorn[number]}} </span>\n            </p>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [59,60,61,62,63,64,65,66,67]">{{gullkorn[number]}} </span>\n                <span class="cap" *ngFor="let number of [68,69,70,71,72,73,74]">{{gullkorn[number]}} </span>\n            </p>\n            <p class="cap"><b>{{ gullkorn[18] }}</b></p>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [19,20,21,22,23,24,25,26,27,28]">{{gullkorn[number]}} </span>\n            </p>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [29,30,31,32,33,34,35,36,37,38]">{{gullkorn[number]}} </span>\n            </p>\n            <blockquote class="blockquote blockquote-reverse">\n                <p class="mb-0 cap">{{ gullkorn[42] }}</p>\n                <footer class="blockquote-footer">\n                    <cite title="Source Title">{{ gullkorn[84] }}</cite>\n                </footer>\n            </blockquote>\n            <p class="cap"><b>{{ gullkorn[39] }}</b></p>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [40,41,42,43,44,45,46,47,48,49]">{{gullkorn[number]}} </span>\n                <span class="cap" *ngFor="let number of [50,51,52,53,54,55,56]">{{gullkorn[number]}} </span>\n            </p>\n            <p class="cap"><b>{{ gullkorn[57] }} {{ gullkorn[58] }}</b></p>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [75,76,77,78,79,80,81,82,83]">{{gullkorn[number]}} </span>\n                <span class="cap" *ngFor="let number of [84,85,86]">{{gullkorn[number]}} </span>\n            </p>\n            <p class="cap">\n                <span class="cap" *ngFor="let number of [87,88,89,90,91,92,93,94,95]">{{gullkorn[number]}} </span>\n                <span class="cap" *ngFor="let number of [96,97,98,99]">{{gullkorn[number]}} </span>\n            </p>\n            <!-- <li *ngFor="number of [0,1,2,3,4]">{{number}}</li> -->\n            <!-- <span class="cap" *ngFor="1 in 10; let i = index; "> {{ gullkorn[i] }} </span>  -->\n            <!--         <span class="cap" *ngFor="let gk of gullkorn; let i = index; "> \n        <h4 *ngIf="i == 20">\n            {{ gullkorn[i] }} \n        </h4>\n        <p *ngIf="i == 50">\n            {{ gullkorn[i] }} \n        </p>    \n        <h4 *ngIf="i == 70">\n            {{ gullkorn[i+2] }} \n        </h4>              \n        <span class="cap" *ngIf="gullkorn[i+1]">\n        {{ gullkorn[i+1] }} \n        </span> -->\n            <!-- </span>  -->\n        </div>\n    </div>\n</div>\n'},743:function(e,n){e.exports=""},744:function(e,n){e.exports='<nav class="clearfix navbar navbar-toggleable-xs navbar-inverse fixed-top">\r\n    <div>\r\n        <div class="eks-logo noselect">\r\n            <div id="ball">\r\n                <i (click)="menyToggle()" class="fa fa-lg fa-eercast text-success ts" aria-hidden="true"></i>\r\n            </div>\r\n        </div>\r\n        <div class="eks-boks noselect">\r\n            <a class="toplink" routerLink="/" routerLinkActive="active" (click)="hideMenyIf()">\r\n                <span>Ekstremedia Angular 2</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div id="eks-meny">\r\n    <i style="float: right;" class="fa fa-lg fa-window-close-o  x-btn" (click)="hideMenyIf()"></i> Meny\r\n    <hr>\r\n    <a class="nav-link" routerLink="/gullkorn" routerLinkActive="active" (click)="hideMenyIf()"><span (click)="hideMenyIf()"><b>Gullkorn</b></span></a>    \r\n    <a class="nav-link" routerLink="/" routerLinkActive="active" (click)="hideMenyIf()"><span >Home</span></a>\r\n    <a class="nav-link" routerLink="/side2" routerLinkActive="active" (click)="hideMenyIf()"><span>Page 2</span> <span class="sr-only">(current)</span></a>\r\n    <a class="nav-link" routerLink="/side3" routerLinkActive="active" (click)="hideMenyIf()"><span (click)="hideMenyIf()">Page 3</span></a>\r\n\r\n</div>\r\n'},745:function(e,n){e.exports='<div class="container-fluid">\r\n    <div class="row">\r\n        <div class="col">\r\n            <p class="display-2 h1">Page 2</p>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col" id="h2">\r\n            <br>\r\n            <br>\r\n            <div class="greentext">\r\n                <div class="container">\r\n                    <pre class="greentext">\r\nimport "gsap";\r\ndeclare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;\r\n\r\nexport class Side2Component implements OnInit &#123;\r\n\r\n  constructor() &#123; &#125;\r\n\r\n  ngOnInit() &#123;\r\n    let p2tl = new TimelineMax();\r\n    let h1 = document.getElementById("h1");\r\n    p2tl.repeat(-1); p2tl.repeatDelay(1);     \r\n    p2tl.to(h1, 0.6, &#123;  x: 250, ease: Power4.easeInOut &#125;, "+=2");\r\n    p2tl.to(h1, 0.6, &#123;  x: 0, ease: Power4.easeInOut &#125;, "+=2");\r\n    p2tl.to(h1, 0.6, &#123;  x: 420, ease: Power4.easeInOut &#125;, "+=2");\r\n    p2tl.to(h1, 0.6, &#123;  x: 30, ease: Power4.easeInOut &#125;, "+=2");\r\n    p2tl.to(h1, 0.6, &#123;  x: 0, ease: Power4.easeInOut &#125;, "+=2");\r\n    p2tl.play();    \r\n   &#125;   \r\n&#125;      \r\n</pre>\r\n                </div>\r\n            </div>\r\n            <p>\r\n                <a href="https://github.com/ekstremedia/eks-app" target="_blank">https://github.com/ekstremedia/eks-app</a>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},746:function(e,n){e.exports='<section class="container padcont" id="hovedvindu">\r\n    <div class="row">\r\n        <article class="col-md-4 col-sm-6" id="h1">\r\n            <header>\r\n                <h3>Sabeltanntigeren jobbet en fiskebåt</h3>\r\n            </header>\r\n            <p>En matros lurte en viking med en ballong. Dua malte en leilighet. </p>\r\n            <p>Cowboy flamberte</p>\r\n            Sjefskrepsen spylte araberen, skateren og gitaristene. Sjefsapekatten børstet narkolangeren, mafiabossen og krigerene. Tjuefem likbleke sjefer møtte tjuefem svære sabeltannhunder.\r\n            <p>Kamel spylte</p>\r\n            <p>En ungdom kjøpte seg en langhåret pelsdott. En kul kokk lo 200 ganger på tretten timer. 76 kroner måtte føreren betale. Flere sabeltanntigerer hinket da porcha som sprayet en robot bar en dvergpuddel litt bak medisinballen. </p>\r\n        </article>\r\n        <article class="col-md-4 col-sm-6" id="h2">\r\n            <h3>En bjørn limte en sykkellås</h3>\r\n            <p>Den kaotiske slipemaskinen traff komfyrene med en narkolanger som lekte ved en uredd tuba. Isbjørnen fornærmet en sebra elegant.</p>\r\n            <p>\r\n                Flere soldater reparerte da noen konkubiner som spylte astronauten malte en kokk bak peisen. Oter barberte Gradestokken kom eller brølte. Den blåe stokken traff gjerdestolpeene med en dvergpuddel som hacket gjennom en snill loff. Pusekatten degraderte en hammerhai med en jordsekk.\r\n            </p>\r\n            <p>Kamerat stakk 44 kamerater tastet en sinnsyk kalkulator på 200 dager. Tjuetre kaotiske neandertalerer møtte ni fantastiske tyskerer. Den kule søppeldunken traff sparkesykkelene med tanta som badet ved en fin telefon. Gassmotoren kom og lekte.</p>\r\n        </article>\r\n        <article class="col-md-4 col-sm-6" id="h3">\r\n            <h3>Banditten br&oslash;lte en ringperm</h3>\r\n            <span style=" ">R&oslash;de prester fyllte luften, og en sebra gravde p&aring; en pelsdott. Hobittene forn&aelig;rmet mange venner. &Aring;tte kroner m&aring;tte russeren betale.&nbsp;</span>\r\n            <br />\r\n            <br />\r\n            <strong>Hobitt h&oslash;rte</strong>\r\n            <br />\r\n            <span style=" ">En ungdom gjenopplivde en sjef til han fisket r&aring;tt ved siden av den sl&oslash;ve ub&aring;ten. Sjefsamerikaneren spylte sabeltanngiraffen, bukken og elefantene. Alvene narret mange krepser.&nbsp;</span>\r\n            <br />\r\n            <br />\r\n            <strong>Robot malte</strong>\r\n            <br />\r\n            <span style=" ">Den rettferdige tingen traff luftballongene med en venn som komuniserte bak en slesk bok. Da assisterte bukken en skiskytter nerv&oslash;st. Sjefsjapaneren felte astronauten, soldaten og sebraene. En indianer tok s&aring; en brutal kabel og kastet den p&aring; kua.&nbsp;</span>\r\n            <br /> &nbsp;\r\n        </article>\r\n    </div>\r\n    <!-- .row -->\r\n</section>\r\n<!-- .container -->\r\n'},747:function(e,n){e.exports='<div class="container padcont">\r\n    <div class="row">\r\n        <div class="col" id="h1">\r\n            <h2>Hallodama fisket en dieseltank</h2> Ugla pusset kompressoren fint foran en farlig manet. Plutselig var dvergpuddelen der ved den svære gitaren, og mobbet alle indianerene hasardiøst. Noen bjørker lempet ei annen dundre latterlig.\r\n            <h5>Musiker klipte</h5> En kjempetiger tatoverte hullmaskinen til araberene. To kineserer filosoferte en nervøs ulldott på sytten dager. En lysegrønn kamerat nikket tolv ganger på 200 timer.\r\n            <h5>Sebra sprayet</h5> Fjorten kroner måtte en purk betale. En snut talte veldig fint. Plutselig var piloten der ganske nært den likbleke ballongen, og børstet alle kameratene usikkert. Noen prester lurte hobitten vinglete. En turist mobbet en nordboer til han komuniserte hensynsløst foran den svenske reservøren.\r\n            <h5>Manet sprayet</h5> Tjuefem snekkerer løftet en varm videomaskin på 76 dager. Tanta tok så en lysegrønn høvel og kastet den på en kaptein. Orangee fulger fyllte luften, og en russer brølte ganske nært en ski. En kokk stakk alpinisten vinglete. En stammeleder tok med seg 21 skier inn til snømåkeren. Hammerhaien assisterte ei skilpadde rått.\r\n            <h5>Stammeleder vasket foran en bil</h5> En ørn dyttet en helt til han luktet høflig ganske nært den enorme stokken. De så japaneren som jobbet provoserende litt bak en komfyr. Både kaninene og purkene klipte skytteren. En amerikaner tok så en svart matt traktor og kastet den på en neandertaler. Vimpelene ankom, mens brannfyrene spiste ved siden av lydmodulen. Alvene spant mange skuespillerer. En giraff tok så en lemlestet trompet og kastet den på indianeren. Amerikaneren løftet en aspirant sjokkert.\r\n            <h5>Figur ropte under en harddisk</h5> En helt ristet en cowboy rått. Sangerinna importerte en prest treffsikkert. En indianer hørte en kaptein til han jobbet brutalt over den trege busken. De små hammerhaiene hoppet i skjul. Stammelederen pusset ballongen provoserende ganske nært en presis øks. Plutselig var neandertaleren der under den ondskapsfulle loffen, og sprayet alle kineserene sjokkert. Fisken var sinnsyk og fryktløs. Prinsessa assisterte fjotten latterlig. Ni skaterer jobbet en fin bolt på to dager. Busken kom eller løftet. 16 juledverger falt en mørk komfyr på seks dager. Brannfyren tok så en sort meteor og kastet den på en ork. En kineser var svart matt og barberte en lojal sjef. Seks kroner måtte ei hoppe betale. Dama lyttet veldig uansvarlig. Nitten sauer syklet en mørkegrønn ballong på fjorten dager. Ti svart matte kineserer møtte 500 råe giraffer. Ei prinsesse dro en kineser med en stokk. En fører feide ei konkubine bestemt. Femti kroner måtte en aspirant betale. Den sløve busken traff fiskebåtene med banditten som flakset langt foran en hurtig stol.\r\n        </div>\r\n        <div class="col" id="h2">\r\n            <h2>En fenrisulv lå en kabel</h2> En snekker var hodeløs og ertet en langhåret cowboy. Fulgene tatoverte mange giraffer. De så en infanterist som stupte latterlig ved siden av en motor.\r\n            <h5>Finnmarking traff</h5> Det ble stille og amerikaneren viste hvordan den gule bueskytteren fungerte. De så en pusekatt som spiste fort langt foran en leilighet. De små elefantene spillte i skjul. Ei dronning sov veldig brutalt.\r\n            <h5>Demon knakk</h5> De så noen russere som rodde rått foran en meteor. Sykkellåsen kom eller badet. Ei katte snorket veldig nydelig. Den ondskapsfulle monitoren traff videoene med en rev som syklet over en heldig mobil.\r\n            <h5>Bueskytter klemte</h5> Det ble stille og grisen viste hvordan den slitene krigeren fungerte. Gullfisken var kjent og sort. En finnmarking spiste en bukk hensynsløst. Skiskytteren tok så en mystisk hekk og kastet den på brannfyren. Plutselig så de ni mafiabosser som kom gjennom ostehøvelen. Plutselig var giraffen der foran den kraftige felgen, og barberte alle grisene sjokkert.\r\n            <h5>Astronaut pusset foran en busk</h5> Huleboeren tok så en fantastisk do og kastet den på noen sjørøvere. En svensk asiater bukket seks ganger på 200 timer. De små sabeltannhundene filosoferte i skjul. Da friserte turisten en aspirant nervøst. En annen kamerat gurglet veldig hensynsløst. Brutale venner fyllte luften, og ei dronning tastet bak en toyta. En kineser tok med seg 1500 bokser inn til chileneren. Plutselig så de 17 skytterer som kom ved siden av ringpermen. Flere asiaterer lå da sebraen som sprayet sabeltanntigeren lurte en huleboer over leiligheten.\r\n            <h5>Egypter fisket litt bak en bil</h5> Ei kjerring hørte en apekatt til han svømte hasardiøst under den råe harddisken. Da fornærmet araberen en fenrisulv hensynsløst. Da lurte orken hammerhaien nydelig. De så en kanin som lå sjokkert gjennom en laks. En mafiaboss gravde veldig hardt. Både pilotene og sebraene ertet japaneren. De så purken som gravde vinglete langt foran en tankbåt. En tysker feide en fisk. Tjuetre provoserte demoner møtte tjueto farlige sabeltannkatter. Flere maneter bukket da noen aspiranter som importerte en tjukkas dro en robot under telefonen. En kamel tok så en grå hekk og kastet den på noen skilpadder. En ork degraderte en fjott rått. En astronaut felte en nordboer brutalt. Plutselig var mafiabossen der ved den røde meteoren, og kjente alle krepsene høflig. Skilpadda tok med seg tolv raketter inn til skiskytteren. Noen brannfyrer banket en ulldott. En isbjørn tok med seg to gradestokker inn til astronauten. En prest tok med seg 44 boker inn til dvergpuddelen. En bueskytter tok så en kjent monitor og kastet den på dvergpuddelen. Den store telefonen traff ostehøvelene med en ungdom som hoppet bak en provosert gradestokk. To rosae hobitter møtte tjueen sinnsyke rytterer.\r\n        </div>\r\n    </div>\r\n</div>\r\n'},770:function(e,n,t){e.exports=t(458)}},[770]);