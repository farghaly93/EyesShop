(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./categories/categories.module": [
		"./src/app/categories/categories.module.ts",
		"categories-categories-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/add-item/add-item.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/add-item/add-item.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#success_message{ display: none;}\r\nbody {\r\n    padding:130px 30px;background-color:rgb(240, 240, 240)\r\n}\r\n.img {\r\n    border-radius: 26px;\r\n    border: 3px rgb(99, 89, 89);\r\n}\r\n.input-group .form-control {\r\n    z-index: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsYUFBYSxDQUFDO0FBQ2hDO0lBQ0ksa0JBQWtCLENBQUM7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VjY2Vzc19tZXNzYWdleyBkaXNwbGF5OiBub25lO31cclxuYm9keSB7XHJcbiAgICBwYWRkaW5nOjEzMHB4IDMwcHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAyNDAsIDI0MClcclxufVxyXG4uaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICBib3JkZXI6IDNweCByZ2IoOTksIDg5LCA4OSk7XHJcbn1cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgei1pbmRleDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/add-item/add-item.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/add-item/add-item.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container\">\n      <h2 style=\"text-align: center;\">Upload your items</h2>\n        <div style=\"padding:30px;background-color: rgb(229, 230, 241)\" class=\"row\">\n            <div class=\"col-md-6\">\n                    <form [formGroup]=\"form\" (submit)=\"upload()\" class=\"well form-horizontal\">\n                          <div class=\"form-group\">\n                              <label class=\"col-md-2 control-label\">الماركة</label>  \n                              <div class=\"col-md-10 inputGroupContainer\">\n                              <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                              <input list=\"brand\" formControlName=\"brand\" placeholder=\"Brand\" class=\"form-control\" type=\"text\" [value]=\"post?.brand\" required>\n                              <datalist class=\"\n                              datepicker\n                              datepicker-dropdown\n                              dropdown-menu\n                              datepicker-orient-left\n                              datepicker-orient-top\n                          \" style=\"display: block; top: 202px; left: 712.5px; z-index: 1010;\" id=\"brand\">\n                                <option *ngFor=\"let option of brandlist\">{{option._id}}</option>\n                              </datalist>\n                              <div *ngIf=\"form.get('brand').invalid&&form.get('brand').touched\">Please re Enter content</div>\n                                </div>\n                              </div>\n                              </div>\n                              <div class=\"form-group\">\n                                      <label class=\"col-md-2 control-label\" >التصميم</label> \n                                        <div class=\"col-md-10 inputGroupContainer\">\n                                        <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                      <input list=\"design\" formControlName=\"design\" placeholder=\"Design\" class=\"form-control\" type=\"text\" [value]=\"post?.design\" required>\n                                      <datalist id=\"design\">\n                                        <option *ngFor=\"let option of designlist\">{{option._id}}</option>\n                                      </datalist>\n                                      <div *ngIf=\"form.get('design').invalid&&form.get('design').touched\">Please re Enter content</div>\n                                        </div>\n                                      </div>\n                              </div>\n                              <div class=\"form-group\">\n                                      <label class=\"col-md-2 control-label\" >النوع</label> \n                                        <div class=\"col-md-10 inputGroupContainer\">\n                                        <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                      <input list=\"type\" formControlName=\"type\" placeholder=\"Type\" class=\"form-control\" type=\"text\" [value]=\"post?.type\" required>\n                                      <datalist id=\"type\">\n                                        <option *ngFor=\"let option of typelist\">{{option._id}}</option>\n                                      </datalist>\n                                      <div *ngIf=\"form.get('type').invalid&&form.get('type').touched\">Please re Enter content</div>\n                                        </div>\n                                      </div>\n                              </div>\n                              <div class=\"form-group\"> \n                                      <label class=\"col-md-2 control-label\">اللون</label>\n                                        <div class=\"col-md-10 selectContainer\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                        <input list='color' type=\"text\"  formControlName=\"color\" class=\"form-control selectpicker\" [value]=\"post?.color\" required>\n                                        <datalist id=\"color\">\n                                          <option *ngFor=\"let option of colorlist\">{{option._id}}</option>\n                                        </datalist>\n                                        <div *ngIf=\"form.get('color').invalid&&form.get('color').touched\">Please re Enter content</div>\n                                      </div>\n                                      </div>\n                              </div>\n                              <div class=\"form-group\">\n                                      <label class=\"col-md-2 control-label\">الجنس</label>  \n                                      <div class=\"col-md-10 selectContainer\">\n                                      <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n                                      <select  formControlName=\"gender\" class=\"form-control selectpicker\" [value]=\"post?.gender\" required>\n                                      <option value=\"male\">Male</option>\n                                      <option value=\"female\">Female</option>\n                                      </select>\n                                      <div *ngIf=\"form.get('gender').invalid&&form.get('gender').touched\">Please re Enter content</div>\n                                      </div>\n                                      </div>\n                              </div>\n                              <div class=\"form-group\">\n                                      <label class=\"col-md-2 control-label\" >السعر قبل الخصم</label> \n                                        <div class=\"col-md-10 inputGroupContainer\">\n                                        <div class=\"input-group\">\n                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                      <input formControlName=\"oldPrice\" placeholder=\"Old price\" class=\"form-control\" type=\"number\" [value]=\"post?.oldPrice\" required>\n                                      <div *ngIf=\"form.get('oldPrice').invalid&&form.get('oldPrice').touched\">Please re Enter content</div>\n                                        </div>\n                                      </div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label class=\"col-md-2 control-label\" > السعر بعد الخصم</label> \n                                    <div class=\"col-md-10 inputGroupContainer\">\n                                    <div class=\"input-group\">\n                                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                  <input formControlName=\"newPrice\" placeholder=\"New price\" class=\"form-control\" type=\"number\" [value]=\"post?.newPrice\" required>\n                                  <div *ngIf=\"form.get('newPrice').invalid&&form.get('newPrice').touched\">Please re Enter content</div>\n                                    </div>\n                                  </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"col-md-2 control-label\" > الحجم</label> \n                                <div class=\"col-md-10 inputGroupContainer\">\n                                <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                              <input list=\"size\" formControlName=\"size\" placeholder=\"size\" class=\"form-control\" type=\"text\" [value]=\"post?.size\" required>\n                              <datalist id=\"size\">\n                                <option *ngFor=\"let option of sizelist\">{{option._id}}</option>\n                              </datalist>\n                              <div *ngIf=\"form.get('size').invalid&&form.get('size').touched\">Please re Enter content</div>\n                                </div>\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <label class=\"col-md-2 control-label\" > الوصف</label> \n                                <div class=\"col-md-10 inputGroupContainer\">\n                                <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                              <textarea formControlName=\"description\" placeholder=\"description\" class=\"form-control\" [value]=\"post?.description\" required></textarea>\n                              <div *ngIf=\"form.get('description').invalid&&form.get('description').touched\">Please re Enter content</div>\n                                </div>\n                              </div>\n                          </div>\n                              <div class=\" row form-group\">\n                                      <label class=\"col-md-2 control-label\">الكمية</label>  \n                                        <div class=\"col-md-7 inputGroupContainer\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n                                      <input formControlName=\"quantity\" placeholder=\"E-Mail Address\" class=\"form-control\"  type=\"number\" [value]=\"post?.quantity\" required>\n                                      <div *ngIf=\"form.get('quantity').invalid&&form.get('quantity').touched\">Please re Enter content</div>\n                                        </div>\n                                      </div>\n                                      <div class=\"col-md-3\">\n                                          <input (change)=\"onPhotoUpload($event)\" style=\"visibility: hidden;\" name=\"photos\" #photos type=\"file\" required>\n                                          <input (change)=\"onPhotoUpload2($event)\" style=\"visibility: hidden;\" name=\"photos2\" #photos2 type=\"file\">\n                                          <input (change)=\"onPhotoUpload3($event)\" style=\"visibility: hidden;\" name=\"photos3\" #photos3 type=\"file\">\n                                        </div>\n                              </div>\n                              <div class=\"progress\">\n                                  <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\"\n                                  aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"progress\">\n                                    {{progress}}\n                                  </div>\n                          </div> \n                          <p style=\"font-weight:bold;margin-right:-40px;\">{{uploadStatus}}</p>\n                                <div *ngIf=\"form.get('photo1').invalid&&form.get('photo1').touched\">Please re Enter content</div>\n                                <button [style]=\"but\" class=\"btn-primary btn button\">Upload item</button>\n                    </form>\n                </div>\n                <div class=\"col-md-6\">\n                    <div style=\"padding:18px;\" class=\"row\">\n                        <div class=\"placeholder\"><img (click)=\"photos.click()\" height=\"300px\" width=\"500px\" class=\"img col-sm-12\" [src] = \"imgPreview1||post?.imagePath1||'assets/img/index.png'\" /><span (click)=\"empty(1)\" class=\"fa fa-times\"></span></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"placeholder\"><img (click)=\"photos2.click()\"  height=\"180px\" width=\"500px\" class=\"img col-sm-6\" [src] = \"imgPreview2||post?.imagePath2||'assets/img/index.png'\" /><span style=\"position:relative;margin-left:0px;\" (click)=\"empty(2)\" class=\"fa fa-times\"></span></div>\n                        <div class=\"placeholder\"><img (click)=\"photos3.click()\" height=\"180px\" width=\"500px\" class=\"img col-sm-6\" [src] = \"imgPreview3||post?.imagePath3||'assets/img/index.png'\" /><span (click)=\"empty(3)\" class=\"fa fa-times\"></span></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</body>"

/***/ }),

/***/ "./src/app/admin/add-item/add-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-item/add-item.component.ts ***!
  \******************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mimetype_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mimetype.validator */ "./src/app/admin/add-item/mimetype.validator.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-service */ "./src/app/admin/admin-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_uiProductsServices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/uiProductsServices.service */ "./src/app/uiProductsServices.service.ts");








var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(uiProductsServices, productsServices, route) {
        this.uiProductsServices = uiProductsServices;
        this.productsServices = productsServices;
        this.route = route;
        this.brandlist = [];
        this.designlist = [];
        this.typelist = [];
        this.colorlist = [];
        this.sizelist = [];
    }
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            design: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            oldPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            newPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            photo1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], asyncValidators: [_mimetype_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]] }),
            photo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], asyncValidators: [_mimetype_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]] }),
            photo3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], asyncValidators: [_mimetype_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]] }),
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('id')) {
                _this.mode = 'edit';
                _this.id = paramMap.get('id');
                _this.productsServices.getOne(_this.id).subscribe(function (res) {
                    _this.post = res.item;
                    console.log(_this.post);
                    _this.imgPreview1 = _this.post.imagePath1;
                    _this.imgPreview2 = _this.post.imagePath2;
                    _this.imgPreview3 = _this.post.imagePath3;
                    _this.form.setValue({
                        brand: _this.post.brand,
                        color: _this.post.color,
                        gender: _this.post.gender,
                        design: _this.post.design,
                        type: _this.post.type,
                        oldPrice: _this.post.oldPrice,
                        newPrice: _this.post.newPrice,
                        quantity: _this.post.quantity,
                        size: _this.post.size,
                        description: _this.post.description,
                        photo1: _this.post.imagePath1,
                        photo2: _this.post.imagePath2,
                        photo3: _this.post.imagePath3
                    });
                });
            }
            else {
                _this.mode = 'add';
                _this.id = null;
            }
        });
        this.uiProductsServices.cat('brand').subscribe(function (res) {
            _this.brandlist = res.cats;
        });
        this.uiProductsServices.cat('design').subscribe(function (res) {
            _this.designlist = res.cats;
        });
        this.uiProductsServices.cat('type').subscribe(function (res) {
            _this.typelist = res.cats;
        });
        this.uiProductsServices.cat('color').subscribe(function (res) {
            _this.colorlist = res.cats;
        });
        this.uiProductsServices.cat('size').subscribe(function (res) {
            _this.sizelist = res.cats;
        });
    };
    AddItemComponent.prototype.ngOnChanges = function () {
        $('.progress-bar').css("width", this.progress);
    };
    AddItemComponent.prototype.upload = function () {
        var _this = this;
        if (this.form.valid) {
            var func = void 0;
            var body = this.form.value;
            body.brand.toLowerCase();
            body.type.toLowerCase();
            body.design.toLowerCase();
            body.color.toLowerCase();
            body.size.toLowerCase();
            if (this.mode === "add") {
                func = this.productsServices.uploadItem(body);
            }
            else if (this.mode === 'edit') {
                this.form.value.id = this.id;
                func = this.productsServices.editItem(body);
            }
            func.subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    _this.progress = percentDone + "%";
                    _this.uploadStatus = "Uploading..";
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                    _this.progress = "100%";
                    setTimeout(function () { _this.progress = "0%"; }, 1000);
                    _this.uploadStatus = "completely uploaded";
                }
            }, function (error) {
                console.log(error);
            });
            //this.form.reset();
        }
    };
    AddItemComponent.prototype.onPhotoUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ photo1: file });
        this.form.get('photo1').updateValueAndValidity();
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.imgPreview1 = reader.result;
        };
    };
    AddItemComponent.prototype.onPhotoUpload2 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ photo2: file });
        this.form.get('photo2').updateValueAndValidity();
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.imgPreview2 = reader.result;
        };
    };
    AddItemComponent.prototype.onPhotoUpload3 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ photo3: file });
        this.form.get('photo3').updateValueAndValidity();
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.imgPreview3 = reader.result;
        };
    };
    AddItemComponent.prototype.empty = function (num) {
        var img = 'photo' + num;
        var imgPrev = 'imgPreview' + num;
        this.form.get(img).reset();
        this[imgPrev] = null;
    };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/admin/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/admin/add-item/add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_uiProductsServices_service__WEBPACK_IMPORTED_MODULE_7__["UiProductsServices"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminServices"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-item/mimetype.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-item/mimetype.validator.ts ***!
  \******************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frobs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            var isValid = false;
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ mimeTypeInvalid: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frobs;
};


/***/ }),

/***/ "./src/app/admin/admin-service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin-service.ts ***!
  \****************************************/
/*! exports provided: AdminServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServices", function() { return AdminServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");





// import { ProgressHttp } from 'angular-progress-http';

var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].Server_Url + 'admin/';
var AdminServices = /** @class */ (function () {
    function AdminServices(http, router) {
        this.http = http;
        this.router = router;
        this.updatedItems = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AdminServices.prototype.updatedItemsListener = function () {
        return this.updatedItems.asObservable();
    };
    AdminServices.prototype.uploadItem = function (post) {
        var postData = new FormData();
        postData.append('brand', post.brand);
        postData.append('color', post.color);
        postData.append('gender', post.gender);
        postData.append('images', post.photo1, post.brand);
        if (post.photo2) {
            postData.append('images', post.photo2, post.brand);
        }
        if (post.photo3) {
            postData.append('images', post.photo3, post.brand);
        }
        postData.append('type', post.type);
        postData.append('design', post.design);
        postData.append('quantity', post.quantity);
        postData.append('oldPrice', post.oldPrice);
        postData.append('newPrice', post.newPrice);
        postData.append('size', post.size);
        postData.append('description', post.description);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url + 'products/upload', postData, {
            reportProgress: true,
        });
        return this.http.request(req);
    };
    AdminServices.prototype.editItem = function (post) {
        var postData;
        postData = post;
        if ((typeof post.photo1 === 'object') || (typeof post.photo2 === 'object') || (typeof post.photo3 === 'object')) {
            postData = new FormData();
            postData.append('id', post.id);
            postData.append('brand', post.brand);
            postData.append('color', post.color);
            postData.append('gender', post.gender);
            if (post.photo1 && typeof post.photo1 === 'string') {
                postData.append('photo1', post.photo1);
            }
            if (post.photo2 && typeof post.photo2 === 'string') {
                postData.append('photo2', post.photo2);
            }
            if (post.photo3 && typeof post.photo3 === 'string') {
                postData.append('photo3', post.photo3);
            }
            if (post.photo1) {
                postData.append('imagePath1', post.photo1);
            }
            if (post.photo2) {
                postData.append('imagePath2', post.photo2);
            }
            if (post.photo3) {
                postData.append('imagePath3', post.photo3);
            }
            postData.append('type', post.type);
            postData.append('design', post.design);
            postData.append('quantity', post.quantity);
            postData.append('oldPrice', post.oldPrice);
            postData.append('newPrice', post.newPrice);
            postData.append('size', post.size);
            postData.append('description', post.description);
        }
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', url + 'products/edit', postData, {
            reportProgress: true,
        });
        return this.http.request(req);
    };
    AdminServices.prototype.getProducts = function (pg, limit) {
        var skip = limit * pg - limit;
        return this.http.get(url + "products/getAll/" + skip + "/" + limit);
    };
    AdminServices.prototype.deleteItem = function (id) {
        return this.http.delete(url + "products/delete/" + id);
    };
    AdminServices.prototype.getOne = function (id) {
        return this.http.get(url + "products/getOne/" + id);
    };
    AdminServices.prototype.searchquery = function (q) {
        return this.http.get(url + 'products/search/' + q);
    };
    AdminServices.prototype.getUsers = function (pg, limit) {
        var skip = limit * pg - limit;
        return this.http.get(url + 'users/getAll/' + skip + "/" + limit);
    };
    AdminServices.prototype.deleteUser = function (id) {
        return this.http.delete(url + "users/delete/" + id);
    };
    AdminServices.prototype.getOneUser = function (id) {
        return this.http.get(url + "users/getOne/" + id);
    };
    AdminServices.prototype.searchqueryUsers = function (q) {
        return this.http.get(url + 'users/search/' + q);
    };
    AdminServices.prototype.updateRole = function (id) {
        var body = { id: id };
        return this.http.post(url + 'users/role', body);
    };
    AdminServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminServices);
    return AdminServices;
}());



/***/ }),

/***/ "./src/app/admin/products-list/products-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/products-list/products-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.search {margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsbUJBQW1CLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNlYXJjaCB7bWFyZ2luLWJvdHRvbTogMTBweDt9Il19 */"

/***/ }),

/***/ "./src/app/admin/products-list/products-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/products-list/products-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div style=\"margin-top:100px;\" class=\"container\">\n    <form (submit)=\"adminsearch(s)\" #s=\"ngForm\" class=\"search\"> \n        <div class=\"row\">\n            <div class=\"col-xs-6 col-md-4\">\n            <div style=\"z-index:0;\" class=\"input-group\">\n                <input ngModel #search=\"ngModel\" name=\"search\"  type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/>\n                <div class=\"input-group-btn\">\n                  <button class=\"btn btn-primary\">\n                    <span class=\"glyphicon glyphicon-search\"></span>\n                  </button>\n                </div>\n              </div>\n            </div>\n        </div>\n        </form>\n        <div *ngIf=\"notfound\"><h2>Not found...!!</h2></div>\n        <div *ngIf=\"!notfound\" class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <span class=\"glyphicon glyphicon-list\"></span>Sortable Lists\n                        <div class=\"pull-right action-buttons\">\n                            <div class=\"btn-group pull-right\">\n                                <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n                                    <span class=\"glyphicon glyphicon-cog\" style=\"margin-right: 0px;\"></span>\n                                </button>\n                                <ul class=\"dropdown-menu slidedown\">\n                                    <li><button><span class=\"glyphicon glyphicon-trash\"></span>Delete</button></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel-body\">\n                        <h3 style=\"text-align:center;\" *ngIf=\"isLoading\">Loading...</h3>\n                        <ul *ngFor=\"let prod of products\" class=\"list-group\">\n                            <li class=\"list-group-item\">\n                                <div class=\"checkbox\">\n                                </div>\n                                <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <p>{{prod.brand}}</p>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <img style=\"border-radius:18px\" height=\"110px\" width=\"160px\" [src]=\"prod.imagePath1\" [alt]=\"prod.brand\"/>\n                                </div>\n                                <div class=\"col-md-4\">\n                                        <p>{{prod.price}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"pull-right action-buttons\">\n                                    <a [routerLink]=\"['/editItem/'+prod._id]\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\n                                    <a (click)=\"delete(prod._id)\" class=\"trash\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"panel-footer\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <h6>\n                                    Total Count <span class=\"label label-info\">{{productsCount}}</span></h6>\n                            </div>\n                            <div class=\"col-md-6\">\n                                    <mat-paginator [length]=\"productsCount\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" ></mat-paginator>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/admin/products-list/products-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/products-list/products-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service */ "./src/app/admin/admin-service.ts");



var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(productsServices) {
        this.productsServices = productsServices;
        this.isLoading = false;
        this.postsPerPage = 2;
        this.pageSizeOptions = [1, 10, 20, 30];
        this.currentPage = 1;
        this.notfound = false;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.productsServices.getProducts(this.currentPage, this.postsPerPage).subscribe(function (res) {
            _this.products = res.items;
            _this.productsCount = res.count;
            _this.isLoading = false;
        });
    };
    ProductsListComponent.prototype.delete = function (id) {
        var _this = this;
        this.productsServices.deleteItem(id).subscribe(function (del) {
            var ind = _this.products.findIndex(function (prod) {
                return prod._id === id;
            });
            _this.products = _this.products.slice().filter(function (value, index, arr) {
                return index !== ind;
            });
            if (del) {
                _this.productsServices.getProducts(_this.currentPage, _this.postsPerPage).subscribe(function (res) {
                    _this.products = res.items;
                    _this.productsCount = res.count;
                });
            }
            else {
                alert("error: Not deleted");
            }
        });
    };
    ProductsListComponent.prototype.pageChange = function (pageData) {
        var _this = this;
        console.log(pageData);
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.productsServices.getProducts(this.currentPage, this.postsPerPage).subscribe(function (res) {
            _this.products = res.items;
            _this.productsCount = res.count;
            _this.isLoading = false;
        });
    };
    ProductsListComponent.prototype.adminsearch = function (itemquery) {
        var _this = this;
        var q = itemquery.value.search;
        this.currentPage = 1;
        this.isLoading = true;
        this.productsServices.searchquery(q).subscribe(function (res) {
            if (res.items == null) {
                _this.products = null;
                _this.notfound = true;
                _this.isLoading = false;
            }
            _this.products = res.items;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.products = null;
            _this.notfound = true;
            _this.isLoading = false;
        });
    };
    ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/admin/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.css */ "./src/app/admin/products-list/products-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminServices"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/admin/users-control/users-control.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/users-control/users-control.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMtY29udHJvbC91c2Vycy1jb250cm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzLWNvbnRyb2wvdXNlcnMtY29udHJvbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7bWFyZ2luLWJvdHRvbTogMTBweDt9Il19 */"

/***/ }),

/***/ "./src/app/admin/users-control/users-control.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/users-control/users-control.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div style=\"margin-top:100px;\" class=\"container\">\n      <form (submit)=\"adminsearch(s)\" #s=\"ngForm\" class=\"search\"> \n          <div class=\"row\">\n              <div class=\"col-xs-6 col-md-4\">\n              <div style=\"z-index:0;\" class=\"input-group\">\n                  <input ngModel #search=\"ngModel\" name=\"search\"  type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/>\n                  <div class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\">\n                      <span class=\"glyphicon glyphicon-search\"></span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n          </div>\n          </form>\n          <div *ngIf=\"notfound\"><h2>Not found...!!</h2></div>\n          <div *ngIf=\"!notfound\" class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"panel panel-primary\">\n                      <div class=\"panel-heading\">\n                          <span class=\"glyphicon glyphicon-list\"></span>Sortable Lists\n                          <div class=\"pull-right action-buttons\">\n                              <div class=\"btn-group pull-right\">\n                                  <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n                                      <span class=\"glyphicon glyphicon-cog\" style=\"margin-right: 0px;\"></span>\n                                  </button>\n                                  <ul class=\"dropdown-menu slidedown\">\n                                      <li><button><span class=\"glyphicon glyphicon-trash\"></span>Delete</button></li>\n                                  </ul>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"panel-body\">\n                          <h3 style=\"text-align:center;\" *ngIf=\"isLoading\">Loading...</h3>\n                          <ul *ngFor=\"let user of users\" class=\"list-group\">\n                              <li  [style.background-color]=\"(user.role===1)?'#e69b9b':'#b9dab9'\" class=\"list-group-item\">\n                                  <div class=\"checkbox\">\n                                  </div>\n                                  <div class=\"row\">\n                                  <div class=\"col-md-4\">\n                                      <p>{{user.username}}</p>\n                                  </div>\n                                  <div class=\"col-md-4\">\n                                    <p>{{(user.role===1)?'Admin':'User'}}</p>\n                                  </div>\n                                  <div class=\"col-md-4\">\n                                      <p style=\"cursor:pointer;\" [routerLink]=\"['/cart/'+user._id]\">Cart()</p>\n                                  </div>\n                                  </div>\n                                  <div style=\"margin-top:-20px;\" class=\"pull-right action-buttons\">\n                                      <a style=\"cursor: pointer\" (click)=\"popModal(user._id)\" data-toggle=\"modal\" data-target=\"#modalPush\" ><span class=\"glyphicon glyphicon-pencil\">make-admin</span></a>\n                                      <a style=\"cursor: pointer\" (click)=\"delete(user._id)\" class=\"trash\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                                  </div>\n                              </li>\n                          </ul>\n                      </div>\n                      <div class=\"panel-footer\">\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                  <h6>\n                                      Total Count <span class=\"label label-info\">{{productsCount}}</span></h6>\n                              </div>\n                              <div class=\"col-md-6\">\n                                      <mat-paginator [length]=\"productsCount\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" ></mat-paginator>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n  </div>\n  </body>\n\n\n\n\n\n\n\n\n  ML\n\n  <!-- Button trigger modal-->\n  \n  <!--Modal: modalPush-->\n  <div class=\"modal fade\" id=\"modalPush\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notify modal-info\" role=\"document\">\n      <!--Content-->\n      <div class=\"modal-content text-center\">\n        <!--Header-->\n        <div class=\"modal-header d-flex justify-content-center\">\n          <p class=\"heading\">You are going to make this user an admin</p>\n        </div>\n  \n        <!--Body-->\n        <div class=\"modal-body\">\n  \n          <h3>Confirm that you are an admin..</h3>\n  \n          <input class=\"form-control\" type=\"password\" ngModel #pass=\"ngModel\" placeholder=\"Current amin password\">\n  \n        </div>\n  \n        <!--Footer-->\n        <div class=\"modal-footer flex-center\">\n          <a style=\"cursor:pointer\" (click)=\"editRole(pass)\" data-dismiss=\"modal\" class=\"btn btn-info\">Confirm</a>\n          <a type=\"button\" class=\"btn btn-outline-info waves-effect\" data-dismiss=\"modal\">Cancel</a>\n        </div>\n      </div>\n      <!--/.Content-->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/users-control/users-control.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/users-control/users-control.component.ts ***!
  \****************************************************************/
/*! exports provided: UsersControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersControlComponent", function() { return UsersControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-service */ "./src/app/admin/admin-service.ts");



var UsersControlComponent = /** @class */ (function () {
    function UsersControlComponent(adminservices) {
        this.adminservices = adminservices;
        this.isLoading = false;
        this.postsPerPage = 6;
        this.pageSizeOptions = [1, 10, 20, 30];
        this.currentPage = 1;
        this.notfound = false;
    }
    UsersControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.adminservices.getUsers(this.currentPage, this.postsPerPage).subscribe(function (res) {
            _this.users = res.users;
            _this.isLoading = false;
        });
    };
    UsersControlComponent.prototype.delete = function (id) {
        var _this = this;
        this.adminservices.deleteUser(id).subscribe(function (del) {
            var ind = _this.users.findIndex(function (prod) {
                return prod._id === id;
            });
            _this.users = _this.users.slice().filter(function (value, index, arr) {
                return index !== ind;
            });
            if (del) {
                _this.adminservices.getUsers(_this.currentPage, _this.postsPerPage).subscribe(function (res) {
                    _this.users = res.users;
                    _this.productsCount = res.count;
                });
            }
            else {
                alert("error: Not deleted");
            }
        });
    };
    UsersControlComponent.prototype.pageChange = function (pageData) {
        var _this = this;
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.adminservices.getUsers(this.currentPage, this.postsPerPage).subscribe(function (res) {
            _this.users = res.users;
            _this.productsCount = res.count;
            _this.isLoading = false;
        });
    };
    UsersControlComponent.prototype.adminsearch = function (itemquery) {
        var _this = this;
        var q = itemquery.value.search;
        this.currentPage = 1;
        this.isLoading = true;
        this.adminservices.searchqueryUsers(q).subscribe(function (res) {
            if (res.users == null) {
                _this.users = null;
                _this.notfound = true;
                _this.isLoading = false;
            }
            _this.users = res.users;
            _this.isLoading = false;
        }, function (err) {
            _this.users = null;
            _this.notfound = true;
            _this.isLoading = false;
        });
    };
    UsersControlComponent.prototype.popModal = function (id) {
        this.currentid = id;
    };
    UsersControlComponent.prototype.editRole = function (pass) {
        var _this = this;
        if (pass.value === localStorage.getItem('password')) {
            this.isLoading = true;
            this.adminservices.updateRole(this.currentid).subscribe(function (res) {
                _this.users = res.users;
                _this.isLoading = false;
            });
        }
    };
    UsersControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-control',
            template: __webpack_require__(/*! ./users-control.component.html */ "./src/app/admin/users-control/users-control.component.html"),
            styles: [__webpack_require__(/*! ./users-control.component.css */ "./src/app/admin/users-control/users-control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminServices"]])
    ], UsersControlComponent);
    return UsersControlComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _admin_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/add-item/add-item.component */ "./src/app/admin/add-item/add-item.component.ts");
/* harmony import */ var _admin_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/products-list/products-list.component */ "./src/app/admin/products-list/products-list.component.ts");
/* harmony import */ var _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/signup/signup.component */ "./src/app/users/signup/signup.component.ts");
/* harmony import */ var _users_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/auth.guard */ "./src/app/users/auth.guard.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/admin.guard */ "./src/app/users/admin.guard.ts");
/* harmony import */ var _admin_users_control_users_control_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/users-control/users-control.component */ "./src/app/admin/users-control/users-control.component.ts");













var routes = [
    { path: "", component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: "product/:id", component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: "register", component: _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: "login", component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], canActivate: [_users_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: "cart/:id", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], canActivate: [_users_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: "addItem", component: _admin_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__["AddItemComponent"], canActivate: [_users_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: "editItem/:id", component: _admin_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_6__["AddItemComponent"], canActivate: [_users_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: "productsList", component: _admin_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductsListComponent"], canActivate: [_users_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: "users", component: _admin_users_control_users_control_component__WEBPACK_IMPORTED_MODULE_12__["UsersControlComponent"], canActivate: [_users_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'categs', loadChildren: './categories/categories.module#CategoriesModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_users_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _users_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color:#fdfffe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZmZmZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_users_servicses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.servicses */ "./src/app/users/users.servicses.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(usersServices) {
        this.usersServices = usersServices;
        this.title = 'eyes-shop';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.usersServices.autoAuthCheck();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_servicses__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _admin_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/add-item/add-item.component */ "./src/app/admin/add-item/add-item.component.ts");
/* harmony import */ var _admin_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/products-list/products-list.component */ "./src/app/admin/products-list/products-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_progress_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-progress-http */ "./node_modules/angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/signup/signup.component */ "./src/app/users/signup/signup.component.ts");
/* harmony import */ var _users_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/auth-interceptor */ "./src/app/users/auth-interceptor.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _errors_errorComponent_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./errors/errorComponent.component */ "./src/app/errors/errorComponent.component.ts");
/* harmony import */ var _admin_users_control_users_control_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/users-control/users-control.component */ "./src/app/admin/users-control/users-control.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _users_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _admin_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_11__["AddItemComponent"],
                _admin_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductsListComponent"],
                _errors_errorComponent_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"],
                _admin_users_control_users_control_component__WEBPACK_IMPORTED_MODULE_22__["UsersControlComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                angular_progress_http__WEBPACK_IMPORTED_MODULE_14__["ProgressHttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]
            ],
            entryComponents: [_errors_errorComponent_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _users_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bloc_left_price {\n    color: #c01508;\n    text-align: center;\n    font-weight: bold;\n    font-size: 150%;\n}\n.category_block li:hover {\n    background-color: #007bff;\n}\n.category_block li:hover a {\n    color: #ffffff;\n}\n.category_block li a {\n    color: #343a40;\n}\n.add_to_cart_block .price {\n    color: #c01508;\n    text-align: center;\n    font-weight: bold;\n    font-size: 200%;\n    margin-bottom: 0;\n}\n.add_to_cart_block .price_discounted {\n    color: #343a40;\n    text-align: center;\n    text-decoration: line-through;\n    font-size: 140%;\n}\n.product_rassurance {\n    padding: 10px;\n    margin-top: 15px;\n    background: #ffffff;\n    border: 1px solid #6c757d;\n    color: #6c757d;\n}\n.product_rassurance .list-inline {\n    margin-bottom: 0;\n    text-transform: uppercase;\n    text-align: center;\n}\n.product_rassurance .list-inline li:hover {\n    color: #343a40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NfbGVmdF9wcmljZSB7XG4gICAgY29sb3I6ICNjMDE1MDg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbn1cbi5jYXRlZ29yeV9ibG9jayBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cbi5jYXRlZ29yeV9ibG9jayBsaTpob3ZlciBhIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jYXRlZ29yeV9ibG9jayBsaSBhIHtcbiAgICBjb2xvcjogIzM0M2E0MDtcbn1cbi5hZGRfdG9fY2FydF9ibG9jayAucHJpY2Uge1xuICAgIGNvbG9yOiAjYzAxNTA4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hZGRfdG9fY2FydF9ibG9jayAucHJpY2VfZGlzY291bnRlZCB7XG4gICAgY29sb3I6ICMzNDNhNDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbn1cbi5wcm9kdWN0X3Jhc3N1cmFuY2Uge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG59XG4ucHJvZHVjdF9yYXNzdXJhbmNlIC5saXN0LWlubGluZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0X3Jhc3N1cmFuY2UgLmxpc3QtaW5saW5lIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzM0M2E0MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\n  <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">you glasses cart</h1>\n   </div>\n</section>\n\n<div class=\"container mb-4\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                  <thead>\n                      <tr>\n                          <th scope=\"col\"> </th>\n                          <th scope=\"col\">Product</th>\n                          <th scope=\"col\">Available</th>\n                          <th scope=\"col\" class=\"text-center\">Quantity</th>\n                          <th scope=\"col\" class=\"text-right\">Price</th>\n                          <th> </th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <h3 style=\"text-align: centerW\" *ngIf=\"isLoading2\">Loading..</h3>\n                      <div *ngIf=\"isLoading\" style=\"margin-left:260px;text-align:center\"><img  src=\"../../assets/img/loading2.gif\"></div>\n                      <tr *ngFor=\"let cartItem of cartItems\" >\n                          <td> <a [routerLink]=\"['/product/'+cartItem.proid]\"><img width=\"15%\" height=\"15%\" [src]=\"cartItem.image\" ></a> </td>\n                          <td>{{cartItem.brand}}</td>\n                          <td>In stock</td>\n                          <td><input (change)=\"update(cartItem, $event)\" class=\"form-control\" type=\"number\" [(value)]=\"cartItem.quantity\" /></td>\n                          <td class=\"text-right\">{{cartItem.price}} EP</td>\n                          <td (click)=\"delete(cartItem)\" class=\"text-right\"><button class=\"btn btn-sm btn-danger\"><i class=\"fa fa-trash\" ></i> </button> </td>\n                      </tr>\n                      <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td><strong>Total</strong></td>\n                          <td class=\"text-right\"><strong>{{total()||0}}EP</strong></td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n      </div>\n      <div class=\"col mb-2\">\n          <div class=\"row\">\n              <div class=\"col-sm-12  col-md-6\">\n                  <button class=\"btn btn-block btn-light\">Continue Shopping</button>\n              </div>\n              <div class=\"col-sm-12 col-md-6 text-right\">\n                  <button class=\"btn btn-lg btn-block btn-success text-uppercase\">Checkout</button>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uiProductsServices.service */ "./src/app/uiProductsServices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CartComponent = /** @class */ (function () {
    function CartComponent(uiservices, route) {
        this.uiservices = uiservices;
        this.route = route;
        this.isLoading = false;
        this.isLoading2 = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.paramMap.subscribe(function (pm) {
            if (pm.has('id')) {
                _this.id = pm.get('id');
            }
        });
        console.log(id);
        this.isLoading = true;
        this.uiservices.getCart(this.id).subscribe(function (res) {
            _this.cartItems = res.updatedCart;
            _this.uiservices.updatedCartQuantity.next({ cartQuantity: res.count });
            console.log(_this.cartItems);
            _this.isLoading = false;
        });
        this.isLoading = true;
        this.uiservices.getCart(this.id).subscribe(function (res) {
            _this.cartItems = res.updatedCart;
            _this.uiservices.updatedCartQuantity.next({ cartQuantity: res.count });
            console.log(_this.cartItems);
            _this.isLoading = false;
        });
    };
    CartComponent.prototype.delete = function (item) {
        var _this = this;
        var post = { _id: item.proid, brand: item.brand, newPrice: item.price, imagePath1: item.image, quantity: 1 };
        this.isLoading2 = true;
        this.uiservices.pushToCart(post).subscribe(function (res) {
            _this.uiservices.getCart(_this.id).subscribe(function (res) {
                _this.cartItems = res.updatedCart;
                _this.uiservices.updatedCartQuantity.next({ cartQuantity: res.count });
                _this.isLoading2 = false;
            });
        });
    };
    CartComponent.prototype.total = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.quantity * item.price;
        }
        return total;
    };
    CartComponent.prototype.update = function (item, event) {
        var _this = this;
        this.uiservices.updateCart(item.proid, event.target.value).subscribe(function (res) {
            console.log(res);
            _this.cartItems = res.updatedCart;
        });
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__["UiProductsServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _errors_errorComponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/errorComponent.component */ "./src/app/errors/errorComponent.component.ts");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(dialog) {
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            var errorMessage;
            if (error) {
                errorMessage = error.error.mess;
            }
            _this.dialog.open(_errors_errorComponent_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/errors/errorComponent.component.ts":
/*!****************************************************!*\
  !*** ./src/app/errors/errorComponent.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./errorHandler.component.html */ "./src/app/errors/errorHandler.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/errors/errorHandler.component.html":
/*!****************************************************!*\
  !*** ./src/app/errors/errorHandler.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ data?.message }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer  {\n    background-color: rgb(194, 209, 209);\n    color: rgb(102, 105, 102);\n}\n#footer a {\n    color:rgb(52, 54, 53);\n}\n#footer h3 {\n    stroke: rgb(26, 27, 27) 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMjA5LCAyMDkpO1xuICAgIGNvbG9yOiByZ2IoMTAyLCAxMDUsIDEwMik7XG59XG4jZm9vdGVyIGEge1xuICAgIGNvbG9yOnJnYig1MiwgNTQsIDUzKTtcbn1cbiNmb290ZXIgaDMge1xuICAgIHN0cm9rZTogcmdiKDI2LCAyNywgMjcpIDJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t<!-- FOOTER -->\n\t\t<footer id=\"footer\">\n\t\t\t<!-- top footer -->\n\t\t\t<div id=\"footer\" class=\"section\">\n\t\t\t\t<!-- container -->\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- row -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3 col-xs-6\">\n\t\t\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\t\t\t<h3 class=\"footer-title\">About Us</h3>\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>\n\t\t\t\t\t\t\t\t<ul class=\"footer-links\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-map-marker\"></i>1734 Stonecoal Road</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-phone\"></i>+021-95-51-84</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>email@email.com</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-xs-6\">\n\t\t\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\t\t\t<h3 class=\"footer-title\">Categories</h3>\n\t\t\t\t\t\t\t\t<ul class=\"footer-links\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Hot deals</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"clearfix visible-xs\"></div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-xs-6\">\n\t\t\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\t\t\t<h3 class=\"footer-title\">Information</h3>\n\t\t\t\t\t\t\t\t<ul class=\"footer-links\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">About Us</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Contact Us</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3 col-xs-6\">\n\t\t\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\t\t\t<h3 class=\"footer-title\">Service</h3>\n\t\t\t\t\t\t\t\t<ul class=\"footer-links\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">My Account</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">View Cart</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /row -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /container -->\n\t\t\t</div>\n\t\t\t<!-- /top footer -->\n\n\t\t\t<!-- bottom footer -->\n\t\t\t<div id=\"bottom-footer\" class=\"section\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- row -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t\t\t<ul class=\"footer-payments\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-cc-visa\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-credit-card\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-cc-paypal\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n\t\t\t\t\t\t\t\tCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n\t\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n\t\t\t\t\t\t\t</span>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /row -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /container -->\n\t\t\t</div>\n\t\t\t<!-- /bottom footer -->\n\t\t</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav  li a {\n    color: #fff;\n}\n.header-search .search-btn {\n    background-color: rgb(37, 75, 75);\n}\n#top-header {\n    background-color: rgb(55, 88, 88);\n    position:fixed;\n    z-index:1;\n    width:100%;\n    padding:5px;\n}\n#header {\n    background-color: rgb(87, 134, 134);\n    padding:22px;\n    position:fixed;\n    z-index:1;width:100%;\n    margin-top:30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osY0FBYztJQUNkLFNBQVMsQ0FBQyxVQUFVO0lBQ3BCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdiAgbGkgYSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyLXNlYXJjaCAuc2VhcmNoLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA3NSwgNzUpO1xufVxuI3RvcC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgODgsIDg4KTtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB6LWluZGV4OjE7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nOjVweDtcbn1cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTM0LCAxMzQpO1xuICAgIHBhZGRpbmc6MjJweDtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB6LWluZGV4OjE7d2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOjMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t<!-- HEADER -->\n\t\t<header>\n\t\t\t<!-- TOP HEADER -->\n\t\t\t<div id=\"top-header\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<ul class=\"header-links pull-left\">\n\t\t\t\t\t\t<li *ngIf=\"countNumber\"><a routerLink=\"/create\" routerLinkActive=\"mat-accent\">{{countNumber}}</a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-phone\"></i> 0103776675</a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> eyesShop@gmail.com</a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-map-marker\"></i> Belal-Ebn-Raba7 st besides Abo-Hanafi</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"header-links pull-right\">\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-dollar\"></i> Lng</a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user-o\"></i> {{username}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- /TOP HEADER -->\n\n\t\t\t<!-- MAIN HEADER -->\n\t\t\t<div id=\"header\">\n\t\t\t\t<!-- container -->\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<!-- row -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- LOGO -->\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<div class=\"header-logo\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/categs\" class=\"logo\">\n\t\t\t\t\t\t\t\t\t<img height=\"50px\" src=\"assets/img/logo.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /LOGO -->\n\n\t\t\t\t\t\t<!-- SEARCH BAR -->\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"header-search\">\n\t\t\t\t\t\t\t\t<form #s=\"ngForm\" (submit)=\"uisearch(s)\">\n\t\t\t\t\t\t\t\t\t<select class=\"input-select\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">All Categories</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<input ngModel name=\"searchquery\" #searchquery=\"ngModel\" class=\"input\" placeholder=\"Search here\">\n\t\t\t\t\t\t\t\t\t<button class=\"search-btn\">Search</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /SEARCH BAR -->\n\n\t\t\t\t\t\t<!-- ACCOUNT -->\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<div class=\"header-ctn\">\n\n\t\t\t\t\t\t\t\t<!-- Cart -->\n\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<a  (click)=\"getCartItems()\" style=\"cursor:pointer;position:fixed;margin-top:-32px;margin-left:-70px;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t\t\t\t<i [style.font-size]=\"cartClass\" class=\"fa fa-shopping-cart\"></i>\n\t\t\t\t\t\t\t\t\t\t<span>Your Cart</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"qty\">{{quantity}}</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"cart-dropdown\">\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of cartItems\" class=\"cart-list\">\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"product-widget\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"item.image\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a href=\"#\">{{item.brand}}</a></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\"><span class=\"qty\">{{item.quantity}}x</span>{{item.price}}EP</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"delete\"><i class=\"fa fa-close\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"cart-summary\">\n\t\t\t\t\t\t\t\t\t\t\t<small>{{quantity}} Item(s) selected</small>\n\t\t\t\t\t\t\t\t\t\t\t<h5>SUBTOTAL: $2940.00</h5>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"cart-btns\">\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]= '[\"cart\"]'>View Cart</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div style=\"cursor:pointer;\">\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"!isAuth && !isAdmin\" [routerLink]= '[\"login\"]'>Signin</a>\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"isAuth || isAdmin\" (click)=\"logout()\"><span>Logout</span></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div style=\"cursor:pointer;\">\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"!isAuth && !isAdmin\" [routerLink]= '[\"register\"]'>Register</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /Cart -->\n\n\t\t\t\t\t\t\t\t<!-- Menu Toogle -->\n\t\t\t\t\t\t\t\t<div class=\"menu-toggle\">\n\t\t\t\t\t\t\t\t\t<a  data-toggle=\"modal\" data-target=\"#modalPoll-1\" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\n\t\t\t\t\t\t\t\t\t\t<span>Menu</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /Menu Toogle -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /ACCOUNT -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- row -->\n\t\t\t\t</div>\n\t\t\t\t<!-- container -->\n\t\t\t</div>\n\t\t\t<!-- /MAIN HEADER -->\n\t\t</header>\n\t\t<!-- /HEADER -->\n\t\t<!-- NAVIGATION -->\n\t\t<nav id=\"navigation\">\n\t\t\t\t<!-- container -->\n\t\t\t\t<div  style=\"position:fixed;z-index:1;margin-top:90px;\" class=\"container\">\n\t\t\t\t\t<!-- responsive-nav -->\n\t\t\t\t\t<div id=\"responsive-nav\">\n\t\t\t\t\t\t<!-- NAV -->\n\t\t\t\t\t\t<ul class=\"main-nav nav navbar-nav\">\n\t\t\t\t\t\t\t<li class=\"active\"><a [routerLink]='[\"\"]'>Home</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Hot Deals</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]='[\"categories\"]'>Categories</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"isAdmin\"><a [routerLink]=\"['addItem']\">add new tem</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"isAdmin\"><a [routerLink]=\"['productsList']\">items</a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"isAdmin\"><a [routerLink]=\"['users']\">users</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<!-- /NAV -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /responsive-nav -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /container -->\n\t\t\t</nav>\n\t\t\t<!-- /NAVIGATION -->\n\n\t\t<!-- BREADCRUMB -->\n\t\t<div id=\"breadcrumb\" class=\"section\">\n\t\t</div>\n\t\t<!-- /BREADCRUMB -->\n\n\n\n\n\n\t\t  \n\t\t  <!-- Modal: modalPoll -->\n\t\t  <div class=\"modal fade right\" id=\"modalPoll-1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n\t\t\taria-hidden=\"true\" data-backdrop=\"false\">\n\t\t\t<div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\" role=\"document\">\n\t\t\t  <div class=\"modal-content\">\n\t\t\t\t<!--Header-->\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t  <p class=\"heading lead\">Feedback request\n\t\t\t\t  </p>\n\t\t  \n\t\t\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\" class=\"white-text\">×</span>\n\t\t\t\t  </button>\n\t\t\t\t</div>\n\t\t  \n\t\t\t\t<!--Body-->\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t  <div class=\"text-center\">\n\t\t\t\t\t<i class=\"far fa-file-alt fa-4x mb-3 animated rotateIn\"></i>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <strong>Your opinion matters</strong>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>Have some ideas how to improve our product?\n\t\t\t\t\t  <strong>Give us your feedback.</strong>\n\t\t\t\t\t</p>\n\t\t\t\t  </div>\n\t\t  \n\t\t\t\t  <hr>\n\t\t  \n\t\t\t\t  <!-- Radio -->\n\t\t\t\t  <p class=\"text-center\">\n\t\t\t\t\t<strong>Your rating</strong>\n\t\t\t\t  </p>\n\t\t\t\t  <div class=\"form-check mb-4\">\n\t\t\t\t\t<input class=\"form-check-input\" name=\"group1\" type=\"radio\" id=\"radio-179\" value=\"option1\" checked>\n\t\t\t\t\t<label class=\"form-check-label\" for=\"radio-179\">Very good</label>\n\t\t\t\t  </div>\n\t\t  \n\t\t\t\t  <div class=\"form-check mb-4\">\n\t\t\t\t\t<input class=\"form-check-input\" name=\"group1\" type=\"radio\" id=\"radio-279\" value=\"option2\">\n\t\t\t\t\t<label class=\"form-check-label\" for=\"radio-279\">Good</label>\n\t\t\t\t  </div>\n\t\t  \n\t\t\t\t  <div class=\"form-check mb-4\">\n\t\t\t\t\t<input class=\"form-check-input\" name=\"group1\" type=\"radio\" id=\"radio-379\" value=\"option3\">\n\t\t\t\t\t<label class=\"form-check-label\" for=\"radio-379\">Mediocre</label>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-check mb-4\">\n\t\t\t\t\t<input class=\"form-check-input\" name=\"group1\" type=\"radio\" id=\"radio-479\" value=\"option4\">\n\t\t\t\t\t<label class=\"form-check-label\" for=\"radio-479\">Bad</label>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-check mb-4\">\n\t\t\t\t\t<input class=\"form-check-input\" name=\"group1\" type=\"radio\" id=\"radio-579\" value=\"option5\">\n\t\t\t\t\t<label class=\"form-check-label\" for=\"radio-579\">Very bad</label>\n\t\t\t\t  </div>\n\t\t\t\t  <!-- Radio -->\n\t\t  \n\t\t\t\t  <p class=\"text-center\">\n\t\t\t\t\t<strong>What could we improve?</strong>\n\t\t\t\t  </p>\n\t\t\t\t  <!--Basic textarea-->\n\t\t\t\t  <div class=\"md-form\">\n\t\t\t\t\t<textarea type=\"text\" id=\"form79textarea\" class=\"md-textarea form-control\" rows=\"3\"></textarea>\n\t\t\t\t\t<label for=\"form79textarea\">Your message</label>\n\t\t\t\t  </div>\n\t\t  \n\t\t\t\t</div>\n\t\t  \n\t\t\t\t<!--Footer-->\n\t\t\t\t<div class=\"modal-footer justify-content-center\">\n\t\t\t\t  <a type=\"button\" class=\"btn btn-primary waves-effect waves-light\">Send\n\t\t\t\t\t<i class=\"fa fa-paper-plane ml-1\"></i>\n\t\t\t\t  </a>\n\t\t\t\t  <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <!-- Modal: modalPoll -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uiProductsServices.service */ "./src/app/uiProductsServices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_servicses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/users.servicses */ "./src/app/users/users.servicses.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(uiProductsServices, usersServices, router) {
        this.uiProductsServices = uiProductsServices;
        this.usersServices = usersServices;
        this.router = router;
        this.quantity = 0;
        this.username = localStorage.getItem('username');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthSub = this.usersServices.authStatListener().subscribe(function (update) {
            _this.isAuth = update;
            if (!update) {
                _this.username = 'user';
                _this.cartItems = null;
                _this.quantity = 0;
            }
        });
        this.isAdminSub = this.usersServices.adminStatListener().subscribe(function (update) {
            _this.isAdmin = update;
            if (!update) {
                _this.username = 'user';
                _this.cartItems = null;
                _this.quantity = 0;
            }
        });
        setTimeout(function () {
            _this.cartQuantity = _this.uiProductsServices.cartQuantityListener().subscribe(function (res) {
                if (res.cartQuantity > _this.quantity) {
                    _this.cartClass = '30px';
                    setTimeout(function () {
                        _this.cartClass = '';
                    }, 1000);
                }
                _this.quantity = res.cartQuantity;
            });
        }, 300);
    };
    HeaderComponent.prototype.uisearch = function (query) {
        var _this = this;
        if (query.value.searchquery) {
            this.router.navigate(['/categories']);
            setTimeout(function () {
                _this.uiProductsServices.updatedSearchQuery.next({ searchquery: query.value.searchquery });
            }, 250);
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.usersServices.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.getCartItems = function () {
        var _this = this;
        if (this.isAuth) {
            this.uiProductsServices.getCart(this.id).subscribe(function (res) {
                _this.cartItems = res.updatedCart;
            });
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__["UiProductsServices"], _users_users_servicses__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t<!-- SECTION -->\n\t\t<div class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- row -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<!-- shop -->\n\t\t\t\t\t<div class=\"col-md-4 col-xs-6\">\n\t\t\t\t\t\t<div class=\"shop\">\n\t\t\t\t\t\t\t<div class=\"shop-img\">\n\t\t\t\t\t\t\t\t<img src=\"./img/shop01.png\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-body\">\n\t\t\t\t\t\t\t\t<h3>Laptop<br>Collection</h3>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"cta-btn\">Shop now <i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /shop -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /SECTION -->\n\n\t\t<!-- SECTION -->\n\t\t<div class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- row -->\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<!-- section title -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"section-title\">\n\t\t\t\t\t\t\t<h3 class=\"title\">New Products</h3>\n\t\t\t\t\t\t\t<div class=\"section-nav\">\n\t\t\t\t\t\t\t\t<ul class=\"section-tab-nav tab-nav\">\n                  <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Laptops</a></li>\n                  <li><a data-toggle=\"tab\" href=\"#tab2\">Smartphones</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /section title -->\n\n\t\t\t\t\t<!-- Products tab & slick -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"products-tabs\">\n\t\t\t\t\t\t\t\t<!-- tab -->\n\t\t\t\t\t\t\t\t<div id=\"tab1\" class=\"tab-pane active\">\n\t\t\t\t\t\t\t\t\t<div class=\"products-slick\" data-nav=\"#slick-nav-1\">\n\t\t\t\t\t\t\t\t\t\t<!-- product -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./img/product01.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-30%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"new\">NEW</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"product-category\">Category</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a href=\"#\">product name goes here</a></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\">$980.00 <del class=\"product-old-price\">$990.00</del></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /product -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"slick-nav-1\" class=\"products-slick-nav\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /tab -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Products tab & slick -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /SECTION -->\n\n\t\t<!-- HOT DEAL SECTION -->\n\t\t<div id=\"hot-deal\" class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- row -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"hot-deal\">\n\t\t\t\t\t\t\t<ul class=\"hot-deal-countdown\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h3>02</h3>\n\t\t\t\t\t\t\t\t\t\t<span>Days</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h3>10</h3>\n\t\t\t\t\t\t\t\t\t\t<span>Hours</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h3>34</h3>\n\t\t\t\t\t\t\t\t\t\t<span>Mins</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h3>60</h3>\n\t\t\t\t\t\t\t\t\t\t<span>Secs</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<h2 class=\"text-uppercase\">hot deal this week</h2>\n\t\t\t\t\t\t\t<p>New Collection Up to 50% OFF</p>\n\t\t\t\t\t\t\t<a class=\"primary-btn cta-btn\" href=\"#\">Shop now</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /HOT DEAL SECTION -->\n\n\t\t<!-- SECTION -->\n\t\t<div class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- row -->\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<!-- section title -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"section-title\">\n\t\t\t\t\t\t\t<h3 class=\"title\">Top selling</h3>\n\t\t\t\t\t\t\t<div class=\"section-nav\">\n\t\t\t\t\t\t\t\t<ul class=\"section-tab-nav tab-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#tab2\">Laptops</a></li>\n\t\t\t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#tab2\">Smartphones</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /section title -->\n\n\t\t\t\t\t<!-- Products tab & slick -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"products-tabs\">\n\t\t\t\t\t\t\t\t<!-- tab -->\n\t\t\t\t\t\t\t\t<div id=\"tab2\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t\t\t<div class=\"products-slick\" data-nav=\"#slick-nav-2\">\n\t\t\t\t\t\t\t\t\t\t<!-- product -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./img/product06.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-30%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"new\">NEW</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"product-category\">Category</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-name\"><a href=\"#\">product name goes here</a></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"product-price\">$980.00 <del class=\"product-old-price\">$990.00</del></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /product -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"slick-nav-2\" class=\"products-slick-nav\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /tab -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /Products tab & slick -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /SECTION -->\n\n\t"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        $('.products-slick').each(function () {
            var $this = $(this), $nav = $this.attr('data-nav');
            $this.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                speed: 300,
                dots: false,
                arrows: true,
                appendArrows: $nav ? $nav : false,
                responsive: [{
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        });
        // Products Widget Slick
        $('.products-widget-slick').each(function () {
            var $this = $(this), $nav = $this.attr('data-nav');
            $this.slick({
                infinite: true,
                autoplay: true,
                speed: 300,
                dots: false,
                arrows: true,
                appendArrows: $nav ? $nav : false,
            });
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-pic img {\n    border-radius: 17px;\n}\n\n/*****************globals*************/\n\nbody {\n    font-family: 'open sans';\n    overflow-x: hidden; }\n\nimg {\n    max-width: 100%; }\n\n.preview {\n    display: flex;\n    flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n      .preview {\n        margin-bottom: 20px; } }\n\n.preview-pic {\n    flex-grow: 1; }\n\n.preview-thumbnail.nav-tabs {\n    border: none;\n    margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n      width: 18%;\n      margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n        max-width: 100%;\n        display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n        padding: 0;\n        margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n        margin-right: 0; }\n\n.tab-content {\n    overflow: hidden; }\n\n.tab-content img {\n      width: 100%;\n      -webkit-animation-name: opacity;\n              animation-name: opacity;\n      -webkit-animation-duration: .3s;\n              animation-duration: .3s; }\n\n.card {\n    margin-top: 50px;\n    background: #eee;\n    padding: 3em;\n    line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n    .wrapper {\n      display: flex; } }\n\n.details {\n    display: flex;\n    flex-direction: column; }\n\n.colors {\n    flex-grow: 1; }\n\n.product-title, .price, .sizes, .colors {\n    text-transform: UPPERCASE;\n    font-weight: bold; }\n\n.checked {\n    color: #c59e1d; }\n\n.price span {\n    color: #4db976; }\n\n.product-title, .rating, .product-description, .price, .vote, .sizes {\n    margin-bottom: 15px; }\n\n.product-title {\n    margin-top: 0; }\n\n.size {\n    margin-right: 10px; }\n\n.size:first-of-type {\n      margin-left: 40px; }\n\n.color {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 2em;\n    width: 2em;\n    border-radius: 2px; }\n\n.color:first-of-type {\n      margin-left: 20px; }\n\n.add-to-cart, .like {\n    background: #1e3d3c;\n    padding: 1.2em 1.5em;\n    border: none;\n    text-transform: UPPERCASE;\n    font-weight: bold;\n    color: #fff;\n    transition: background .3s ease; }\n\n.add-to-cart:hover, .like:hover {\n      background: #b36800;\n      color: #fff; }\n\n.not-available {\n    text-align: center;\n    line-height: 2em; }\n\n.not-available:before {\n      font-family: fontawesome;\n      content: \"\\f00d\";\n      color: #fff; }\n\n.orange {\n    background: #ff9f1a; }\n\n.green {\n    background: #85ad00; }\n\n.blue {\n    background: #0076ad; }\n\n.tooltip-inner {\n    padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(3);\n              transform: scale(3); }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1); } }\n\n@keyframes opacity {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(3);\n              transform: scale(3); }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1); } }\n\n.preview-pic {\n    width:100%;\n    height:100%;\n  }\n\n.preview-pic img {\n    width:100%;\n    height:100%;\n  }\n\n.preview-thumbnail {\n    margin-top:-170px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsc0NBQXNDOztBQUN0QztJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0IsRUFBRTs7QUFFdEI7SUFDRSxlQUFlLEVBQUU7O0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFOztBQUNoQztNQUNFO1FBQ0UsbUJBQW1CLEVBQUUsRUFBRTs7QUFFN0I7SUFJVSxZQUFZLEVBQUU7O0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFOztBQUNsQjtNQUNFLFVBQVU7TUFDVixrQkFBa0IsRUFBRTs7QUFDcEI7UUFDRSxlQUFlO1FBQ2YsY0FBYyxFQUFFOztBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7O0FBQ2I7UUFDRSxlQUFlLEVBQUU7O0FBRXZCO0lBQ0UsZ0JBQWdCLEVBQUU7O0FBQ2xCO01BQ0UsV0FBVztNQUNYLCtCQUErQjtjQUN2Qix1QkFBdUI7TUFDL0IsK0JBQStCO2NBQ3ZCLHVCQUF1QixFQUFFOztBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFOztBQUV0QjtJQUNFO01BSUUsYUFBYSxFQUFFLEVBQUU7O0FBRXJCO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFOztBQUVsQztJQUlVLFlBQVksRUFBRTs7QUFFeEI7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCLEVBQUU7O0FBRXJCO0lBQ0UsY0FBYyxFQUFFOztBQUNsQjtJQUNFLGNBQWMsRUFBRTs7QUFFbEI7SUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7SUFDRSxhQUFhLEVBQUU7O0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7O0FBQ3BCO01BQ0UsaUJBQWlCLEVBQUU7O0FBRXZCO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRTs7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTs7QUFFdkI7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFFSCwrQkFBK0IsRUFBRTs7QUFDekM7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFFOztBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTs7QUFDbEI7TUFDRSx3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLFdBQVcsRUFBRTs7QUFFakI7SUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7SUFDRSxjQUFjLEVBQUU7O0FBRWxCO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkJBQTJCO2NBQ25CLG1CQUFtQixFQUFFO0lBQy9CO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjtjQUNuQixtQkFBbUIsRUFBRSxFQUFFOztBQUVuQztJQUNFO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjtjQUNuQixtQkFBbUIsRUFBRTtJQUMvQjtNQUNFLFVBQVU7TUFDViwyQkFBMkI7Y0FDbkIsbUJBQW1CLEVBQUUsRUFBRTs7QUFDbkM7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7QUFDQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctcGljIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqZ2xvYmFscyoqKioqKioqKioqKiovXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2Fucyc7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG4gIFxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICBcbiAgLnByZXZpZXcge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAgICAgLnByZXZpZXcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cbiAgXG4gIC5wcmV2aWV3LXBpYyB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cbiAgXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xuICAgICAgd2lkdGg6IDE4JTtcbiAgICAgIG1hcmdpbi1yaWdodDogMi41JTsgfVxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwOyB9XG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gIFxuICAudGFiLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAudGFiLWNvbnRlbnQgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxuICBcbiAgLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBwYWRkaW5nOiAzZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4OyB9IH1cbiAgXG4gIC5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIFxuICAuY29sb3JzIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxuICBcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gIFxuICAuY2hlY2tlZCB7XG4gICAgY29sb3I6ICNjNTllMWQ7IH1cbiAgLnByaWNlIHNwYW4ge1xuICAgIGNvbG9yOiAjNGRiOTc2OyB9XG4gIFxuICAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuICBcbiAgLnByb2R1Y3QtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgXG4gIC5zaXplIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XG4gIFxuICAuY29sb3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxuICAgIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4gIFxuICAuYWRkLXRvLWNhcnQsIC5saWtlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWUzZDNjO1xuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cbiAgICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNiMzY4MDA7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICBcbiAgLm5vdC1hdmFpbGFibGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMmVtOyB9XG4gICAgLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICBcbiAgLm9yYW5nZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTsgfVxuICBcbiAgLmdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kOiAjODVhZDAwOyB9XG4gIFxuICAuYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogIzAwNzZhZDsgfVxuICBcbiAgLnRvb2x0aXAtaW5uZXIge1xuICAgIHBhZGRpbmc6IDEuM2VtOyB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XG4gIFxuICBAa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuICAucHJldmlldy1waWMge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIH1cbiAgLnByZXZpZXctcGljIGltZyB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgfVxuICAucHJldmlldy10aHVtYm5haWwge1xuICAgIG1hcmdpbi10b3A6LTE3MHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t<!-- SECTION -->\n\t\t<div style=\"margin-top:80px;\" class=\"section\">\n\t\t\t<!-- container -->\n\t\t\t<div class=\"container\">\n\t\t\t  <div class=\"row\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"container-fliud\">\n\t\t\t\t\t\t<div class=\"wrapper row\">\n\t\t\t\t\t\t\t<div class=\"preview col-md-6\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"preview-pic tab-content\">\n\t\t\t\t\t\t\t\t  <div class=\"tab-pane active\" id=\"pic-1\"><img [src]=\"product.imagePath1\" /></div>\n\t\t\t\t\t\t\t\t  <div *ngIf=\"product.imagePath2\" class=\"tab-pane\" id=\"pic-2\"><img [src]=\"product.imagePath2\" /></div>\n\t\t\t\t\t\t\t\t  <div *ngIf=\"product.imagePath3\" class=\"tab-pane\" id=\"pic-3\"><img [src]=\"product.imagePath3\" /></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ul class=\"preview-thumbnail nav nav-tabs\">\n\t\t\t\t\t\t\t\t  <li class=\"active\"><a data-target=\"#pic-1\" data-toggle=\"tab\"><img [src]=\"product.imagePath1\" /></a></li>\n\t\t\t\t\t\t\t\t  <li *ngIf=\"product.imagePath2\"><a data-target=\"#pic-2\" data-toggle=\"tab\"><img [src]=\"product.imagePath2\" /></a></li>\n\t\t\t\t\t\t\t\t  <li *ngIf=\"product.imagePath3\"><a data-target=\"#pic-3\" data-toggle=\"tab\"><img [src]=\"product.imagePath3\" /></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"details col-md-6\">\n\t\t\t\t\t\t\t\t<h3 class=\"product-title\">{{product.brand}}</h3>\n\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t<div class=\"stars\">\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"averageRate>.5?'fa fa-star checked':'fa fa-star'\"></span>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"averageRate>1.5?'fa fa-star checked':'fa fa-star'\"></span>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"averageRate>2.5?'fa fa-star checked':'fa fa-star'\"></span>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"averageRate>3.5?'fa fa-star checked':'fa fa-star'\"></span>\n\t\t\t\t\t\t\t\t\t\t<span [ngClass]=\"averageRate>4.5?'fa fa-star checked':'fa fa-star'\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"review-no\">{{revCount}} reviews</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"product-title\">{{product.type}}</p>\n\t\t\t\t\t\t\t\t<p class=\"product-title\">{{product.design}}</p>\n\t\t\t\t\t\t\t\t<p class=\"product-title\">{{product.gender}}</p>\n\t\t\t\t\t\t\t\t<p class=\"product-description\">{{product.description}}}.</p>\n\t\t\t\t\t\t\t\t<h4 class=\"price\">current price: <span>{{product.newPrice}} EP</span> instead of: <span style=\"color:red;text-decoration:line-through\">{{product.oldPrice}} EP</span></h4>\n\t\t\t\t\t\t\t\t<p class=\"vote\"><strong>{{product.rate*20}}%</strong> rating of <strong>({{revCount}} users)</strong></p>\n\t\t\t\t\t\t\t\t<h5 class=\"sizes\">sizes:\n\t\t\t\t\t\t\t\t\t<span class=\"size\" data-toggle=\"tooltip\">{{product.size}}</span>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5 class=\"colors\">colors:\n\t\t\t\t\t\t\t\t\t<span class=\"color orange\" [style.background-color]=\"product.color\"></span>\n\t\t\t\t\t\t\t\t\t{{product.color}}\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>Quantity:\n\t\t\t\t\t\t\t\t\t\t<input #qnt=\"ngModel\" ngModel type=\"number\" [(value)]=\"product.quantity\" class=\"form-control\" style=\"width:80px;\" />\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<div class=\"action\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"addToCart(product, qnt)\" [style.background-color]=\"added?'#d23e3e':'#638163'\" class=\"like btn btn-default\" type=\"button\">{{added?'Remove':'add to favourites'}} <span class=\"fa fa-heart\"></span></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t<!-- /Product details -->\n\n\t\t\t\t\t<!-- Product tab -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div id=\"product-tab\">\n\t\t\t\t\t\t\t<!-- product tab nav -->\n\t\t\t\t\t\t\t<ul class=\"tab-nav\">\n\t\t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#tab2\">Details</a></li>\n\t\t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#tab3\">Reviews ({{revCount}})</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<!-- /product tab nav -->\n\n\t\t\t\t\t\t\t<!-- product tab content -->\n\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t<!-- tab2  -->\n\t\t\t\t\t\t\t\t<div id=\"tab2\" class=\"tab-pane fade in\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /tab2  -->\n\n\t\t\t\t\t\t\t\t<!-- tab3  -->\n\t\t\t\t\t\t\t\t<div id=\"tab3\" class=\"tab-pane fade in\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- Rating -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-avg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{averageRate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"averageRate>.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"averageRate>1.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"averageRate>2.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"averageRate>3.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"averageRate>4.5?'fa fa-star':'fa fa-star-o'\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-progress\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [style.width]=\"sum5\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sum\">{{star5}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-progress\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [style.width]=\"sum4\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sum\">{{star4}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-progress\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [style.width]=\"sum3\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sum\">{{star3}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-progress\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [style.width]=\"sum2\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sum\">{{star2}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-progress\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [style.width]=\"sum1\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sum\">{{star1}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /Rating -->\n\n\t\t\t\t\t\t\t\t\t\t<!-- Reviews -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"reviews\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"reviews\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let review of reviews\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"name\">{{review.name}}</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"date\">{{review.date}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"review.rating === 1\" class=\"review-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i><i class=\"fa fa-star-o empty\"></i><i class=\"fa fa-star-o empty\"></i><i class=\"fa fa-star-o empty\"></i><i class=\"fa fa-star-o empty\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"review.rating === 2\" class=\"review-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-o empty\"></i><i class=\"fa fa-star-o empty\"></i><i class=\"fa fa-star-o empty\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"review.rating === 3\" class=\"review-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-o empty\"></i><i class=\"fa fa-star-o empty\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"review.rating === 4\" class=\"review-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-o empty\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"review.rating === 5\" class=\"review-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{review.comment}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"reviews-pagination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a (click)=\"goto('prev')\"><i class=\"fa fa-angle-left\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active\">{{this.currentPg}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a (click)=\"goto('next')\" ><i class=\"fa fa-angle-right\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /Reviews -->\n\n\t\t\t\t\t\t\t\t\t\t<!-- Review Form -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"review-form\">\n\t\t\t\t\t\t\t\t\t\t\t\t<form (submit)=\"publish(r)\" #r=\"ngForm\" class=\"review-form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input ngModel name=\"name\" [(value)]=\"r.value.name\" #username=\"ngModel\" class=\"input\" type=\"text\" placeholder=\"Your Name\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea ngModel name=\"comment\" [(value)]=\"r.value.comment\" #review=\"ngModel\" class=\"input\" placeholder=\"Your Review\" required></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Your Rating: </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input ngModel id=\"star5\" name=\"rating\" value=\"5\" type=\"radio\"><label required for=\"star5\"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input ngModel id=\"star4\" name=\"rating\" value=\"4\" type=\"radio\"><label required for=\"star4\"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input ngModel id=\"star3\" name=\"rating\" value=\"3\" type=\"radio\"><label required for=\"star3\"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input ngModel id=\"star2\" name=\"rating\" value=\"2\" type=\"radio\"><label required for=\"star2\"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input ngModel id=\"star1\" name=\"rating\" value=\"1\" type=\"radio\"><label required for=\"star1\"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /Review Form -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /tab3  -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /product tab content  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /product tab -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /row -->\n\t\t\t</div>\n\t\t\t<!-- /container -->\n\t\t</div>\n\t\t<!-- /SECTION -->"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uiProductsServices.service */ "./src/app/uiProductsServices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductComponent = /** @class */ (function () {
    function ProductComponent(uiProductsServices, route, router) {
        this.uiProductsServices = uiProductsServices;
        this.route = route;
        this.router = router;
        this.currentPg = 1;
        this.star1 = 0;
        this.star2 = 0;
        this.star3 = 0;
        this.star4 = 0;
        this.star5 = 0;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('id');
            _this.uiProductsServices.getProduct(_this.id).subscribe(function (product) {
                _this.product = product.details;
            });
        });
        this.uiProductsServices.getCart(null).subscribe(function (res) {
            res.updatedCart.map(function (item) { return item.proid === _this.id ? _this.added = true : _this.added = false; });
        });
        this.afterReview();
        // Product img zoom
        var zoomMainProduct = document.getElementsByClassName('.preview-pic');
        if (zoomMainProduct) {
            $('.preview-pic').zoom();
        }
    };
    ProductComponent.prototype.publish = function (rev) {
        var _this = this;
        if (rev.valid) {
            var post = rev.value;
            post.productid = this.id;
            post.date = Date.now();
            this.uiProductsServices.addReview(post).subscribe(function (r) {
                _this.reviews[0] = r.details;
                rev.value.name = null;
                rev.value.comment = null;
                _this.afterReview();
            });
        }
    };
    ProductComponent.prototype.goto = function (comming) {
        var _this = this;
        var nops = Math.ceil(this.revCount / 5);
        if (nops === this.currentPg && comming === "next") {
            return;
        }
        if (this.currentPg === 1 && comming === "prev") {
            return;
        }
        if (comming === 'next') {
            this.currentPg = this.currentPg + 1;
        }
        else if (comming === 'prev') {
            this.currentPg = this.currentPg - 1;
        }
        this.uiProductsServices.getReviews(this.id, this.currentPg, 5).subscribe(function (res) {
            _this.reviews = res.reviews;
            _this.revCount = res.count;
        });
    };
    ProductComponent.prototype.afterReview = function () {
        var _this = this;
        this.uiProductsServices.getReviews(this.id, this.currentPg, 5).subscribe(function (revs) {
            _this.reviews = revs.reviews;
            _this.revCount = revs.count;
        });
        this.uiProductsServices.getProductRanking(this.id).subscribe(function (res) {
            var total = 0;
            _this.averageRate = (res.averageRate).toPrecision(2);
            for (var _i = 0, _a = res.ratings; _i < _a.length; _i++) {
                var rate = _a[_i];
                total += rate.count;
                var num = rate._id;
                _this['star' + num] = rate.count;
            }
            _this.sum1 = (_this.star1) / total * 100 + '%';
            _this.sum2 = (_this.star2) / total * 100 + '%';
            _this.sum3 = (_this.star3) / total * 100 + '%';
            _this.sum4 = (_this.star4) / total * 100 + '%';
            _this.sum5 = (_this.star5) / total * 100 + '%';
        });
    };
    ProductComponent.prototype.addToCart = function (product, qnt) {
        var _this = this;
        product.quantity = +qnt.value;
        console.log(product);
        this.uiProductsServices.pushToCart(product).subscribe(function (res) {
            if (res.cartcount === 0) {
                _this.added = true;
            }
            else {
                _this.added = false;
            }
        });
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_uiProductsServices_service__WEBPACK_IMPORTED_MODULE_2__["UiProductsServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/uiProductsServices.service.ts":
/*!***********************************************!*\
  !*** ./src/app/uiProductsServices.service.ts ***!
  \***********************************************/
/*! exports provided: UiProductsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiProductsServices", function() { return UiProductsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");





var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].Server_Url + 'ui/';
var UiProductsServices = /** @class */ (function () {
    function UiProductsServices(http) {
        this.http = http;
        this.updatedCartQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updatedSearchQuery = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UiProductsServices.prototype.searchQueryListener = function () {
        return this.updatedSearchQuery.asObservable();
    };
    UiProductsServices.prototype.cartQuantityListener = function () {
        return this.updatedCartQuantity.asObservable();
    };
    UiProductsServices.prototype.cat = function (cat) {
        return this.http.get(url + 'products/' + cat);
    };
    UiProductsServices.prototype.getProducts = function (pg, limit, order) {
        var skip = limit * pg - limit;
        return this.http.get(url + "products/getAll/" + skip + "/" + limit + "/" + order);
    };
    UiProductsServices.prototype.filterize = function (object) {
        return this.http.post(url + "products/filter", object);
    };
    UiProductsServices.prototype.getProduct = function (id) {
        return this.http.get(url + "products/getProduct/" + id);
    };
    UiProductsServices.prototype.addReview = function (rev) {
        return this.http.post(url + "reviews/add", rev);
    };
    UiProductsServices.prototype.getReviews = function (id, pg, limit) {
        var skip = limit * pg - limit;
        return this.http.get(url + "reviews/get/" + id + "/" + skip + "/" + limit);
    };
    UiProductsServices.prototype.getProductRanking = function (id) {
        return this.http.get(url + "products/rating/" + id);
    };
    UiProductsServices.prototype.pushToCart = function (product) {
        return this.http.post(url + "cart/add", product);
    };
    UiProductsServices.prototype.getCart = function (id) {
        return this.http.get(url + "cart/get/" + id);
    };
    UiProductsServices.prototype.updateCart = function (id, qnt) {
        var body = { id: id, qnt: qnt };
        return this.http.patch(url + "cart/update", body);
    };
    UiProductsServices.prototype.getTopLiked = function () {
        return this.http.get(url + "cart/top");
    };
    UiProductsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UiProductsServices);
    return UiProductsServices;
}());



/***/ }),

/***/ "./src/app/users/admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/users/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_servicses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.servicses */ "./src/app/users/users.servicses.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(usersServices, router) {
        this.usersServices = usersServices;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var isLogged = this.usersServices.getAdminStatus();
        console.log(isLogged);
        if (!isLogged) {
            this.router.navigate(['/login']);
        }
        return isLogged;
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_servicses__WEBPACK_IMPORTED_MODULE_1__["UsersServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/users/auth-interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/users/auth-interceptor.ts ***!
  \*******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_servicses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.servicses */ "./src/app/users/users.servicses.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userservices) {
        this.userservices = userservices;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.userservices.getToken();
        var cryptedToken;
        if (token) {
            cryptedToken = token.split('A').join('iLCJQcm9qZWN0IEFkbWluaXN0cmB7HjF0b3IiXX0.O27AJdZmy_qcRclJllPUSDSbu5qNET');
        }
        var request = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + cryptedToken)
        });
        return next.handle(request);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_servicses__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/users/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/users/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_servicses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.servicses */ "./src/app/users/users.servicses.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(usersServices, router) {
        this.usersServices = usersServices;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isLogged = this.usersServices.getAuthStatus();
        console.log(isLogged);
        if (!isLogged) {
            this.router.navigate(['/login']);
        }
        return isLogged;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_servicses__WEBPACK_IMPORTED_MODULE_1__["UsersServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/users/common/custom-validators/uniqueUsername.validator.ts":
/*!****************************************************************************!*\
  !*** ./src/app/users/common/custom-validators/uniqueUsername.validator.ts ***!
  \****************************************************************************/
/*! exports provided: UniqueUsername */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUsername", function() { return UniqueUsername; });
var UniqueUsername = /** @class */ (function () {
    function UniqueUsername() {
    }
    UniqueUsername.checkUsername = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === "farghaly") {
                    resolve({ found: true });
                }
                else {
                    resolve(null);
                }
            }, 100);
        });
    };
    return UniqueUsername;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @extend display-flex; */\ndisplay-flex, .display-flex, .display-flex-center {\n  display: flex;\n  display: -webkit-flex; }\n/* @extend list-type-ulli; */\nlist-type-ulli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\na:focus, a:active {\n  text-decoration: none;\n  outline: none;\n  transition: all 300ms ease 0s;\n  -moz-transition: all 300ms ease 0s;\n  -webkit-transition: all 300ms ease 0s;\n  -o-transition: all 300ms ease 0s;\n  -ms-transition: all 300ms ease 0s; }\ninput, select, textarea {\n  outline: none;\n  appearance: unset !important;\n  -moz-appearance: unset !important;\n  -webkit-appearance: unset !important;\n  -o-appearance: unset !important;\n  -ms-appearance: unset !important; }\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\n  appearance: none !important;\n  -moz-appearance: none !important;\n  -webkit-appearance: none !important;\n  -o-appearance: none !important;\n  -ms-appearance: none !important;\n  margin: 0; }\ninput:focus, select:focus, textarea:focus {\n  outline: none;\n  box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n  -o-box-shadow: none !important;\n  -ms-box-shadow: none !important; }\ninput[type=checkbox] {\n  appearance: checkbox !important;\n  -moz-appearance: checkbox !important;\n  -webkit-appearance: checkbox !important;\n  -o-appearance: checkbox !important;\n  -ms-appearance: checkbox !important; }\ninput[type=radio] {\n  appearance: radio !important;\n  -moz-appearance: radio !important;\n  -webkit-appearance: radio !important;\n  -o-appearance: radio !important;\n  -ms-appearance: radio !important; }\nimg {\n  max-width: 100%;\n  height: auto; }\nfigure {\n  margin: 0; }\np {\n  margin-bottom: 0px;\n  font-size: 15px;\n  color: #777; }\nh2 {\n  line-height: 1.66;\n  margin: 0;\n  padding: 0;\n  font-weight: 900;\n  color: #222;\n  font-family: 'Montserrat';\n  font-size: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 40px; }\n.clear {\n  clear: both; }\nbody {\n  font-size: 14px;\n  line-height: 1.8;\n  color: #222;\n  font-weight: 400;\n  font-family: 'Montserrat';\n  background-repeat: no-repeat;\n  background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  -ms-background-size: cover;\n  background-position: center center;\n  padding: 115px 0; }\n.container {\n  width: 660px;\n  position: relative;\n  margin: 0 auto; }\n.display-flex {\n  justify-content: space-between;\n  -moz-justify-content: space-between;\n  -webkit-justify-content: space-between;\n  -o-justify-content: space-between;\n  -ms-justify-content: space-between;\n  align-items: center;\n  -moz-align-items: center;\n  -webkit-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center; }\n.display-flex-center {\n  justify-content: center;\n  -moz-justify-content: center;\n  -webkit-justify-content: center;\n  -o-justify-content: center;\n  -ms-justify-content: center;\n  align-items: center;\n  -moz-align-items: center;\n  -webkit-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center; }\n.position-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n.signup-content {\n  background: #fff;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -o-border-radius: 10px;\n  -ms-border-radius: 10px;\n  padding: 50px 85px;\n  margin:20px;\n  opacity: .9;\n}\n.form-group {\n  overflow: hidden;\n  margin-bottom: 20px; }\n.form-input {\n  width: 100%;\n  border: 1px solid #ebebeb;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  color: #222; }\n.form-input::-webkit-input-placeholder {\n    color: #999; }\n.form-input::-moz-placeholder {\n    color: #999; }\n.form-input:-ms-input-placeholder {\n    color: #999; }\n.form-input:-moz-placeholder {\n    color: #999; }\n.form-input::-webkit-input-placeholder {\n    font-weight: 500; }\n.form-input::-moz-placeholder {\n    font-weight: 500; }\n.form-input:-ms-input-placeholder {\n    font-weight: 500; }\n.form-input:-moz-placeholder {\n    font-weight: 500; }\n.form-input:focus {\n    border: 1px solid transparent;\n    -webkit-border-image-source: -webkit-linear-gradient(to right, #9face6, #74ebd5);\n    -moz-border-image-source: -moz-linear-gradient(to right, #9face6, #74ebd5);\n    -o-border-image-source: -o-linear-gradient(to right, #9face6, #74ebd5);\n    border-image-source: linear-gradient(to right, #9face6, #74ebd5);\n    -webkit-border-image-slice: 1;\n    border-image-slice: 1;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -o-border-radius: 5px;\n    -ms-border-radius: 5px;\n    background-origin: border-box;\n    background-clip: content-box, border-box; }\n.form-input:focus::-webkit-input-placeholder {\n      color: #222; }\n.form-input:focus::-moz-placeholder {\n      color: #222; }\n.form-input:focus:-ms-input-placeholder {\n      color: #222; }\n.form-input:focus:-moz-placeholder {\n      color: #222; }\n.form-submit {\n  width: 100%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  border: none;\n  background-image: linear-gradient(to left, #74ebd5, #9face6); }\ninput[type=checkbox]:not(old) {\n  width: 2em;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  display: none; }\ninput[type=checkbox]:not(old) + label {\n  display: inline-block;\n  margin-top: 7px;\n  margin-bottom: 25px; }\ninput[type=checkbox]:not(old) + label > span {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin-right: 15px;\n  margin-bottom: 3px;\n  border: 1px solid #ebebeb;\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -o-border-radius: 2px;\n  -ms-border-radius: 2px;\n  background: white;\n  background-image: linear-gradient(white, white);\n  vertical-align: bottom; }\ninput[type=checkbox]:not(old):checked + label > span {\n  background-image: linear-gradient(white, white); }\ninput[type=checkbox]:not(old):checked + label > span:before {\n  content: '\\f26b';\n  display: block;\n  color: #222;\n  font-size: 11px;\n  line-height: 1.2;\n  text-align: center;\n  font-family: 'Material-Design-Iconic-Font';\n  font-weight: bold; }\n.label-agree-term {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555; }\n.term-service {\n  color: #555; }\n.loginhere {\n  color: #555;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 91px;\n  margin-bottom: 5px; }\n.loginhere-link {\n  font-weight: 700;\n  color: #222; }\n.field-icon {\n  float: right;\n  margin-right: 17px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n  color: #555; }\n@media screen and (max-width: 768px) {\n  .container {\n    width: calc(100% - 40px);\n    max-width: 100%; } }\n@media screen and (max-width: 480px) {\n  .signup-content {\n    padding: 50px 25px; } }\n/*# sourceMappingURL=style.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUI7RUFDRSxhQUFhO0VBQ2IscUJBQXFCLEVBQUU7QUFFekIsNEJBQTRCO0FBQzVCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVLEVBQUU7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsZ0NBQWdDO0VBQ2hDLGlDQUFpQyxFQUFFO0FBRXJDO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixnQ0FBZ0MsRUFBRTtBQUVwQztFQUNFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsU0FBUyxFQUFFO0FBRWI7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLCtCQUErQixFQUFFO0FBRW5DO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLG1DQUFtQyxFQUFFO0FBRXZDO0VBQ0UsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFFO0FBRXBDO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBRTtBQUVoQjtFQUNFLFNBQVMsRUFBRTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXLEVBQUU7QUFFZjtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFFO0FBRXZCO0VBQ0UsV0FBVyxFQUFFO0FBRWY7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYyxFQUFFO0FBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUU7QUFFM0I7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBRTtBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsd0NBQXdDO0VBQ3hDLG1DQUFtQztFQUNuQyxvQ0FBb0MsRUFBRTtBQUV4QztFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUU7QUFFdkI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBRTtBQUNiO0lBQ0UsV0FBVyxFQUFFO0FBQ2Y7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLFdBQVcsRUFBRTtBQUNmO0lBQ0UsV0FBVyxFQUFFO0FBQ2Y7SUFDRSxnQkFBZ0IsRUFBRTtBQUNwQjtJQUNFLGdCQUFnQixFQUFFO0FBQ3BCO0lBQ0UsZ0JBQWdCLEVBQUU7QUFDcEI7SUFDRSxnQkFBZ0IsRUFBRTtBQUNwQjtJQUNFLDZCQUE2QjtJQUM3QixnRkFBZ0Y7SUFDaEYsMEVBQTBFO0lBQzFFLHNFQUFzRTtJQUN0RSxnRUFBZ0U7SUFDaEUsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qix3Q0FBd0MsRUFBRTtBQUMxQztNQUNFLFdBQVcsRUFBRTtBQUNmO01BQ0UsV0FBVyxFQUFFO0FBQ2Y7TUFDRSxXQUFXLEVBQUU7QUFDZjtNQUNFLFdBQVcsRUFBRTtBQUVuQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFLWiw0REFBNEQsRUFBRTtBQUVoRTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhLEVBQUU7QUFFakI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQixFQUFFO0FBRXZCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFLakIsK0NBQStDO0VBQy9DLHNCQUFzQixFQUFFO0FBRTFCO0VBS0UsK0NBQStDLEVBQUU7QUFFbkQ7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBRTtBQUVmO0VBQ0UsV0FBVyxFQUFFO0FBRWY7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFFO0FBRWY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBRTtBQUVmO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZSxFQUFFLEVBQUU7QUFDdkI7RUFDRTtJQUNFLGtCQUFrQixFQUFFLEVBQUU7QUFFMUIsb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBleHRlbmQgZGlzcGxheS1mbGV4OyAqL1xuZGlzcGxheS1mbGV4LCAuZGlzcGxheS1mbGV4LCAuZGlzcGxheS1mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgfVxuXG4vKiBAZXh0ZW5kIGxpc3QtdHlwZS11bGxpOyAqL1xubGlzdC10eXBlLXVsbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG5hOmZvY3VzLCBhOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7IH1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBhcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAtbW96LWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcbiAgLW8tYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcbiAgLW1zLWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7IH1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG4gIC1vLWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwOyB9XG5cbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC1vLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1zLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XG4gIC1tb3otYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xuICAtby1hcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xuICAtbXMtYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDsgfVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7XG4gIC1tb3otYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xuICAtby1hcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xuICAtbXMtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDsgfVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgfVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7IH1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzc3NzsgfVxuXG5oMiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY2O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDsgfVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS44O1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBwYWRkaW5nOiAxMTVweCAwOyB9XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogNjYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLmRpc3BsYXktZmxleCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtby1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZGlzcGxheS1mbGV4LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnBvc2l0aW9uLWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cblxuLnNpZ251cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1MHB4IDg1cHg7XG4gIG1hcmdpbjoyMHB4O1xuICBvcGFjaXR5OiAuOTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5mb3JtLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE3cHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIyMjsgfVxuICAuZm9ybS1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5OTk7IH1cbiAgLmZvcm0taW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OyB9XG4gIC5mb3JtLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5OTk7IH1cbiAgLmZvcm0taW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5OTk7IH1cbiAgLmZvcm0taW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgLmZvcm0taW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgLmZvcm0taW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5mb3JtLWlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgLmZvcm0taW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYm9yZGVyLWltYWdlLXNvdXJjZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5ZmFjZTYsICM3NGViZDUpO1xuICAgIC1tb3otYm9yZGVyLWltYWdlLXNvdXJjZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5ZmFjZTYsICM3NGViZDUpO1xuICAgIC1vLWJvcmRlci1pbWFnZS1zb3VyY2U6IC1vLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzlmYWNlNiwgIzc0ZWJkNSk7XG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWZhY2U2LCAjNzRlYmQ1KTtcbiAgICAtd2Via2l0LWJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7IH1cbiAgICAuZm9ybS1pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzIyMjsgfVxuICAgIC5mb3JtLWlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjMjIyOyB9XG4gICAgLmZvcm0taW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjMjIyOyB9XG4gICAgLmZvcm0taW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzIyMjsgfVxuXG4uZm9ybS1zdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTdweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsICM5ZmFjZTYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsICM5ZmFjZTYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc0ZWJkNSwgIzlmYWNlNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsICM5ZmFjZTYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc0ZWJkNSwgIzlmYWNlNik7IH1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkge1xuICB3aWR0aDogMmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBub25lOyB9XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKSArIGxhYmVsID4gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKTpjaGVja2VkICsgbGFiZWwgPiBzcGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7IH1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCk6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiAnXFxmMjZiJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4ubGFiZWwtYWdyZWUtdGVybSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1NTU7IH1cblxuLnRlcm0tc2VydmljZSB7XG4gIGNvbG9yOiAjNTU1OyB9XG5cbi5sb2dpbmhlcmUge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA5MXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuLmxvZ2luaGVyZS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI7IH1cblxuLmZpZWxkLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgbWFyZ2luLXRvcDogLTMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICM1NTU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1heC13aWR0aDogMTAwJTsgfSB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc2lnbnVwLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDUwcHggMjVweDsgfSB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/img/glasses-background.jpg')\">\n  <section class=\"signup\">\n      <!-- <img src=\"images/signup-bg.jpg\" alt=\"\"> -->\n      <div style=\"margin-top:100px;\" class=\"container\">\n          <div class=\"signup-content\">\n              <form [formGroup]=\"register\" (submit)=\"login()\" id=\"signup-form\" class=\"signup-form\">\n                  <h2 class=\"form-title\">Create account</h2>\n                  <div class=\"form-group\">\n                    <input formControlName=\"username\" class=\"form-input\" type=\"text\" placeholder=\"username\" required>\n                    <div *ngIf=\"register.get('username').invalid&&register.get('username').touched\">\n                      <div *ngIf=\"register.get('username').pending\">Checking username...</div>\n                      <div *ngIf=\"register.get('username').errors.found\">this username already token</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input formControlName=\"password\" class=\"form-input\" type=\"password\" required placeholder=\"password\"/>\n                    <div *ngIf=\"register.get('password').invalid&&register.get('password').touched\">Reinter password</div>\n                      <span toggle=\"#password\" class=\"zmdi zmdi-eye field-icon toggle-password\"></span>\n                  </div>\n                  <div class=\"form-group\">\n                      <input  class=\"form-input\" type=\"submit\" name=\"submit\" id=\"submit\" class=\"form-submit\" value=\"Sign in\"/>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </section>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_servicses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.servicses */ "./src/app/users/users.servicses.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_custom_validators_uniqueUsername_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/custom-validators/uniqueUsername.validator */ "./src/app/users/common/custom-validators/uniqueUsername.validator.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersServices) {
        this.usersServices = usersServices;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], asyncValidators: [_common_custom_validators_uniqueUsername_validator__WEBPACK_IMPORTED_MODULE_4__["UniqueUsername"].checkUsername] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
    };
    LoginComponent.prototype.login = function () {
        if (this.register.valid) {
            console.log(this.register.valid);
            this.usersServices.login(this.register.get('username').value, this.register.get('password').value, 0);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_servicses__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/users/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @extend display-flex; */\ndisplay-flex, .display-flex, .display-flex-center {\n  display: flex;\n  display: -webkit-flex; }\n/* @extend list-type-ulli; */\nlist-type-ulli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\na:focus, a:active {\n  text-decoration: none;\n  outline: none;\n  transition: all 300ms ease 0s;\n  -moz-transition: all 300ms ease 0s;\n  -webkit-transition: all 300ms ease 0s;\n  -o-transition: all 300ms ease 0s;\n  -ms-transition: all 300ms ease 0s; }\ninput, select, textarea {\n  outline: none;\n  appearance: unset !important;\n  -moz-appearance: unset !important;\n  -webkit-appearance: unset !important;\n  -o-appearance: unset !important;\n  -ms-appearance: unset !important; }\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\n  appearance: none !important;\n  -moz-appearance: none !important;\n  -webkit-appearance: none !important;\n  -o-appearance: none !important;\n  -ms-appearance: none !important;\n  margin: 0; }\ninput:focus, select:focus, textarea:focus {\n  outline: none;\n  box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n  -o-box-shadow: none !important;\n  -ms-box-shadow: none !important; }\ninput[type=checkbox] {\n  appearance: checkbox !important;\n  -moz-appearance: checkbox !important;\n  -webkit-appearance: checkbox !important;\n  -o-appearance: checkbox !important;\n  -ms-appearance: checkbox !important; }\ninput[type=radio] {\n  appearance: radio !important;\n  -moz-appearance: radio !important;\n  -webkit-appearance: radio !important;\n  -o-appearance: radio !important;\n  -ms-appearance: radio !important; }\nimg {\n  max-width: 100%;\n  height: auto; }\nfigure {\n  margin: 0; }\np {\n  margin-bottom: 0px;\n  font-size: 15px;\n  color: #777; }\nh2 {\n  line-height: 1.66;\n  margin: 0;\n  padding: 0;\n  font-weight: 900;\n  color: #222;\n  font-family: 'Montserrat';\n  font-size: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 40px; }\n.clear {\n  clear: both; }\nbody {\n  font-size: 14px;\n  line-height: 1.8;\n  color: #222;\n  font-weight: 400;\n  font-family: 'Montserrat';\n  background-repeat: no-repeat;\n  background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  -ms-background-size: cover;\n  background-position: center center;\n  padding: 115px 0; }\n.container {\n  width: 660px;\n  position: relative;\n  margin: 0 auto; }\n.display-flex {\n  justify-content: space-between;\n  -moz-justify-content: space-between;\n  -webkit-justify-content: space-between;\n  -o-justify-content: space-between;\n  -ms-justify-content: space-between;\n  align-items: center;\n  -moz-align-items: center;\n  -webkit-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center; }\n.display-flex-center {\n  justify-content: center;\n  -moz-justify-content: center;\n  -webkit-justify-content: center;\n  -o-justify-content: center;\n  -ms-justify-content: center;\n  align-items: center;\n  -moz-align-items: center;\n  -webkit-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center; }\n.position-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n.signup-content {\n  background: #fff;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -o-border-radius: 10px;\n  -ms-border-radius: 10px;\n  padding: 50px 85px;\n  margin:20px;\n  opacity: .9;\n}\n.form-group {\n  overflow: hidden;\n  margin-bottom: 20px; }\n.form-input {\n  width: 100%;\n  border: 1px solid #ebebeb;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  color: #222; }\n.form-input::-webkit-input-placeholder {\n    color: #999; }\n.form-input::-moz-placeholder {\n    color: #999; }\n.form-input:-ms-input-placeholder {\n    color: #999; }\n.form-input:-moz-placeholder {\n    color: #999; }\n.form-input::-webkit-input-placeholder {\n    font-weight: 500; }\n.form-input::-moz-placeholder {\n    font-weight: 500; }\n.form-input:-ms-input-placeholder {\n    font-weight: 500; }\n.form-input:-moz-placeholder {\n    font-weight: 500; }\n.form-input:focus {\n    border: 1px solid transparent;\n    -webkit-border-image-source: -webkit-linear-gradient(to right, #9face6, #74ebd5);\n    -moz-border-image-source: -moz-linear-gradient(to right, #9face6, #74ebd5);\n    -o-border-image-source: -o-linear-gradient(to right, #9face6, #74ebd5);\n    border-image-source: linear-gradient(to right, #9face6, #74ebd5);\n    -webkit-border-image-slice: 1;\n    border-image-slice: 1;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -o-border-radius: 5px;\n    -ms-border-radius: 5px;\n    background-origin: border-box;\n    background-clip: content-box, border-box; }\n.form-input:focus::-webkit-input-placeholder {\n      color: #222; }\n.form-input:focus::-moz-placeholder {\n      color: #222; }\n.form-input:focus:-ms-input-placeholder {\n      color: #222; }\n.form-input:focus:-moz-placeholder {\n      color: #222; }\n.form-submit {\n  width: 100%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  border: none;\n  background-image: linear-gradient(to left, #74ebd5, #9face6); }\ninput[type=checkbox]:not(old) {\n  width: 2em;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  display: none; }\ninput[type=checkbox]:not(old) + label {\n  display: inline-block;\n  margin-top: 7px;\n  margin-bottom: 25px; }\ninput[type=checkbox]:not(old) + label > span {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin-right: 15px;\n  margin-bottom: 3px;\n  border: 1px solid #ebebeb;\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -o-border-radius: 2px;\n  -ms-border-radius: 2px;\n  background: white;\n  background-image: linear-gradient(white, white);\n  vertical-align: bottom; }\ninput[type=checkbox]:not(old):checked + label > span {\n  background-image: linear-gradient(white, white); }\ninput[type=checkbox]:not(old):checked + label > span:before {\n  content: '\\f26b';\n  display: block;\n  color: #222;\n  font-size: 11px;\n  line-height: 1.2;\n  text-align: center;\n  font-family: 'Material-Design-Iconic-Font';\n  font-weight: bold; }\n.label-agree-term {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555; }\n.term-service {\n  color: #555; }\n.loginhere {\n  color: #555;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 91px;\n  margin-bottom: 5px; }\n.loginhere-link {\n  font-weight: 700;\n  color: #222; }\n.field-icon {\n  float: right;\n  margin-right: 17px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n  color: #555; }\n@media screen and (max-width: 768px) {\n  .container {\n    width: calc(100% - 40px);\n    max-width: 100%; } }\n@media screen and (max-width: 480px) {\n  .signup-content {\n    padding: 50px 25px; } }\n/*# sourceMappingURL=style.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixxQkFBcUIsRUFBRTtBQUV6Qiw0QkFBNEI7QUFDNUI7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVUsRUFBRTtBQUVkO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsaUNBQWlDLEVBQUU7QUFFckM7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFFO0FBRXBDO0VBQ0UsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixTQUFTLEVBQUU7QUFFYjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUU7QUFFbkM7RUFDRSwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsbUNBQW1DLEVBQUU7QUFFdkM7RUFDRSw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsZ0NBQWdDLEVBQUU7QUFFcEM7RUFDRSxlQUFlO0VBQ2YsWUFBWSxFQUFFO0FBRWhCO0VBQ0UsU0FBUyxFQUFFO0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVcsRUFBRTtBQUVmO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUU7QUFFdkI7RUFDRSxXQUFXLEVBQUU7QUFFZjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLGdCQUFnQixFQUFFO0FBRXBCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUU7QUFFbEI7RUFDRSw4QkFBOEI7RUFDOUIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBRTtBQUUzQjtFQUNFLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFFO0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsbUNBQW1DO0VBQ25DLG9DQUFvQyxFQUFFO0FBRXhDO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFFO0FBQ2I7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLFdBQVcsRUFBRTtBQUNmO0lBQ0UsV0FBVyxFQUFFO0FBQ2Y7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLGdCQUFnQixFQUFFO0FBQ3BCO0lBQ0UsZ0JBQWdCLEVBQUU7QUFDcEI7SUFDRSxnQkFBZ0IsRUFBRTtBQUNwQjtJQUNFLGdCQUFnQixFQUFFO0FBQ3BCO0lBQ0UsNkJBQTZCO0lBQzdCLGdGQUFnRjtJQUNoRiwwRUFBMEU7SUFDMUUsc0VBQXNFO0lBQ3RFLGdFQUFnRTtJQUNoRSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHdDQUF3QyxFQUFFO0FBQzFDO01BQ0UsV0FBVyxFQUFFO0FBQ2Y7TUFDRSxXQUFXLEVBQUU7QUFDZjtNQUNFLFdBQVcsRUFBRTtBQUNmO01BQ0UsV0FBVyxFQUFFO0FBRW5CO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUtaLDREQUE0RCxFQUFFO0FBRWhFO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWEsRUFBRTtBQUVqQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUU7QUFFdkI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUtqQiwrQ0FBK0M7RUFDL0Msc0JBQXNCLEVBQUU7QUFFMUI7RUFLRSwrQ0FBK0MsRUFBRTtBQUVuRDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxpQkFBaUIsRUFBRTtBQUVyQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFFO0FBRWY7RUFDRSxXQUFXLEVBQUU7QUFFZjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUU7QUFFZjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFFO0FBRWY7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlLEVBQUUsRUFBRTtBQUN2QjtFQUNFO0lBQ0Usa0JBQWtCLEVBQUUsRUFBRTtBQUUxQixvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZXh0ZW5kIGRpc3BsYXktZmxleDsgKi9cbmRpc3BsYXktZmxleCwgLmRpc3BsYXktZmxleCwgLmRpc3BsYXktZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cblxuLyogQGV4dGVuZCBsaXN0LXR5cGUtdWxsaTsgKi9cbmxpc3QtdHlwZS11bGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuYTpmb2N1cywgYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzOyB9XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcbiAgLW1vei1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC1vLWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC1tcy1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xuICAtby1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG4gIC1tcy1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDsgfVxuXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtby1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC1tcy1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBhcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xuICAtbW96LWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcbiAgLW8tYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcbiAgLW1zLWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7IH1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBhcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xuICAtbW96LWFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcbiAgLW8tYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcbiAgLW1zLWFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7IH1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87IH1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwOyB9XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3Nzc7IH1cblxuaDIge1xuICBsaW5lLWhlaWdodDogMS42NjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7IH1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbXMtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgcGFkZGluZzogMTE1cHggMDsgfVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDY2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5kaXNwbGF5LWZsZXgge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmRpc3BsYXktZmxleC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW8tanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5wb3NpdGlvbi1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XG5cbi5zaWdudXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNTBweCA4NXB4O1xuICBtYXJnaW46MjBweDtcbiAgb3BhY2l0eTogLjk7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxN3B4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyMjI7IH1cbiAgLmZvcm0taW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OyB9XG4gIC5mb3JtLWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTsgfVxuICAuZm9ybS1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OyB9XG4gIC5mb3JtLWlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OyB9XG4gIC5mb3JtLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5mb3JtLWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5mb3JtLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAuZm9ybS1pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5mb3JtLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LWJvcmRlci1pbWFnZS1zb3VyY2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWZhY2U2LCAjNzRlYmQ1KTtcbiAgICAtbW96LWJvcmRlci1pbWFnZS1zb3VyY2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWZhY2U2LCAjNzRlYmQ1KTtcbiAgICAtby1ib3JkZXItaW1hZ2Utc291cmNlOiAtby1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5ZmFjZTYsICM3NGViZDUpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzlmYWNlNiwgIzc0ZWJkNSk7XG4gICAgLXdlYmtpdC1ib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94OyB9XG4gICAgLmZvcm0taW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICMyMjI7IH1cbiAgICAuZm9ybS1pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzIyMjsgfVxuICAgIC5mb3JtLWlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzIyMjsgfVxuICAgIC5mb3JtLWlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICMyMjI7IH1cblxuLmZvcm0tc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE3cHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCAjOWZhY2U2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCAjOWZhY2U2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsICM5ZmFjZTYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCAjOWZhY2U2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsICM5ZmFjZTYpOyB9XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpIHtcbiAgd2lkdGg6IDJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKSArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkgKyBsYWJlbCA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCk6Y2hlY2tlZCArIGxhYmVsID4gc3BhbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpOyB9XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogJ1xcZjI2Yic7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250JztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLmxhYmVsLWFncmVlLXRlcm0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTU1OyB9XG5cbi50ZXJtLXNlcnZpY2Uge1xuICBjb2xvcjogIzU1NTsgfVxuXG4ubG9naW5oZXJlIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOTFweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG5cbi5sb2dpbmhlcmUtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjIyOyB9XG5cbi5maWVsZC1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjNTU1OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNpZ251cC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7IH0gfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/img/glasses-background.jpg')\">\n  <section class=\"signup\">\n      <!-- <img src=\"images/signup-bg.jpg\" alt=\"\"> -->\n      <div style=\"margin-top:100px;\" class=\"container\">\n          <div class=\"signup-content\">\n              <form [formGroup]=\"register\" (submit)=\"signUp()\" id=\"signup-form\" class=\"signup-form\">\n                  <h2 class=\"form-title\">Create account</h2>\n                  <div class=\"form-group\">\n                    <input formControlName=\"username\" class=\"form-input\" type=\"text\" placeholder=\"username\" required>\n                    <div *ngIf=\"register.get('username').invalid&&register.get('username').touched\">\n                      <div *ngIf=\"register.get('username').pending\">Checking username...</div>\n                      <div *ngIf=\"register.get('username').errors.found\">this username already token</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input formControlName=\"password\" class=\"form-input\" type=\"password\" required placeholder=\"password\"/>\n                    <div *ngIf=\"register.get('password').invalid&&register.get('password').touched\">Reinter password</div>\n                      <span toggle=\"#password\" class=\"zmdi zmdi-eye field-icon toggle-password\"></span>\n                  </div>\n                  <div class=\"form-group\">\n                    <input formControlName=\"confirm\" class=\"form-input\" type=\"password\" required placeholder=\"Confirm password\"/>\n                    <div *ngIf=\"register.get('confirm').invalid&&register.get('confirm').touched\">Reinter password confirmation</div>\n                  </div>\n                  <div class=\"form-group\">\n                      <input class=\"form-input\" type=\"submit\" name=\"submit\" id=\"submit\" class=\"form-submit\" value=\"Sign up\"/>\n                  </div>\n              </form>\n\n              <p class=\"loginhere\">\n                  Have already an account ? <a [routerLink]=\"['/login']\" class=\"loginhere-link\">Login here</a>\n              </p>\n          </div>\n      </div>\n  </section>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_servicses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.servicses */ "./src/app/users/users.servicses.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_custom_validators_uniqueUsername_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/custom-validators/uniqueUsername.validator */ "./src/app/users/common/custom-validators/uniqueUsername.validator.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(userservices, usersServices) {
        this.userservices = userservices;
        this.usersServices = usersServices;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], asyncValidators: [_common_custom_validators_uniqueUsername_validator__WEBPACK_IMPORTED_MODULE_4__["UniqueUsername"].checkUsername] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
    };
    SignupComponent.prototype.signUp = function () {
        if (this.register.valid && (this.register.get('password').value === this.register.get('confirm').value)) {
            console.log(this.register.valid);
            this.usersServices.add(this.register.get('username').value, this.register.get('password').value);
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/users/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/users/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_servicses__WEBPACK_IMPORTED_MODULE_1__["UsersServices"], _users_servicses__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/users/users.servicses.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.servicses.ts ***!
  \******************************************/
/*! exports provided: UsersServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServices", function() { return UsersServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var serverUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].Server_Url + 'users';
var UsersServices = /** @class */ (function () {
    function UsersServices(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isAdminAuthenticated = false;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.adminSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.countdown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UsersServices.prototype.authStatListener = function () {
        return this.authSubject.asObservable();
    };
    UsersServices.prototype.adminStatListener = function () {
        return this.adminSubject.asObservable();
    };
    UsersServices.prototype.countdownListener = function () {
        return this.countdown.asObservable();
    };
    UsersServices.prototype.getAuthStatus = function () {
        return this.isAuthenticated;
    };
    UsersServices.prototype.getAdminStatus = function () {
        return this.isAdminAuthenticated;
    };
    UsersServices.prototype.checkUsername = function (username) {
        return this.http.get(serverUrl + '/check/' + username);
    };
    UsersServices.prototype.add = function (username, password) {
        var _this = this;
        var data = { username: username, password: password };
        this.http.post(serverUrl + '/add', data).subscribe(function (res) {
            if (res.data) {
                _this.login(res.data.username, res.data.password, 0);
            }
        });
    };
    UsersServices.prototype.login = function (username, password, expireTimems) {
        var _this = this;
        var data = { username: username, password: password, expireTimems: expireTimems };
        this.http.post(serverUrl + '/login', data).subscribe(function (res) {
            console.log(res.message);
            if (res.token) {
                if (res.role === 1) {
                    _this.isAdminAuthenticated = true;
                    _this.adminSubject.next(true);
                }
                else {
                    _this.isAuthenticated = true;
                    _this.authSubject.next(true);
                }
                _this.token = res.token;
                _this.username = username;
                _this.password = password;
                console.log(res.expireTime);
                _this.setexpireTimeout(res.expireTime);
                _this.userId = res.userId;
                var now = new Date();
                var expireDate = new Date(now.getTime() + res.expireTime * 1000);
                _this.saveAuthData(expireDate);
                _this.router.navigate(['/']);
            }
        });
    };
    UsersServices.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.isAdminAuthenticated = false;
        this.authSubject.next(false);
        this.adminSubject.next(false);
        this.userId = null;
        clearTimeout(this.expireTime);
        this.clearAuthData();
        this.router.navigate(['/login']);
    };
    UsersServices.prototype.getToken = function () {
        return this.token;
    };
    UsersServices.prototype.getUserId = function () {
        return this.userId;
    };
    UsersServices.prototype.setexpireTimeout = function (expTime) {
        var _this = this;
        this.expireTime = setTimeout(function () { _this.logout(); }, expTime * 1000);
    };
    UsersServices.prototype.saveAuthData = function (expDate) {
        //localStorage.setItem('token', this.token);
        localStorage.setItem('userId', this.userId);
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        localStorage.setItem('expireDate', expDate.toISOString());
    };
    UsersServices.prototype.clearAuthData = function () {
        //localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('expireDate');
        localStorage.removeItem('userId');
    };
    UsersServices.prototype.getAuthData = function () {
        //const token = localStorage.getItem('token');
        var exp = localStorage.getItem('expireDate');
        var userId = localStorage.getItem('userId');
        var username = localStorage.getItem('username');
        var password = localStorage.getItem('password');
        if (!username || !password || !exp || !userId) {
            return;
        }
        var token = this.token;
        return { token: token, expire: new Date(exp), userId: userId, username: username, password: password };
    };
    UsersServices.prototype.autoAuthCheck = function () {
        var expireData = this.getAuthData();
        if (!expireData) {
            return;
        }
        var now = new Date();
        var timeLeft = expireData.expire.getTime() - now.getTime();
        if (timeLeft > 0) {
            console.log(timeLeft / 1000);
            this.token = expireData.token;
            this.setexpireTimeout(timeLeft / 1000);
            this.login(expireData.username, expireData.password, timeLeft / 1000);
            this.isAuthenticated = true;
            this.userId = expireData.userId;
            this.authSubject.next(true);
        }
    };
    UsersServices.prototype.countDown = function () {
        var _this = this;
        var expireData = this.getAuthData();
        if (!expireData) {
            return;
        }
        var now = new Date();
        var timeLeft = expireData.expire.getTime() - now.getTime();
        if (timeLeft > 0) {
            var intervals_1 = Math.floor(timeLeft / 1000);
            var setinterval_1 = setInterval(function () {
                --intervals_1;
                if (intervals_1 === 0) {
                    clearInterval(setinterval_1);
                }
                _this.countdown.next(intervals_1);
            }, 1000);
        }
    };
    UsersServices.prototype.getCount = function () {
        var expireData = this.getAuthData();
        if (!expireData) {
            return;
        }
        var now = new Date();
        var timeLeft = expireData.expire.getTime() - now.getTime();
        return Math.floor(timeLeft);
    };
    UsersServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersServices);
    return UsersServices;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    Server_Url: 'https://eyesshop.herokuapp.com/api/'
};


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

module.exports = __webpack_require__(/*! C:\Users\Farghaly\Desktop\EyesShop-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map