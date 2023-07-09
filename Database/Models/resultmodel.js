const mongoose=require("mongoose")

const resultSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'quiz'
    },
    result:[{
        question:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'questionAnswer'
        },
        response:{
            type:String
        }
    
    }]
})