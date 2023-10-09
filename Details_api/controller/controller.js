const {Details,Cpu_Info,CpuLoad_Info,Ram,Throughput_Data,Io_Operation_Data,Disk_Average_Wating_Data,No_Of_Threads_Data,Lama_app_Failureauth_Data,Lama_app_Throughput_Data,Lama_app_Latency_Data,Tcp_Connection_Data,Up_Time_Data,hhd_Data,Inerface_Data}=require('../models/detailsmodel')
const axios = require('axios')
const utils=require('../utils/util')
exports.storemachinedetails=async(req,res)=>
{
    let response = await utils.sendRequest('details')
    res.send(response.data)
    Details.create( {"livestateId": response.data.data.livestateId,
    "host": response.data.data.host,
    "ip": response.data.data.ip,
    "userId": response.data.data.userId,
    "ctime": response.data.data.ctime,
    "createdAt": response.data.data.createdAt,
    "updatedAt": response.data.data.updatedAt})
}
exports.storecpudetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Cpu_Info.create(response.data.data.cpu);
       if(data) res.send(data)
    }
    
}
exports.storecpuloaddetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await CpuLoad_Info.create(response.data.data.cpu_load);
       if(data) res.send(data)
    }
    
}
exports.storeramdetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Ram.create(response.data.data.ram);
       if(data) res.send(data)
    }
    
}
exports.storethroughputdetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Throughput_Data.create(response.data.data.disk_io_summary.throughput_data);
       if(data) res.send(data)
    }
    
}
exports.storeiooperationdetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Io_Operation_Data.create(response.data.data.disk_io_summary.io_operations_data);
       if(data) res.send(data)
    }
    
}
exports.storediskwaitingdetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Disk_Average_Wating_Data.create(response.data.data.disk_io_summary.disk_average_wait_data);
       if(data) res.send(data)
    }
    
}
exports.storenoofthreaddetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await No_Of_Threads_Data.create(response.data.data.no_of_thread);
       if(data) res.send(data)
    }
    
}
exports.storelamfailureauthdetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Lama_app_Failureauth_Data.create(response.data.data.lama_app_failureauth);
       if(data) res.send(data)
    }
    
}
exports.storelamlatencydetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Lama_app_Latency_Data.create(response.data.data.lama_app_latency);
       if(data) res.send(data)
    }
    
}
exports.storelamthroughputdetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Lama_app_Throughput_Data.create(response.data.data.lama_app_throughput);
       if(data) res.send(data)
    }
    
}
exports.storetcpconnection=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Tcp_Connection_Data.create(response.data.data.tcp_connection);
       if(data) res.send(data)
    }
    
}
exports.storeuptimedetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Up_Time_Data.create(response.data.data.up_time);
       if(data) res.send(data)
    }
    
}
exports.storhhddetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await hhd_Data.create(response.data.data.hhd);
       if(data) res.send(data)
    }
    
}
exports.storeinterfacedetails=async(req,res)=>
{
    let response = await utils.sendRequest('details');
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }else{
      
       let data=await Inerface_Data.create(response.data.data.interface);
       if(data) res.send(data)
    }
    
}