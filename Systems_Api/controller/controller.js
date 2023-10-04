const { json } = require("body-parser")
const {SystemLog,WebLog,OmsLog,RmsLog,DbLog,adptrLog}=require("../models/systemmodel")
const utils=require('../utils/util')
exports.storesystemdata=async(req,res)=>
{
    const response = await utils.genvalue()
    if(response?.error)
    {
        console.log("error",response)
        return
    }
    else{
        let data= await SystemLog.find({"_id":response.data.data.setting._id})
        if(data.length==0)
        {
            SystemLog.create({"_id":response.data.data.setting._id,
            "ip": response.data.data.setting.ip,
            "env_type": response.data.data.setting.env_type,
            "datacenter": response.data.data.setting.datacenter,
            "acpplication": response.data.data.setting.application,
            "database": response.data.data.setting.database,
            "system": response.data.data.setting.system,
            "network_web": response.data.data.setting.network_web,
            "network_oms": response.data.data.setting.network_oms,
            "network_rms": response.data.data.setting.network_rms,
            "network_ex_adptr":response.data.data.setting.network_ex_adptr,
            "exchange": {
            "nse": response.data.data.setting.exchange.nse
            },
            "is_enabled":response.data.data.setting.is_enabled,
            "in_system": response.data.data.setting.in_system,
            "in_network": response.data.data.setting.in_network,
            "in_application": response.data.data.setting.in_application,
            "in_database":response.data.data.setting.in_database,
            "is_deleted": response.data.data.setting.is_deleted,
            "createdAt": response.data.data.setting.createdAt,
            "updatedAt": response.data.data.setting.updatedAt})
        }
       
        res.send("System data is insetred")
    }
}
exports.storeweblogdata=async(req,res)=>
{
    const response = await utils.genvalue()
    if(response?.error)
    {
        console.log("error",response)
        return
    }
    else
    {
    WebLog.create({"log_type": response.data.data.setting.meta.web_log.log_type,
    "server_db_credential":JSON.stringify(response.data.data.setting.meta.web_log.server_db_credential),
    "auth_error": JSON.stringify(response.data.data.setting.meta.web_log.auth_error),
    "trade_error":JSON.stringify(response.data.data.setting.meta.web_log.trade_error)})
    }
    res.send("Web log data is inserted successfully");
}
exports.storeosmlogdata=async(req,res)=>
{
    const response = await utils.genvalue()
    if(response?.error)
    {
        console.log("error",response)
        return
    }
    else
    {
    OmsLog.create({"log_type":response.data.data.setting.meta.oms_log.log_type,
    "server_db_credential":JSON.stringify(response.data.data.setting.meta.oms_log.server_db_credential),
    "auth_error": JSON.stringify(response.data.data.setting.meta.oms_log.auth_error),
    "trade_error":JSON.stringify(response.data.data.setting.meta.oms_log.trade_error)})
    }
    res.send("omslog data is inserted successfully")
}
exports.storermslogdata=async(req,res)=>
{
    const response = await utils.genvalue()
    if(response?.error)
    {
        console.log("error",response)
        return
    }
    else{
    RmsLog.create({"log_type":response.data.data.setting.meta.rms_log.log_type,
    "server_db_credential":JSON.stringify(response.data.data.setting.meta.rms_log.server_db_credential),
    "auth_error": JSON.stringify(response.data.data.setting.meta.rms_log.auth_error),
    "trade_error":JSON.stringify(response.data.data.setting.meta.rms_log.trade_error)})
    }
    res.send("rmslog data is inserted successfully")
}
exports.storedblogdata=async(req,res)=>
{
    const response = await utils.genvalue()
    if(response?.error)
    {
        console.log("error",response)
        return
    }
    else
    {
    DbLog.create({  "ip":response.data.data.setting.meta.db_log.ip ,
    "password": response.data.data.setting.meta.db_log.password ,
    "port": response.data.data.setting.meta.db_log.port,
    "host": response.data.data.setting.meta.db_log.host,
    "username": response.data.data.setting.meta.db_log.username,
    "type": response.data.data.setting.meta.db_log.type,
    "instance_type":response.data.data.setting.meta.db_log.instance_type})
    }
    res.send("dblog data is inserted successfully");
}
exports.storeadapterdata=async(req,res)=>
{
    const response = await utils.genvalue()
    if(response?.error)
    {
        console.log("error",response)
        return
    }
    else{
    adptrLog.create({"log_type":response.data.data.setting.meta.ex_adptr_log.log_type,
    "server_db_credential":JSON.stringify(response.data.data.setting.meta. ex_adptr_log.server_db_credential),
    "auth_error": JSON.stringify(response.data.data.setting.meta.ex_adptr_log.auth_error),
    "trade_error":JSON.stringify(response.data.data.setting.meta.ex_adptr_log.trade_error)})
    }
    res.send("adapater data is inserted successfully")
}
