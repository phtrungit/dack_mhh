const express = require('express');
const app = express();
const indexRouter = express.Router();
const Questions = require('../models/questions');
const Exams = require('../models/exams');
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
module.exports = indexRouter;