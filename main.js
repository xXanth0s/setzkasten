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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_katalog_katalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/katalog/katalog.component */ "./src/app/components/katalog/katalog.component.ts");
/* harmony import */ var _components_sammelstueck_hinzufuegen_sammelstueck_hinzufuegen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sammelstueck-hinzufuegen/sammelstueck-hinzufuegen.component */ "./src/app/components/sammelstueck-hinzufuegen/sammelstueck-hinzufuegen.component.ts");
/* harmony import */ var _components_sammlung_sammlung_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sammlung/sammlung.component */ "./src/app/components/sammlung/sammlung.component.ts");
/* harmony import */ var _components_sammlungen_uebersicht_sammlungenuebersicht_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sammlungen-uebersicht/sammlungenuebersicht.component */ "./src/app/components/sammlungen-uebersicht/sammlungenuebersicht.component.ts");
/* harmony import */ var _components_sammlung_anlegen_sammlung_anlegen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sammlung-anlegen/sammlung-anlegen.component */ "./src/app/components/sammlung-anlegen/sammlung-anlegen.component.ts");
/* harmony import */ var _components_sammlung_bearbeiten_sammlung_bearbeiten_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sammlung-bearbeiten/sammlung-bearbeiten.component */ "./src/app/components/sammlung-bearbeiten/sammlung-bearbeiten.component.ts");
/* harmony import */ var _components_checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkliste/checkliste.component */ "./src/app/components/checkliste/checkliste.component.ts");
/* harmony import */ var _components_sammelstueck_bearbeiten_sammelstueck_bearbeiten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sammelstueck-bearbeiten/sammelstueck-bearbeiten.component */ "./src/app/components/sammelstueck-bearbeiten/sammelstueck-bearbeiten.component.ts");
/* harmony import */ var _components_sammelstueck_sammelstueck_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sammelstueck/sammelstueck.component */ "./src/app/components/sammelstueck/sammelstueck.component.ts");
/* harmony import */ var _components_sammelstueck_kopieren_sammelstueck_kopieren_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sammelstueck-kopieren/sammelstueck-kopieren.component */ "./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren.component.ts");














const routes = [
    {
        path: 'katalog/:id',
        component: _components_katalog_katalog_component__WEBPACK_IMPORTED_MODULE_2__["KatalogComponent"]
    },
    {
        path: 'hinzufuegen/:collectionID',
        component: _components_sammelstueck_hinzufuegen_sammelstueck_hinzufuegen_component__WEBPACK_IMPORTED_MODULE_3__["SammelstueckHinzufuegenComponent"]
    },
    {
        path: 'sammlung/:id',
        component: _components_sammlung_sammlung_component__WEBPACK_IMPORTED_MODULE_4__["SammlungComponent"]
    },
    {
        path: '',
        component: _components_sammlungen_uebersicht_sammlungenuebersicht_component__WEBPACK_IMPORTED_MODULE_5__["SammlungenuebersichtComponent"]
    },
    {
        path: 'sammlunganlegen',
        component: _components_sammlung_anlegen_sammlung_anlegen_component__WEBPACK_IMPORTED_MODULE_6__["SammlungAnlegenComponent"]
    },
    {
        path: 'sammlungbearbeiten',
        component: _components_sammlung_bearbeiten_sammlung_bearbeiten_component__WEBPACK_IMPORTED_MODULE_7__["SammlungBearbeitenComponent"]
    },
    {
        path: 'checklist/:id',
        component: _components_checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_8__["ChecklisteComponent"]
    },
    {
        path: 'sammelstueckbearbeiten/:collectionID/:id',
        component: _components_sammelstueck_bearbeiten_sammelstueck_bearbeiten_component__WEBPACK_IMPORTED_MODULE_9__["SammelstueckBearbeitenComponent"]
    },
    {
        path: 'sammelstueck/:collectionID/:id',
        component: _components_sammelstueck_sammelstueck_component__WEBPACK_IMPORTED_MODULE_10__["SammelstueckComponent"]
    },
    {
        path: 'sammelstueckkopieren/:id',
        component: _components_sammelstueck_kopieren_sammelstueck_kopieren_component__WEBPACK_IMPORTED_MODULE_11__["SammelstueckKopierenComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'DigitalerSetzkasten';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_katalog_katalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/katalog/katalog.component */ "./src/app/components/katalog/katalog.component.ts");
/* harmony import */ var _components_katalog_katalog_sammelstueck_katalog_sammelstueck_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/katalog/katalog-sammelstueck/katalog-sammelstueck.component */ "./src/app/components/katalog/katalog-sammelstueck/katalog-sammelstueck.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_sammelstueck_hinzufuegen_sammelstueck_hinzufuegen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sammelstueck-hinzufuegen/sammelstueck-hinzufuegen.component */ "./src/app/components/sammelstueck-hinzufuegen/sammelstueck-hinzufuegen.component.ts");
/* harmony import */ var _components_sammlung_sammlung_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sammlung/sammlung.component */ "./src/app/components/sammlung/sammlung.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_sammlungen_uebersicht_sammlungenuebersicht_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sammlungen-uebersicht/sammlungenuebersicht.component */ "./src/app/components/sammlungen-uebersicht/sammlungenuebersicht.component.ts");
/* harmony import */ var _components_sammlungen_uebersicht_sammlungen_uebersicht_sammlung_sammlungen_uebersicht_sammlung_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sammlungen-uebersicht/sammlungen-uebersicht-sammlung/sammlungen-uebersicht-sammlung.component */ "./src/app/components/sammlungen-uebersicht/sammlungen-uebersicht-sammlung/sammlungen-uebersicht-sammlung.component.ts");
/* harmony import */ var _components_sammlung_anlegen_sammlung_anlegen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sammlung-anlegen/sammlung-anlegen.component */ "./src/app/components/sammlung-anlegen/sammlung-anlegen.component.ts");
/* harmony import */ var _components_sammlung_bearbeiten_sammlung_bearbeiten_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sammlung-bearbeiten/sammlung-bearbeiten.component */ "./src/app/components/sammlung-bearbeiten/sammlung-bearbeiten.component.ts");
/* harmony import */ var _components_checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/checkliste/checkliste.component */ "./src/app/components/checkliste/checkliste.component.ts");
/* harmony import */ var _components_sammelstueck_bearbeiten_sammelstueck_bearbeiten_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sammelstueck-bearbeiten/sammelstueck-bearbeiten.component */ "./src/app/components/sammelstueck-bearbeiten/sammelstueck-bearbeiten.component.ts");
/* harmony import */ var _components_sammelstueck_sammelstueck_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sammelstueck/sammelstueck.component */ "./src/app/components/sammelstueck/sammelstueck.component.ts");
/* harmony import */ var _components_sammlung_sammlung_sammelstueck_sammlung_sammelstueck_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sammlung/sammlung-sammelstueck/sammlung-sammelstueck.component */ "./src/app/components/sammlung/sammlung-sammelstueck/sammlung-sammelstueck.component.ts");
/* harmony import */ var _components_checkliste_checkliste_checklistitem_checkliste_checklistitem_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/checkliste/checkliste-checklistitem/checkliste-checklistitem.component */ "./src/app/components/checkliste/checkliste-checklistitem/checkliste-checklistitem.component.ts");
/* harmony import */ var _components_sammelstueck_kopieren_sammelstueck_kopieren_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sammelstueck-kopieren/sammelstueck-kopieren.component */ "./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren.component.ts");
/* harmony import */ var _components_sammelstueck_kopieren_sammelstueck_kopieren_sammelstueck_sammelstueck_zu_weiterer_sammlung_hzfg_auswahlmoeglichk_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sammelstueck-kopieren/sammelstueck-kopieren-sammelstueck/sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component */ "./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren-sammelstueck/sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_katalog_katalog_component__WEBPACK_IMPORTED_MODULE_4__["KatalogComponent"],
        _components_katalog_katalog_sammelstueck_katalog_sammelstueck_component__WEBPACK_IMPORTED_MODULE_5__["KatalogSammelstueckComponent"],
        _components_sammelstueck_hinzufuegen_sammelstueck_hinzufuegen_component__WEBPACK_IMPORTED_MODULE_7__["SammelstueckHinzufuegenComponent"],
        _components_sammlung_sammlung_component__WEBPACK_IMPORTED_MODULE_8__["SammlungComponent"],
        _components_sammlungen_uebersicht_sammlungenuebersicht_component__WEBPACK_IMPORTED_MODULE_10__["SammlungenuebersichtComponent"],
        _components_sammlungen_uebersicht_sammlungen_uebersicht_sammlung_sammlungen_uebersicht_sammlung_component__WEBPACK_IMPORTED_MODULE_11__["SammlungenUebersichtSammlungComponent"],
        _components_sammlung_anlegen_sammlung_anlegen_component__WEBPACK_IMPORTED_MODULE_12__["SammlungAnlegenComponent"],
        _components_sammlung_bearbeiten_sammlung_bearbeiten_component__WEBPACK_IMPORTED_MODULE_13__["SammlungBearbeitenComponent"],
        _components_checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_14__["ChecklisteComponent"],
        _components_sammelstueck_bearbeiten_sammelstueck_bearbeiten_component__WEBPACK_IMPORTED_MODULE_15__["SammelstueckBearbeitenComponent"],
        _components_sammelstueck_sammelstueck_component__WEBPACK_IMPORTED_MODULE_16__["SammelstueckComponent"],
        _components_sammlung_sammlung_sammelstueck_sammlung_sammelstueck_component__WEBPACK_IMPORTED_MODULE_17__["SammlungSammelstueckComponent"],
        _components_checkliste_checkliste_checklistitem_checkliste_checklistitem_component__WEBPACK_IMPORTED_MODULE_18__["ChecklisteChecklistitemComponent"],
        _components_sammelstueck_kopieren_sammelstueck_kopieren_component__WEBPACK_IMPORTED_MODULE_19__["SammelstueckKopierenComponent"],
        _components_sammelstueck_kopieren_sammelstueck_kopieren_sammelstueck_sammelstueck_zu_weiterer_sammlung_hzfg_auswahlmoeglichk_component__WEBPACK_IMPORTED_MODULE_20__["SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_katalog_katalog_component__WEBPACK_IMPORTED_MODULE_4__["KatalogComponent"],
                    _components_katalog_katalog_sammelstueck_katalog_sammelstueck_component__WEBPACK_IMPORTED_MODULE_5__["KatalogSammelstueckComponent"],
                    _components_sammelstueck_hinzufuegen_sammelstueck_hinzufuegen_component__WEBPACK_IMPORTED_MODULE_7__["SammelstueckHinzufuegenComponent"],
                    _components_sammlung_sammlung_component__WEBPACK_IMPORTED_MODULE_8__["SammlungComponent"],
                    _components_sammlungen_uebersicht_sammlungenuebersicht_component__WEBPACK_IMPORTED_MODULE_10__["SammlungenuebersichtComponent"],
                    _components_sammlungen_uebersicht_sammlungen_uebersicht_sammlung_sammlungen_uebersicht_sammlung_component__WEBPACK_IMPORTED_MODULE_11__["SammlungenUebersichtSammlungComponent"],
                    _components_sammlung_anlegen_sammlung_anlegen_component__WEBPACK_IMPORTED_MODULE_12__["SammlungAnlegenComponent"],
                    _components_sammlung_bearbeiten_sammlung_bearbeiten_component__WEBPACK_IMPORTED_MODULE_13__["SammlungBearbeitenComponent"],
                    _components_checkliste_checkliste_component__WEBPACK_IMPORTED_MODULE_14__["ChecklisteComponent"],
                    _components_sammelstueck_bearbeiten_sammelstueck_bearbeiten_component__WEBPACK_IMPORTED_MODULE_15__["SammelstueckBearbeitenComponent"],
                    _components_sammelstueck_sammelstueck_component__WEBPACK_IMPORTED_MODULE_16__["SammelstueckComponent"],
                    _components_sammlung_sammlung_sammelstueck_sammlung_sammelstueck_component__WEBPACK_IMPORTED_MODULE_17__["SammlungSammelstueckComponent"],
                    _components_checkliste_checkliste_checklistitem_checkliste_checklistitem_component__WEBPACK_IMPORTED_MODULE_18__["ChecklisteChecklistitemComponent"],
                    _components_sammelstueck_kopieren_sammelstueck_kopieren_component__WEBPACK_IMPORTED_MODULE_19__["SammelstueckKopierenComponent"],
                    _components_sammelstueck_kopieren_sammelstueck_kopieren_sammelstueck_sammelstueck_zu_weiterer_sammlung_hzfg_auswahlmoeglichk_component__WEBPACK_IMPORTED_MODULE_20__["SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/checkliste/checkliste-checklistitem/checkliste-checklistitem.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/checkliste/checkliste-checklistitem/checkliste-checklistitem.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChecklisteChecklistitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklisteChecklistitemComponent", function() { return ChecklisteChecklistitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class ChecklisteChecklistitemComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        console.log(this.checklistitem);
        this.id = this.checklistitem.id;
        this.collectionID = this.checklistitem.collectionID;
    }
    toggleSelection() {
        //changes the bought status of the item if the check mark is changed
        this.checklistitem.bought = !this.checklistitem.bought;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/updateChecklistitem', this.checklistitem).subscribe();
    }
    deleteOneItem() {
        console.log("delete clicked");
        if (confirm(`Möchten Sie das Item "${this.checklistitem.item}" wirklich löschen?`)) {
            //ask the user if they really meant to click on delete
            const sendData = { id: this.id };
            console.log(this.id);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/deleteChecklistitem', sendData).subscribe((data) => {
                //sends the ID of the item to the index.js in the app folder which deletes it from the database
                console.log("DELETED");
                location.reload();
                //reload the page so that the
            });
        }
        else {
            console.log("abbrechen gewählt");
        }
    }
}
ChecklisteChecklistitemComponent.ɵfac = function ChecklisteChecklistitemComponent_Factory(t) { return new (t || ChecklisteChecklistitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ChecklisteChecklistitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChecklisteChecklistitemComponent, selectors: [["app-checkliste-checklistitem"]], inputs: { checklistitem: "checklistitem" }, decls: 7, vars: 2, consts: [[1, "item"], ["item-id", "", 1, "item"], [1, "button", "clear-list", 3, "click"], [1, "far", "fa-trash-alt"], ["type", "checkbox", "name", "item-status", 1, "item-status-checkbox", 3, "ngModel", "click"], [1, "item-name"]], template: function ChecklisteChecklistitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklisteChecklistitemComponent_Template_div_click_2_listener() { return ctx.deleteOneItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklisteChecklistitemComponent_Template_input_click_4_listener() { return ctx.toggleSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checklistitem.bought);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.checklistitem.item);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["ul[_ngcontent-%COMP%]{\n  list-style: none;\n  align-content: left;\n}\n\nhtml[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.button.clear-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 42vw;\n  margin-top: 0;\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\n.item[_ngcontent-%COMP%]{\n  text-align: left;\n  align-content: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2xpc3RlL2NoZWNrbGlzdGUtY2hlY2tsaXN0aXRlbS9jaGVja2xpc3RlLWNoZWNrbGlzdGl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja2xpc3RlL2NoZWNrbGlzdGUtY2hlY2tsaXN0aXRlbS9jaGVja2xpc3RlLWNoZWNrbGlzdGl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBhbGlnbi1jb250ZW50OiBsZWZ0O1xufVxuXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uLmNsZWFyLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQydnc7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbn1cblxuLml0ZW17XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklisteChecklistitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkliste-checklistitem',
                templateUrl: './checkliste-checklistitem.component.html',
                styleUrls: ['./checkliste-checklistitem.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { checklistitem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/checkliste/checkliste.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/checkliste/checkliste.component.ts ***!
  \***************************************************************/
/*! exports provided: ChecklisteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklisteComponent", function() { return ChecklisteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _checkliste_checklistitem_checkliste_checklistitem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkliste-checklistitem/checkliste-checklistitem.component */ "./src/app/components/checkliste/checkliste-checklistitem/checkliste-checklistitem.component.ts");








function ChecklisteComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-checkliste-checklistitem", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const checklistItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checklistitem", checklistItem_r7);
} }
class ChecklisteComponent {
    constructor(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        //Hier noch richtige ID setzen
        this.checklistitems = [];
        this.bought = 0;
        this.boughtItems = [];
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot);
        this.collectionID = this.activatedRoute.snapshot.params.id;
        //gets the collectionID from the path
        this.loadSammlungsname();
        this.loadChecklistitems();
    }
    loadSammlungsname() {
        //gets the name of the collection from the database and loads it into the headline
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlung/' + this.collectionID).subscribe((data) => {
            this.collectionName = data[0].collectionName;
            this.headline = "Checkliste zur " + this.collectionName + "-Sammlung";
        });
    }
    loadChecklistitems() {
        //gets all the checklist items that belong to this collection and loads them
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/checklist/' + this.collectionID).subscribe((data) => {
            console.log(data);
            this.checklistitems = data;
        });
        console.log("loading");
    }
    addChecklistItem() {
        console.log("add Clicked");
        if (this.itemTitle == undefined) {
            //alert if there's no title
            alert("Bitte geben Sie einen Titel an");
        }
        else {
            if (this.checkDoubleTitle(this.itemTitle) == true) {
                //asks user if they still want to create this item if an item with this name already exists
                if (confirm(`Es gibt bereits ein Item "${this.itemTitle}". Möchten Sie ein Gleichnamiges erstellen?`)) {
                    const sendData = { item: this.itemTitle, bought: this.bought };
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/checklist/' + this.collectionID, sendData).subscribe((data) => {
                        //creates a new checklist item with the input data
                        location.reload();
                        //reloads the window to show the new item
                        this.itemTitle = "";
                        //empties the input field
                    });
                }
            }
            else {
                const sendData = { item: this.itemTitle, bought: this.bought };
                this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/checklist/' + this.collectionID, sendData).subscribe((data) => {
                    //creates a new checklist item with the input data
                    location.reload();
                    //reloads the window to show the new item
                    this.itemTitle = "";
                    //empties the input field
                });
            }
        }
    }
    checkDoubleTitle(title) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/checklist/' + this.collectionID).subscribe((data) => {
            console.log(data);
            this.checklistitems = data;
            //gets all the checklist items to compare them
        });
        for (let i = 0; i < this.checklistitems.length; i++) {
            if (this.checklistitems[i].item == title) {
                //checks for each checklist item in the array if it matches the input name, if yes it returns true
                return true;
            }
        }
        return false;
        //if no match was found it returns false
    }
    deleteChecklistItems() {
        if (confirm("Möchten Sie wirklich alle abgehakten Items löschen? Sie können nicht wieder hergestellt werden")) {
            //asks if users really means to delete all checked items
            console.log("ok clicked");
            console.log(this.checklistitems);
            for (let i = 0; i < this.checklistitems.length; i++) {
                if (this.checklistitems[i].bought == true) {
                    //checks for all checklist items if they have been bought deletes each one where that is true
                    let sendData = { id: this.checklistitems[i].id };
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/deleteChecklistitem', sendData).subscribe((data) => {
                        console.log("DELETED");
                    });
                }
            }
            location.reload();
            //reloads the window to not show the deleted items anymore
        }
        else {
            console.log("abbrechen gewählt");
        }
    }
    navigateBack() {
        //navigates back to the collection
        console.log("navigateBack wird ausgeführt");
        this.router.navigateByUrl('/sammlung/' + this.collectionID);
    }
}
ChecklisteComponent.ɵfac = function ChecklisteComponent_Factory(t) { return new (t || ChecklisteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ChecklisteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChecklisteComponent, selectors: [["app-checkliste"]], decls: 23, vars: 3, consts: [[1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], ["type", "text", "name", "item-name", "id", "itemTitle", 1, "item-name-input", 3, "ngModel", "ngModelChange"], [1, "button", "new-item", 3, "click"], [1, "fas", "fa-plus"], [1, "button", "clear-list", 3, "click"], [1, "far", "fa-trash-alt"], ["id", "content"], ["id", "items"], [4, "ngFor", "ngForOf"], ["id", "item-template"], ["item-id", "", 1, "item"], ["type", "checkbox", "name", "item-status", 1, "item-status-checkbox"], ["type", "text", "name", "item-name", 1, "item-name-input"], [3, "checklistitem"]], template: function ChecklisteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklisteComponent_Template_span_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChecklisteComponent_Template_input_ngModelChange_6_listener($event) { return ctx.itemTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklisteComponent_Template_div_click_7_listener() { return ctx.addChecklistItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklisteComponent_Template_div_click_9_listener() { return ctx.deleteChecklistItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChecklisteComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.checklistitems);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _checkliste_checklistitem_checkliste_checklistitem_component__WEBPACK_IMPORTED_MODULE_6__["ChecklisteChecklistitemComponent"]], styles: ["ul[_ngcontent-%COMP%]{\n  list-style: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%]{\n  padding-top: 3vw;\n  padding-left: 40vw;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0 1vw;\n  top: 0px;\n  z-index: 0;\n}\n\n.item-name-input[_ngcontent-%COMP%]{\n  margin-top: 5vw;\n  height: 19px;\n}\n\nbody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ncontent[_ngcontent-%COMP%] {\n  justify-content: center;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  align-content: left;\n  width: 100vw;\n  margin-left: 0;\n}\n\n.button.clear-list[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\n.button.new-item[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 0;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2xpc3RlL2NoZWNrbGlzdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrbGlzdGUvY2hlY2tsaXN0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmh0bWwge1xuICBtYXJnaW46IDA7XG59XG5ib2R5e1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDQwdnc7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5OHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMXZ3O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMDtcbn1cblxuLml0ZW0tbmFtZS1pbnB1dHtcbiAgbWFyZ2luLXRvcDogNXZ3O1xuICBoZWlnaHQ6IDE5cHg7XG59XG5cbmJvZHkgZGl2IHtcbiAgcGFkZGluZzogMDtcbn1cblxuXG5jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmJ1dHRvbi5jbGVhci1saXN0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYnV0dG9uLm5ldy1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYnV0dG9uLmJhY2sge1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xufVxuaDF7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgZm9udC1zaXplOiA0MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklisteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkliste',
                templateUrl: './checkliste.component.html',
                styleUrls: ['./checkliste.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/katalog/katalog-sammelstueck/katalog-sammelstueck.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/katalog/katalog-sammelstueck/katalog-sammelstueck.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: KatalogSammelstueckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatalogSammelstueckComponent", function() { return KatalogSammelstueckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



class KatalogSammelstueckComponent {
    constructor() { }
    ngOnInit() {
    }
    getImageURL() {
        //returns the path where the image is saved
        console.log(this.sammelstueck.pieceImagePath);
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl}/${this.sammelstueck.pieceImagePath}`;
    }
}
KatalogSammelstueckComponent.ɵfac = function KatalogSammelstueckComponent_Factory(t) { return new (t || KatalogSammelstueckComponent)(); };
KatalogSammelstueckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KatalogSammelstueckComponent, selectors: [["app-katalog-sammelstueck"]], inputs: { sammelstueck: "sammelstueck" }, decls: 8, vars: 3, consts: [[1, "pieces"], [1, "catalogue-grid-container-inside"], [1, "name-image-container"], [1, "piece-name"], ["width", "300", "height", "", 1, "image", 3, "src"], [1, "description"]], template: function KatalogSammelstueckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sammelstueck.pieceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImageURL(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sammelstueck.pieceDescription);
    } }, styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\ncontent[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100vw;\n}\n.pieces[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-around;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.catalogue-grid-container-outside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  padding-top: 40px;\n}\n.catalogue-grid-container-inside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.name-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.name-image-container[_ngcontent-%COMP%]   .piece-name[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 20px;\n  line-height: 50px;\n  color: rgb(33, 19, 4);\n}\n.catalogue-grid-container-inside[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 15px;\n  line-height: 50px;\n  color:rgb(33, 19, 4);\n  margin-top: 35px;\n  margin-left: 1vw;\n}\n.image[_ngcontent-%COMP%]{\n  object-fit: contain;\n  border: 1px solid rgb(33, 19, 4);\n}\n\n@media print{\n  .image[_ngcontent-%COMP%] {\n    width: 261px;\n    height: 261px;\n    object-fit: contain;\n    border: 1px solid white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rYXRhbG9nL2thdGFsb2ctc2FtbWVsc3R1ZWNrL2thdGFsb2ctc2FtbWVsc3R1ZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QixxREFBcUQ7QUFDckQseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUo7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFHQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQztBQUdBLG1DQUFtQztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2thdGFsb2cva2F0YWxvZy1zYW1tZWxzdHVlY2sva2F0YWxvZy1zYW1tZWxzdHVlY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGZvbnQtZmFjZSB7Ki9cbi8qICBmb250LWZhbWlseTogXCJSb2traXR0XCI7Ki9cbi8qICBzcmM6IHVybChcIi4vZm9udHMvUm9ra2l0dC9Sb2traXR0LVJlZ3VsYXIudHRmXCIpOyovXG4vKiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsqL1xuLyogIGZvbnQtc3R5bGU6IG5vcm1hbDsqL1xuLyp9Ki9cblxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuXG4ucGllY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXRhbG9ndWUtZ3JpZC1jb250YWluZXItb3V0c2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uY2F0YWxvZ3VlLWdyaWQtY29udGFpbmVyLWluc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5uYW1lLWltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYW1lLWltYWdlLWNvbnRhaW5lciAucGllY2UtbmFtZSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbn1cblxuLmNhdGFsb2d1ZS1ncmlkLWNvbnRhaW5lci1pbnNpZGUgIC5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOnJnYigzMywgMTksIDQpO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMXZ3O1xufVxuXG4uaW1hZ2V7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzMywgMTksIDQpO1xufVxuXG5cbi8qVmVyw6RuZGVydW5nZW4gYW0gQmlsZCBiZWltIERydWNrKi9cbkBtZWRpYSBwcmludHtcbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMjYxcHg7XG4gICAgaGVpZ2h0OiAyNjFweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KatalogSammelstueckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-katalog-sammelstueck',
                templateUrl: './katalog-sammelstueck.component.html',
                styleUrls: ['./katalog-sammelstueck.component.css']
            }]
    }], function () { return []; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/katalog/katalog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/katalog/katalog.component.ts ***!
  \*********************************************************/
/*! exports provided: KatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatalogComponent", function() { return KatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _katalog_sammelstueck_katalog_sammelstueck_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./katalog-sammelstueck/katalog-sammelstueck.component */ "./src/app/components/katalog/katalog-sammelstueck/katalog-sammelstueck.component.ts");







function KatalogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-katalog-sammelstueck", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sammelStueck_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sammelstueck", sammelStueck_r1);
} }
class KatalogComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.constant = '-Sammlung';
        this.sammelstuecke = [];
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.collectionID = urlChunks[urlChunks.length - 1];
        //gets the collectionID from the path
        this.loadSammelstuecke();
        this.loadSammlung();
    }
    loadSammelstuecke() {
        //gets all pieces from this collection and loads them on the page
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/Sammelstuecke/" + this.collectionID;
        this.http.get(url).subscribe((data) => {
            this.sammelstuecke = data;
        });
    }
    loadSammlung() {
        //gets the collection data and saves it
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlung/' + this.collectionID).subscribe((data) => {
            this.sammlungsname = data[0].collectionName;
            this.besitzername = data[0].collectorsName;
            this.headline = this.sammlungsname + "-Sammlung";
            this.headline2 = "von " + this.besitzername;
        });
    }
    navigateBack() {
        //navigates back to the collection
        this.router.navigateByUrl("/sammlung/" + this.collectionID);
    }
    print() {
        //enables the user to download this page
        window.print();
    }
}
KatalogComponent.ɵfac = function KatalogComponent_Factory(t) { return new (t || KatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
KatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KatalogComponent, selectors: [["app-katalog"]], inputs: { sammelstueck: "sammelstueck" }, decls: 11, vars: 3, consts: [[1, "buttons"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "button", "print-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "catalogue-grid-container-outside"], [4, "ngFor", "ngForOf"], [3, "sammelstueck"]], template: function KatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KatalogComponent_Template_span_click_5_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KatalogComponent_Template_button_click_7_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KatalogComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sammelstuecke);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _katalog_sammelstueck_katalog_sammelstueck_component__WEBPACK_IMPORTED_MODULE_5__["KatalogSammelstueckComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  background: rgb(245,245,220);\n}\nh1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 70px;\n  font-family: \"Bookman Old Style\";\n}\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\nbody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1vw;\n}\ncontent[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100vw;\n}\n.button.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n}\n.print-button[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left : 32px;\n  z-index: 0;\n}\n.catalogue-grid-container-outside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  padding-top: 40px;\n  padding-left: 20vw;\n}\n\n@media print {\n  .print-button[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n\n@media print{\n    .back[_ngcontent-%COMP%] {\n      visibility: hidden;\n    }\n}\n\n@media print{\n  h1[_ngcontent-%COMP%] {\n    padding-top: 0.82em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rYXRhbG9nL2thdGFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCLHFEQUFxRDtBQUNyRCx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSjtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFHQTtFQUNFLFlBQVk7QUFDZDtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztBQUNUO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQSxtQ0FBbUM7QUFDbkM7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0UsbUNBQW1DO0FBQ25DO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7QUFDSjtBQUVBLDhDQUE4QztBQUM5QztFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2thdGFsb2cva2F0YWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAZm9udC1mYWNlIHsqL1xuLyogIGZvbnQtZmFtaWx5OiBcIlJva2tpdHRcIjsqL1xuLyogIHNyYzogdXJsKFwiLi9mb250cy9Sb2traXR0L1Jva2tpdHQtUmVndWxhci50dGZcIik7Ki9cbi8qICBmb250LXdlaWdodDogbm9ybWFsOyovXG4vKiAgZm9udC1zdHlsZTogbm9ybWFsOyovXG4vKn0qL1xuXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LDI0NSwyMjApO1xufVxuXG5oMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTh2dztcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LWZhbWlseTogXCJCb29rbWFuIE9sZCBTdHlsZVwiO1xufVxuXG5oMXtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cblxuYm9keSBkaXYge1xuICBwYWRkaW5nOiAxdnc7XG59XG5cblxuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuXG4uYnV0dG9uLmJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ucHJpbnQtYnV0dG9ue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0IDogMzJweDtcbiAgei1pbmRleDogMDtcbn1cblxuLmNhdGFsb2d1ZS1ncmlkLWNvbnRhaW5lci1vdXRzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMjB2dztcbn1cbi8qRGVyIEJ1dHRvbiB3aXJkIG5pY2h0IG1pdGdlZHJ1Y2sqL1xuQG1lZGlhIHByaW50IHtcbiAgLnByaW50LWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4gIC8qRGVyIEJ1dHRvbiB3aXJkIG5pY2h0IG1pdGdlZHJ1Y2sqL1xuICBAbWVkaWEgcHJpbnR7XG4gICAgLmJhY2sge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbn1cblxuLypEaWUgw5xiZXJzY2hyaWZ0IHdpcmQgYmVpbSBEcnVja2VuIHZlcsOkbmRlcnQqL1xuQG1lZGlhIHByaW50e1xuICBoMSB7XG4gICAgcGFkZGluZy10b3A6IDAuODJlbTtcbiAgfVxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-katalog',
                templateUrl: './katalog.component.html',
                styleUrls: ['./katalog.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammelstueck-bearbeiten/sammelstueck-bearbeiten.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/sammelstueck-bearbeiten/sammelstueck-bearbeiten.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SammelstueckBearbeitenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammelstueckBearbeitenComponent", function() { return SammelstueckBearbeitenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SammelstueckBearbeitenComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.collectionName = "bittelöschemich";
        this.piecePrice = "bittelöschemich";
        this.sammelstuecke = [];
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.id = urlChunks[urlChunks.length - 1];
        this.collectionID = urlChunks[urlChunks.length - 2];
        //gets pieceID and collectionID from the path
        this.loadSammelstueck();
    }
    loadSammelstueck() {
        //loads the piece into the page
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstueck/' + this.id).subscribe((data) => {
            this.pieceName = data[0].pieceName;
            this.pieceDescription = data[0].pieceDescription;
            this.sammelstueck = data[0];
        });
    }
    navigateBack() {
        //navigates back to the piece page
        this.router.navigateByUrl(`/sammelstueck/${this.collectionID}/${this.id}`);
    }
    deleteSammelstueck() {
        //deletes the piece=
        const sendData = { id: this.id };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/deleteSammelstueck', sendData).subscribe((data) => {
            this.navigateBack();
        });
    }
    editClicked() {
        console.log("edit wurde aufgerufen");
        if (this.pieceName == "" || this.pieceName == undefined) {
            alert("Bitte geben Sie einen Namen für das Sammelstück an");
            //if there is no name in the input it alerts the user to give the piece a name
        }
        else {
            let sendDataDoesExist = { title: this.pieceName, id: this.id, collectionID: this.collectionID };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/doesSammelstueckExist', sendDataDoesExist).subscribe((data) => {
                //checks if piece already exists in the collection
                const doesExist = data.doesExist;
                if (doesExist) {
                    if (confirm(`Es gibt bereits ein Sammelstück mit Namen "${this.pieceName}" in der Sammlung. Möchten Sie ein gleichnamiges Sammelstück erstellen?`)) {
                        //if a piece of the same name exists in this collection, asks user to confirm if they are sure they want to have two with the same name
                        if (this.pieceDescription == undefined) {
                            this.pieceDescription = "";
                            //if there is no description input description does not become undefined but empty instead
                        }
                        const sendData = { id: this.id, pieceName: this.pieceName, pieceDescription: this.pieceDescription, imagePath: this.sammelstueck.pieceImagePath };
                        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/updateSammelstueck', sendData).subscribe((data) => {
                            //updates the piece to the input data and navigates back to the piece page
                            this.navigateBack();
                        });
                    }
                }
                else {
                    if (this.pieceDescription == undefined) {
                        this.pieceDescription = "";
                        //if there is no description input description does not become undefined but empty instead
                    }
                    const formData = new FormData();
                    formData.append('file', this.file);
                    formData.append('pieceID', `${this.id}`);
                    formData.append('pieceTitle', `${this.pieceName}`);
                    formData.append('pieceDescription', `${this.pieceDescription}`);
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/updateSammelstueck', formData).subscribe((data) => {
                        //updates the piece to the input data and navigates back to the piece page
                        this.navigateBack();
                    });
                }
            });
        }
    }
    getImageURL() {
        //gets the image path
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl}/${this.sammelstueck.pieceImagePath}`;
    }
    onFileSelect($event) {
        var _a, _b;
        //if a new picture has been selected it uploads this and saves it
        // @ts-ignore
        if (((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            // @ts-ignore
            this.file = event.target.files[0];
            this.sammelstueck.pieceImagePath = this.file.name;
        }
    }
}
SammelstueckBearbeitenComponent.ɵfac = function SammelstueckBearbeitenComponent_Factory(t) { return new (t || SammelstueckBearbeitenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammelstueckBearbeitenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammelstueckBearbeitenComponent, selectors: [["app-sammelstueck-bearbeiten"]], inputs: { sammelstueck: "sammelstueck" }, decls: 20, vars: 3, consts: [["id", "headline"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], ["id", "input-fields"], ["id", "content"], ["type", "text", "name", "name-des-stuecks", 1, "name-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "beschreibung-des-stuecks", "id", "desc", 1, "description-input", 3, "ngModel", "ngModelChange"], ["height", "220", 1, "image", 3, "src"], ["type", "file", "name", "bild-des-stuecks", 1, "bild-input", 3, "change"], [1, "button", "edit", 3, "click"], [1, "fas", "fa-edit"]], template: function SammelstueckBearbeitenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sammelst\u00FCck bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckBearbeitenComponent_Template_span_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name des Sammelst\u00FCcks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammelstueckBearbeitenComponent_Template_input_ngModelChange_10_listener($event) { return ctx.pieceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Beschreibung des Sammelst\u00FCcks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammelstueckBearbeitenComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.pieceDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bild vom Sammelst\u00FCck (optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SammelstueckBearbeitenComponent_Template_input_change_17_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckBearbeitenComponent_Template_span_click_18_listener() { return ctx.editClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pieceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pieceDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImageURL(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding-right: 200px;\n  background-color: beige;\n  margin: 0 auto;\n  hyphens: auto;\n  margin-top: 5px;\n}\n\n#input-fields[_ngcontent-%COMP%]{\n    padding-top: 5vw;\n    position: absolute;\n    display: flex;\n    align-items: left;\n    justify-self: center;\n    margin-left: 18vw;\n    flex-direction: column;\n}\n\n.beschreibung-input[_ngcontent-%COMP%]{\n  height: 300px;\n  width: 600px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0 1vw;\n  top: 0px;\n  z-index: 0;\n}\n\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n.button.edit[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  margin-top: 8px;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2stYmVhcmJlaXRlbi9zYW1tZWxzdHVlY2stYmVhcmJlaXRlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBR0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2stYmVhcmJlaXRlbi9zYW1tZWxzdHVlY2stYmVhcmJlaXRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgcGFkZGluZy1yaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaHlwaGVuczogYXV0bztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4jaW5wdXQtZmllbGRze1xuICAgIHBhZGRpbmctdG9wOiA1dnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDE4dnc7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJlc2NocmVpYnVuZy1pbnB1dHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTh2dztcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwIDF2dztcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDA7XG59XG5cblxuLmJ1dHRvbi5iYWNrIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTs7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5idXR0b24uZWRpdHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTs7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5oMXtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammelstueckBearbeitenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammelstueck-bearbeiten',
                templateUrl: './sammelstueck-bearbeiten.component.html',
                styleUrls: ['./sammelstueck-bearbeiten.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammelstueck-hinzufuegen/sammelstueck-hinzufuegen.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/sammelstueck-hinzufuegen/sammelstueck-hinzufuegen.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SammelstueckHinzufuegenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammelstueckHinzufuegenComponent", function() { return SammelstueckHinzufuegenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SammelstueckHinzufuegenComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sammelstuecke = [];
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.collectionID = urlChunks[urlChunks.length - 1];
        //gets the collectionID from the path and saves it
        this.loadSammlung();
    }
    navigateBack() {
        //navigates back to the collection page
        this.router.navigateByUrl('/sammlung/' + this.collectionID);
    }
    titleChanged($event) {
        //title was changed
    }
    loadSammlung() {
        //gets the collection and loads its data into the headline
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlung/' + this.collectionID).subscribe((data) => {
            this.collectionName = data[0].collectionName;
            this.nameInHeadline = "Sammelstück zur " + this.collectionName + "-Sammlung hinzufügen";
        });
    }
    addclicked() {
        if (this.pieceTitle == "" || this.pieceTitle == undefined) {
            alert("Bitte geben Sie einen Namen für das Sammelstück an");
            //alerts the user if there is no title input and asks them to input one
        }
        else {
            if (this.pieceDescription == undefined) {
                this.pieceDescription = "";
                //if there is no description input description does not become undefined but empty instead
            }
            let sendDataDoesExist = { title: this.pieceTitle, id: this.pieceID, collectionID: this.collectionID };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/doesSammelstueckExist', sendDataDoesExist).subscribe((data) => {
                const doesExist = data.doesExist;
                //checks if a piece with this name and id already exists in this collection
                if (doesExist) {
                    if (confirm(`Es existiert bereits ein Sammelstück mit Namen "${this.pieceTitle}" in der Sammlung. Möchten Sie ein gleichnamiges Sammelstück erstellen?`)) {
                        //if the same piece already exists asks the user if they really want to create it again
                        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstuecke').subscribe((data) => {
                            this.sammelstuecke = data;
                            this.numOfSammelstuecke = this.sammelstuecke.length;
                            this.getID(data);
                            const formData = new FormData();
                            formData.append('file', this.file);
                            formData.append('pieceID', `${this.pieceID}`);
                            formData.append('pieceTitle', `${this.pieceTitle}`);
                            formData.append('pieceDescription', `${this.pieceDescription}`);
                            formData.append('collection', `${this.collectionID}`);
                            debugger;
                            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstuecke', formData).subscribe((data) => {
                                //sends all the files to the database and creates the piece
                                this.navigateBack();
                                //navigates back to the collection page
                            });
                        });
                    }
                }
                else {
                    this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstuecke').subscribe((data) => {
                        //gets all the pieces in the database
                        this.sammelstuecke = data;
                        this.numOfSammelstuecke = this.sammelstuecke.length;
                        this.getID(data);
                        //creates an ID for the piece
                        const formData = new FormData();
                        formData.append('file', this.file);
                        formData.append('pieceID', `${this.pieceID}`);
                        formData.append('pieceTitle', `${this.pieceTitle}`);
                        formData.append('pieceDescription', `${this.pieceDescription}`);
                        formData.append('collection', `${this.collectionID}`);
                        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstuecke', formData).subscribe((data) => {
                            //sends all the files to the database and creates the piece
                            this.navigateBack();
                            //navigates back to the collection page
                        });
                    });
                }
            });
        }
    }
    getID(sammelstuecke) {
        //creates a new piece id
        this.highestID = 0;
        for (let i = 0; i < sammelstuecke.length; i++) {
            if (sammelstuecke[i].id > this.highestID) {
                this.highestID = sammelstuecke[i].id;
                //looks for the highest ID in the piece table
            }
        }
        this.pieceID = this.highestID + 1;
        //gives the piece an ID that is one higher than the highest existing one
    }
    copyPieceFromCollection() {
        //navigates to the copy piece into this collection page
        this.router.navigateByUrl('/sammelstueckkopieren/' + this.collectionID);
    }
    onFileSelect($event) {
        var _a, _b;
        //if a new picture has been selected it uploads this and saves it
        // @ts-ignore
        if (((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            // @ts-ignore
            this.file = event.target.files[0];
            console.log(this.file);
        }
    }
}
SammelstueckHinzufuegenComponent.ɵfac = function SammelstueckHinzufuegenComponent_Factory(t) { return new (t || SammelstueckHinzufuegenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammelstueckHinzufuegenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammelstueckHinzufuegenComponent, selectors: [["app-sammelstueck-hinzufuegen"]], decls: 23, vars: 3, consts: [["id", "headline"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], ["id", "input-fields", 1, "container"], ["id", "content", 1, "container"], ["type", "text", "name", "name-des-stuecks", "id", "title", 1, "name-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "beschreibung-des-stuecks", "id", "desc", 1, "beschreibung-input", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "bild-des-stuecks", 1, "bild-input", 3, "change"], ["id", "buttons"], [1, "button", "add", 3, "click"], [1, "fas", "fa-plus"], [1, "button", "copy", 3, "click"]], template: function SammelstueckHinzufuegenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckHinzufuegenComponent_Template_span_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name des Sammelst\u00FCcks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammelstueckHinzufuegenComponent_Template_input_ngModelChange_9_listener($event) { return ctx.pieceTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Beschreibung des Sammelst\u00FCcks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammelstueckHinzufuegenComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.pieceDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " <");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bild vom Sammelst\u00FCck (optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SammelstueckHinzufuegenComponent_Template_input_change_16_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckHinzufuegenComponent_Template_span_click_18_listener() { return ctx.addclicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckHinzufuegenComponent_Template_span_click_20_listener() { return ctx.copyPieceFromCollection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Existierendes Sammelst\u00FCck importieren...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameInHeadline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pieceTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pieceDescription);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 0vw;\n  margin: 0 auto;\n  hyphens: auto;\n}\n\n.beschreibung-input[_ngcontent-%COMP%]{\n  height: 300px;\n  width: 600px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  width: 98vw;\n  height: 50px;\n  padding: 0vw;\n  margin-left: 10vw;;\n  z-index: 0;\n  top: 0px;\n}\n\n#headline[_ngcontent-%COMP%]{\n  margin-top: 0vw;\n}\n\n#content[_ngcontent-%COMP%]{\n  padding-top: 5vw;\n  color: rgb(53, 39, 24);\n}\n\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n#input-fields[_ngcontent-%COMP%]{\n  height: 30px;\n  position: absolute;\n  display: flex;\n  align-items: left;\n  justify-self: center;\n  padding-left: 10vw;\n  flex-direction: column;\n}\n\n.button.add[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n}\n\n#buttons[_ngcontent-%COMP%]{\n  padding-top: 1vw;\n}\n\n.button.copy[_ngcontent-%COMP%]{\n  margin-left: 5px;\n  display: inline-block;\n  width: 250px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2staGluenVmdWVnZW4vc2FtbWVsc3R1ZWNrLWhpbnp1ZnVlZ2VuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2staGluenVmdWVnZW4vc2FtbWVsc3R1ZWNrLWhpbnp1ZnVlZ2VuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMHZ3O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLmJlc2NocmVpYnVuZy1pbnB1dHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5OHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDB2dztcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7O1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDBweDtcbn1cblxuI2hlYWRsaW5le1xuICBtYXJnaW4tdG9wOiAwdnc7XG59XG5cbiNjb250ZW50e1xuICBwYWRkaW5nLXRvcDogNXZ3O1xuICBjb2xvcjogcmdiKDUzLCAzOSwgMjQpO1xufVxuXG4uYnV0dG9uLmJhY2sge1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpOztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2lucHV0LWZpZWxkc3tcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9uLmFkZHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTs7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2J1dHRvbnN7XG4gIHBhZGRpbmctdG9wOiAxdnc7XG59XG5cbi5idXR0b24uY29weXtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxe1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammelstueckHinzufuegenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammelstueck-hinzufuegen',
                templateUrl: './sammelstueck-hinzufuegen.component.html',
                styleUrls: ['./sammelstueck-hinzufuegen.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren-sammelstueck/sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren-sammelstueck/sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent", function() { return SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sammelstuecke = [];
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.collectionID = urlChunks[urlChunks.length - 1];
        console.log(this.collectionID);
        this.pieceDescription = this.sammelstueck.pieceDescription;
        this.pieceName = this.sammelstueck.pieceName;
        this.picturePath = this.sammelstueck.pieceImagePath;
        this.pieceID = this.sammelstueck.id;
    }
    getImageURL() {
        // console.log(this.sammelstueck.pieceImage);
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl}/${this.sammelstueck.pieceImagePath}`;
    }
    choseThis() {
        let sendDataDoesExist = { title: this.pieceName, id: this.pieceID, collectionID: this.collectionID };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/doesSammelstueckExist', sendDataDoesExist).subscribe((data) => {
            const doesExist = data.doesExist;
            if (doesExist) {
                if (confirm(`Es existiert bereits ein Sammelstück mit Namen "${this.pieceName}" in der Sammlung. Möchten Sie es trotzdem importieren?`)) {
                    const sendData = { pieceID: this.pieceID, collectionID: this.collectionID };
                    console.log(sendData);
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstueckkopieren', sendData).subscribe((data) => {
                        location.reload();
                    });
                    this.navigateBack();
                }
            }
            else {
                if (confirm(`Möchten Sie das Sammelstück "${this.sammelstueck.pieceName}" wirklich zur Sammlung hinzufügen?`)) {
                    const sendData = { pieceID: this.pieceID, collectionID: this.collectionID };
                    console.log(sendData);
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammelstueckkopieren', sendData).subscribe((data) => {
                        location.reload();
                    });
                    this.navigateBack();
                }
            }
        });
    }
    navigateBack() {
        this.router.navigateByUrl('/sammlung/' + this.collectionID);
    }
    getID(sammelstuecke) {
        this.highestID = 0;
        for (let i = 0; i < sammelstuecke.length; i++) {
            if (sammelstuecke[i].id > this.highestID) {
                this.highestID = sammelstuecke[i].id;
            }
        }
        //console.log(this.highestID);
        this.pieceID = this.highestID + 1;
    }
}
SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent.ɵfac = function SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent_Factory(t) { return new (t || SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent, selectors: [["app-sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk"]], inputs: { sammelstueck: "sammelstueck" }, decls: 10, vars: 3, consts: [[1, "pieces", 3, "click"], [1, "catalogue-grid-container-inside"], [1, "name-image-container"], [1, "piece-name"], ["width", "300", 1, "image", 3, "src"], [1, "description"]], template: function SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent_Template_ul_click_1_listener() { return ctx.choseThis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sammelstueck.pieceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImageURL(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sammelstueck.pieceDescription);
    } }, styles: ["html[_ngcontent-%COMP%] {\n    margin: 0;\n  }\nbody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 1vw;\n  }\n.pieces[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: space-around;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    white-space: nowrap;\n  }\n.catalogue-grid-container-inside[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n.name-image-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding-left: 5vw;\n    padding-bottom: 1vw;\n  }\n.piece-name[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 20px;\n    line-height: 50px;\n    color: rgb(33, 19, 4);\n  }\n.description[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 15px;\n    line-height: 50px;\n    color:rgb(33, 19, 4);\n    margin-top: 35px;\n    margin-left: 1vw;\n  }\n.image[_ngcontent-%COMP%] {\n      object-fit: contain;\n      border: 1px solid rgb(33, 19, 4)\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2sta29waWVyZW4vc2FtbWVsc3R1ZWNrLWtvcGllcmVuLXNhbW1lbHN0dWVjay9zYW1tZWxzdHVlY2stenUtd2VpdGVyZXItc2FtbWx1bmctaHpmZy1hdXN3YWhsbW9lZ2xpY2hrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QixxREFBcUQ7QUFDckQseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUo7SUFDSSxTQUFTO0VBQ1g7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjtBQUdBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBRUE7TUFDSSxtQkFBbUI7TUFDbkI7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FtbWVsc3R1ZWNrLWtvcGllcmVuL3NhbW1lbHN0dWVjay1rb3BpZXJlbi1zYW1tZWxzdHVlY2svc2FtbWVsc3R1ZWNrLXp1LXdlaXRlcmVyLXNhbW1sdW5nLWh6ZmctYXVzd2FobG1vZWdsaWNoay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAZm9udC1mYWNlIHsqL1xuLyogIGZvbnQtZmFtaWx5OiBcIlJva2tpdHRcIjsqL1xuLyogIHNyYzogdXJsKFwiLi9mb250cy9Sb2traXR0L1Jva2tpdHQtUmVndWxhci50dGZcIik7Ki9cbi8qICBmb250LXdlaWdodDogbm9ybWFsOyovXG4vKiAgZm9udC1zdHlsZTogbm9ybWFsOyovXG4vKn0qL1xuXG5odG1sIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIGJvZHkgZGl2IHtcbiAgICBwYWRkaW5nOiAxdnc7XG4gIH1cblxuICAucGllY2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIFxuICBcbiAgLmNhdGFsb2d1ZS1ncmlkLWNvbnRhaW5lci1pbnNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICBcbiAgLm5hbWUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XG4gICAgcGFkZGluZy1ib3R0b206IDF2dztcbiAgfVxuICBcbiAgLnBpZWNlLW5hbWUge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgfVxuICBcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjpyZ2IoMzMsIDE5LCA0KTtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIH1cbiAgXG4gIC5pbWFnZSB7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDMzLCAxOSwgNClcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk',
                templateUrl: './sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component.html',
                styleUrls: ['./sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SammelstueckKopierenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammelstueckKopierenComponent", function() { return SammelstueckKopierenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sammelstueck_kopieren_sammelstueck_sammelstueck_zu_weiterer_sammlung_hzfg_auswahlmoeglichk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sammelstueck-kopieren-sammelstueck/sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component */ "./src/app/components/sammelstueck-kopieren/sammelstueck-kopieren-sammelstueck/sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk.component.ts");









function SammelstueckKopierenComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sammelstueck-zu-weiterer-sammlung-hzfg-auswahlmoeglichk", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sammelStueck_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sammelstueck", sammelStueck_r9);
} }
class SammelstueckKopierenComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sammelstuecke = [];
        this.sammelstueckeOfOwnCollection = [];
        this.resultsammelstuecke = [];
        this.constant = '-Sammlung';
        this.userInputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredSammelstuecke = [];
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.collectionID = urlChunks[urlChunks.length - 1];
        //gets the collection id from the path
        this.loadSammelstuecke();
        this.loadSammlung();
        this.userInputFormControl.valueChanges.subscribe(searchText => {
            this.filteredSammelstuecke = this.resultsammelstuecke.filter(sammelstueck => {
                //search the shown pieces for a name that matches the input without regarding capitalisation
                return sammelstueck.pieceName.toLowerCase().includes(searchText.toLowerCase());
            });
        });
    }
    loadSammelstuecke() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/OtherSammelstuecke/' + this.collectionID).subscribe((data) => {
            this.sammelstuecke = data;
            //gets all the pieces in the database
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/Sammelstuecke/' + this.collectionID).subscribe((data) => {
                this.sammelstueckeOfOwnCollection = data;
                //gets all the pieces in the collection
                for (let i = 0; i < this.sammelstuecke.length; i++) {
                    if (!this.testIfItExistsInThisCollection(this.sammelstuecke[i])) {
                        this.resultsammelstuecke.push(this.sammelstuecke[i]);
                        //checks for all pieces in the database if they are in the collection and if not adds them to the array
                    }
                }
                this.filteredSammelstuecke = this.resultsammelstuecke;
                //filteredSammelstuecke contains all pieces that are not in the collection
                //page loads filteredSammelstuecke
            });
        });
    }
    testIfItExistsInThisCollection(sammelstueck) {
        //checks for one piece if it matches each piece in the collection
        for (let i = 0; i < this.sammelstueckeOfOwnCollection.length; i++) {
            if (sammelstueck.id == this.sammelstueckeOfOwnCollection[i].id) {
                //if both pieces have the same id, it returns that this piece is in the collection
                return true;
            }
        }
        return false;
        //if it didn't match any pieces it returns false
    }
    loadSammlung() {
        //gets the collection data for this collection and loads the name of the collection into the header
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + '/Sammlung/' + this.collectionID).subscribe((data) => {
            this.sammlungsname = data[0].collectionName;
            console.log(this.sammlungsname);
            this.headline = 'Bitte wählen Sie ein Sammelstück aus, das Sie zur ' + this.sammlungsname + "-Sammlung " + ' hinzufügen möchten';
        });
    }
    navigateBack() {
        //navigates back to the add-a-piece-page
        this.router.navigateByUrl('/hinzufuegen/' + this.collectionID);
    }
}
SammelstueckKopierenComponent.ɵfac = function SammelstueckKopierenComponent_Factory(t) { return new (t || SammelstueckKopierenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SammelstueckKopierenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammelstueckKopierenComponent, selectors: [["app-sammelstueck-kopieren"]], inputs: { sammelstueck: "sammelstueck" }, decls: 8, vars: 3, consts: [["type", "text", "placeholder", "Suche..", 1, "search", 3, "formControl"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "catalogue-grid-container-outside"], [4, "ngFor", "ngForOf"], [3, "sammelstueck"]], template: function SammelstueckKopierenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckKopierenComponent_Template_span_click_4_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SammelstueckKopierenComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userInputFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredSammelstuecke);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _sammelstueck_kopieren_sammelstueck_sammelstueck_zu_weiterer_sammlung_hzfg_auswahlmoeglichk_component__WEBPACK_IMPORTED_MODULE_6__["SammelstueckZuWeitererSammlungHzfgAuswahlmoeglichkComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.search[_ngcontent-%COMP%]{\n  margin-left: 2em;\n  margin-top: 1em;\n  height: 20px;\n}\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  width: 87vw;\n  padding: 0vw;\n  margin-left: 10vw;;\n  z-index: 0;\n  top: 0;\n}\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nbody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1vw;\n}\n.print-button[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: -1vw;\n}\n.catalogue-grid-container-outside[_ngcontent-%COMP%] {\n  margin-top: 5em;\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  padding-top: 40px;\n}\n\n@media print{\n  .print-button[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2sta29waWVyZW4vc2FtbWVsc3R1ZWNrLWtvcGllcmVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QixxREFBcUQ7QUFDckQseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUo7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixNQUFNO0FBQ1I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBLG1DQUFtQztBQUNuQztFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NhbW1lbHN0dWVjay1rb3BpZXJlbi9zYW1tZWxzdHVlY2sta29waWVyZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGZvbnQtZmFjZSB7Ki9cbi8qICBmb250LWZhbWlseTogXCJSb2traXR0XCI7Ki9cbi8qICBzcmM6IHVybChcIi4vZm9udHMvUm9ra2l0dC9Sb2traXR0LVJlZ3VsYXIudHRmXCIpOyovXG4vKiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsqL1xuLyogIGZvbnQtc3R5bGU6IG5vcm1hbDsqL1xuLyp9Ki9cblxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWFyY2h7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4N3Z3O1xuICBwYWRkaW5nOiAwdnc7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3OztcbiAgei1pbmRleDogMDtcbiAgdG9wOiAwO1xufVxuXG5oMXtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5idXR0b24uYmFjayB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5ib2R5IGRpdiB7XG4gIHBhZGRpbmc6IDF2dztcbn1cblxuLnByaW50LWJ1dHRvbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xdnc7XG59XG5cbi5jYXRhbG9ndWUtZ3JpZC1jb250YWluZXItb3V0c2lkZSB7XG4gIG1hcmdpbi10b3A6IDVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4vKkRlciBCdXR0b24gd2lyZCBuaWNodCBtaXRnZWRydWNrKi9cbkBtZWRpYSBwcmludHtcbiAgLnByaW50LWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammelstueckKopierenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammelstueck-kopieren',
                templateUrl: './sammelstueck-kopieren.component.html',
                styleUrls: ['./sammelstueck-kopieren.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammelstueck/sammelstueck.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sammelstueck/sammelstueck.component.ts ***!
  \*******************************************************************/
/*! exports provided: SammelstueckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammelstueckComponent", function() { return SammelstueckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SammelstueckComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.id = urlChunks[urlChunks.length - 1];
        this.collectionID = urlChunks[urlChunks.length - 2];
        //gets the collectionID and the pieceID from the path
        this.loadSammelstueck();
    }
    loadSammelstueck() {
        //loads the piece into the frame
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/sammelstueck/' + this.id;
        this.http.get(url).subscribe((data) => {
            this.nameOfCollectionPiece = data[0].pieceName;
            this.descriptionOfCollectionPiece = data[0].pieceDescription;
            this.sammelstueck = data[0];
        });
    }
    navigateBack() {
        //navigates back to the collection
        console.log("navigateBack wird ausgeführt");
        this.router.navigateByUrl('/sammlung/' + this.collectionID);
    }
    navigateTosammelstueckbearbeiten() {
        //navigates to the edit page of this piece
        console.log("navigateTosammelstueckbearbeiten wird ausgeführt");
        this.router.navigateByUrl(`/sammelstueckbearbeiten/${this.collectionID}/${this.id}`);
    }
    getImageURL() {
        //returns image path
        console.log(this.sammelstueck);
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl}/${this.sammelstueck.pieceImagePath}`;
    }
    deleteSammelstueck() {
        console.log("deleteSammelstueck wird ausgeführt");
        //asks if the user really means to delete this piece
        if (confirm(`Möchten Sie das Sammelstück "${this.sammelstueck.pieceName}" wirklich aus der Sammlung entfernen? Vollständig gelöschte Sammelstücke können nicht wieder hergestellt werden`)) {
            const sendData = { id: this.id, collectionID: this.collectionID };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/deleteSammelstueck', sendData).subscribe((data) => {
                //deletes the piece in this collection from the database
                console.log("DELETED");
            });
            this.navigateBack();
            //navigates back to the sammlung page
        }
    }
}
SammelstueckComponent.ɵfac = function SammelstueckComponent_Factory(t) { return new (t || SammelstueckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammelstueckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammelstueckComponent, selectors: [["app-sammelstueck"]], inputs: { sammelstueck: "sammelstueck" }, decls: 18, vars: 3, consts: [["id", "name"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], ["id", "content"], [1, "container"], ["id", "description"], [1, "image-responsive-maker"], ["height", "", "width", "220", 1, "image", 3, "src"], [1, "button", "edit", 3, "click"], [1, "fas", "fa-edit"], [1, "button", "delete", 3, "click"], [1, "far", "fa-trash-alt"]], template: function SammelstueckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckComponent_Template_span_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckComponent_Template_span_click_14_listener() { return ctx.navigateTosammelstueckbearbeiten(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammelstueckComponent_Template_span_click_16_listener() { return ctx.deleteSammelstueck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameOfCollectionPiece);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.descriptionOfCollectionPiece);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImageURL(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding-right: 200px;\n  background-color: beige;\n  margin-top: 5px;\n  hyphens: auto;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.button.delete[_ngcontent-%COMP%]{\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\n.button.edit[_ngcontent-%COMP%]{\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\n.button.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 0; \n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0 1vw;\n  top: 0px;\n  z-index: 0;\n}\n\n#content[_ngcontent-%COMP%]{\n  padding-top: 3em;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n\n.image-responsive-maker[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width:100%;\n  padding-top: 30px;\n  display:block;\n}\n\n.description[_ngcontent-%COMP%]{\n  z-index: 10;\n  text-align: justify;\n  font-size: 15px;\n  line-height: 50px;\n  color:rgb(33, 19, 4);\n  margin-top: 35px;\n  margin-left: 1vw;\n}\n\n.container[_ngcontent-%COMP%]{\n  padding-left: 200px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tZWxzdHVlY2svc2FtbWVsc3R1ZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NhbW1lbHN0dWVjay9zYW1tZWxzdHVlY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24uZGVsZXRle1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5idXR0b24uZWRpdHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYnV0dG9uLmJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDA7IFxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDk4dnc7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxdnc7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAwO1xufVxuXG4jY29udGVudHtcbiAgcGFkZGluZy10b3A6IDNlbTtcbn1cblxuaDF7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5cbi5pbWFnZS1yZXNwb25zaXZlLW1ha2VyIGltZ3tcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgei1pbmRleDogMTA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOnJnYigzMywgMTksIDQpO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMXZ3O1xufVxuXG4uY29udGFpbmVye1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDEuNWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammelstueckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammelstueck',
                templateUrl: './sammelstueck.component.html',
                styleUrls: ['./sammelstueck.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammlung-anlegen/sammlung-anlegen.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sammlung-anlegen/sammlung-anlegen.component.ts ***!
  \***************************************************************************/
/*! exports provided: SammlungAnlegenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammlungAnlegenComponent", function() { return SammlungAnlegenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SammlungAnlegenComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
    }
    navigateBack() {
        this.router.navigateByUrl('');
        //navigates back to the collections page
    }
    titleChanged($event) {
        //title changed
    }
    addClicked() {
        if (this.collectionName == "" || this.collectionName == undefined) {
            alert("Bitte geben Sie einen Namen der Sammlung an");
            //alerts the user if there is no name input and asks them to input one
        }
        else if (this.collectorsName == "" || this.collectorsName == undefined) {
            alert("Bitte geben Sie einen Besitzer der Sammlung an");
            //alerts the user if there is no owner input and asks them to input one
        }
        else {
            let sendDataDoesExist = { title: this.collectionName, id: this.sammlungID };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/doesSammlungExist', sendDataDoesExist).subscribe((data) => {
                const doesExist = data.doesExist;
                //checks if there already is a collection with this data
                if (doesExist) {
                    if (confirm(`Es gibt bereits eine Sammlung mit Namen "${this.collectionName}". Möchten Sie eine gleichnamige Sammlung erstellen?`)) {
                        //if collection already exists asks user if they want to create it again
                        const sendData = { collectionName: this.collectionName, collectorsName: this.collectorsName };
                        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlungen', sendData).subscribe((data) => {
                            this.navigateBack();
                            //creates a new collection in database and navigates back to the collections page
                        });
                    }
                }
                else {
                    const sendData = { collectionName: this.collectionName, collectorsName: this.collectorsName };
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlungen', sendData).subscribe((data) => {
                        this.navigateBack();
                        //creates a new collection in database and navigates back to the collections page
                    });
                }
            });
        }
    }
}
SammlungAnlegenComponent.ɵfac = function SammlungAnlegenComponent_Factory(t) { return new (t || SammlungAnlegenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammlungAnlegenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammlungAnlegenComponent, selectors: [["app-sammlung-anlegen"]], decls: 15, vars: 2, consts: [["id", "headline"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], ["id", "input-fields", 1, "container"], ["id", "content"], ["type", "text", "name", "name-der-sammlung", "id", "collectionName", 1, "name-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "besitzer-der-sammlung", "id", "owner", 1, "besitzer-input", 3, "ngModel", "ngModelChange"], [1, "button", "add", 3, "click"], [1, "fas", "fa-plus"]], template: function SammlungAnlegenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Neue Sammlung anlegen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungAnlegenComponent_Template_span_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name der Sammlung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammlungAnlegenComponent_Template_input_ngModelChange_9_listener($event) { return ctx.collectionName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Besitzer der Sammlung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammlungAnlegenComponent_Template_input_ngModelChange_12_listener($event) { return ctx.collectorsName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungAnlegenComponent_Template_span_click_13_listener() { return ctx.addClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.collectionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.collectorsName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-right: 200px;\n  background-color: beige;\n  margin: 0 auto;\n  hyphens: auto;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-self: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0vw;\n  margin-left: 10vw;\n  z-index: 0;\n  top: 0px;\n}\n\n#content[_ngcontent-%COMP%]{\n  padding-top: 3em;\n}\n\n#input-fields[_ngcontent-%COMP%]{\n  position: absolute;\n  display: flex;\n  align-items: left;\n  justify-self: center;\n  margin-left: 18vw;\n  flex-direction: column;\n}\n\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.button.add[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  margin-top: 8px;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy1hbmxlZ2VuL3NhbW1sdW5nLWFubGVnZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NhbW1sdW5nLWFubGVnZW4vc2FtbWx1bmctYW5sZWdlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiA5OHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDB2dztcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogMHB4O1xufVxuXG4jY29udGVudHtcbiAgcGFkZGluZy10b3A6IDNlbTtcbn1cblxuI2lucHV0LWZpZWxkc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxOHZ3O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9uLmJhY2sge1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpOztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmJ1dHRvbi5hZGR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbmgxe1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammlungAnlegenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammlung-anlegen',
                templateUrl: './sammlung-anlegen.component.html',
                styleUrls: ['./sammlung-anlegen.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sammlung-bearbeiten/sammlung-bearbeiten.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sammlung-bearbeiten/sammlung-bearbeiten.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SammlungBearbeitenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammlungBearbeitenComponent", function() { return SammlungBearbeitenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SammlungBearbeitenComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.collectionName = "beispielsammlungsname";
        this.collectorsName = "Beispielbesitzer";
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("#");
        this.id = urlChunks[urlChunks.length - 1];
        //gets the collection id with the path
        this.loadOldEntry();
    }
    navigateBack() {
        this.router.navigateByUrl('');
        //navigates back to the collections page
    }
    editClicked() {
        if (this.collectionName == "" || this.collectionName == undefined) {
            alert("Bitte geben Sie einen Namen der Sammlung an");
            //alerts the user if there is no name input and asks them to input one
        }
        else if (this.collectorsName == "" || this.collectorsName == undefined) {
            alert("Bitte geben Sie einen Besitzer der Sammlung an");
            //alerts the user if there is no owner input and asks them to input one
        }
        else {
            let sendDataDoesExist = { title: this.collectionName, id: this.id };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/doesSammlungExist', sendDataDoesExist).subscribe((data) => {
                const doesExist = data.doesExist;
                //checks if there already is a collection with this data
                if (doesExist) {
                    if (confirm(`Es gibt bereits eine Sammlung mit Namen "${this.collectionName}". Möchten Sie eine gleichnamige Sammlung erstellen?`)) {
                        //if collection already exists asks user if they want to create it again
                        const sendData = { id: this.id, collectionName: this.collectionName, collectorsName: this.collectorsName };
                        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/updateSammlung', sendData).subscribe((data) => {
                        });
                        this.navigateBack();
                        //updates the collection in the database and navigates back to the collections page
                    }
                }
                else {
                    const sendData = { id: this.id, collectionName: this.collectionName, collectorsName: this.collectorsName };
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/updateSammlung', sendData).subscribe((data) => {
                    });
                    this.navigateBack();
                    //updates the collection in the database and navigates back to the collections page
                }
            });
        }
    }
    loadOldEntry() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlung/' + this.id).subscribe((data) => {
            this.collectionName = data[0].collectionName;
            this.collectorsName = data[0].collectorsName;
            //loads the current data of the piece into the input fields so it can be edited
        });
    }
}
SammlungBearbeitenComponent.ɵfac = function SammlungBearbeitenComponent_Factory(t) { return new (t || SammlungBearbeitenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammlungBearbeitenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammlungBearbeitenComponent, selectors: [["app-sammlung-bearbeiten"]], decls: 15, vars: 2, consts: [[1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], ["id", "input-fields"], ["id", "content"], ["type", "text", "name", "name-der-sammlung", "id", "collectionName", 1, "name-input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "besitzer-der-sammlung", "id", "owner", 1, "besitzer-input", 3, "ngModel", "ngModelChange"], [1, "button", "edit", 3, "click"], [1, "fas", "fa-edit"]], template: function SammlungBearbeitenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sammlung bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungBearbeitenComponent_Template_span_click_3_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name der Sammlung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammlungBearbeitenComponent_Template_input_ngModelChange_9_listener($event) { return ctx.collectionName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Besitzer der Sammlung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SammlungBearbeitenComponent_Template_input_ngModelChange_12_listener($event) { return ctx.collectorsName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungBearbeitenComponent_Template_span_click_13_listener() { return ctx.editClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.collectionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.collectorsName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-right: 200px;\n  background-color: beige;\n  margin: 0 auto;\n  hyphens: auto;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-self: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0vw;\n  margin-left: 10vw;\n  z-index: -1;\n  top: 0px;\n}\n\n#input-fields[_ngcontent-%COMP%]{\n    padding-top: 5vw;\n    position: absolute;\n    display: flex;\n    align-items: left;\n    justify-self: center;\n    margin-left: 18vw;\n    flex-direction: column;\n}\n\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.button.edit[_ngcontent-%COMP%]{ \n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  margin-top: 8px;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy1iZWFyYmVpdGVuL3NhbW1sdW5nLWJlYXJiZWl0ZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy1iZWFyYmVpdGVuL3NhbW1sdW5nLWJlYXJiZWl0ZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogOTh2dztcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwdnc7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiAwcHg7XG59XG5cbiNpbnB1dC1maWVsZHN7XG4gICAgcGFkZGluZy10b3A6IDV2dztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTh2dztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9uLmJhY2sge1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpOztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmJ1dHRvbi5lZGl0eyBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTs7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5oMXtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBmb250LXNpemU6IDQwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammlungBearbeitenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammlung-bearbeiten',
                templateUrl: './sammlung-bearbeiten.component.html',
                styleUrls: ['./sammlung-bearbeiten.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sammlung/sammlung-sammelstueck/sammlung-sammelstueck.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/sammlung/sammlung-sammelstueck/sammlung-sammelstueck.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SammlungSammelstueckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammlungSammelstueckComponent", function() { return SammlungSammelstueckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SammlungSammelstueckComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.fallbackImageUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl}/images/defaultPic.jpg`;
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        this.collectionID = urlChunks[urlChunks.length - 1];
        //gets the collection id from the url
    }
    navigateToSammelstueck(id) {
        //navigates to the page of the piece with this id
        this.router.navigateByUrl("/sammelstueck/" + this.collectionID + "/" + id);
    }
    getImageURL() {
        //returns image path
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl}/${this.sammelstueck.pieceImagePath}`;
    }
    navigateBack() {
        //navigates back to the first page
        this.router.navigateByUrl('');
    }
    deleteClicked(id) {
        if (confirm(`Möchten Sie das Sammelstück "${this.sammelstueck.pieceName}" wirklich aus der Sammlung entfernen? Vollständig gelöschte Sammelstücke können nicht wieder hergestellt werden`)) {
            //asks user if they really meant to delete this piece
            const sendData = { id: id, collectionID: this.collectionID };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/deleteSammelstueck', sendData).subscribe((data) => {
                //deletes the piece
            });
            location.reload();
            //reloads th window
        }
    }
}
SammlungSammelstueckComponent.ɵfac = function SammlungSammelstueckComponent_Factory(t) { return new (t || SammlungSammelstueckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammlungSammelstueckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammlungSammelstueckComponent, selectors: [["app-sammlung-sammelstueck"]], inputs: { sammelstueck: "sammelstueck" }, decls: 8, vars: 2, consts: [[1, "pieces"], [1, "catalogue-grid-container-inside"], [1, "name-image-container", 3, "click"], [1, "piece-name"], ["width", "200", "height", "200", "onError", "this.src='assets/defaultPic.jpg'", 1, "image", 3, "src"], [1, "button", "delete", 3, "click"], [1, "far", "fa-trash-alt"]], template: function SammlungSammelstueckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungSammelstueckComponent_Template_div_click_2_listener() { return ctx.navigateToSammelstueck(ctx.sammelstueck.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungSammelstueckComponent_Template_button_click_6_listener() { return ctx.deleteClicked(ctx.sammelstueck.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sammelstueck.pieceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImageURL(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  background: rgb(245,245,220);\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n  color: #000;\n}\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0 1vw;\n  top: 0px;\n\n}\nheader[_ngcontent-%COMP%]   .collection-title[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: center;\n  font-size: 35px;\n  line-height: 50px;\n  color: rgb(139, 69, 19);\n}\nheader[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  align-content: justify;\n  font-size: 35px;\n  line-height: 50px;\n  color: rgb(139, 69, 19);\n}\nheader[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 35px;\n  line-height: 50px;\n  color: rgb(139, 69, 19);\n}\nbody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1vw;\n}\ncontent[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100vw;\n}\n.collection-body[_ngcontent-%COMP%]{\n  flex-direction: row;\n  align-content: center;\n  padding-top: 40px;\n}\n.catalogue-grid-container-outside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  flex: content;\n  padding-top: 40px;\n}\n.catalogue-grid-container-inside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  height: 220px;\n  width: 220px;\n}\n.name-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.name-image-container[_ngcontent-%COMP%]   .piece-name[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 20px;\n  line-height: 50px;\n  color:rgb(33, 19, 4);\n}\n.image[_ngcontent-%COMP%]{\n  object-fit: cover;\n  border: 1px solid rgb(33, 19, 4);\n}\n.button.delete[_ngcontent-%COMP%]{\n  position: absolute;\n  margin-top: 50px;\n  margin-left: 172px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 22px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy9zYW1tbHVuZy1zYW1tZWxzdHVlY2svc2FtbWx1bmctc2FtbWVsc3R1ZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QixxREFBcUQ7QUFDckQseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUo7RUFDRSxTQUFTO0FBQ1g7QUFJQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULDRCQUE0QjtFQUM1QiwrREFBK0Q7RUFDL0QsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsUUFBUTs7QUFFVjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7QUFHQTtFQUNFLFlBQVk7QUFDZDtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy9zYW1tbHVuZy1zYW1tZWxzdHVlY2svc2FtbWx1bmctc2FtbWVsc3R1ZWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBmb250LWZhY2UgeyovXG4vKiAgZm9udC1mYW1pbHk6IFwiUm9ra2l0dFwiOyovXG4vKiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1Jva2tpdHQvUm9ra2l0dC1SZWd1bGFyLnR0ZlwiKTsqL1xuLyogIGZvbnQtd2VpZ2h0OiBub3JtYWw7Ki9cbi8qICBmb250LXN0eWxlOiBub3JtYWw7Ki9cbi8qfSovXG5cbmh0bWwge1xuICBtYXJnaW46IDA7XG59XG5cblxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LDI0NSwyMjApO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDk4dnc7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxdnc7XG4gIHRvcDogMHB4O1xuXG59XG5cbmhlYWRlciAuY29sbGVjdGlvbi10aXRsZSB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2IoMTM5LCA2OSwgMTkpO1xufVxuXG5cbmhlYWRlciAuZnJvbSB7XG4gIGFsaWduLWNvbnRlbnQ6IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2IoMTM5LCA2OSwgMTkpO1xufVxuXG5oZWFkZXIgLnVzZXItbmFtZSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2IoMTM5LCA2OSwgMTkpO1xufVxuXG5cbmJvZHkgZGl2IHtcbiAgcGFkZGluZzogMXZ3O1xufVxuXG5cbmNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5jb2xsZWN0aW9uLWJvZHl7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5jYXRhbG9ndWUtZ3JpZC1jb250YWluZXItb3V0c2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGZsZXg6IGNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uY2F0YWxvZ3VlLWdyaWQtY29udGFpbmVyLWluc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGhlaWdodDogMjIwcHg7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLm5hbWUtaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hbWUtaW1hZ2UtY29udGFpbmVyIC5waWVjZS1uYW1lIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6cmdiKDMzLCAxOSwgNCk7XG59XG5cbi5pbWFnZXtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzMywgMTksIDQpO1xufVxuXG4uYnV0dG9uLmRlbGV0ZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTcycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammlungSammelstueckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammlung-sammelstueck',
                templateUrl: './sammlung-sammelstueck.component.html',
                styleUrls: ['./sammlung-sammelstueck.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammelstueck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammlung/sammlung.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sammlung/sammlung.component.ts ***!
  \***********************************************************/
/*! exports provided: SammlungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammlungComponent", function() { return SammlungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sammlung_sammelstueck_sammlung_sammelstueck_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sammlung-sammelstueck/sammlung-sammelstueck.component */ "./src/app/components/sammlung/sammlung-sammelstueck/sammlung-sammelstueck.component.ts");









function SammlungComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sammlung-sammelstueck", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sammelStueck_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sammelstueck", sammelStueck_r3);
} }
class SammlungComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sammelstuecke = [];
        this.filteredSammelstuecke = [];
        this.userInputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        const urlChunks = window.location.href.split("/");
        const url = `/${urlChunks[urlChunks.length - 2]}/${urlChunks[urlChunks.length - 1]}`;
        this.loadSammlung(url);
        this.loadSammelstuecke(url);
        this.userInputFormControl.valueChanges.subscribe(searchText => {
            //gets all pieces that match the search inout ignoring capitalisation
            this.filteredSammelstuecke = this.sammelstuecke.filter(sammelstueck => {
                return sammelstueck.pieceName.toLowerCase().includes(searchText.toLowerCase());
            });
        });
    }
    loadSammlung(pathname) {
        //loads the data that belongs to this collection and puts it in the header
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + pathname;
        this.http.get(url).subscribe((data) => {
            this.id = data[0].id;
            this.collectionName = data[0].collectionName;
            this.ownerName = data[0].collectorsName;
            this.headline = this.collectionName + "-Sammlung von " + this.ownerName;
        });
    }
    loadSammelstuecke(pathname) {
        let myPath = pathname.split("/")[2];
        //gets the path to the database connection
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/Sammelstuecke/" + myPath;
        this.http.get(url).subscribe((data) => {
            //loads and displays all pieces that belong to this collection
            this.sammelstuecke = data;
            this.filteredSammelstuecke = this.sammelstuecke;
        });
    }
    navigateBack() {
        this.router.navigateByUrl('');
        //navigates back to the collections page
    }
    navigateToKatalog() {
        this.router.navigateByUrl('katalog/' + this.id);
        //navigates to the catalogue of this collection
    }
    navigateToSammelstueckhinzufuegen() {
        this.router.navigateByUrl('/hinzufuegen/' + this.id);
        //navigates to the add-a-piece-to-this-collection page
    }
    navigateToChecklist() {
        this.router.navigateByUrl("/checklist/" + this.id);
        //navigates to this collections checklist
    }
    navigateToSammelstueck(pieceID) {
        this.router.navigateByUrl('/sammelstueck/' + pieceID);
        //navigates to the piece
    }
}
SammlungComponent.ɵfac = function SammlungComponent_Factory(t) { return new (t || SammlungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SammlungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammlungComponent, selectors: [["app-sammlung"]], decls: 20, vars: 3, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "button", "back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "collection-body"], [1, "top-row"], [1, "search"], ["type", "text", "placeholder", "Suche..", 3, "formControl"], [1, "buttons"], [1, "button", "checklist", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-th-list"], [1, "button", "upload", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-book"], [1, "button", "add", 3, "click"], [1, "fas", "fa-plus"], [1, "pieces-box"], [4, "ngFor", "ngForOf"], [3, "sammelstueck"]], template: function SammlungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungComponent_Template_span_click_4_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungComponent_Template_button_click_12_listener() { return ctx.navigateToChecklist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungComponent_Template_span_click_14_listener() { return ctx.navigateToKatalog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungComponent_Template_button_click_16_listener() { return ctx.navigateToSammelstueckhinzufuegen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SammlungComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userInputFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredSammelstuecke);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _sammlung_sammelstueck_sammlung_sammelstueck_component__WEBPACK_IMPORTED_MODULE_6__["SammlungSammelstueckComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  background: rgb(245,245,220);\n  color: #000;\n  margin-top: 60px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0 1vw;\n  top: 0;\n  z-index: 0;\n\n}\n\nheader[_ngcontent-%COMP%]   .collection-title[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: center;\n  line-height: 50px;color: rgb(53, 39, 24);\n  font-size: 40px;\n  z-index: 3;\n}\n\ncontent[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100vw;\n}\n\n.search[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.input[type=text][_ngcontent-%COMP%] {\n  float: right;\n  padding: 6px;\n  border: none;\n  margin-left: 2vw;\n  margin-top: 8px;\n  margin-right: 16px;\n  font-size: 30px;\n}\n\n.button.back[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.collection-body[_ngcontent-%COMP%]{\n  flex-direction: row;\n  align-content: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  top: 30px;\n  left: 0;\n  position: absolute;\n}\n\n.button.checklist[_ngcontent-%COMP%]{\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  border-style: solid;\n  border-width: 1px;\n  background-color: rgb(103,75,74);\n  border-color: rgb(33, 19, 4);\n  color:  rgb(33, 19, 4);\n  cursor: pointer;\n}\n\n.button.upload[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  border-style: solid;\n  border-width: 1px;\n  background-color: rgb(103,75,74);\n  border-color: rgb(33, 19, 4);\n  color:  rgb(33, 19, 4);\n  cursor: pointer;\n}\n\n.button.add[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 30px;\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  border-style: solid;\n  border-width: 1px;\n  background-color: rgb(103,75,74);\n  border-color: rgb(33, 19, 4);\n  color:  rgb(33, 19, 4);\n  cursor: pointer;\n}\n\n.pieces-box[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-around;\n  width: 100vw;\n  margin: 0;\n  padding: 1vw;\n  list-style-type: none;\n  white-space: nowrap;\n}\n\nh1[_ngcontent-%COMP%]{\n  color: rgb(33, 19, 4);\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy9zYW1tbHVuZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsTUFBTTtFQUNOLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixDQUFDLHNCQUFzQjtFQUN4QyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZy9zYW1tbHVuZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogcmdiKDI0NSwyNDUsMjIwKTtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5OHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMXZ3O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDA7XG5cbn1cblxuaGVhZGVyIC5jb2xsZWN0aW9uLXRpdGxlIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7Y29sb3I6IHJnYig1MywgMzksIDI0KTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB6LWluZGV4OiAzO1xufVxuXG5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uc2VhcmNoe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5pbnB1dFt0eXBlPXRleHRdIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmJ1dHRvbi5iYWNrIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbGxlY3Rpb24tYm9keXtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmJ1dHRvbi5jaGVja2xpc3R7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogIHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uLnVwbG9hZHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGNvbG9yOiAgcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbi5hZGR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNzUsNzQpO1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogIHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waWVjZXMtYm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDF2dztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5oMXtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBmb250LXNpemU6IDQwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammlungComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammlung',
                templateUrl: './sammlung.component.html',
                styleUrls: ['./sammlung.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sammlungen-uebersicht/sammlungen-uebersicht-sammlung/sammlungen-uebersicht-sammlung.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/components/sammlungen-uebersicht/sammlungen-uebersicht-sammlung/sammlungen-uebersicht-sammlung.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SammlungenUebersichtSammlungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammlungenUebersichtSammlungComponent", function() { return SammlungenUebersichtSammlungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SammlungenUebersichtSammlungComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sammelstuecke = [];
    }
    ngOnInit() {
    }
    navigateToSammlungBearbeiten(id) {
        this.router.navigateByUrl('/sammlungbearbeiten#' + id);
        //navigates to edit-collection page
    }
    deleteSammlung(id) {
        if (confirm(`Möchten Sie die Sammlung "${this.sammlung.collectionName}" wirklich löschen? Die Sammlung und darin gespeicherte Sammelstücke können nicht wieder hergestellt werden`)) {
            //checks if the user really wants to delete the collection
            const sendData = { id: id };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/deleteSammlung', sendData).subscribe((data) => {
                //deletes the collection and its pieces from the database
                location.reload();
                //reload the window
            });
        }
    }
    navigateToSammlung(collectionid) {
        let url = "/sammlung/" + collectionid;
        this.router.navigateByUrl(url);
        //navigates to a collection page
    }
}
SammlungenUebersichtSammlungComponent.ɵfac = function SammlungenUebersichtSammlungComponent_Factory(t) { return new (t || SammlungenUebersichtSammlungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammlungenUebersichtSammlungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammlungenUebersichtSammlungComponent, selectors: [["app-sammlungen-uebersicht-sammlung"]], inputs: { sammlung: "sammlung" }, decls: 10, vars: 1, consts: [[1, "sammlungsstueck-liste"], [1, "sammlung"], ["data-id", "", 1, "sammelstueck", 3, "click"], [1, "collectionName"], [1, "button", "edit", 3, "click"], [1, "fas", "fa-edit"], [1, "button", "delete", 3, "click"], [1, "far", "fa-trash-alt"]], template: function SammlungenUebersichtSammlungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungenUebersichtSammlungComponent_Template_div_click_2_listener() { return ctx.navigateToSammlung(ctx.sammlung.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungenUebersichtSammlungComponent_Template_span_click_6_listener() { return ctx.navigateToSammlungBearbeiten(ctx.sammlung.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungenUebersichtSammlungComponent_Template_span_click_8_listener() { return ctx.deleteSammlung(ctx.sammlung.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sammlung.collectionName);
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding-right: 200px;\n  background-color: beige;\n  margin: 0 auto;\n  hyphens: auto;\n}\n\n.button.add[_ngcontent-%COMP%]{\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n}\n\n.button.delete[_ngcontent-%COMP%]{\n  margin-top: 0;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 0;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\n.button.edit[_ngcontent-%COMP%]{\n  margin-top: 0;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);\n  border-style: solid;\n  border-width: 0;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer;\n  z-index: 2;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0 1vw;\n  top: 0px;\n}\n\nul[_ngcontent-%COMP%]{\n  list-style: none;\n  padding-left: 10vw;\n  padding-right: 10vw;\n}\n\nh1[_ngcontent-%COMP%]{\n  color:  rgb(33, 19, 4);\n  font-size: 40px;\n}\n\n.collectionName[_ngcontent-%COMP%]{\n  color: rgb(23, 9, 4);\n  padding-left: 1vw;\n}\n\n.sammlung[_ngcontent-%COMP%]{\n  display: flex;\n\n}\n\n.sammelstueck[_ngcontent-%COMP%]{\n  height: 50px;\n  width: 70vw;\n  background-color: rgb(103,75,74);\n  border-width: 1px;\n  border-color:  rgb(33, 19, 4);\n  align-items: center;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZ2VuLXVlYmVyc2ljaHQvc2FtbWx1bmdlbi11ZWJlcnNpY2h0LXNhbW1sdW5nL3NhbW1sdW5nZW4tdWViZXJzaWNodC1zYW1tbHVuZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZ2VuLXVlYmVyc2ljaHQvc2FtbWx1bmdlbi11ZWJlcnNpY2h0LXNhbW1sdW5nL3NhbW1sdW5nZW4tdWViZXJzaWNodC1zYW1tbHVuZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgcGFkZGluZy1yaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLmJ1dHRvbi5hZGR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbi5kZWxldGV7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5idXR0b24uZWRpdHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjb2xvcjogcmdiKDMzLCAxOSwgNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDk4dnc7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxdnc7XG4gIHRvcDogMHB4O1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xufVxuXG5oMXtcbiAgY29sb3I6ICByZ2IoMzMsIDE5LCA0KTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uY29sbGVjdGlvbk5hbWV7XG4gIGNvbG9yOiByZ2IoMjMsIDksIDQpO1xuICBwYWRkaW5nLWxlZnQ6IDF2dztcbn1cblxuLnNhbW1sdW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuXG59XG4uc2FtbWVsc3R1ZWNre1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA3MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDc1LDc0KTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIHJnYigzMywgMTksIDQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammlungenUebersichtSammlungComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammlungen-uebersicht-sammlung',
                templateUrl: './sammlungen-uebersicht-sammlung.component.html',
                styleUrls: ['./sammlungen-uebersicht-sammlung.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammlung: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sammlungen-uebersicht/sammlungenuebersicht.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/sammlungen-uebersicht/sammlungenuebersicht.component.ts ***!
  \************************************************************************************/
/*! exports provided: SammlungenuebersichtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SammlungenuebersichtComponent", function() { return SammlungenuebersichtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sammlungen_uebersicht_sammlung_sammlungen_uebersicht_sammlung_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sammlungen-uebersicht-sammlung/sammlungen-uebersicht-sammlung.component */ "./src/app/components/sammlungen-uebersicht/sammlungen-uebersicht-sammlung/sammlungen-uebersicht-sammlung.component.ts");







function SammlungenuebersichtComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sammlungen-uebersicht-sammlung", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sammlung_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sammlung", sammlung_r5);
} }
class SammlungenuebersichtComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sammlungen = [];
    }
    ngOnInit() {
        this.loadSammlungen();
    }
    loadSammlungen() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/Sammlungen').subscribe((data) => {
            this.sammlungen = data;
            //loads all collections from database
        });
    }
    navigateToNeueSammlungAnlegen() {
        this.router.navigateByUrl('/sammlunganlegen');
        //navigates to the add-collection page
    }
}
SammlungenuebersichtComponent.ɵfac = function SammlungenuebersichtComponent_Factory(t) { return new (t || SammlungenuebersichtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SammlungenuebersichtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SammlungenuebersichtComponent, selectors: [["app-sammlungenuebersicht"]], inputs: { sammlung: "sammlung" }, decls: 10, vars: 1, consts: [["id", "content"], ["id", "sammlungsstuecke"], ["id", "body"], [1, "button", "add", 3, "click"], [1, "fas", "fa-plus"], ["id", "sammlungs-template"], [4, "ngFor", "ngForOf"], [3, "sammlung"]], template: function SammlungenuebersichtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meine Sammlungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SammlungenuebersichtComponent_Template_span_click_6_listener() { return ctx.navigateToNeueSammlungAnlegen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SammlungenuebersichtComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sammlungen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _sammlungen_uebersicht_sammlung_sammlungen_uebersicht_sammlung_component__WEBPACK_IMPORTED_MODULE_5__["SammlungenUebersichtSammlungComponent"]], styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-right: 200px;\n  background-color: beige;\n  margin: 0 auto;\n  hyphens: auto;\n}\n\n.button.add[_ngcontent-%COMP%]{\n  display: inline-block;\n  margin-top: 5vw;\n  margin-left: 10vw;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 0.8em;\n  background-color: rgb(103,75,74);;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(33, 19, 4);\n  color: rgb(33, 19, 4);\n  cursor: pointer\n}\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-self: center;\n  width: 98vw;\n  height: 50px;\n  padding: 0vw;\n  margin-left: 10vw;\n  z-index: -1;\n  top: 0px;\n}\n\nul[_ngcontent-%COMP%]{\n  list-style: none;\n}\n\nli[_ngcontent-%COMP%]{\n  background-color:rgb(33, 19, 4);\n}\n\nh1[_ngcontent-%COMP%]{\n  color:rgb(33, 19, 4);\n  font-size: 40px;\n}\n\n.sammelstueck[_ngcontent-%COMP%]{\n  color: black;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n  grid-gap: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW1tbHVuZ2VuLXVlYmVyc2ljaHQvc2FtbWx1bmdlbnVlYmVyc2ljaHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FtbWx1bmdlbi11ZWJlcnNpY2h0L3NhbW1sdW5nZW51ZWJlcnNpY2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLmJ1dHRvbi5hZGR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNXZ3O1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw3NSw3NCk7O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDE5LCA0KTtcbiAgY29sb3I6IHJnYigzMywgMTksIDQpO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDk4dnc7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMHZ3O1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgei1pbmRleDogLTE7XG4gIHRvcDogMHB4O1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGl7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDMzLCAxOSwgNCk7XG59XG5cbmgxe1xuICBjb2xvcjpyZ2IoMzMsIDE5LCA0KTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uc2FtbWVsc3R1ZWNre1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAwLjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SammlungenuebersichtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sammlungenuebersicht',
                templateUrl: './sammlungenuebersicht.component.html',
                styleUrls: ['./sammlungenuebersicht.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { sammlung: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
    production: false,
    // apiBaseUrl: environment.apiBaseUrl + ''
    apiBaseUrl: 'http://setzkasten-env.eba-mr73ptsz.eu-west-1.elasticbeanstalk.com'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maxis\Projects\setzkasten_website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map