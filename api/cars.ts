import express = require('express');
let router = express.Router();

let makes = [
  {id:1, name:'BMW'},
  {id:2, name:'Tesla'},
  {id:3, name:'Mini Cooper'},
  {id:4, name:'Mercedes Benz'},
  {id:5, name:'Lexus'},
  {id:6, name:'Rolls Royce'},
  {id:7, name:'Bentley'},
  {id:8, name:'Audi'}
];

let cars = [
        {
            id: 1,
            ShortDescription: "Green MINI Cooper S",
            FullDescription : "This MINI Cooper S is great for the city.",
            CarMakeId : 3,
            Price : 30000,
            ImageUrl : "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
        },
        {
            id: 2,
            ShortDescription : "Orange MINI Cooper S",
            FullDescription : "Orange is an odd color for a car.",
            CarMakeId : 3,
            Price : 25000,
            ImageUrl : "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
        },
        {
            id: 3,
            ShortDescription : "Black MINI Cooper Countryman",
            FullDescription : "Holds more people than a normal MINI cooper and it is invisible at night.",
            CarMakeId : 3,
            Price : 45000,
            ImageUrl : "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
        },
        {
            id: 4,
            ShortDescription : "Tesla Model S",
            FullDescription : "This red Tesla Model S has a 120 mile range.",
            CarMakeId : 2,
            Price : 130000,
            ImageUrl : "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
        },
        {
            id: 5,
            ShortDescription : "Tesla Model X",
            FullDescription : "A Tesla Mini Van with Falcon Doors.",
            CarMakeId : 2,
            Price : 150000,
            ImageUrl : "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
        },
        {
          id: 6,
          ShortDescription : "BMW M3",
          FullDescription : "A power house sports car from BMW.",
          CarMakeId : 1,
          Price : 65000,
          ImageUrl : "http://buyersguide.caranddriver.com/media/assets/submodel/7822.jpg"
        },
        {
          id: 7,
          ShortDescription : "Mercedes Benz CLS-class",
          FullDescription : "A luxurious car from Mercedes at a reasonable price.",
          CarMakeId : 4,
          Price : 76000,
          ImageUrl : "http://buyersguide.caranddriver.com/media/assets/submodel/7901.jpg"
        },
        {
        id : 8,
        ShortDescription : "Lexus LS460",
        FullDescription : "A Mercedes killer from Japan.",
        CarMakeId : 5,
        Price : 75000,
        ImageUrl : "http://buyersguide.caranddriver.com/media/assets/submodel/7926.jpg"
      },
      {
        id: 9,
        ShortDescription : "Rolls Royce Ghost Series II",
        FullDescription : "A mini Phantom",
        CarMakeId : 6,
        Price : 300000,
        ImageUrl : "http://buyersguide.caranddriver.com/media/assets/submodel/7505.jpg"
      },
      {
        id : 10,
        ShortDescription : "Bentley Mulsanne",
        FullDescription : "Rolls Royce who?",
        CarMakeId : 7,
        Price : 307000,
        ImageUrl : "http://buyersguide.caranddriver.com/media/assets/submodel/6925.jpg"
      },
      {
        id : 11,
        ShortDescription : "Audi A6",
        FullDescription : "The best luxury car for the price",
        CarMakeId : 8,
        Price : 45000,
        ImageUrl : "http://buyersguide.caranddriver.com/media/assets/submodel/7709.jpg"
      }
];

router.get('/cars', function (req, res, next) {
    res.json(cars);
});

router.get('/cars/:id', function (req, res, next) {
    let id = parseInt(req.params['id']);
    let car = findCar(id);
    if (car) {
        res.json(car);
    } else {
        res.sendStatus(404);
    }
});

router.get('/cars/ShortDescription/search/:search', function(req, res, next) {
    let search = req.params['search'];
    let matches = cars.filter((cars)=>{
      return cars.ShortDescription.indexOf(search) == 0;
    });
    res.json(matches);
});



function findCar(id:number) {
  let matches = cars.filter((car) => {
    return car.id == id;
  });
  return matches.length ? matches[0] : null;
}

export = router;
