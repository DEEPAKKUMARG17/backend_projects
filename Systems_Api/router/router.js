const controller=require('../controller/controller.js');
const express = require('express');
const router=express.Router();
router.get('/systemdata',controller.storesystemdata)
router.get('/weblogdata',controller.storeweblogdata)
router.get('/omslogdata',controller.storeosmlogdata)
router.get('/rmslogdata',controller.storermslogdata)
router.get('/dblogdata',controller.storedblogdata)
router.get('/adapterdata',controller.storeadapterdata)
module.exports =router;