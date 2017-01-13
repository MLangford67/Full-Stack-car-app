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

/* GET all makes */
router.get('/makes', function(req, res, next) {
  res.json(makes);
});

router.get('/makes/search/:search', function(req, res, next) {
    let search = req.params['search'];
    let matches = makes.filter((movie)=>{
      return movie.name.indexOf(search) == 0;
    });
    res.json(matches);
});

export = router;
