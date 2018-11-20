var mongoose=require('mongoose');
var assert=require('assert');
var Schema=mongoose.schema;
var tutorialSchema=new Schema({
    topic :{
        type:string,
        require:true,
        unique:true
    },
    description:{
        type:string,
        required:true
    }

});
var Tutorials=mongoose.model('tutorials',tutorialSchema);
module.exports=Tutorials;