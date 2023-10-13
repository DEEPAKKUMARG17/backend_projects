const express = require('express');
const app= express();
const mongoose= require('mongoose');
const router=require('./router/router');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config()
// mongoose.connect(`${process.env.DB_NAME1}`,{useNewUrlParser: true})
app.use('/',router);
app.listen(8000,()=>
{
    console.log("listening on")
})