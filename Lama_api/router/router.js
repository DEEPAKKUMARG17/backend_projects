const express = require('express');
const controller = require('../controller/controller')
const router =express.Router();
router.get('/login',controller.login)
router.get('/send',controller.sendData)
module.exports=router;