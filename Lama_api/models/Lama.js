const mongoose = require("mongoose");
require("dotenv").config()
const db1 = mongoose.createConnection(process.env.DB_NAME1, { useNewUrlParser: true});
const db2 = mongoose.createConnection(process.env.DB_NAME2, { useNewUrlParser: true});

const SystemSchema= mongoose.Schema({
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

const LamaSchema=mongoose.Schema({
"error":String,
"system":Object
})
const SystemLog=db2.model(`${process.env.COLLECTION2_NAME}`,SystemSchema);
const LamaData=db1.model(`${process.env.COLLECTION1_NAME}`,LamaSchema);
module.exports={SystemLog,LamaData}





