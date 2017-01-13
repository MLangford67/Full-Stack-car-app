namespace CarApp.Services {

    export class CarsService {
        private CarsResource;

        public listCars() {
            return this.CarsResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarsResource = $resource('/api/cars');
        }

    }
    angular.module('CarApp').service('CarsService', CarsService);

    export class MakesService{
      private MakesResource;

      public listMakes(){
        return this.MakesResource.query();
        }
        constructor($resource: ng.resource.IResourceService){
            this.MakesResource = $resource('/api/makes');
        }
    }
    angular.module('CarApp').service('MakesService', MakesService);
    }
