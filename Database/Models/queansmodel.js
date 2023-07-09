const mongoose=require("mongoose")
const questionAnswerSchema=mongoose.Schema({
    quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'quiz'
    },
    qsn_text:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        min:0
    },
    options:[{
        option1:{
            type:String,
            required:true
        },
        option2:{
            type:String,
            required:true
        },
        option3:{
            type:String,
            required:true
        },
        option4:{
            type:String,
            required:true
        },        
        correct:{
            type:String,
            required:true
        }
     }]

})
const questionAnswerModel=mongoose.model('questionAnswer',questionAnswerSchema)
module.exports=questionAnswerModel