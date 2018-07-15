const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name: String,
    college: String,
    disability: String,
    grade: String,
    email_id: String,
    password: String,
    wphoneno:String,
    cphoneno:String,
    company:String,
    sector:String,
    skillset:[String],
    fbid: String,
    linkedid: String,
    Address: String,
    state: String,
    city: String,
    pincode: String,
    resume_url: String,
    pic_url: String
});

module.exports = mongoose.model('Student', Student);
