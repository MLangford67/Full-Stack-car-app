namespace CarApp.Controllers {

const apiURL = '/api/makes/search/';

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
                  size: 'sm'
              });
          }





            // Use ng-model of selectedCarMakeId on search input


          // fetch(){
          //
          //   if (this.search) {
          //       console.log('searching');
          //       this.$http.get('/api/makes/' + this.search)
          //           .then((results) => {
          //               this.cars= results.data;
          //           });
          //   }
          // }




  }
    angular.module('CarApp').controller('HomeController', HomeController)


    export class ModelController{

      public closeModal(){
        this.$uibModalInstance.close();
      }


    constructor(public car, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance){

      }

     }

 angular.module('CarApp').controller('ModelController', ModelController)


    export class AboutController {
        public message = 'Hello from the about page!';


    }

}
