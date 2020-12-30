exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\r\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\r\nconst collections_module_1 = __webpack_require__(/*! ./collections/collections.module */ \"./src/collections/collections.module.ts\");\r\nconst sets_module_1 = __webpack_require__(/*! ./sets/sets.module */ \"./src/sets/sets.module.ts\");\r\nconst notices_module_1 = __webpack_require__(/*! ./notices/notices.module */ \"./src/notices/notices.module.ts\");\r\nconst filtres_module_1 = __webpack_require__(/*! ./filtres/filtres.module */ \"./src/filtres/filtres.module.ts\");\r\nconst maps_module_1 = __webpack_require__(/*! ./mappage/maps.module */ \"./src/mappage/maps.module.ts\");\r\nconst scan_module_1 = __webpack_require__(/*! ./scan/scan.module */ \"./src/scan/scan.module.ts\");\r\nlet AppModule = class AppModule {\r\n};\r\nAppModule = __decorate([\r\n    common_1.Module({\r\n        imports: [collections_module_1.CollectionsModule, sets_module_1.SetsModule, notices_module_1.NoticesModule, scan_module_1.ScanModule, filtres_module_1.FiltresModule, maps_module_1.MapsModule],\r\n        controllers: [app_controller_1.AppController],\r\n        providers: [app_service_1.AppService],\r\n    })\r\n], AppModule);\r\nexports.AppModule = AppModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/ws/ws.module.ts":
false

};