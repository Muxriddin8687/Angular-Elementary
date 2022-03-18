"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CountryPageComponent = void 0;
var core_1 = require("@angular/core");
var CountryPageComponent = /** @class */ (function () {
    function CountryPageComponent(route, httpClient) {
        this.route = route;
        this.httpClient = httpClient;
        // chart section
        this.chartType = 'doughnut';
        this.chartDatasets = [
            { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
        ];
        this.chartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
        this.chartColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    CountryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.httpClient.get('https://disease.sh/v3/covid-19/countries/' + id).subscribe(function (result) {
            _this.countryStatistic = result;
        });
    };
    CountryPageComponent.prototype.chartClicked = function (e) { };
    CountryPageComponent.prototype.chartHovered = function (e) { };
    CountryPageComponent = __decorate([
        core_1.Component({
            selector: 'app-country-page',
            templateUrl: './country-page.component.html',
            styleUrls: ['./country-page.component.scss']
        })
    ], CountryPageComponent);
    return CountryPageComponent;
}());
exports.CountryPageComponent = CountryPageComponent;
