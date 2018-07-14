const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name: String,
    college: String,
    disability: String,
    grade: String,
    email: String,
    phoneno:String,
    company:String,
    sector:String,
    skillset:[String],
});

module.exports = mongoose.model('Student', Student);
