const express = require('express');
const app = express();
const router=require('./routes/router')
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
app.use(bodyParser.json());
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(`${process.env.DB_NAME}`,{useNewUrlParser: true})
app.use('/',router)
app.listen(8000,()=>
{
console.log('listening on')
})