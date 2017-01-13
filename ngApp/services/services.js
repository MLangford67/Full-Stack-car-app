var CarApp;
(function (CarApp) {
    var Services;
    (function (Services) {
        var CarsService = (function () {
            function CarsService($resource) {
                this.CarsResource = $resource('/api/cars');
            }
            CarsService.prototype.listCars = function () {
                return this.CarsResource.query();
            };
            return CarsService;
        }());
        Services.CarsService = CarsService;
        angular.module('CarApp').service('CarsService', CarsService);
        var MakesService = (function () {
            function MakesService($resource) {
                this.MakesResource = $resource('/api/makes');
            }
            MakesService.prototype.listMakes = function () {
                return this.MakesResource.query();
            };
            return MakesService;
        }());
        Services.MakesService = MakesService;
        angular.module('CarApp').service('MakesService', MakesService);
    })(Services = CarApp.Services || (CarApp.Services = {}));
})(CarApp || (CarApp = {}));
