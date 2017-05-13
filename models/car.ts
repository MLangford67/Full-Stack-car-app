import mongoose = require('mongoose');

let CarSchema = new mongoose.Schema({
  title:{
    min: 5,
    max: 20
  },
  info:{
    min: 10,
    max: 300
  }
})
export default mongoose.model('Car', CarSchema);
