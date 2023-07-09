const mongoose=require("mongoose")
const quizSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    no_of_question:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true

    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})
  
const quizModel=mongoose.model('quiz',quizSchema)
module.exports=quizModel