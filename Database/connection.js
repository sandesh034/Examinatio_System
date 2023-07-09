const mongoose=require("mongoose")

const connectDatabase=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/quizProject")
        console.log("Database Connection Successful")
    }
    catch(error){
      console.log("Error occured while connecting database")
    }
}
connectDatabase()