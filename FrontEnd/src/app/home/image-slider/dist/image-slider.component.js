"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImageSliderComponent = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var operators_1 = require("rxjs/operators");
var ShowcaseActions = require("../../store/showcase/showcase.actions");
var ImageSliderComponent = /** @class */ (function () {
    function ImageSliderComponent(config, store) {
        this.store = store;
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
    }
    ImageSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showcaseState = this.store.select('showcase');
        this.showcaseState
            .pipe(operators_1.take(1))
            .subscribe(function (data) {
            if (data.imageSlider.length === 0) {
                _this.store.dispatch(new ShowcaseActions.FetchImageSlider());
            }
        });
        // this.carausel = this.config.carausel;
    };
    ImageSliderComponent = __decorate([
        core_1.Component({
            selector: 'app-image-slider',
            templateUrl: './image-slider.component.html',
            styleUrls: ['./image-slider.component.scss'],
            providers: [ng_bootstrap_1.NgbCarouselConfig]
        })
    ], ImageSliderComponent);
    return ImageSliderComponent;
}());
exports.ImageSliderComponent = ImageSliderComponent;
