const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Enter a good title."]
    },
    body: {
        type: String,
        trim: true,
        required: [true, "Tell us what do you want to say."]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // creator: {
    //     type: mongoose.Schema.ObjectId,
    //     // ref: 'userInfo'
    // }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)
const Post = mongoose.model('Post', postSchema)

module.exports = Post