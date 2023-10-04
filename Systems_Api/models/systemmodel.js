
const mongoose = require("mongoose");
require("dotenv").config()

const SystemSchema= new mongoose.Schema({
"_id": String,
"ip": String,
"env_type": String,
"datacenter": String,
"application": Boolean,
"database": Boolean,
"system": Boolean,
"network_web": Boolean,
"network_oms": Boolean,
"network_rms": Boolean,
"network_ex_adptr": Boolean,
"exchange": {
"nse": Number
},
"is_enabled": Boolean,
"in_system": Array,
"in_network": Array,
"in_application": Array,
"in_database": Array,
"is_deleted": Boolean,
"createdAt": String,
"updatedAt": String,
})
const WebLogSchema=mongoose.Schema({
    
        "log_type": String,
        "server_db_credential":Object,
        "auth_error": Object,
        "trade_error": Object
    
})
const DbLogSchema=mongoose.Schema({
    "ip": String,
    "password": String,
    "port": String,
    "host": String,
    "username": String,
    "type": String,
    "instance_type":String
})
const SystemLog=mongoose.model(`${process.env.COLLECTION1_NAME}`,SystemSchema);
const WebLog=mongoose.model(`${process.env.COLLECTION2_NAME}`,WebLogSchema);
const OmsLog=mongoose.model(`${process.env.COLLECTION3_NAME}`,WebLogSchema);
const RmsLog=mongoose.model(`${process.env.COLLECTION4_NAME}`,WebLogSchema);
const DbLog=mongoose.model(`${process.env.COLLECTION5_NAME}`,DbLogSchema);
const adptrLog=mongoose.model(`${process.env.COLLECTION6_NAME}`,WebLogSchema);
module.exports = {SystemLog,WebLog,OmsLog,RmsLog,DbLog,adptrLog}