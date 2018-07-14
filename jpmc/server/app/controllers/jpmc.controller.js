'use strict';
var MongoClient=require('mongodb').MongoClient;
var student_url = 'mongodb://localhost/studentsDatabase';
var corporation_url = 'mongodb://localhost/corporateDatabase';

const StudentModel = require('../models/student.js');
const CorporationModel = require('../models/corporation.js');
const TestModel = require('../models/test.js');
const UserModel = require('../models/user.js');
const SkillsModel = require('../models/skills.js');



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
	student.find()
	.then(CorporateList => {
        res.send(CorporList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
}

exports.addCorporate = (req, res) => {
	CorporatioModel.create(req.body, (err, result) => {
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

exports.signUpUser = (req, res) => {
    const { username, password } = req.body
    UserModel.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new UserModel({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
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
