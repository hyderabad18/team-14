const mongoose = require('mongoose');

const Corporation = mongoose.Schema({
    name: String,
    disability: String,
    email:String,
    address: String,
    state: String,
    pincode: String,
    grade: String,
    city: String,
    address:String,
    vacancies:String,
    disabilities:[String],
    skillset:[String],
    sector:String
});

module.exports = mongoose.model('Corporation', Corporation);
