const {
    generateURL,
    sendRequest,
    LoginRequest
}=require('../utils/util')
const {SystemLog,}=require('../models/Lama')
exports.login=async(req,res)=>
{
  const data = await LoginRequest()
  res.send(data)
}
exports.sendData=async(req,res)=>
{
    const fetchdata=await sendRequest('metrics/hardware')
    res.send("data is stored successfully");
}
