var CarApp;
(function (CarApp) {
    var Controllers;
    (function (Controllers) {
        var apiURL = '/api/makes/search/';
        var HomeController = (function () {
            function HomeController($http, $uibModal) {
                var _this = this;
                this.$http = $http;
                this.$uibModal = $uibModal;
                this.message = 'Welcome!';
                this.$http.get('/api/makes')
                    .then(function (response) {
                    _this.makes = response.data;
                })
                    .catch(function (response) {
                    console.error('Could not retrieve car list.');
                });
                this.$http.get('/api/cars')
                    .then(function (response) {
                    _this.cars = response.data;
                })
                    .catch(function (response) {
                    console.error('Coult not retrieve car list.');
                });
            }
            HomeController.prototype.showModal = function (car) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/modal.html',
                    controller: 'ModelController',
                    controllerAs: 'controller',
                    resolve: {
                        car: function () { return car; }
                    },
                    size: 'lg'
                });
            };
            HomeController.prototype.doSomething = function (id) {
                var i;
                for (i = 0; i < this.cars.length; i++) {
                    if (this.makes.id == this.cars.CarMakeId) {
                        return this.makes.id;
                    }
                    else {
                        return alert("Sorry, there are no cars for that description!");
                    }
                }
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('CarApp').controller('HomeController', HomeController);
        var ModelController = (function () {
            function ModelController(car, $http, $uibModalInstance) {
                this.car = car;
                this.$http = $http;
                this.$uibModalInstance = $uibModalInstance;
                this.$http.get('/api/cars' + this.car.id);
            }
            ModelController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
            };
            return ModelController;
        }());
        Controllers.ModelController = ModelController;
        angular.module('CarApp').controller('ModelController', ModelController);
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = CarApp.Controllers || (CarApp.Controllers = {}));
})(CarApp || (CarApp = {}));
