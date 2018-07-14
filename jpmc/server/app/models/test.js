const mongoose = require('mongoose');
const Test = mongoose.Schema({
    sector: String,
    questions: [{
      no: Number,
      text: String,
      level:Number,
      options:[String],
      correct:Number,
    }]
    
});

module.exports = mongoose.model('Test', Test);
