const express = require('express');
const app = express();
const indexRouter = express.Router();
const Questions = require('../models/questions');
const Exams = require('../models/exams');
const Student = require('../models/students');
const StudentExams = require('../models/studentExams');
const Teacher = require('../models/teachers');
const bodyParser = require('body-parser');
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

// -------------------- Lấy nội dung bài test bằng id của giáo viên ----------------
indexRouter.route('/selectExam').get((req, res) => {
    var id = req.query.id;
    Exams.find({creator: id} ,(err, serverports) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    })
})

// -------------------- Lấy nội dung bài test bằng id ----------------
indexRouter.route('/getTestExam').get(function (req, res) {
    var id = req.query.id;
    console.log(id);
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
            res.json(serverports);
        }
    })
})
indexRouter.route('/selectStudentCharts').get((req, res) => {
    Student.find((err, chart) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(chart);
            res.json(chart);
        }
    }).sort( { point: -1 } );
})
indexRouter.route('/selectTeacherCharts').get((req, res) => {
    Teacher.find((err, chart) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(chart);
            res.json(chart);
        }
    }).sort( { point: -1 } );
})
indexRouter.route('/selectTeacherTestList').get((req, res) => {
    console.log(req.query.id);
    StudentExams.find({ examId: req.query.id }, function (err, list) {
        if (err) {
            console.log(err);
        }
        else {
            Student.find(function(err, chart){
                if (err) {
                    console.log(err);
                }
                else {
                    var array = [];
                    for (listItem in list){
                        for( chartItem in chart){
                            if(list[listItem].studentId === chart[chartItem].id){
                                list[listItem] = {
                                    examId: list[listItem].examId,
                                    score: list[listItem].score,
                                    id: chart[chartItem].id,
                                    username: chart[chartItem].username,
                                    displayName: chart[chartItem].displayName
                                }
                                break;
                            }
                        }
                    }
                    res.json(list);
                }
            });
        }
    });
})
indexRouter.route('/selectstudenthistoryexam').get((req, res) => {
    console.log(req.query.id);
    StudentExams.find({ studentId: req.query.id }, function (err, list) {
        if (err) {
            console.log(err);
        }
        else {
            Exams.find(function(err, chart){
                if (err) {
                    console.log(err);
                }
                else {
                    var array = [];
                    for (listItem in list){
                        for( chartItem in chart){
                            if(list[listItem].examId === chart[chartItem].id){
                                list[listItem] = {
                                    examId: list[listItem].examId,
                                    score: list[listItem].score,
                                    title: chart[chartItem].title,
                                }
                                break;
                            }
                        }
                    }
                    res.json(list);
                }
            });
        }
    });
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