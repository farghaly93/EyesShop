(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");




var routes = [
    { path: '', component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bird {\n  visibility: visible;\n  text-decoration: none;\n  padding-right: 20px;\n  margin-left: 20px;\n  float: left;\n  font-size:30px;\n}\n\n\na#rotator img:hover { \n  box-shadow: 0 3px 15px #000;\n  -webkit-transform: rotate(360deg); \n  transform: translate()\n}\n\n\n.navbar-nav li {\n  color: #fff;\n}\n\n\n.placeholder {\n  height: 150;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url('loading2.gif');\n}\n\n\n.checkbox-filter .input-checkbox label {\n  font-weight: bold;\n  color: rgb(110, 109, 109);\n  font-size: 15px;\n}\n\n\n.aside label {\n  font-size: 18px;\n  color: rgb(31, 29, 29);\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsMkJBQTJCO0VBQzNCLGlDQUFpQztFQUlqQztBQUNGOzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixxQ0FBc0Q7QUFDeEQ7OztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTozMHB4O1xufVxuXG5cbmEjcm90YXRvciBpbWc6aG92ZXIgeyBcbiAgYm94LXNoYWRvdzogMCAzcHggMTVweCAjMDAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKClcbn1cbi5uYXZiYXItbmF2IGxpIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGxhY2Vob2xkZXIge1xuICBoZWlnaHQ6IDE1MDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9hZGluZzIuZ2lmJyk7XG59XG4uY2hlY2tib3gtZmlsdGVyIC5pbnB1dC1jaGVja2JveCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDExMCwgMTA5LCAxMDkpO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYXNpZGUgbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZ2IoMzEsIDI5LCAyOSk7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BREADCRUMB -->\n\t\t<div id=\"breadcrumb\" class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- row -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<ul class=\"breadcrumb-tree\"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /BREADCRUMB -->\n\n\t\t<!-- SECTION -->\n\t\t<div class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- row -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<!-- ASIDE -->\n\t\t\t\t\t<div id=\"aside\" class=\"col-md-3\">\n\t\t\t\t\t\t<!-- aside Widget -->\n\t\t\t\t\t\t<div class=\"aside\">\n\t\t\t\t\t\t\t<h3 class=\"aside-title\"></h3>\n\t\t\t\t\t\t\t<form (change)=\"filter(f)\" #f=\"ngForm\" >\n\t\t\t\t\t\t\t  <div *ngFor=\"let cat of cats; let i=index\">\n\t\t\t\t\t\t\t\t\t<label>{{catsNames[i]}}</label>\n\t\t\t\t\t\t\t\t\t<h3 *ngIf=\"isLoading\" style=\"text-align:center\">Loading...</h3>\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let brand of cat\" class=\"checkbox-filter\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input ngModel [name]=\"brand._id+'/'+catsNames[i]\" type=\"checkbox\" [id]=\"brand._id\">\n\t\t\t\t\t\t\t\t\t\t\t<label [for]=\"brand._id\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{brand._id}}\n\t\t\t\t\t\t\t\t\t\t\t\t<small>({{brand.count}})</small>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /aside Widget -->\n\n\t\t\t\t\t\t<!-- aside Widget -->\n\t\t\t\t\t\t<div style=\"margin-top:25px;\" class=\"aside\">\n\t\t\t\t\t\t\t<p style=\"font-size:16px;color:rgb(31, 39, 39)\">Maximam price</p>\n\t\t\t\t\t\t\t<input style=\"width:180px;\" ngModel name=\"newPrice\" type=\"number\" [value]=\"maxPrice\" class=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\t<!-- /aside Widget -->\n\n\t\t\t\t\t\t<!-- aside Widget -->\n\t\t\t\t\t\t<div class=\"aside\">\n\t\t\t\t\t\t\t<h3 class=\"aside-title\">Top selling</h3>\n\t\t\t\t\t\t\t<div *ngFor=\"let top of topLikedItems\" class=\"product-widget\">\n\t\t\t\t\t\t\t\t<div class=\"product-img\">\n\t\t\t\t\t\t\t\t\t<img style=\"cursor:pointer;\" [routerLink]=\"['/product/'+top._id]\" [src]=\"top.imagePath1\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a  [routerLink]=\"['/product/'+top._id]\">{{top.brand}}</a></h3>\n\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\">{{top.newPrice}}EP <del class=\"product-old-price\">{{top.oldPrice}}EP</del></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /aside Widget -->\n          </div>\n\t\t\t\t\t<!-- /ASIDE -->\n          </div>\n\t\t\t\t\t<!-- STORE -->\n\t\t\t\t\t<div id=\"store\" class=\"col-md-9\">\n\t\t\t\t\t\t<!-- store top filter -->\n\t\t\t\t\t\t<div class=\"store-filter clearfix\">\n\t\t\t\t\t\t\t<div class=\"store-sort\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\tSort By:\n\t\t\t\t\t\t\t\t\t<select class=\"input-select\">\n\t\t\t\t\t\t\t\t\t\t<option (click)=\"orderBy('date')\">Date</option>\n\t\t\t\t\t\t\t\t\t\t<option (click)=\"orderBy('rate')\">Popular</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\tShow:\n\t\t\t\t\t\t\t\t\t<select class=\"input-select\">\n\t\t\t\t\t\t\t\t\t\t<option (click)=\"itemsPerPage(ps)\" *ngFor=\"let ps of pageSizeOptions\" [(value)]=\"postsPerPage\">{{ps}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /store top filter -->\n\n\t\t\t\t\t\t<!-- store products -->\n\t\t\t\t\t\t<h2 *ngIf=\"notfound\">Not found</h2>\n\t\t\t\t\t\t<div *ngIf=\"isLoading\" style=\"text-align:center\"><img  src=\"../../assets/img/loading2.gif\"></div>\n\t\t\t\t\t\t<div *ngIf=\"!isLoading&&!notfound\" class=\"row\">\n\t\t\t\t\t\t\t<!-- product -->\n\t\t\t\t\t\t\t<div style=\"z-index:0;\" *ngFor=\"let product of products\" class=\"col-md-4 col-xs-6\">\n\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"placeholder\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"myimage\"><img style=\"  width: 100%;cursor: pointer;\" [routerLink]=\"['/product/'+product._id]\" height=\"150px\" [src]=\"product.imagePath1\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">{{product.discount}}%</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"new\">{{isNew(product.date)}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"product-category\">{{product.design}}</p>\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a [routerLink]=\"['/product/'+product._id]\">{{product.brand}}</a></h3>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\">{{product.newPrice}} EP <del class=\"product-old-price\">{{product.oldPrice}}</del></h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\n\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"product.rate>.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"product.rate>1.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"product.rate>2.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"product.rate>3.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"product.rate>4.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\n\t\t\t\t\t\t\t\t\t\t\t<button  (click)=\"addtocart(product)\" ><i style=\"color:red;\" [ngClass]=\"inCart(product._id)\" ></i><span class=\"tooltipp\">add to wishlist</span></button>\n\t\t\t\t\t\t\t\t\t\t\t<button></button>\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"modal(product)\" data-toggle=\"modal\" data-target=\".productModal\" class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- /product -->\n              <div class=\"clearfix visible-sm visible-xs\"></div>\n              \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /store products -->\n\n\t\t\t\t\t\t<!-- store bottom filter -->\n\t\t\t\t\t\t<nav aria-label=\"Page navigation example\">\n\t\t\t\t\t\t\t\t<ul class=\" pull-right pagination pg-blue\">\n\t\t\t\t\t\t\t\t  <li (click)=\"commingPage('previous')\" class=\"page-item\"><a class=\"page-link\">Previous</a></li>\n\t\t\t\t\t\t\t\t  <li class=\"page-item\"><a class=\"page-link\">{{currentPage}}</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"commingPage('next')\" class=\"page-item\"><a class=\"page-link\">Next</a></li>\n\t\t\t\t\t\t\t\t  <li><a>{{productsCount}}</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t  </nav>\n\t\t\t\t\t\t<!-- /store bottom filter -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /STORE -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /SECTION -->\n\n\n<!-----MODAL----MODAL----MODAL-----MODAL-----MODAL---MODAL---MODAL----MODAL----MODAL-----MODAL-->\n<!-----MODAL----MODAL----MODAL-----MODAL-----MODAL---MODAL---MODAL----MODAL----MODAL-----MODAL-->\n<!-----MODAL----MODAL----MODAL-----MODAL-----MODAL---MODAL---MODAL----MODAL----MODAL-----MODAL-->\n\n\n<!-- Modal: modalQuickView -->\n\t  <div class=\"modal fade productModal\" id=\"modalQuickView\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n\t\taria-hidden=\"true\">\n\t\t<div class=\"modal-dialog modal-lg\" role=\"document\">\n\t\t  <div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t  <div class=\"row\">\n\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t  <!--Carousel Wrapper-->\n\t\t\t\t  <div id=\"carousel-thumb\" class=\"carousel slide carousel-fade carousel-thumbnails\"\n\t\t\t\t\tdata-ride=\"carousel\">\n\t\t\t\t\t<!--Slides-->\n\t\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t\t  <div class=\"carousel-item active\">\n\t\t\t\t\t\t<img class=\"d-block w-100\" height=\"300px;\" width=\"100%\" [src]=\"productModal.imagePath1\" alt=\"First slide\">\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--/.Slides-->\n\t\t\t\t\t<!--Controls-->\n\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carousel-thumb\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t  <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carousel-thumb\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t  <span class=\"sr-only\">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<!--/.Controls-->\n\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t  <li data-target=\"#carousel-thumb\" data-slide-to=\"0\" class=\"active\">\n\t\t\t\t\t\t<img [src]=\"productModal.imagePath1\" width=\"60\">\">\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ol>\n\t\t\t\t  </div>\n\t\t\t\t  <!--/.Carousel Wrapper-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t  <h2 class=\"h2-responsive product-name\">\n\t\t\t\t\t<strong>{{productModal.brand}}</strong>\n\t\t\t\t  </h2>\n\t\t\t\t  <h4 class=\"h4-responsive\">\n\t\t\t\t\t<span class=\"green-text\">\n\t\t\t\t\t  <strong  style=\"color: rgb(197, 74, 105)\">Price: {{productModal.newPrice}}EP</strong>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"grey-text\">\n\t\t\t\t\t  <small>\n\t\t\t\t\t\t<s>{{productModal.oldPrice}}EP</s>\n\t\t\t\t\t  </small>\n\t\t\t\t\t</span>\n\t\t\t\t  </h4>\n\t\t\t\t  <h3 style=\"color: rgb(30, 43, 15)\" class=\"h2-responsive product-name\">\n\t\t\t\t\t\t<strong>Type: {{productModal.type}}</strong>\n\t\t\t\t  </h3>\n\t\t\t\t  <h3 style=\"color: darkslategrey\" class=\"h2-responsive product-name\">\n\t\t\t\t\t\t<strong>Color: {{productModal.color}}</strong>\n\t\t\t\t  </h3>\n\t\t\t\t  <h3 style=\"color: rgb(31, 33, 43)\" class=\"h2-responsive product-name\">\n\t\t\t\t\t\t<strong>Design: {{productModal.design}}</strong>\n\t\t\t\t  </h3>\n\t\t\t\t  <h3 style=\"color: rgb(112, 9, 18)\" class=\"h2-responsive product-name\">\n\t\t\t\t\t\t<strong>Cart: ({{cartQuantity}})</strong>\n\t\t\t\t  </h3>\n\t  \n\t\t\t\t  <!--Accordion wrapper-->\n\t\t\t\t  <div class=\"accordion md-accordion\" id=\"accordionEx\" role=\"tablist\" aria-multiselectable=\"true\">\t  \n\t\t\t\t\t<!-- Accordion card -->\n\t\t\t\t\t<div class=\"card\">\n\t  \n\t\t\t\t\t  <!-- Card header -->\n\t\t\t\t\t  <div class=\"card-header\" role=\"tab\" id=\"headingTwo2\">\n\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseTwo2\"\n\t\t\t\t\t\t  aria-expanded=\"false\" aria-controls=\"collapseTwo2\">\n\t\t\t\t\t\t  <h5 class=\"mb-0\">\n\t\t\t\t\t\t\tDetails <i class=\"fas fa-angle-down rotate-icon\"></i>\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t  </div>\n\t  \n\t\t\t\t\t  <!-- Card body -->\n\t\t\t\t\t  <div id=\"collapseTwo2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo2\"\n\t\t\t\t\t\tdata-parent=\"#accordionEx\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\n\t\t\t\t\t\t  squid. 3\n\t\t\t\t\t\t  wolf moon officia aute,\n\t\t\t\t\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t  \n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Accordion card -->\n\t\t\t\t  </div>\n\t\t\t\t  <!-- Accordion wrapper -->\n\t  \n\t  \n\t\t\t\t  <!-- Add to Cart -->\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t\t<div class=\"text-center\">\n\t  \n\t\t\t\t\t  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t  <button (click)=\"addtocart(productModal)\" class=\"btn btn-primary\">Add to cart\n\t\t\t\t\t\t<i class=\"fas fa-cart-plus ml-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t  </button>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <!-- /.Add to Cart -->\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  </div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uiProductsServices.service */ "./src/app/uiProductsServices.service.ts");
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/admin-service */ "./src/app/admin/admin-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(uiProductsServices, productsServices) {
        this.uiProductsServices = uiProductsServices;
        this.productsServices = productsServices;
        this.isLoading = false;
        this.postsPerPage = 12;
        this.pageSizeOptions = [12, 6, 3, 18, 21];
        this.currentPage = 1;
        this.notfound = false;
        this.searchQuery = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"];
        this.anim = '';
        this.value = 100;
        this.maxPrice = 399;
        this.productModal = {};
        this.cartQuantity = 0;
        this.order = 'date';
        this.catsNames = ['brand', 'design', 'type', 'color', 'size'];
        this.cats = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchQuery = this.uiProductsServices.searchQueryListener().subscribe(function (res) {
            _this.isLoading = true;
            _this.productsServices.searchquery(res.searchquery).subscribe(function (res) {
                console.log(res.items);
                if (res.items.length === 0) {
                    _this.notfound = true;
                }
                else {
                    _this.notfound = false;
                }
                _this.products = res.items;
                _this.isLoading = false;
            }, function (err) {
                console.log(err);
                _this.products = null;
                _this.notfound = true;
                _this.isLoading = false;
            });
        });
        this.isLoading = true;
        this.getAllItems();
        this.uiProductsServices.cat('brand').subscribe(function (res) {
            _this.cats[0] = res.cats;
        });
        this.uiProductsServices.cat('design').subscribe(function (res) {
            _this.cats[1] = res.cats;
        });
        this.uiProductsServices.cat('type').subscribe(function (res) {
            _this.cats[2] = res.cats;
        });
        this.uiProductsServices.cat('color').subscribe(function (res) {
            _this.cats[3] = res.cats;
        });
        this.uiProductsServices.cat('size').subscribe(function (res) {
            _this.cats[4] = res.cats;
        });
        // this.uiProductsServices.getTopLiked().subscribe(res=>{
        //  this.topLikedItems = res.topLiked;
        // console.log(this.topLikedItems);
        // });
        //////////////////////////////////Slider////////////////////////////////////////////////////////////////
    };
    CategoriesComponent.prototype.getAllItems = function () {
        var _this = this;
        this.uiProductsServices.getProducts(this.currentPage, this.postsPerPage, this.order).subscribe(function (res) {
            if (res.items.length === 0) {
                _this.notfound = true;
            }
            else {
                _this.notfound = false;
            }
            _this.products = res.items;
            _this.productsCount = res.count;
            _this.isLoading = false;
            if (res.cart) {
                _this.cart = res.cart;
                var qnt = res.cart.length;
                _this.cartQuantity = res.cart.length;
                _this.uiProductsServices.updatedCartQuantity.next({ cartQuantity: qnt });
            }
        });
    };
    CategoriesComponent.prototype.filter = function (f) {
        var _this = this;
        var filterObject = {};
        if (f.value.newPrice > 0) {
            filterObject = { newPrice: { $lt: f.value.newPrice + 1 } };
        }
        ;
        var filterarray = [];
        var filtervalues = Object.keys(f.value);
        for (var _i = 0, filtervalues_1 = filtervalues; _i < filtervalues_1.length; _i++) {
            var filtervalue = filtervalues_1[_i];
            if (f.value[filtervalue] === true) {
                var farr = filtervalue.split('/');
                filterarray.push(farr[0]);
                filterObject[farr[1]] = filterarray;
                this.isLoading = true;
            }
        }
        this.uiProductsServices.filterize(filterObject).subscribe(function (res) {
            _this.products = res.filteredItems;
            _this.productsCount = res.count;
            _this.isLoading = false;
        });
    };
    CategoriesComponent.prototype.commingPage = function (comming) {
        var nops = Math.ceil(this.productsCount / this.postsPerPage);
        if (nops === this.currentPage && comming === "next") {
            return;
        }
        if (this.currentPage === 1 && comming === "previous") {
            return;
        }
        if (comming === 'next') {
            this.currentPage = this.currentPage + 1;
        }
        else if (comming === 'previous') {
            this.currentPage = this.currentPage - 1;
        }
        this.isLoading = true;
        this.getAllItems();
    };
    CategoriesComponent.prototype.itemsPerPage = function (number) {
        this.postsPerPage = number;
        this.currentPage = 1;
        this.getAllItems();
    };
    CategoriesComponent.prototype.addtocart = function (product) {
        var _this = this;
        this.uiProductsServices.pushToCart(product).subscribe(function (res) {
            _this.uiProductsServices.updatedCartQuantity.next({ cartQuantity: res.count });
            _this.cartQuantity = res.count;
            _this.cart = res.updatedCart;
            if (res.cartcount == 0) {
                _this.anim = 'bird';
                setTimeout(function () { _this.anim = ''; }, 1000);
            }
        });
    };
    CategoriesComponent.prototype.inCart = function (id) {
        var exp = ['fa fa-heart-o'];
        if (this.cart) {
            for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
                var cart = _a[_i];
                if (cart.proid === id) {
                    exp = ['fa fa-heart'];
                }
            }
        }
        return exp;
    };
    CategoriesComponent.prototype.isNew = function (date) {
        if (date) {
            if ((new Date().getTime() - new Date(date).getTime()) < (14 * 24 * 60 * 60000)) {
                return 'new';
            }
        }
    };
    CategoriesComponent.prototype.modal = function (product) {
        if (product) {
            this.productModal = product;
        }
    };
    CategoriesComponent.prototype.orderBy = function (order) {
        this.order = order;
        this.isLoading = true;
        this.getAllItems();
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__["UiProductsServices"], _admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminServices"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map