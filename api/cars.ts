import * as express from 'express';
import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';
import Car from '../models/car';

let router = express.Router();

router.post('/', (req, res, next)=>{
  let car:any = new Car();
  car.title = req.body.title;
  car.info = req.body.info;
  car.save(function(err, newCar){
    console.log(err)
  res.send(200);
  })
})
router.get('/', (req, res, next)=>{
  mongoose.connection.db.collection('car').find().toArray().then((car)=>{
    res.json(car);
  })
})



export default router;
