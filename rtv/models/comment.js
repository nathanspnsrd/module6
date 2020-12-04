const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  username: {
    type: Schema.Types.String,
    ref: "User",
    required: true,
  },
  commentBody: {
    type: String,
    required: true
  },
  commenterID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  issueID: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)