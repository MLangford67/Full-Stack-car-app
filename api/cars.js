"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var car_1 = require("../models/car");
var router = express.Router();
router.post('/', function (req, res, next) {
    var car = new car_1.default();
    car.title = req.body.title;
    car.info = req.body.info;
    car.save(function (err, newCar) {
        console.log(err);
        res.send(200);
    });
});
router.get('/', function (req, res, next) {
    mongoose.connection.db.collection('car').find().toArray().then(function (car) {
        res.json(car);
    });
});
exports.default = router;
