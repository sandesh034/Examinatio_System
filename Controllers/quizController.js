const quizModel=require("../Database/Models/quizmodel")
const questionAnswerModel=require("../Database/Models/queansmodel")


const postQuiz= async (req, res) => {

    try {
        const {name,no_of_question,category,duration,created_by}=req.body;
        const addQuiz = new quizModel({name,no_of_question,category,duration,created_by})
        const saveQuiz = await addQuiz.save()
        res.send("Added")
    } catch (error) {
        console.log(error)
    }
}

const getQuiz= async (req, res) => {
    try {
        const data=await quizModel.find({}).populate('created_by');
        const questions=await questionAnswerModel.find({quiz:"649d7657f0ce0f59114edbd6"},{quiz:0})
      
        res.send([...data,questions])
    } catch (error) {
        console.log(error)
    }
}
module.exports={postQuiz,getQuiz}

