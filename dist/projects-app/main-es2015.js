(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-image: url('../assets/about.jpeg'); width: 100vw; height: 100vh; background-size: cover;\">\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<h1 class=\"title\"> About </h1>\r\n\r\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n\r\n\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-image: url('../assets/gallery.jpeg'); width: 100vw; height: 100vh; background-size: cover;\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <h1 class=\"title\"> Admin Portal </h1>\n    <mat-card class=\"galleryCard\">\n    <ul *ngFor=\"let proj of adminResults\" style='color: black'>\n        <li class=\"cardInfo\">Name: {{ proj.projectName }}\n            <button (click)='removeProject( proj.id )'>Remove Project</button>\n        </li>\n        <li class=\"cardInfo\">Link: <a target='_blank' href='{{ proj.location }}'> View Project</a></li>\n        <li>Comments: \n            <ul *ngFor='let comment of proj.comments'>\n                <li>{{ comment.commenter_username }}: {{ comment.content }}\n                    <button (click)='removeComment( comment.id )'>Remove Comment</button>\n                </li>\n            </ul>\n        </li>\n    </ul>\n    </mat-card>\n    </body> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background: url(../assets/road.jpeg); width: 100vw; height: 100vh;\">\r\n<router-outlet></router-outlet>\r\n</body> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-image: url('../assets/phone.jpg'); width: 100vw; height: 100vh; background-size: cover;\">\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<h1 class=\"title\"> Contact </h1>\r\n<mat-grid-list cols=\"3\" rowHeight=\"2:1\">\r\n        <mat-grid-tile>\r\n            <mat-card class=\"card\">\r\n                <mat-card-title>Elijah Smith</mat-card-title>\r\n                <mat-card-content (click)='onNavigate()' class=\"links\">https://github.com/Eli-Smith</mat-card-content>\r\n                <mat-card-content (click)='onNavigate1()' class=\"links\">https://www.linkedin.com/in/elijah-smith-092198144/</mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-card class=\"card\">\r\n                <mat-card-title>Karina Rodriguez</mat-card-title>\r\n                <mat-card-content (click)='onNavigate2()' class=\"links\">https://github.com/kerv91</mat-card-content>\r\n                <mat-card-content (click)='onNavigate3()' class=\"links\">https://www.linkedin.com/in/karina-rodriguez-3454a594/</mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-card class=\"card\">\r\n                    <mat-card-title>James Higgins</mat-card-title>\r\n                    <mat-card-content (click)='onNavigate4()' class=\"links\">https://github.com/jhiggins3231</mat-card-content>\r\n                    <mat-card-content (click)='onNavigate5()' class=\"links\">https://www.linkedin.com/in/jhiggins3231/</mat-card-content>\r\n                    <br />\r\n                </mat-card>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/comments/comments.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/comments/comments.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-image: url('../assets/shore.jpeg'); width: 100vw; height: 100vh; background-size: cover;\">\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n    <h1 class=\"title\">Comments</h1>\r\n    <mat-card class=\"cardInfo\">\r\n            <perfect-scrollbar style=\"max-width: 350px; max-height: 300px;\" [config]=\"config\">\r\n    <ul>\r\n        <li>{{ name }}</li>\r\n        <ul *ngFor='let comment of comments'>\r\n            <li>{{comment.commenter_username }}: {{ comment.content }} \r\n                <button mat-raised-button class=\"button\" (click)='[deleteComment(comment.id), getComments(projectId)]'>Delete</button>\r\n                <button mat-raised-button class='button' (click)='setUpdateValue(comment.content, comment.id)'>Edit</button>\r\n            </li>\r\n            \r\n        </ul>\r\n    </ul>\r\n</perfect-scrollbar>\r\n   \r\n        <input type='text' class=\"input\" placeholder='Comment' [(ngModel)]='newComment'>\r\n        <button mat-raised-button class='button' (click)='[addComment(newComment, projectId), getComments(projectId)]'>Add a comment</button>\r\n    \r\n\r\n    \r\n        \r\n        <input type=\"text\" class=\"input\" name='update' [placeholder]='updateContent' [(ngModel)]='updateContent'>\r\n        <button mat-raised-button class=\"button\" (click)='updateComment(updateId, updatedComment)'>Update</button>\r\n    </mat-card>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-image: url('../assets/gallery.jpeg'); width: 100vw; height: 100vh; background-size: cover;\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <h1 class=\"title\"> Project Gallery </h1>\r\n    <mat-card class=\"galleryCard\">\r\n    <ul *ngFor=\"let proj of galleryProjects|slice:0:3;\" style='color: white'>\r\n        <li class=\"cardInfo\">Name: {{ proj.projectName }}</li>\r\n        <li class=\"cardInfo\">Link: <a target='_blank' href='{{ proj.location }}'> View Project</a></li>\r\n        <li class=\"cardInfo\">Description: {{ proj.description }}</li>\r\n        <ul *ngFor='let comment of proj.comments'>\r\n            <li> {{ comment.content }}</li>\r\n        </ul>\r\n        <a routerLink=\"/comments\" [state]=\"{ id: proj.id, name: proj.projectName, description: proj.description, location: proj.location, comments: proj.comments}\">\r\n            <button mat-raised-button>\r\n                Comments\r\n            </button>\r\n        </a>\r\n    </ul>\r\n    </mat-card>\r\n    </body> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background: url(../assets/mountain.jpeg); width: 100vw; height: 100vh; background-size: cover;\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <mat-tab-group class=\"tabs\" animationDuration=\"2000ms\" mat-align-tabs='center' style=\"width: 50vw;\">\r\n                <mat-tab label=\"How To\" class=\"label\" ><h1 class=\"title\"> How To </h1> \r\n                        <p class=\"howTo\">\r\n                                <ul class=\"howTo\">\r\n                                        <li>\r\n                                                To add/update/delete projects navigate to the Add/View section via the drop down in the top right.\r\n                                        </li>\r\n                                        <li>\r\n                                                To add projects fill out the form in the Add/View section and click the \"Add\" button.\r\n                                        </li>\r\n                                        <li>\r\n                                                To Update/Delete projects use the drop down to select projects by badge and search. Find the project you wish to Update/Delete and click on the \"Click\" selection at the right of the table. If you wish to delete simply click the \"delete\" button. If you wish to update, fill out the form and click \"Update\".\r\n                                        </li>\r\n                                        <li>\r\n                                                The Gallery is designed to display 3 Projects. Admins have the ability to update these to different projects.\r\n                                                You're also able to comment on the listed projects.\r\n                                        </li>\r\n                                        <li>\r\n                                                The Comments section is used to add comments to the related project. Simply enter your comment and click \"Add a comment\".\r\n                                        </li>\r\n                                </ul>\r\n\r\n                        </mat-tab>\r\n\r\n                        \r\n                <mat-tab label=\"Our Project\" class=\"label\" >\r\n                        <p class=\"projectInfo\">For our Red Badge project we decided to make something that could benefit future students here at Eleven Fifty. Throughout the course we often found ourselves asking for examples of past projects or portfolios. Now thanks to our app we have a place for everyone to find, upload, and ask questions about projects done by other EFA students.</p>    \r\n                </mat-tab>\r\n                <mat-tab label=\"Our Group\" class=\"label\" > \r\n                    <mat-list>\r\n                            <mat-list-item class=\"listItem\"> Elijah Smith </mat-list-item>\r\n                            <mat-list-item class=\"listItem\"> Karina Rodriguez </mat-list-item>\r\n                            <mat-list-item class=\"listItem\"> James Higgins </mat-list-item>\r\n                    </mat-list>\r\n                </mat-tab>\r\n          </mat-tab-group>\r\n    </body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n     <mat-grid-list cols=\"2\" rowHeight=\"1:1\">\r\n       <mat-grid-tile>\r\n     <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Login</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <form>\r\n          <table class=\"example-full-width\" cellspacing=\"0\">\r\n            <br />\r\n            <tr>\r\n              <td>\r\n                <mat-form-field class=\"example-full-width\" style=\"color: black;\">\r\n                    <input matInput placeholder=\"Username\" type=\"text\" id=\"username\" [formControl]=\"username\" class=\"form-control\" />\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <br />\r\n            <br />\r\n            <tr>\r\n            <td><mat-form-field class=\"example-full-width\" style=\"color: black;\">\r\n                <input matInput placeholder=\"Password\" type=\"password\" id=\"password\" [formControl]=\"password\" class=\"form-control\" />\r\n            </mat-form-field></td>\r\n          </tr></table>\r\n        </form>\r\n        <!-- <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner> -->\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button type=\"submit\" class=\"btn1\" (click)='login()'>Login</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Signup</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n          <form>\r\n          <table class=\"example-full-width\" cellspacing=\"0\">\r\n            <tr>\r\n              <td>\r\n                <mat-form-field class=\"example-full-width\" style=\"color: black;\">\r\n                    <input matInput placeholder=\"Username\" type=\"text\" id=\"usernameS\" [formControl]=\"usernameS\" class=\"form-control\" />\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                  <mat-form-field class=\"example-full-width\" style=\"color: black;\">\r\n                      <input matInput placeholder=\"Email\" type=\"email\" id=\"email\" [formControl]=\"email\" class=\"form-control\" />\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n            <tr>\r\n            <td><mat-form-field class=\"example-full-width\" style=\"color: black;\">\r\n                <input matInput placeholder=\"Password\" type=\"password\" id=\"passwordS\" [formControl]=\"passwordS\" class=\"form-control\" />\r\n            </mat-form-field></td>\r\n          </tr></table>\r\n        </form>\r\n        <!-- <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner> -->\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n          <button mat-raised-button type=\"submit\" class=\"btn1\" (click)='signUp()'>Submit</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  </mat-grid-list> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"background-color: black; color: whitesmoke; background-image: url('../assets/logoPNG.png'); background-repeat: no-repeat; background-size: 210px; background-position: center;\">\r\n        <mat-toolbar-row>\r\n            <button mat-button routerLink='/login' style=\"left: 0%;\" >Login</button> \r\n            <button mat-button routerLink='/about' style=\"left: 90%;\" >About</button>\r\n            <button mat-button routerLink='/contact' style=\"left: 80%;\">Contact</button>\r\n            <button mat-icon-button style=\"left: 85%;\" [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item routerLink=\"/home\">\r\n            <mat-icon>home</mat-icon>\r\n            <span>Home</span>\r\n        </button>\r\n        <button mat-menu-item routerLink=\"/projects\">\r\n          <mat-icon>library_add</mat-icon>\r\n          <span>Add/View</span>\r\n        </button>\r\n          <button mat-menu-item routerLink=\"/gallery\">\r\n            <mat-icon>dialpad</mat-icon>\r\n            <span>Gallery</span>\r\n          </button>\r\n        <button mat-menu-item (click)='logout()'>\r\n                <mat-icon>exit_to_app</mat-icon>\r\n                <span>Logout</span>\r\n        </button> \r\n        <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/dialog/dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/dialog/dialog.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h2 mat-dialog-title>Update Project</h2>\r\n    <mat-dialog-content>\r\n        <mat-form-field class=\"input\">\r\n              <input matInput placeholder=\"Project Name\" [formControl]=\"projectName\" class=\"place\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input\">\r\n              <input matInput placeholder=\"Brief Description\" [formControl]=\"description\" class=\"place\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"input\">\r\n              <input matInput placeholder=\"Link to Project\" [formControl]=\"location\" class=\"place\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n        <mat-select required class=\"select\" placeholder=\"Badge\" [formControl]=\"badge\">\r\n              <mat-option value=\"Gold\">Gold</mat-option>\r\n              <mat-option value=\"Blue\">Blue</mat-option>\r\n              <mat-option value=\"Red\">Red</mat-option>\r\n        </mat-select>\r\n        </mat-form-field>\r\n        <a [title]='projectId'></a>\r\n        <button (click)='updateProject(projectId)'>Update</button>\r\n        <button (click)='deleteProject(projectId)'>Delete</button>\r\n    </mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background: url(../assets/abstract.jpeg); width: 100vw; height: 100vh; background-size: cover;\">\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<h1 class=\"title\">Projects</h1>\r\n<br /><br /><br />\r\n<br /><br /><br />\r\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n    <mat-grid-tile class=\"example-container\">\r\n<div>\r\n    <mat-form-field class=\"input\">\r\n          <input matInput placeholder=\"Project Name\" [formControl]=\"projectName\" class=\"place\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"input\">\r\n          <input matInput placeholder=\"Brief Description\" [formControl]=\"description\" class=\"place\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"input\">\r\n          <input matInput placeholder=\"Link to Project\" [formControl]=\"location\" class=\"place\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n    <mat-select required class=\"select\" placeholder=\"Badge\" [formControl]=\"badge\">\r\n          <mat-option value=\"Gold\">Gold</mat-option>\r\n          <mat-option value=\"Blue\">Blue</mat-option>\r\n          <mat-option value=\"Red\">Red</mat-option>\r\n    </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button class=\"input\" (click)='[addProjects(), getByBadge1()]'>Add</button>\r\n</div>\r\n</mat-grid-tile>\r\n\r\n<mat-grid-tile class=\"example-container1\">\r\n  <div class=\"tableSetup\">\r\n    <mat-select required class=\"searchBadge\" placeholder=\"Badge\" [formControl]=\"byBadge\">\r\n      <mat-option value=\"Gold\">Gold</mat-option>\r\n      <mat-option value=\"Blue\">Blue</mat-option>\r\n      <mat-option value=\"Red\">Red</mat-option>\r\n    </mat-select>\r\n    <button class=\"searchButton\" (click)='getByBadge()'>Search</button>\r\n    <perfect-scrollbar style=\"max-width: 650px; max-height: 300px; color: purple;\" [config]=\"config\">\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"tableData\">\r\n\r\n      \r\n      <ng-container matColumnDef=\"Project Name\">\r\n        <th mat-header-cell *matHeaderCellDef>Project Name</th>\r\n        <td mat-cell *matCellDef=\"let proj\">{{proj.projectName}}</td>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"Description\">\r\n        <th mat-header-cell *matHeaderCellDef>Description</th>\r\n        <td mat-cell *matCellDef=\"let proj\">{{proj.description}}</td>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"Location\">\r\n        <th mat-header-cell *matHeaderCellDef>Location</th>\r\n        <td mat-cell *matCellDef=\"let proj\"><a target='_blank' href={{proj.location}} >View Project</a></td>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"Badge\">\r\n        <th mat-header-cell *matHeaderCellDef>Badge</th>\r\n        <td mat-cell *matCellDef=\"let proj\">{{proj.badge}}</td>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"ID\">\r\n        <th mat-header-cell *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let proj\" style=\"cursor: pointer;\" (click)=\"openDialog(proj.id)\">Edit/Delete<a hidden>{{proj.id}}</a></td>\r\n      </ng-container>\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n                </table>   \r\n              </perfect-scrollbar>\r\n            </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n         \r\n<h1 style=\"color: white;\">user works!</h1>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_services/admin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/_services/admin.guard.ts ***!
  \******************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");



let AdminGuard = class AdminGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        let admin = sessionStorage.getItem('role');
        if (admin === 'admin') {
            return true;
        }
        else {
            window.location.href = '/home';
            alert('Not Authorized');
            return false;
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");




let token = sessionStorage.getItem('token');
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': token })
};
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
    }
    signUp(username, email, password) {
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/auth/signup`, { username: username, email: email, password: password, role: 'user' });
    }
    signin(username, password) {
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/auth/login`, { username: username, password: password });
    }
    update(username, email, id) {
        const user = {
            username: username,
            email: email
        };
        return this.http.put(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/auth/update/${id}`, user, httpOptions);
    }
    delete() {
        return this.http.delete(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/auth/delete`, httpOptions);
    }
    delete2(id) {
        return this.http.delete(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/auth/adminDelete/${id}`, httpOptions);
    }
    getUsers() {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/auth/allUsers`, httpOptions);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/project.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/project.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");




let token = sessionStorage.getItem('token');
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': token })
};
let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
    }
    add(projectName, description, location, badge) {
        return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/post`, { projectName: projectName, description: description, location: location, badge: badge }, httpOptions);
    }
    getByBadge(byBadge) {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/badge/${byBadge}`, httpOptions);
    }
    getAll() {
        return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/view`, httpOptions);
    }
    deleteProject(deleteId) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/remove/${deleteId}`;
        // console.log(url)
        return this.http.delete(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/remove/${deleteId}`, httpOptions);
    }
    editProject(editId, newProjectName, newDescription, newLocation, newBadge) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/edit/${editId}`;
        // console.log(url)
        return this.http.put(url, { projectName: newProjectName, description: newDescription, location: newLocation, badge: newBadge }, httpOptions);
    }
    // COMMENTS SERVICES //
    addComment(comment, id) {
        console.log({ comment: { project_id: id, content: comment } });
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/comments/comment`;
        return this.http.post(url, { comment: { project_id: id, content: comment } }, httpOptions);
    }
    getComments(id) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/comments/view/${id}`;
        console.log(url);
        return this.http.get(url, httpOptions);
    }
    deleteComment(id) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/comments/remove/${id}`;
        console.log(url);
        return this.http.delete(url, httpOptions);
    }
    updateComment(id, newComment) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/comments/edit/${id}`;
        console.log(url);
        console.log(newComment);
        return this.http.put(url, { newComment: newComment }, httpOptions);
    }
    // ADMIN SERVICES //
    removeProject(id) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/projects/adminremove/${id}`;
        console.log(url);
        return this.http.delete(url, httpOptions);
    }
    removeComment(id) {
        let url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"]}/comments/adminremove/${id}`;
        console.log(url);
        return this.http.delete(url, httpOptions);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n    font-family: Lobster;\r\n    text-align: center;\r\n    font-size: 5em;\r\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.692);\r\n}\r\n@font-face {\r\n    font-family: Lobster;\r\n    src: url('/assets/Lobster-Regular.ttf')\r\n}\r\n@font-face {\r\n    font-family: Volk;\r\n    src: url('/assets/Vollkorn-Black.ttf');\r\n}\r\niframe {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 52%;\r\n    top: 70%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMb2JzdGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjY5Mik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTG9ic3RlcjtcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL0xvYnN0ZXItUmVndWxhci50dGYnKVxyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFZvbGs7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9Wb2xsa29ybi1CbGFjay50dGYnKTtcclxufVxyXG5pZnJhbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUyJTtcclxuICAgIHRvcDogNzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=0';
        this.youtubeId = 'dQw4w9WgXcQ';
        this.embedUrl = 'https://www.youtube.com/embed/';
        this.autoPlay = '?autoplay=0';
        this.videoUrl = this.embedUrl + this.youtubeId;
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");



let AdminComponent = class AdminComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.adminResults = [];
    }
    ngOnInit() {
        this.projectService.getAll().subscribe((response) => this.adminResults = response);
    }
    removeProject(id) {
        console.log(id);
        this.projectService.removeProject(id).subscribe((response) => window.location.href = '/admin');
    }
    removeComment(id) {
        console.log(id);
        this.projectService.removeComment(id).subscribe((response) => window.location.href = '/admin');
    }
};
AdminComponent.ctorParameters = () => [
    { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _gallery_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/comments/comments.component */ "./src/app/gallery/comments/comments.component.ts");
/* harmony import */ var _project_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/dialog/dialog.component */ "./src/app/project/dialog/dialog.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/admin.guard */ "./src/app/_services/admin.guard.ts");














const routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'projects', component: _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"] },
    { path: 'gallery', pathMatch: 'full', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
    { path: 'comments', pathMatch: 'full', component: _gallery_comments_comments_component__WEBPACK_IMPORTED_MODULE_10__["CommentsComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'projects/dialog', component: _project_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\r\n    font-family: Lobster;\r\n    src: url('/assets/Lobster-Regular.ttf')\r\n}\r\n.cdk-overlay-connected-position-bounding-box {\r\n    z-index: 99999 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMb2JzdGVyO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvTG9ic3Rlci1SZWd1bGFyLnR0ZicpXHJcbn1cclxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xyXG4gICAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcclxuICB9Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'projects-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _gallery_comments_comments_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./gallery/comments/comments.component */ "./src/app/gallery/comments/comments.component.ts");
/* harmony import */ var _project_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./project/dialog/dialog.component */ "./src/app/project/dialog/dialog.component.ts");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./safe-url.pipe */ "./src/app/safe-url.pipe.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");










//Angular Material Components













































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_42__["UserComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_43__["HomeComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_44__["NavbarComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_45__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_46__["ContactComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_47__["ProjectComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_48__["GalleryComponent"],
            _gallery_comments_comments_component__WEBPACK_IMPORTED_MODULE_49__["CommentsComponent"],
            _project_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_50__["DialogComponent"],
            _safe_url_pipe__WEBPACK_IMPORTED_MODULE_51__["SafeUrlPipe"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_52__["AdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_7__["CustomMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_30__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
        ],
        entryComponents: [
            _project_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_50__["DialogComponent"]
        ],
        providers: [{
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"]
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n    font-family: Lobster;\r\n    text-align: center;\r\n    font-size: 5em;\r\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.692);\r\n}\r\n\r\n.card {\r\n    width: 450px;\r\n    height: 200px;\r\n    border: 2px solid red;\r\n    box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.692);\r\n}\r\n\r\n.links {\r\n    font-family: Volk;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nmat-card-title {\r\n    font-family: Lobster;\r\n}\r\n\r\n@font-face {\r\n    font-family: Lobster;\r\n    src: url('/assets/Lobster-Regular.ttf')\r\n}\r\n\r\n@font-face {\r\n    font-family: Volk;\r\n    src: url('/assets/Vollkorn-Black.ttf');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEI7QUFDSjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTG9ic3RlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcclxufVxyXG4ubGlua3Mge1xyXG4gICAgZm9udC1mYW1pbHk6IFZvbGs7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTG9ic3RlcjtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMb2JzdGVyO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvTG9ic3Rlci1SZWd1bGFyLnR0ZicpXHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogVm9saztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL1ZvbGxrb3JuLUJsYWNrLnR0ZicpO1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    onNavigate() {
        window.open('https://github.com/Eli-Smith');
    }
    onNavigate1() {
        window.open('https://www.linkedin.com/in/elijah-smith-092198144/');
    }
    onNavigate2() {
        window.open('https://github.com/kerv91');
    }
    onNavigate3() {
        window.open('https://www.linkedin.com/in/karina-rodriguez-3454a594/');
    }
    onNavigate4() {
        window.open('https://github.com/jhiggins3231');
    }
    onNavigate5() {
        window.open(' https://www.linkedin.com/in/jhiggins3231/');
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
        ],
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/gallery/comments/comments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gallery/comments/comments.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    height: 500px;\r\n    width: 500px;\r\n    background-color: green;\r\n}\r\n.title {\r\n    font-family: Lobster;\r\n    text-align: center;\r\n    font-size: 5em;\r\n    color: black;\r\n    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.808);\r\n}\r\n.cardInfo{\r\n    background-color: rgba(255, 255, 255, 0.692);\r\n    width: 80vw;\r\n    display: flex;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 10px;\r\n    border: 2px solid black;background-color: rgba(255, 255, 255, 0.692);\r\n    align-content: center;\r\n}\r\n.button {\r\n    width: 120px;\r\n    height: 50px;\r\n    display: flex;\r\n    text-align: center;\r\n    align-content: center;\r\n    margin: 10px;\r\n}\r\n.input{\r\n    display: flex;\r\n    height: 50%;\r\n    margin: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixtREFBbUQ7QUFDdkQ7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsdUJBQXVCLENBQUMsNENBQTRDO0lBQ3BFLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTG9ic3RlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MDgpO1xyXG59XHJcbi5jYXJkSW5mb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTIpO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkyKTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbjogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/gallery/comments/comments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery/comments/comments.component.ts ***!
  \********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");




let CommentsComponent = class CommentsComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.comments = [];
        this.config = {};
    }
    ngOnInit() {
        history.pushState({ data: history.state }, '', '');
        console.log(history.state.data.name);
        console.log(history.state.data.comments);
        this.name = history.state.data.name;
        this.comments = history.state.data.comments;
        this.projectId = history.state.data.id;
    }
    getComments(id) {
        this.projectsService.getComments(id).subscribe((res) => {
            this.commentsResponse = res;
            this.comments = this.commentsResponse.comments;
        });
    }
    deleteComment(id) {
        this.projectsService.deleteComment(id).subscribe();
    }
    ;
    addComment(comment, id) {
        this.projectsService.addComment(comment, id).subscribe();
    }
    ;
    setUpdateValue(updateContent, updateId) {
        this.updateContent = updateContent;
        this.updateId = updateId;
    }
    updateComment(updateId, updatedComment) {
        updatedComment = this.updateContent;
        this.projectsService.updateComment(updateId, updatedComment).subscribe((response) => window.location.href = '/gallery');
    }
};
CommentsComponent.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], { static: false })
], CommentsComponent.prototype, "componentRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: false })
], CommentsComponent.prototype, "directiveRef", void 0);
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.css */ "./src/app/gallery/comments/comments.component.css")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n    font-family: Lobster;\r\n    text-align: center;\r\n    font-size: 5em;\r\n    color: whitesmoke;\r\n    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.479);\r\n}\r\n@font-face {\r\n    font-family: Lobster;\r\n    src: url('/assets/Lobster-Regular.ttf')\r\n}\r\n.galleryCard{\r\n    background-color: rgba(255, 255, 255, 0.692);\r\n    width: 60vw;\r\n    display: flex;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 10px;\r\n    border: 2px solid black;\r\n}\r\n.cardInfo {\r\n    color: black;\r\n    line-height: 3em;\r\n    display: flex;\r\n    word-break: break-all;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbURBQW1EO0FBQ3ZEO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMb2JzdGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc5KTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMb2JzdGVyO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvTG9ic3Rlci1SZWd1bGFyLnR0ZicpXHJcbn1cclxuLmdhbGxlcnlDYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5Mik7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jYXJkSW5mbyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogM2VtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");



let GalleryComponent = class GalleryComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.galleryProjects = [];
    }
    ngOnInit() {
        this.projectService.getAll().subscribe((results) => this.galleryProjects = results);
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs{\r\n    position: absolute;\r\n    left: 25%;\r\n    background-color:  whitesmoke;\r\n    border: 3px solid black;\r\n    color: whitesmoke;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    height: 50vh;\r\n    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.692);\r\n}\r\n.title {\r\n    font-size: 32px;\r\n    color: black;\r\n    font-family: Volk;\r\n}\r\n.listItem {\r\n    font-family: Volk;\r\n    font-size: 18px;\r\n    color: black;\r\n    margin-top: 25px;    \r\n}\r\n.projectInfo {\r\n    font-family: Volk;\r\n    font-size: 18px;\r\n    color: black;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    line-height: 46pt;\r\n}\r\n.howTo {\r\n    font-family: Volk;\r\n    font-size: 18px;\r\n    color: black;\r\n    margin: 10px;\r\n    padding: 10px;\r\n    line-height: 26pt;\r\n}\r\n@font-face {\r\n    font-family: Volk;\r\n    src: url('/assets/Vollkorn-Black.ttf');\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZvbGs7XHJcbn1cclxuLmxpc3RJdGVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiBWb2xrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDsgICAgXHJcbn1cclxuLnByb2plY3RJbmZvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBWb2xrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NnB0O1xyXG59XHJcbi5ob3dUbyB7XHJcbiAgICBmb250LWZhbWlseTogVm9saztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZwdDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBWb2xrO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvVm9sbGtvcm4tQmxhY2sudHRmJyk7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    width: 400px;\r\n    margin: 20px;\r\n    border-radius: 5%;\r\n    background-color: rgba(255, 255, 255, 0.692);\r\n    color: black;\r\n    \r\n    }\r\n.mat-card-title{\r\n    font-size: 16px;\r\n    }\r\n.title {\r\n    font-size: 46px;\r\n    text-align: center;\r\n    position: absolute;\r\n    left: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1QyxZQUFZOztJQUVaO0FBQ0o7SUFDSSxlQUFlO0lBQ2Y7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5Mik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICAgIH1cclxuLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let LoginComponent = class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.usernameS = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.passwordS = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    ngOnInit() {
    }
    login() {
        console.log(this.username.value);
        this.auth.signin(this.username.value, this.password.value)
            .subscribe(user => {
            sessionStorage.setItem('token', user.sessionToken);
            sessionStorage.setItem('role', user.user.role);
            alert(`${user.user.role} successfully logged in`);
            if (sessionStorage.getItem('role') === 'admin') {
                window.location.href = '/admin';
            }
            else {
                window.location.href = '/home';
            }
        }, err => {
            alert(err.error.message);
        });
    }
    signUp() {
        if (this.passwordS.value.length >= 5 && this.passwordS.value.length <= 20) {
            this.auth.signUp(this.usernameS.value, this.email.value, this.passwordS.value)
                .subscribe(user => {
                sessionStorage.setItem('token', user.sessionToken);
                alert(user.message);
                window.location.href = '/home';
            }, err => {
                if (err.error.fields.usernameS === this.usernameS.value) {
                    alert('Username not available');
                }
                else {
                    if (err.error.fields.email === this.email.value) {
                        alert('This email already exist');
                    }
                }
            });
        }
        else {
            alert('Password must be between 5 and 20 characters');
        }
    }
    logout() {
        sessionStorage.removeItem('token');
        window.location.href = '/login';
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n    font-size: 12px;\r\n    text-align: left;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    logout() {
        sessionStorage.removeItem('token');
        window.location.href = '/login';
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/project/dialog/dialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/project/dialog/dialog.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/project/dialog/dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/project/dialog/dialog.component.ts ***!
  \****************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let DialogComponent = class DialogComponent {
    constructor(projectService, data) {
        this.projectService = projectService;
        this.data = data;
        this.projectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.badge = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        console.log(this.data);
    }
    deleteProject(deleteId) {
        console.log(this.data);
        deleteId = this.data.passedId;
        console.log(deleteId);
        this.projectService.deleteProject(deleteId).subscribe();
    }
    ;
    updateProject(deleteId, projectName, description, location, badge) {
        deleteId = this.data.passedId;
        this.projectService.editProject(deleteId, this.projectName.value, this.description.value, this.location.value, this.badge.value).subscribe();
    }
    ;
};
DialogComponent.ctorParameters = () => [
    { type: _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogComponent.prototype, "title", void 0);
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.css */ "./src/app/project/dialog/dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], DialogComponent);



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n  font-family: Lobster;\r\n  text-align: center;\r\n  font-size: 5em;\r\n  color: whitesmoke;\r\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.692);\r\n}\r\n.modal-body{\r\n  height: 50vh;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 50vh;\r\n  border: 2px solid rgb(58, 0, 97);\r\n  background-color: whitesmoke;\r\n  border-radius: 10px;\r\n  }\r\n.example-container1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 50vh;\r\n  border: 2px solid rgb(58, 0, 97);\r\n  background-color: whitesmoke;\r\n  border-radius: 10px;\r\n}\r\n.input {\r\n  color: rgb(58, 0, 97);\r\n  display: flex;\r\n}\r\n.searchBadge {\r\n  border: 1px solid purple;\r\n  border-radius: 5px;\r\n}\r\n.searchButton {\r\n  display: flex;\r\n}\r\n.tableData {\r\n  width: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CO0FBQ0Y7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IExvYnN0ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNWVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcclxufVxyXG4ubW9kYWwtYm9keXtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1OCwgMCwgOTcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbi5leGFtcGxlLWNvbnRhaW5lcjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDU4LCAwLCA5Nyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGNvbG9yOiByZ2IoNTgsIDAsIDk3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zZWFyY2hCYWRnZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2VhcmNoQnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi50YWJsZURhdGEge1xyXG4gIHdpZHRoOiA2MDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/project/dialog/dialog.component.ts");








let ProjectComponent = class ProjectComponent {
    constructor(projectService, router, dialog) {
        this.projectService = projectService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['Project Name', 'Description', 'Location', 'Badge', 'ID'];
        this.projectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.badge = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.byBadge = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.updateBadge = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.token = sessionStorage.getItem('token');
        this.dataSource = [];
        this.disabled = false;
        this.responseProjects = [];
        this.config = {};
    }
    ngOnInit() {
    }
    openDialog(id) {
        let projectId = id;
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            data: {
                passedId: projectId
            }
        });
        console.log(projectId);
    }
    addProjects(projectName, description, location, badge, owner) {
        this.projectService.add(this.projectName.value, this.description.value, this.location.value, this.badge.value)
            .subscribe();
        alert(`${this.projectName.value} was added to the database!`);
    }
    getByBadge(byBadge) {
        this.projectService.getByBadge(this.byBadge.value).subscribe(res => {
            this.dataSource = res;
            console.log(this.dataSource);
        });
    }
    getByBadge1(badge) {
        this.projectService.getByBadge(this.badge.value).subscribe(res => {
            this.dataSource = res;
            console.log(this.dataSource);
        });
    }
    deleteProject(projectId) {
        console.log(projectId);
        this.projectService.deleteProject(projectId).subscribe();
    }
    ;
};
ProjectComponent.ctorParameters = () => [
    { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], { static: false })
], ProjectComponent.prototype, "componentRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], { static: false })
], ProjectComponent.prototype, "directiveRef", void 0);
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/safe-url.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/safe-url.pipe.ts ***!
  \**********************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeUrl'
    })
], SafeUrlPipe);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n    font-size: 46px;\r\n    text-align: center;\r\n    position: absolute;\r\n    left: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UserComponent = class UserComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment, APIURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIURL", function() { return APIURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true
};
let APIURL = '';
switch (window.location.hostname) {
    case 'jke-1150-projects-client.herokuapp.com':
        APIURL = 'https://jke-1150-projects-client.herokuapp.com';
        break;
    default:
        APIURL = 'http://localhost:3000';
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\elija\Desktop\1150 Projects\JavaScriptSeptember2019\projects\RedBadgeProject\projectAppClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map