const express = require('express');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const router=require('./router/router')
require('dotenv').config()
mongoose.connect(`${process.env.DB_NAME}`,{useNewUrlParser: true})
app.use('/',router)
app.listen(8000,()=>
{
    console.log('listening on')
});