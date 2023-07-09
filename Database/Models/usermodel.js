const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        maxlength: 10,
        minlength: 10,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })

//Hashing the password using bcryptjs
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        next()
    }
})

userSchema.methods.generateToken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, "helloguysitsmesandeshmernstackdeveloper")
        this.tokens=this.tokens.concat({token:token})
        this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}
const userModel = new mongoose.model('user', userSchema)

module.exports = userModel


