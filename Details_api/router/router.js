const controller=require('../controller/controller')
const express = require('express');
const router=express.Router();
router.get('/storemachinedetails',controller.storemachinedetails);
router.get('/storecpudetails',controller.storecpudetails)
router.get('/storecpuloaddetails',controller.storecpuloaddetails)
router.get('/storeramdetails',controller.storeramdetails)
router.get('/storethroughputdetails',controller.storethroughputdetails)
router.get('/storeio-operation-datadetails',controller.storeiooperationdetails)
router.get('/storedisk-waiting-details',controller.storediskwaitingdetails)
router.get('/storeno-of-threads',controller.storenoofthreaddetails)
router.get('/storelam-app-failureauth',controller.storelamfailureauthdetails)
router.get('/storelam-app-latency',controller.storelamlatencydetails)
router.get('/storelam-app-throughput',controller.storelamthroughputdetails)
router.get('/store-tcp-connection',controller.storetcpconnection)
router.get('/store-up-time-details',controller.storeuptimedetails)
router.get('/store-hhd-details',controller.storhhddetails)
router.get('/store-interfaces-details',controller.storeinterfacedetails)

// router.get('/success',controller.success)
module.exports = router