namespace CarApp.Controllers {



    export class HomeController {
        public message = 'Welcome!';
        public results;
        public cars;
        public makes;
        public search;
        public selectedCarMakeId;


        constructor(private $http: ng.IHttpService, private $uibModal: angular.ui.bootstrap.IModalService) {
          this.$http.get('/api/makes')
              .then((response) => {
                  this.makes = response.data;
              })
              .catch((response) => {
                  console.error('Could not retrieve car list.');
                });
            this.$http.get('/api/cars')
          .then((response) => {
            this.cars = response.data;

          })
            .catch((response) => {
            console.error('Coult not retrieve car list.');
          })


        }
          public showModal(car){
              this.$uibModal.open({
                templateUrl: '/ngApp/views/modal.html',
                controller: 'ModelController',
                controllerAs: 'controller',
                  resolve: {
                    car:()=> car
                  },
                  size: 'lg'
              });
      }

          public doSomething(id){


              this.selectedCarMakeId = id;

              console.log(id)

            }


          }
            angular.module('CarApp').controller('HomeController', HomeController)





            // Use ng-model of selectedCarMakeId on search input
          //
          //
          // fetch(){
          //
          //   if (this.search) {
          //       console.log('searching');
          //       this.$http.get('/api/cars/' + this.search)
          //           .then((results) => {
          //               this.cars= results.data;
          //           });
          //   }
          // }






    export class ModelController{

      public closeModal(){
        this.$uibModalInstance.close();
      }


    constructor(public car, private $http: ng.IHttpService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance){
        this.$http.get('/api/cars' + this.car.id)

      }

     }

 angular.module('CarApp').controller('ModelController', ModelController)


    export class AboutController {
        public message = 'Hello from the about page!';


    }

}
