const express = require('express');
const app = express();
const indexRouter = express.Router();
const Questions = require('../models/questions');
const Exams = require('../models/exams');
const Student = require('../models/students');

const Teacher = require('../models/teachers');
const bodyParser = require('body-parser');
const passport = require('../passport')
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
}))

app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
}))


/* GET home page. */
/*indexRouter.route('/user').get(function (req, res) {
    User.find(function (err, serverports){
        if(err){
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    });
});

indexRouter.route('/product').get(function (req, res) {
    Product.find(function (err, serverports){
        if(err){
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    });
});*/


// -------------------- Lấy nội dung bài test bằng id ----------------
indexRouter.route('/getTestExam').get(function (req, res) {
    var id = req.query.id;
    Questions.find({ examId: id }, function (err, serverports) {
        if (err) {
            console.log(err);
        }
        else {
            Exams.find({ id: id }, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    var result = {
                        data: serverports,
                        title: data
                    }
                    res.json(result);
                }
            })
        }
    });
});


//---------------------Cập nhật đáp án bài thi-----------------
indexRouter.route('/updateResultTest').post(function (req, res) {
    console.log(req.body);
})

//-----------Lấy đề thi---------------
indexRouter.route('/selectAllExam').get((req, res) => {
    Exams.find((err, serverports) => {
        if (err) {
            console.log(err);
        }
        else {
            var idTeacher = serverports[0].creator;
            Teacher.find({ id: idTeacher }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    var result = {
                        data: serverports,
                        teacher: data
                    }
                    res.json(result);
                }
            })
                ;
        }
    })
})
indexRouter.route('/login').post(function (req, res,next) {
    console.log(req.body);
    let user=null;
    Student.findOne({ 'username': req.body.username }, (err, userStudentMatch) => {
        if (err) {return}
        if (!userStudentMatch) {
            Teacher.findOne({ 'username': req.body.username }, (err, userTeacherMatch) => {
                if (err) {
                    return
                }
                if (userTeacherMatch && req.body.password==userTeacherMatch.password) {
                    console.log('userTeacherMatch')
                    user=userTeacherMatch
                    return res.json({user:user});
                }
            })

        }
        else if(req.body.password===userStudentMatch.password) {
            console.log('userStudentMatch')
            user=userStudentMatch
            return res.json({user:user});
        }
    })

});
indexRouter.route('/signup').post(function (req,res,next) {
    console.log('reqbodySignUp',req.body);
    if(req.body.role==='student')
    {
        Student.findOne({ username: req.body.username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const student = new Student({
                    id: 'ST'+req.body.username,
                    displayName: req.body.name,
                    mail: req.body.mail,
                    username: req.body.username,
                    password: req.body.password,
                    point: 0,
                    phone: req.body.phone,
                })
                student.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json({user:savedUser})
                })
            }
        })
    }else
    {
        Teacher.findOne({ username: req.body.username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: `
                })
            }
            else {
                const teacher = new Teacher({
                    id: 'ST'+req.body.username,
                    displayName: req.body.name,
                    mail: req.body.mail,
                    username: req.body.username,
                    password: req.body.password,
                    point: 0,
                    certificate:'Thạc sĩ',
                    phone: req.body.phone,
                })
                teacher.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json({user:savedUser})
                })
            }
        })
    }

})
module.exports = indexRouter;