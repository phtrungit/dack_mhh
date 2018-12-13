var Choices = require ('../models/choices');
var mongoose=require('mongoose');
var mongoDB = 'mongodb://admin:nhom01@ds227674.mlab.com:27674/dbdackmhh';
mongoose.connect(mongoDB);

var choices =[
    new Choices ({
        id:'CH0001',
        questionId:'QT0001',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0002',
        questionId:'QT0001',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0003',
        questionId:'QT0001',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0004',
        questionId:'QT0001',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT001 END
    new Choices ({
        id:'CH0005',
        questionId:'QT0002',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0006',
        questionId:'QT0002',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0007',
        questionId:'QT0002',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0008',
        questionId:'QT0002',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT002 END
    new Choices ({
        id:'CH0009',
        questionId:'QT0003',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0010',
        questionId:'QT0003',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0011',
        questionId:'QT0003',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0012',
        questionId:'QT0003',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT003END
    new Choices ({
        id:'CH0013',
        questionId:'QT0004',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0014',
        questionId:'QT0004',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0015',
        questionId:'QT0004',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0016',
        questionId:'QT0004',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT0004 END
    new Choices ({
        id:'CH0017',
        questionId:'QT0005',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0018',
        questionId:'QT0005',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0019',
        questionId:'QT0005',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0020',
        questionId:'QT0005',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT0005 END
    new Choices ({
        id:'CH0021',
        questionId:'QT0006',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0022',
        questionId:'QT0006',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0023',
        questionId:'QT0006',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0024',
        questionId:'QT0006',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT0006 END
    new Choices ({
        id:'CH0025',
        questionId:'QT0007',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0026',
        questionId:'QT0007',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0027',
        questionId:'QT0007',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0028',
        questionId:'QT0007',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT007 END
    new Choices ({
        id:'CH0029',
        questionId:'QT0008',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0030',
        questionId:'QT0008',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0031',
        questionId:'QT0008',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0032',
        questionId:'QT0008',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT0008 END
    new Choices ({
        id:'CH0033',
        questionId:'QT0009',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0034',
        questionId:'QT0009',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0035',
        questionId:'QT0009',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0036',
        questionId:'QT0009',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),//QT0009 END
    new Choices ({
        id:'CH0037',
        questionId:'QT0010',
        text:'Tên câu hỏi',
        option:'A',//A,B,C,D
        correct:true,
    }),
    new Choices ({
        id:'CH0038',
        questionId:'QT0010',
        text:'Tên câu hỏi',
        option:'B',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0039',
        questionId:'QT0010',
        text:'Tên câu hỏi',
        option:'C',//A,B,C,D
        correct:false,
    }),
    new Choices ({
        id:'CH0040',
        questionId:'QT0010',
        text:'Tên câu hỏi',
        option:'D',//A,B,C,D
        correct:false,
    }),
];
var done=0;

for(var i=0;i<choices.length;i++)
{
    choices[i].save(function(err,result){
        done++;
        if(done==choices.length)
        {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}