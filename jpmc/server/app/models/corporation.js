const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name: String,
    disability: String,
    grade: String,
    city: String,
    address:String,
    vacancies:String,
    disabilities:[String],
    skillset:[String],
    sector:String
});

module.exports = mongoose.model('Student', Student);
