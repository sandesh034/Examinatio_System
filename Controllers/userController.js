const userModel = require("../Database/Models/usermodel")
const nodemailer = require("nodemailer")

const sendMail = () => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'pat.swift45@ethereal.email',
            pass: 'BPPteCUs4dmge7wJue'
        }
    });

    const mailOptions = {
        from: 'pat.swift45@ethereal.email',
        to: 'ripipek262@edulena.com',
        subject: 'Hello from Nodemailer',
        text: 'This is the message body of the email.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

}

const postUserData = async (req, res) => {
    try {
        const { name, address, phone, email, password } = req.body;
        const addUser = new userModel({ name, address, phone, email, password })
        const saveForm = await addUser.save()
        await addUser.generateToken()
        res.send("Added")
    } catch (error) {
        console.log(error)
    }
}


const getUserData = async (req, res) => {

    try {
        const data = await userModel.find({});
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}


const deleteUserData = async (req, res) => {

    try {
        const data = await userModel.find({});
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { postUserData, getUserData, deleteUserData }
