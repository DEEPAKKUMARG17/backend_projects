const mongoose = require('mongoose');
require('dotenv').config()
const UserSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    full_name:String,
    age:Number,
    dob:String,
    address:String,
    usernames:String,
    password:String,
    confirm_password:String
})
const User=mongoose.model(`${process.env.DB_COLLECTION}`,UserSchema);
module.exports =User;