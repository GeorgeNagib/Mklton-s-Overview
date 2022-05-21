const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const validator = require("validator")

const userInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Say your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Enter your email ."],
        trim: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phoneNumber: {
        type: String,
        required: [true, "Enter your phone number."],
        validate: [validator.isMobilePhone, "Please provide a valid phone number."]
    },
    twitter: {
        type: String,
        required: [true, "Enter your twitter account link."],
        validate: [validator.isURL, "Please provide your twitter account link. "]
    },
    instagram: {
        type: String,
        required: [true, "Enter your instagram account link."],
        validate: [validator.isURL, "Please provide your instagram account link. "]
    },
    authenticationKey: {
        type: String,
        default: new123
    }
}, {
    timestamps: true
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

const UserInfo = mongoose.model("UserInfo", userInfoSchema)

module.exports = UserInfo;