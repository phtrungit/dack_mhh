
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema({
    id:{type:String,require:true},
    questionId:{type:String,require:true},
    text:{type:String, require:true},
    option:{type:String,require:true},//A,B,C,D
    correct:{type:Boolean, require:true},
});
module.exports=mongoose.model('Choices',schema);

