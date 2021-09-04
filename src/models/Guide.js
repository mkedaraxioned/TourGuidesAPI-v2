const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  place:String,
  tourFee:Number
});

const guideSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true,'Please insert product name']
  },
  photo: {
    type:String,
    required: [true,'Please insert product name']
  },
  experience: {type:Number},
  charges: {type:Number},
  tour: [ tourSchema ]
});


//Model creation
const Guide = mongoose.model('Guide',guideSchema);

module.exports = Guide;