"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var store_1 = require("@ngrx/store");
var testing_2 = require("@ngrx/store/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    var mockStore;
    beforeEach(testing_1.waitForAsync(function () {
        var initialState = {
            cart: [], auth: [], showcase: [], browse: []
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            providers: [
                testing_2.provideMockStore({ initialState: initialState }),
            ]
        }).compileComponents();
        mockStore = testing_1.TestBed.inject(store_1.Store);
    }));
    it('should create the app', testing_1.waitForAsync(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should dispatch CheckIfLoggedIn()', testing_1.waitForAsync(function () {
        spyOn(mockStore, 'dispatch').and.stub();
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    }));
});
