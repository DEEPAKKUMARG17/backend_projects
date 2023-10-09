const mongoose=require('mongoose');
require('dotenv').config();
const DetailsSchema=mongoose.Schema({
    "livestateId": String,
    "host": String,
    "ip": String,
    "userId": String,
    "ctime": String,
    "createdAt": String,
    "updatedAt": String
})
const CpuSchema=mongoose.Schema({
    "details": String,
"percent_used": Number
})
const Cpu_loadSchema=mongoose.Schema({
    "time": String,
"time_str": String,
"total1": String,
"total5": String,
"total": String,
"warn": String,
"crit": String,
"cpuArr": String
})
const Ram_Schema=mongoose.Schema({
    "details": String,
"percent_used": Number,
"used": Number,
"used_unit": String,
"total": Number,
"total_unit": String,
})
const Throughput_dataSchema=mongoose.Schema({
    "time": String,
"time_str": String,
"read_data": String,
"write_data": String
})
const No_Of_ThreadsSchema=mongoose.Schema({
    "time": String,
"time_str": String,
"thread_data": String
})
const Lama__app_FailureauthSchema=mongoose.Schema({
    "time": String,
"time_str": String,
"timekey": Number,
"count": Number
})
const Lama_app_LatencySchema=mongoose.Schema({
    "time": String,
"time_str": String,
"timekey": Number,
"max": Number,
"min": Number,
"avg": Number,
"med": Number
})
const Tcp_ConnectionSchema=mongoose.Schema({
    "time":String,
"time_str": String,
"established": String,
"time_wait": String,
"listen": String

})
const Up_TimeSchema=mongoose.Schema({
    "last_time": String,
"details": String
})
const hhdSchema=mongoose.Schema({
    "_id": String,
"path": String,
"details": String,
"percent_used": Number,
"used": Number,
"total": Number,
"used_unit": String,
"total_unit": String
});
const InterfaceSchema=mongoose.Schema({
    "in_bandwidth": String,
"out_bandwidth": String,
"inunicast": String,
"outunicast": String,
"inMulticast": String,
"outMulticast": String,
"inErr": String,
"outErr": String,
"_id": String,
"interfaceName": String,
"time": String,
"time_str": String

})

const Details=mongoose.model(`${process.env.COLLECTION1_NAME}`,DetailsSchema);
const Cpu_Info=mongoose.model(`${process.env.COLLECTION2_NAME}`,CpuSchema);
const CpuLoad_Info=mongoose.model(`${process.env.COLLECTION3_NAME}`,Cpu_loadSchema);
const Ram=mongoose.model(`${process.env.COLLECTION4_NAME}`,Ram_Schema);
const Throughput_Data=mongoose.model(`${process.env.COLLECTION5_NAME}`,Throughput_dataSchema)
const Io_Operation_Data=mongoose.model(`${process.env.COLLECTION6_NAME}`,Throughput_dataSchema)
const Disk_Average_Wating_Data=mongoose.model(`${process.env.COLLECTION7_NAME}`,Throughput_dataSchema)
const No_Of_Threads_Data=mongoose.model(`${process.env.COLLECTION8_NAME}`,No_Of_ThreadsSchema)
const Lama_app_Failureauth_Data=mongoose.model(`${process.env.COLLECTION9_NAME}`,Lama__app_FailureauthSchema)
const Lama_app_Latency_Data=mongoose.model(`${process.env.COLLECTION10_NAME}`,Lama_app_LatencySchema)
const Lama_app_Throughput_Data=mongoose.model(`${process.env.COLLECTION11_NAME}`,Lama_app_LatencySchema)
const Tcp_Connection_Data=mongoose.model(`${process.env.COLLECTION12_NAME}`,Tcp_ConnectionSchema)
const Up_Time_Data=mongoose.model(`${process.env.COLLECTION13_NAME}`,Up_TimeSchema)
const hhd_Data=mongoose.model(`${process.env.COLLECTION14_NAME}`,hhdSchema)
const Inerface_Data=mongoose.model(`${process.env.COLLECTION15_NAME}`,InterfaceSchema)
module.exports = {Details,Cpu_Info,CpuLoad_Info,Ram,Throughput_Data,Io_Operation_Data,Disk_Average_Wating_Data,No_Of_Threads_Data,Lama_app_Failureauth_Data,Lama_app_Throughput_Data,Lama_app_Latency_Data,Tcp_Connection_Data,Up_Time_Data,hhd_Data,Inerface_Data}
