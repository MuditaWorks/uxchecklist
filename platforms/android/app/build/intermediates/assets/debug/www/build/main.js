webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/victor/Projetos/mobile/iocheck/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic UX CheckList\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form id="checklist-form" method="POST">\n    <div class="row clearfix">\n      <div id="Research" class="title"><span>Research</span></div>\n      <div class="cards">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Deep-Crawl.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox1">Competitive Analysis</label>\n          <p>See how others solve similar problems and try to not reinvent the wheel. <a class="more hide-for-print" href="http://boxesandarrows.com/competitive-analysis-understanding-the-market-context/" target="_blank">Read more<span class="visually-hidden"> about Competitive Analysis: Understanding the Market Context</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox1" type="checkbox">\n        </div>\n      </div>\n      <div class="cards">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/WebAnalytics.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox2">Data analysis</label>\n          <p>Do you have all the useful data you need? Try to have a look at funnels, clicks, page views, performances... <a class="more hide-for-print" href="http://www.nngroup.com/articles/analytics-user-experience/" target="_blank">Read more<span class="visually-hidden"> about Three Uses for Analytics in User-Experience Practice</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox2" type="checkbox">\n        </div>\n      </div>\n      <div class="cards">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Viral-Marketing.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox3">User feedback</label>\n          <p></p>\n          <p>Always speak with Customer Care team! Don\'t have one? Check your old surveys or videos, what your customer says? What do they actually do? <a class="more hide-for-print" href="https://www.gov.uk/service-manual/user-centred-design/user-research/index.html" target="_blank">Read more<span class="visually-hidden"> about An introduction to user research techniques</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox3" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Plan" class="title"><span>Plan</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/business-card.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox4">User stories</label>\n          <p>Have you done personas yet? If not DO IT NOW. Ok, now use them to write down user stories and scenarios. <a class="more hide-for-print" href="http://chrbutler.com/how-to-tell-the-users-story" target="_blank">Read more<span class="visually-hidden"> about How to Tell the User’s Stor</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox4" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Everflux.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox5">User flows</label>\n          <p>Create your user\'s flow based on the scenarios you created, you can use it later to review the journey and create wireframes on top of each step. <a class="more hide-for-print" href="http://www.smashingmagazine.com/2012/01/04/stop-designing-pages-start-designing-flows/" target="_blank">Read more<span class="visually-hidden"> about Stop Designing Pages And Start Designing Flows</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox5" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/computer.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox6">Red routes</label>\n          <p>Define red routes for your product and you’ll be able to identify, prioritise and eliminate any usability obstacles on key user journeys. <a class="more hide-for-print" href="http://userfocus.co.uk/articles/prioritising-functions.html" target="_blank">Read more<span class="visually-hidden"> about How red routes can help you take charge of your product backlog</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox6" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Explore" class="title"><span>Explore</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/beer.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox7">Brainstorm & sketch</label>\n          <p>Find a war room, fill it with markers and drinks, get together and sketch, discuss, vote, disrupt, have fun! <a class="more hide-for-print" href="http://www.gamestorming.com/the-wiki/" target="_blank">Read more<span class="visually-hidden"> about Gamestorming</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox7" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Blog.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox8">Wireframe</label>\n          <p>Add some details and structure to your ideas, reuse patterns and create pages on top of your user flows so you\'ll not leave anything behind. <a class="more hide-for-print" href="http://www.uxpin.com/guide-to-wireframing.html" target="_blank">Read more<span class="visually-hidden"> about The Guide to Wireframing</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox8" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/API.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox9">Prototype</label>\n          <p>You can start creating paper prototypes and continuously iterate to more functional ones. Use sketches, HTML pages or static images, then just get some people and test. <a class="more hide-for-print" href="http://uxdesignweekly.com/ux-resources/prototyping-tools/" target="_blank">Read more<span class="visually-hidden"> about Prototyping Tools</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox9" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Communicate" class="title"><span>Communicate</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Dynamic-Content.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox10">IA</label>\n          <p>Understand your users, your data structure and your channels. How can you organise your navigation and content in a clear and consistent way? <a class="more hide-for-print" href="http://alistapart.com/article/thedisciplineofcontentstrategy" target="_blank">Read more<span class="visually-hidden"> about The Discipline of Content Strategy</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox10" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/typewriter.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox11">Language</label>\n          <p>Follow your brand personality, keep in mind users\' culture and language, the context of your product and make sure they understand you. <a class="more hide-for-print" href="http://alistapart.com/article/translation-is-ux" target="_blank">Read more<span class="visually-hidden"> about Translation is UX</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox11" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/sofa.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox12">Accessibility</label>\n          <p>You don’t need to add extra functionality or to duplicate any content. The key is simply to assess the requirements of those with different skills and limited devices. <a class="more hide-for-print" href="https://www.gov.uk/service-manual/user-centred-design/accessibility.html" target="_blank">Read more<span class="visually-hidden"> about GOV.UK Accessibility</span></a></p>\n\n        </div>\n        <div class="right">\n          <input id="checkbox12" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Create" class="title"><span>Create</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Squeeze-Page.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox13">UI elements</label>\n          <p>Reuse elements and patterns. Follow your style guidelines. Don\'t have any? Create your guidelines. Start small, then create pages. <a class="more hide-for-print" href="http://styleguides.io/" target="_blank">Read more<span class="visually-hidden"> about styleguides.io</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox13" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/cell.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox14">Gestures</label>\n          <p>So you have a swipe slider? Tell me more about pinch, drag, zoom, rotate, shake, six-inch smartphones, left-handed people, mouseover, kinect, motion detection... <a class="more hide-for-print" href="http://www.smashingmagazine.com/2013/05/24/gesture-driven-interface/" target="_blank">Read more<span class="visually-hidden"> about Beyond The Button: Embracing The Gesture-Driven Interface</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox14" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/User-Experience.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox15">Responsiveness</label>\n          <p>Can I see it on my mobile? Oh wait, what about my smart-watch which works as a remote for my 50" TV. Bonus: remember cross device experience. <a class="more hide-for-print" href="http://uxmag.com/articles/create-a-better-responsive-user-experience/" target="_blank">Read more<span class="visually-hidden"> about Create a Better Responsive User Experience</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox15" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Feedbacks" class="title"><span>Give feedback</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/lunch.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox16">Waiting times</label>\n          <p>If your users have to wait ages for the page to load, at least show them a loader. If take longer why don\'t you try something more entertaining? <a class="more hide-for-print" href="http://www.sitepoint.com/3-tips-make-application-feel-faster/" target="_blank">Read more<span class="visually-hidden"> about 3 Tips To Make Your Application Feel Faster</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox16" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Spam.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox17">Errors</label>\n          <p>Be clear and specific on what and where user\'s error is. I mean, your error, because if it\'s your fault you should say it. <a class="more hide-for-print" href="http://uxmag.com/articles/failing-gracefully" target="_blank">Read more<span class="visually-hidden"> about Failing Gracefully</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox17" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Usability.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox18">Completed actions</label>\n          <p>Give immediate and clear feedback of successful user\'s actions. Do not always wait for server response, trust your server once in a while! <a class="more hide-for-print" href="http://www.lukew.com/ff/entry.asp?1759" target="_blank">Read more<span class="visually-hidden"> about Performing Actions Optimistically</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox18" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Finalise" class="title"><span>Finalise</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Optimization.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox19">Finalise layout</label>\n          <p>It\'s time to let your design shine, make it in the right way, don\'t stop with the first solution, always ask "is this the best you can do?" <a class="more hide-for-print" href="http://www.usability.gov/what-and-why/visual-design.html" target="_blank">Read more<span class="visually-hidden"> about Visual Design Basics</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox19" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/E-Commerce.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox20">Use of images and icons</label>\n          <p>Use of icons and images is strongly influenced by context, culture and layout that you use. Like icons, test your images, small changes can bring huge improvements. <a class="more hide-for-print" href="http://www.nngroup.com/articles/icon-usability/" target="_blank">Read more<span class="visually-hidden"> about Icon Usability</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox20" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Heading-Tag.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox21">Font & colours hierarchy</label>\n          <p>Use colours and font sizes properly, try to follow your guidelines and keep it simple. The best visual hierarchies lead users to take the action confidently. <a class="more hide-for-print" href="http://52weeksofux.com/post/443828775/visual-hierarchy" target="_blank">Read more<span class="visually-hidden"> about Visual hierarchy</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox21" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Delight" class="title"><span>Delight</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/pen-ink.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox22">Micro copy</label>\n          <p>Every word is important, and a bit of personality will help your brand. <a class="more hide-for-print" href="http://www.smashingmagazine.com/2012/07/18/the-personality-layer/" target="_blank">Read more<span class="visually-hidden"> about The Personality Layer</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox22" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/search-document.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox23">Micro interactions</label>\n          <p>Trigger, rules, feedback, loop. Details make the product. Bonus: Ever heard about easter eggs? <a class="more hide-for-print" href="http://microinteractions.com/what-is-a-microinteraction/" target="_blank">Read more<span class="visually-hidden"> about What is a microinteraction</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox23" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Exit-Page.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox24">Transitions</label>\n          <p>Motion shouldn\'t be only beautiful, it should build meaning about the spatial relationships, functionality, and intention of the system. <a class="more hide-for-print" href="http://www.google.co.uk/design/spec/animation/authentic-motion.html" target="_blank">Read more<span class="visually-hidden"> about Material Design Authentic motion</span></a></p>\n          <!-- http://www.smashingmagazine.com/2013/10/23/smart-transitions-in-user-experience-design/ -->\n          <!-- http://www.smashingmagazine.com/2012/02/28/mission-transition/ -->\n        </div>\n        <div class="right">\n          <input id="checkbox24" type="checkbox">\n        </div>\n      </div>\n    </div>\n\n    <div class="row clearfix">\n      <div id="Analyse" class="title"><span>Analyse</span></div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/target-copy.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox26">KPI Setup</label>\n          <p>What you want to achieve? What are your goals? Write down how you define success and failure and check if you have everything you need to collect the data. <a class="more hide-for-print" href="http://www.gv.com/lib/how-to-choose-the-right-ux-metrics-for-your-product" target="_blank">Read more<span class="visually-hidden"> about How to Choose the Right UX Metrics for Your Product</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox26" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Article-Marketing.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox25">AB Test plan</label>\n          <p>Plan your AB test ahead and, if you can, plan a short roadmap of improvements. Your goal is not just improving KPIs, but learning something. <a class="more hide-for-print" href="https://www.gov.uk/service-manual/user-centred-design/user-research/multivariate-testing.html" target="_blank">Read more<span class="visually-hidden"> about Craig Sullivan, an industry expert on conversion optimisation</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox25" type="checkbox">\n        </div>\n      </div>\n      <div class="cards clearfix">\n        <div class="img">\n          <img class="left" src="assets/imgs/checklist/icons128/Conversion-Rate.png" alt="">\n        </div>\n        <div class="card-content left">\n          <label for="checkbox27">Test</label>\n          <p>UX lab, survey, sessions recording... test, observe and fix, test, observe and fix... <a class="more hide-for-print" href="http://www.nngroup.com/articles/which-ux-research-methods/" target="_blank">Read more<span class="visually-hidden"> about When to Use Which User-Experience Research Methods</span></a></p>\n        </div>\n        <div class="right">\n          <input id="checkbox27" type="checkbox">\n        </div>\n      </div>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/victor/Projetos/mobile/iocheck/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/victor/Projetos/mobile/iocheck/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/victor/Projetos/mobile/iocheck/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map