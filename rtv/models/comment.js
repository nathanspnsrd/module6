const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Issue'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model("Comment", commentSchema)