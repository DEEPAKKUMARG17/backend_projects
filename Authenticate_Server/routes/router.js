const express = require('express');
const controller=require('../controllers/controller')
const router=express.Router();
router.get('/viewalluserdetails',controller.view_all_users);
// router.get('/registeruser',controller.register_user);
router.post('/modifyusers/:name',controller.modify_users);
router.post('/viewsingleuser',controller.view_single_users);
router.post('/viewsingleuserdetails',controller.view_single_details)
module.exports = router;
