const mongoose = require('mongoose');
require('dotenv').config()
const CommentSchema=mongoose.Schema({
    comment_id:Number,
    body:String,
    post_id:Number,
    user:{
        user_id:Number,
        username:String
    }
})
const UserCommentSchema=mongoose.Schema({
    // user:Object
    user_id:Number,
    username:String
 
})
const Comment=mongoose.model(`${process.env.COLLECTION1_NAME}`,CommentSchema);
const UserComment=mongoose.model(`${process.env.COLLECTION2_NAME}`,UserCommentSchema);
module.exports = {Comment,UserComment}