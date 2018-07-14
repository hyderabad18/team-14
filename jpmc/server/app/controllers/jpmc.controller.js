'use strict';
var MongoClient=require('mongodb').MongoClient;
var student_url = 'mongodb://localhost/studentsDatabase';
var corporation_url = 'mongodb://localhost/corporateDatabase';

const StudentModel = require('../models/student.js');
const CorporationModel = require('../models/corporation.js');
const TestModel = require('../models/test.js');
const UserModel = require('../models/user.js');
const SkillsModel = require('../models/skills.js');
const PhoneModel = require('../models/phone.js');

var twilio=require('twilio');


exports.getStudents = (req, res) => {
	StudentModel.find()
	.then(StudentList => {
        res.send(StudentList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
}

exports.addStudent = (req, res) => {
	StudentModel.create(req.body, (err, result) => {
		if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
	})
}
exports.getCorporates = (req, res) => {
	CorporationModel.find()
	.then(CorporateList => {
        res.send(CorporateList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving corps."
        });
    });
}

exports.addCorporate = (req, res) => {
	CorporationModel.create(req.body, (err, result) => {
		if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
	})
}

exports.addTest = (req, res) => {
    TestModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.getSkills = (req, res) => {
    SkillsModel.find()
    .then(SkillsList => {
        res.send(SkillsList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving skills."
        });
    });
}


exports.addCorporation = (req, res) => {
    CorporationModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.addSkills = (req, res) => {
    SkillsModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}


exports.signUpUser = (req, res) => {
    const { email_id, password, type} = req.body
    UserModel.findOne({ email_id: email_id }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
 -           res.json({
                error: `Sorry, already a user with the email_id: ${email_id}`
            })
        }
        else {
            const newUser = new UserModel({
                email_id: email_id,
                password: password,
                type: type,
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
}

exports.sendMsg = (req, res) => {
    var to_phone = req.body.phone;
    var msg = req.body.msg;
    console.log(req.body);
    const accountSid = 'ACdb0326f0ea7d1adeeb7489e1ac09f816';
    const authToken = '404dbd78f1ec45ed8a67bab9efb9afcc';
    var client = new twilio(accountSid, authToken);
    client.messages
      .create({
         body: msg,
         from: '+14436489618',
         to: to_phone
       })
      .then(message => console.log(message.sid))
      .done();
}

exports.getNumbers = (req, res) => {
    PhoneModel.find()
    .then(PhoneList => {
        res.send(PhoneList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving numbers."
        });
    });
}

exports.addNumbers = (req, res) => {
    PhoneModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.getQuestionsBySectorLevel = (req, res) => {
    TestModel.find({sector: req.body.sector}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            var questions = result[0].questions;
            var done = req.body.done;
            var level = req.body.level;
            var rand = Math.floor(Math.random(0, 1)*100);
            console.log(rand);
            console.log(questions.length);
            for(var i = 0; i < questions.length; i++)
            {
                if(questions[i].no === rand && done.indexOf(questions[i].no) == -1)
                {   
                    console.log(questions[i]);
                    res.send(questions[i]);
                    break;
                }
            }
            
        }
    })
}

/*exports.findMarks = (req, res) => {
    MarksModel.find({class_id: req.body.class_id, subject_id: req.body.subject_id}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.checkLogIn = (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
}
*/
