const questionAnswerModel=require("../Database/Models/queansmodel")

const postQuestionAnswer=async (req, res) => {

    try {
        const {quiz,qsn_text,marks}=req.body;
        const {option1,option2,option3,option4,correct}=req.body.options[0]
        const addQuestionAnswer = new questionAnswerModel({
            quiz,
            qsn_text,
            marks,
            options:[{option1,option2,option3,option4,correct}]
        })
        const saveQuestion = await addQuestionAnswer.save()
        res.send("Added")
    } catch (error) {
        console.log(error)
    }
}

const getQuestionAnswer= async (req, res) => {

    try {
        const data=await questionAnswerModel.find({})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports={postQuestionAnswer,getQuestionAnswer}