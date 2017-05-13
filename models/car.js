"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CarSchema = new mongoose.Schema({
    title: {
        min: 5,
        max: 20
    },
    info: {
        min: 10,
        max: 300
    }
});
exports.default = mongoose.model('Car', CarSchema);
