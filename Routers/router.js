const express = require("express");
const router = express.Router();
const{postUserData,getUserData,deleteUserData}=require("../Controllers/userController")
const{getQuiz,postQuiz}=require("../Controllers/quizController")
const{postQuestionAnswer,getQuestionAnswer}=require("../Controllers/queansController")
router.get('./', (req, res) => {
    res.send("Hello World")
})
router.route('/user').post(postUserData)
router.route('/user').get(getUserData)
router.route('/quiz').post(postQuiz)
router.route('/quiz').get(getQuiz)
router.route('/questionAnswer').post(postQuestionAnswer)
router.route('/questionAnswer').get(getQuestionAnswer)
module.exports = router



