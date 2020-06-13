function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./top-nav-bar/top-nav-bar.component */
    "./src/app/top-nav-bar/top-nav-bar.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'GroceryMum';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav-bar");
        }
      },
      directives: [_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopNavBarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./top-nav-bar/top-nav-bar.component */
    "./src/app/top-nav-bar/top-nav-bar.component.ts");
    /* harmony import */


    var _top_nav_bar_background_background_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./top-nav-bar/background/background.component */
    "./src/app/top-nav-bar/background/background.component.ts");
    /* harmony import */


    var _top_nav_bar_login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./top-nav-bar/login-panel/login-panel.component */
    "./src/app/top-nav-bar/login-panel/login-panel.component.ts");
    /* harmony import */


    var _top_nav_bar_global_search_global_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./top-nav-bar/global-search/global-search.component */
    "./src/app/top-nav-bar/global-search/global-search.component.ts");
    /* harmony import */


    var _top_nav_bar_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./top-nav-bar/location-panel/location-panel.component */
    "./src/app/top-nav-bar/location-panel/location-panel.component.ts");
    /* harmony import */


    var _top_nav_bar_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./top-nav-bar/cart/cart.component */
    "./src/app/top-nav-bar/cart/cart.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavBarComponent"], _top_nav_bar_background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"], _top_nav_bar_login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_5__["LoginPanelComponent"], _top_nav_bar_global_search_global_search_component__WEBPACK_IMPORTED_MODULE_6__["GlobalSearchComponent"], _top_nav_bar_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_7__["LocationPanelComponent"], _top_nav_bar_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavBarComponent"], _top_nav_bar_background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"], _top_nav_bar_login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_5__["LoginPanelComponent"], _top_nav_bar_global_search_global_search_component__WEBPACK_IMPORTED_MODULE_6__["GlobalSearchComponent"], _top_nav_bar_location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_7__["LocationPanelComponent"], _top_nav_bar_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-nav-bar/background/background.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/top-nav-bar/background/background.component.ts ***!
    \****************************************************************/

  /*! exports provided: BackgroundComponent */

  /***/
  function srcAppTopNavBarBackgroundBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return BackgroundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundComponent = /*#__PURE__*/function () {
      function BackgroundComponent() {
        _classCallCheck(this, BackgroundComponent);
      }

      _createClass(BackgroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackgroundComponent;
    }();

    BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) {
      return new (t || BackgroundComponent)();
    };

    BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BackgroundComponent,
      selectors: [["app-background"]],
      decls: 6,
      vars: 0,
      consts: [[1, "header"], ["alt", "GroceryMum", "src", "../../../assets/logo.jpg", 1, "logo"], [1, "bg"], [1, "bg", "bg2"], [1, "bg", "bg3"]],
      template: function BackgroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        }
      },
      styles: ["html[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  margin-left: 10px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-top: -65px;    \r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    margin-top: -70px;\r\n    height: 50px;\r\n    width: 50px;\r\n  }\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  background-color: #56e4ea;\r\n  height: 50px;\r\n  width: 100%;\r\n  margin: -8px -8px 20px 0px;\r\n  z-index: -2;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%] {\r\n  -webkit-animation: slide 3s ease-in-out infinite alternate;\r\n          animation: slide 3s ease-in-out infinite alternate;\r\n  background-image: linear-gradient(\r\n    -60deg,\r\n    rgb(238, 238, 238) 50%,\r\n    rgb(253, 253, 253) 50%\r\n  );\r\n  bottom: 0;\r\n  left: -50%;\r\n  opacity: 0.7;\r\n  position: fixed;\r\n  right: -50%;\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.bg2[_ngcontent-%COMP%] {\r\n  animation-direction: alternate-reverse;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n}\r\n\r\n.bg3[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: 5s;\r\n          animation-duration: 5s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 0.25em;\r\n  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);\r\n  box-sizing: border-box;\r\n  left: 50%;\r\n  padding: 10vmin;\r\n  position: fixed;\r\n  text-align: center;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n  0% {\r\n    transform: translateX(-25%);\r\n  }\r\n  100% {\r\n    transform: translateX(25%);\r\n  }\r\n}\r\n\r\n@keyframes slide {\r\n  0% {\r\n    transform: translateX(-25%);\r\n  }\r\n  100% {\r\n    transform: translateX(25%);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi1iYXIvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwREFBa0Q7VUFBbEQsa0RBQWtEO0VBQ2xEOzs7O0dBSUM7RUFDRCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtbmF2LWJhci9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC02NXB4OyAgICBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmU0ZWE7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogLThweCAtOHB4IDIwcHggMHB4O1xyXG4gIHotaW5kZXg6IC0yO1xyXG59XHJcblxyXG4uYmcge1xyXG4gIGFuaW1hdGlvbjogc2xpZGUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC02MGRlZyxcclxuICAgIHJnYigyMzgsIDIzOCwgMjM4KSA1MCUsXHJcbiAgICByZ2IoMjUzLCAyNTMsIDI1MykgNTAlXHJcbiAgKTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogLTUwJTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAtNTAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmJnMiB7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuLmJnMyB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgYm94LXNoYWRvdzogMCAwIDAuMjVlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBhZGRpbmc6IDEwdm1pbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-background',
          templateUrl: './background.component.html',
          styleUrls: ['./background.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-nav-bar/cart/cart.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/top-nav-bar/cart/cart.component.ts ***!
    \****************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppTopNavBarCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent() {
        _classCallCheck(this, CartComponent);
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showCartSideBar",
        value: function showCartSideBar() {
          var sidebar = document.getElementById("sidebar");
          sidebar.style.display = 'block';
        }
      }, {
        key: "closeCartSideBar",
        value: function closeCartSideBar() {
          var background = document.getElementById('sidebar');
          background.style.display = 'none';
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)();
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 7,
      vars: 0,
      consts: [["id", "cartPanel", 1, "cart-nav-bar"], ["src", "../../../assets/cart.svg", "alt", "Cart", 1, "user-cart"], ["for", "login", 3, "click"], ["id", "sidebar", 1, "side-bar-background"], ["id", "cartmodal", 1, "side-bar-content"], ["src", "../../../assets/close.svg", 1, "close", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_label_click_2_listener() {
            return ctx.showCartSideBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | My Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_img_click_6_listener() {
            return ctx.closeCartSideBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 1024px) {\r\n  img.close[_ngcontent-%COMP%] {\r\n    height: 6%;\r\n    margin: 5px;\r\n    position: absolute;\r\n    margin-left: 26.5%;\r\n  }\r\n  .user-cart[_ngcontent-%COMP%] {\r\n    height: 21px;\r\n    width: 30px;\r\n  }\r\n\r\n  .cart-nav-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: 88.5%;\r\n    margin-top: -17%;\r\n    display: flex;\r\n  }\r\n\r\n  .side-bar-background[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0, 0, 0); \r\n    background-color: rgba(0, 0, 0, 0.4); \r\n  }\r\n\r\n  .side-bar-content[_ngcontent-%COMP%] {\r\n    background-color: #ccf3ff;\r\n    margin-left: 69%;\r\n    border: 1px solid #888;\r\n    height: 99%;\r\n    width: 30%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi1iYXIvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GO0FBQ25GO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0lBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtFQUM3RDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvcC1uYXYtYmFyL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKldFQiBDU1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIGltZy5jbG9zZSB7XHJcbiAgICBoZWlnaHQ6IDYlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYuNSU7XHJcbiAgfVxyXG4gIC51c2VyLWNhcnQge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FydC1uYXYtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4OC41JTtcclxuICAgIG1hcmdpbi10b3A6IC0xNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGUtYmFyLWJhY2tncm91bmQge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIH1cclxuXHJcbiAgLnNpZGUtYmFyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZjNmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgaGVpZ2h0OiA5OSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-nav-bar/global-search/global-search.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/top-nav-bar/global-search/global-search.component.ts ***!
    \**********************************************************************/

  /*! exports provided: GlobalSearchComponent */

  /***/
  function srcAppTopNavBarGlobalSearchGlobalSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalSearchComponent", function () {
      return GlobalSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalSearchComponent = /*#__PURE__*/function () {
      function GlobalSearchComponent() {
        _classCallCheck(this, GlobalSearchComponent);
      }

      _createClass(GlobalSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GlobalSearchComponent;
    }();

    GlobalSearchComponent.ɵfac = function GlobalSearchComponent_Factory(t) {
      return new (t || GlobalSearchComponent)();
    };

    GlobalSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlobalSearchComponent,
      selectors: [["app-global-search"]],
      decls: 3,
      vars: 0,
      consts: [["type", "text", "placeholder", "Search for products..", "onfocus", "this.placeholder = ''", "onblur", "this.placeholder = 'Search for products..'", "name", "globalSearch", 1, "searchBox"], ["type", "button", "name", "searchBtn", 1, "searchBtn"]],
      template: function GlobalSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["input.searchBox[_ngcontent-%COMP%] {\r\n  border-radius: 2px 0px 0px 2px;\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 9px;\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\ninput.searchBtn[_ngcontent-%COMP%] {\r\n  border-radius: 0px 2px 2px 0px;\r\n  position: absolute;\r\n  background-image: url('lens.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: 70%;\r\n  background-position: 50%, 50%;\r\n  border: none;\r\n  outline: none;\r\n  z-index: 1;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  \r\n\r\n  input.searchBox[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 32px;\r\n    font-size: 90%;\r\n    margin-left: 15%;\r\n    margin-top: -16.3%;\r\n  }\r\n\r\n  \r\n  input.searchBtn[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 32px;\r\n    margin-top: -16.3%;\r\n    margin-left: 70.5%;\r\n    border: none;\r\n    background-color: rgb(236, 236, 234);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  \r\n\r\n  input.searchBox[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    height: 30px;\r\n    margin-left: 31%;\r\n    margin-top: -4.3%;\r\n  }\r\n\r\n  \r\n  input.searchBtn[_ngcontent-%COMP%] {\r\n    width: 3%;\r\n    height: 30px;\r\n    margin-top: -4.3%;\r\n    margin-left: 67.5%;\r\n    border: none;\r\n    background-color: rgb(236, 236, 234);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi1iYXIvZ2xvYmFsLXNlYXJjaC9nbG9iYWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsaUNBQStDO0VBQy9DLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7O0VBRVY7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBLGdDQUFnQztFQUNoQztJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSxNQUFNOztFQUVOO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBLGdDQUFnQztFQUNoQztJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtbmF2LWJhci9nbG9iYWwtc2VhcmNoL2dsb2JhbC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LnNlYXJjaEJveCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4IDBweCAwcHggMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDlweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuaW5wdXQuc2VhcmNoQnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMnB4IDJweCAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvbGVucy5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlLCA1MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC8qTW9iaWxlcyovXHJcblxyXG4gIGlucHV0LnNlYXJjaEJveCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogLTE2LjMlO1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbiAgaW5wdXQuc2VhcmNoQnRuIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE2LjMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwLjUlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzQpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLypXZWIqL1xyXG5cclxuICBpbnB1dC5zZWFyY2hCb3gge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMSU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNC4zJTtcclxuICB9XHJcblxyXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG4gIGlucHV0LnNlYXJjaEJ0biB7XHJcbiAgICB3aWR0aDogMyU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNC4zJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ny41JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM0KTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-global-search',
          templateUrl: './global-search.component.html',
          styleUrls: ['./global-search.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-nav-bar/location-panel/location-panel.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/top-nav-bar/location-panel/location-panel.component.ts ***!
    \************************************************************************/

  /*! exports provided: LocationPanelComponent */

  /***/
  function srcAppTopNavBarLocationPanelLocationPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationPanelComponent", function () {
      return LocationPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LocationPanelComponent_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", location_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("selected", location_r1.id == 1 ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.name, " ");
      }
    }

    var LocationPanelComponent = /*#__PURE__*/function () {
      function LocationPanelComponent() {
        _classCallCheck(this, LocationPanelComponent);

        this.locations = [{
          id: 1,
          name: 'Ghaziabad'
        }, {
          id: 2,
          name: 'Raj Nagar'
        }, {
          id: 3,
          name: 'Extension'
        }];
      }

      _createClass(LocationPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myFunction",
        value: function myFunction() {
          document.getElementById("locationDropdown").classList.toggle("show");
        }
      }, {
        key: "filterFunction",
        value: function filterFunction() {
          var input, filter, ul, li, a, i, div, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          div = document.getElementById("locationDropdown");
          a = div.getElementsByTagName("a");

          for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              a[i].style.display = "";
            } else {
              a[i].style.display = "none";
            }
          }
        }
      }]);

      return LocationPanelComponent;
    }();

    LocationPanelComponent.ɵfac = function LocationPanelComponent_Factory(t) {
      return new (t || LocationPanelComponent)();
    };

    LocationPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LocationPanelComponent,
      selectors: [["app-location-panel"]],
      decls: 3,
      vars: 1,
      consts: [["id", "location"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function LocationPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LocationPanelComponent_option_2_Template, 2, 3, "option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["select[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n    height: 29px;\r\n    position: absolute;\r\n    margin-top: -4.3%;\r\n    margin-left: 8%;\r\n    background: transparent;\r\n    border-color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi1iYXIvbG9jYXRpb24tcGFuZWwvbG9jYXRpb24tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3RvcC1uYXYtYmFyL2xvY2F0aW9uLXBhbmVsL2xvY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC00LjMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-location-panel',
          templateUrl: './location-panel.component.html',
          styleUrls: ['./location-panel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-nav-bar/login-panel/login-panel.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/top-nav-bar/login-panel/login-panel.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginPanelComponent */

  /***/
  function srcAppTopNavBarLoginPanelLoginPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPanelComponent", function () {
      return LoginPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginPanelComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hey, Abhinav!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginPanelComponent = /*#__PURE__*/function () {
      function LoginPanelComponent() {
        _classCallCheck(this, LoginPanelComponent);

        this.user = [{
          name: 'Abhinav',
          photo: '../../../assets/pp.jpg'
        }];
      }

      _createClass(LoginPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showLoginModal",
        value: function showLoginModal() {
          var modal = document.getElementById('login-modal');
          modal.style.display = 'block';
        }
      }, {
        key: "closeLoginModal",
        value: function closeLoginModal() {
          var modal = document.getElementById('login-modal');
          var mobnumInput = document.getElementById('mobnum');
          var otpInput = document.getElementById('otp');
          modal.style.display = 'none';
          otpInput.style.display = 'none';
          mobnumInput.style.display = 'block';
        }
      }, {
        key: "toggleMobnOtp",
        value: function toggleMobnOtp() {
          var mobnumInput = document.getElementById('mobnum');
          var otpInput = document.getElementById('otp');
          var mobnumBtn = document.getElementById('mobnumBtn');
          var otpBtn = document.getElementById('otpBtn');
          mobnumInput.style.display = 'none';
          otpInput.style.display = 'block';
          mobnumBtn.style.display = 'none';
          otpBtn.style.display = 'flex';
        }
      }, {
        key: "showUserProfile",
        value: function showUserProfile() {
          this.closeLoginModal();
          var loginDiv = document.getElementById('loginPanel');
          var loggedinDiv = document.getElementById('loggedinPanel');
          loginDiv.style.display = 'none';
          loggedinDiv.style.display = 'block';
        }
      }]);

      return LoginPanelComponent;
    }();

    LoginPanelComponent.ɵfac = function LoginPanelComponent_Factory(t) {
      return new (t || LoginPanelComponent)();
    };

    LoginPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPanelComponent,
      selectors: [["app-login-panel"]],
      decls: 17,
      vars: 1,
      consts: [["id", "loginPanel", 1, "login-nav-bar"], ["src", "../../../assets/login-nav-bar.svg", "alt", "Avatar", 1, "user-login"], ["for", "login", 3, "click"], ["class", "loggedin-nav-bar", "id", "loggedinPanel", 4, "ngIf"], ["src", "../../../assets/accordion.png", "alt", "Avatar"], ["id", "login-modal", 1, "modal"], [1, "modal-content"], ["src", "../../../assets/close.svg", 1, "close", 3, "click"], ["type", "text", "placeholder", "Enter mobile number..", "pattern", "[0-9]*", "minlength", "10", "maxlength", "10", "onclick", "this.placeholder=''", "onblur", "this.placeholder='Enter mobile number..'", "id", "mobnum", "required", "", 1, "mobnum"], ["type", "text", "pattern", "[0-9]*", "minlength", "5", "maxlength", "5", "placeholder", "Enter otp..", "onclick", "this.placeholder=''", "onblur", "this.placeholder='Enter otp..'", "id", "otp", "required", "", 1, "otp"], ["type", "submit", "id", "mobnumBtn", 3, "click"], ["type", "submit", "id", "otpBtn", 1, "otpBtn", 3, "click"], ["id", "loggedinPanel", 1, "loggedin-nav-bar"], ["src", "../../../assets/pp.jpg", "alt", "Hey, Abhinav", 1, "user-loggedin"], ["for", "loggedin"]],
      template: function LoginPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPanelComponent_Template_label_click_2_listener() {
            return ctx.showLoginModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginPanelComponent_div_4_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPanelComponent_Template_img_click_9_listener() {
            return ctx.closeLoginModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPanelComponent_Template_button_click_13_listener() {
            return ctx.toggleMobnOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Next..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPanelComponent_Template_button_click_15_listener() {
            return ctx.showUserProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".otp[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.otpBtn[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #ccf3ff;\r\n  margin: 10% auto; \r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  height: 25%;\r\n  width: 20%; \r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n  margin-left: 50%;\r\n  margin-top: -2%;\r\n}\r\n\r\n.center-align[_ngcontent-%COMP%] {\r\n  border: 5px;\r\n  background-color: gray;\r\n  border-color: black;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  height: 10%;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  margin: auto;\r\n  margin-bottom: 5px;\r\n  border-radius: 5px;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: auto;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n\r\n.imgcontainer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1024px) {\r\n  input[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    font-size: 90%;\r\n  }\r\n\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    font-size: 80%;\r\n  }\r\n\r\n  \r\n  img.avatar[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    border-radius: 20%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 1024px) {\r\n  input[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    margin-left: 60%;\r\n  }\r\n\r\n  \r\n  img.avatar[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    border-radius: 20%;\r\n  }\r\n\r\n  .user-login[_ngcontent-%COMP%] {\r\n    height: 21px;\r\n    width: 30px;\r\n  }\r\n\r\n  .user-loggedin[_ngcontent-%COMP%] {\r\n    height: 21px;\r\n    width: 30px;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .login-nav-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: 76.5%;\r\n    margin-top: -4%;\r\n    display: flex;\r\n  }\r\n\r\n  .loggedin-nav-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: 74%;\r\n    margin-top: -4%;\r\n    display: none;\r\n  }\r\n\r\n  .center-align[_ngcontent-%COMP%] {\r\n    height: 40%;\r\n    width: 30%;\r\n    margin-left: 35%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi1iYXIvbG9naW4tcGFuZWwvbG9naW4tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0Esc0JBQXNCOztBQUN0QjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsa0RBQWtEOztBQUNsRDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBLHNGQUFzRjs7QUFDdEY7RUFDRTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztFQUVBLGdDQUFnQztFQUNoQztJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQSxtRkFBbUY7O0FBQ25GO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBLGdDQUFnQztFQUNoQztJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtbmF2LWJhci9sb2dpbi1wYW5lbC9sb2dpbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm90cEJ0biB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmM2ZmO1xyXG4gIG1hcmdpbjogMTAlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIHdpZHRoOiAyMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMiU7XHJcbn1cclxuXHJcbi5jZW50ZXItYWxpZ24ge1xyXG4gIGJvcmRlcjogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1nIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG5pbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIGJ1dHRvbnMgKi9cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIENlbnRlciB0aGUgYXZhdGFyIGltYWdlIGluc2lkZSB0aGlzIGNvbnRhaW5lciAqL1xyXG4uaW1nY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipNT0JJTEUgQ1NTKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgfVxyXG5cclxuICAvKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gIH1cclxuXHJcbiAgLyogQXZhdGFyIGltYWdlICovXHJcbiAgaW1nLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKldFQiBDU1MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcblxyXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICB9XHJcblxyXG4gIC8qIEF2YXRhciBpbWFnZSAqL1xyXG4gIGltZy5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICB9XHJcblxyXG4gIC51c2VyLWxvZ2luIHtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItbG9nZ2VkaW4ge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1uYXYtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3Ni41JTtcclxuICAgIG1hcmdpbi10b3A6IC00JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAubG9nZ2VkaW4tbmF2LWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzQlO1xyXG4gICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jZW50ZXItYWxpZ24ge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-panel',
          templateUrl: './login-panel.component.html',
          styleUrls: ['./login-panel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-nav-bar/top-nav-bar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/top-nav-bar/top-nav-bar.component.ts ***!
    \******************************************************/

  /*! exports provided: TopNavBarComponent */

  /***/
  function srcAppTopNavBarTopNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function () {
      return TopNavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./background/background.component */
    "./src/app/top-nav-bar/background/background.component.ts");
    /* harmony import */


    var _location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./location-panel/location-panel.component */
    "./src/app/top-nav-bar/location-panel/location-panel.component.ts");
    /* harmony import */


    var _global_search_global_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global-search/global-search.component */
    "./src/app/top-nav-bar/global-search/global-search.component.ts");
    /* harmony import */


    var _login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-panel/login-panel.component */
    "./src/app/top-nav-bar/login-panel/login-panel.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/top-nav-bar/cart/cart.component.ts");

    var TopNavBarComponent = /*#__PURE__*/function () {
      function TopNavBarComponent() {
        _classCallCheck(this, TopNavBarComponent);
      }

      _createClass(TopNavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavBarComponent;
    }();

    TopNavBarComponent.ɵfac = function TopNavBarComponent_Factory(t) {
      return new (t || TopNavBarComponent)();
    };

    TopNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopNavBarComponent,
      selectors: [["app-top-nav-bar"]],
      decls: 5,
      vars: 0,
      template: function TopNavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-background");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-location-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-global-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-login-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cart");
        }
      },
      directives: [_background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"], _location_panel_location_panel_component__WEBPACK_IMPORTED_MODULE_2__["LocationPanelComponent"], _global_search_global_search_component__WEBPACK_IMPORTED_MODULE_3__["GlobalSearchComponent"], _login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_4__["LoginPanelComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1uYXYtYmFyL3RvcC1uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-nav-bar',
          templateUrl: './top-nav-bar.component.html',
          styleUrls: ['./top-nav-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\GroceryMum\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map