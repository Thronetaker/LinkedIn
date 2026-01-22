import mongoose from "mongoose";

const CommmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    body: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment",CommentSchmea);
export default Comment;
