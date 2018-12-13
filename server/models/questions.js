
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var schema=new Schema({
    id:{type:String,require:true},
    examId:{type:String,require:true},
    text:{type:String, require:true},
    point:{type:String, require:true},
});
module.exports=mongoose.model('Questions',schema);
