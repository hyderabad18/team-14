// const passport = require('../../passport')

module.exports = (app) => {
    const jpmc = require('../controllers/jpmc.controller.js');

    // app.get('/api/jpmc/getsubjects', jpmc.getStudents);
    // app.post('/api/jpmc/addsubject', jpmc.addStudent);
    app.post('/api/jpmc/addcorp', jpmc.addCorporation);
    app.post('/api/jpmc/addstudent', jpmc.addStudent);
    app.post('/api/jpmc/addskills', jpmc.addSkills);
    app.get('/api/jpmc/getskills', jpmc.getSkills);
    app.post('/api/jpmc/adduser', jpmc.signUpUser);
    app.post('/api/jpmc/addnumbers', jpmc.addNumbers);
    app.get('/api/jpmc/getnumbers', jpmc.getNumbers);
    app.post('/api/jpmc/sendmsg', jpmc.sendMsg);
    app.post('/api/jpmc/addTest', jpmc.addTest);
    app.post('/api/jpmc/getQuestionsBySectorLevel', jpmc.getQuestionsBySectorLevel);

    /*app.post('/api/jpmc/adduser', jpmc.signUpUser);
    app.get('/api/jpmc/checklogin', jpmc.checkLogIn);
    app.post('/api/jpmc/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    });*/
}