const controller=require('../controller/controller')
const express = require('express');
const router=express.Router();
router.get('/storeuserdetails',controller.storeuserdetails);
router.get('/storecomments',controller.storecomments)
router.get('/success',controller.success)
module.exports = router