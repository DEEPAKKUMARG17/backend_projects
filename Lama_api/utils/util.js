const API_URL = process.env.API_URL
const API_URL1 = process.env.API_URL1
const { default: axios } = require('axios');
const {SystemLog,LamaData}=require('../models/Lama')

const generateURL = (path) => {
    return `${API_URL}/${path}`
}

const sendRequest = async (path) => {
    let data=await SystemLog.find({},{_id:0})
    try {
       
        return await axios.post(generateURL(path),data)
    } catch (err) {
        return LamaData.create({error: err.message,system:data[0]})
    }

}
const LoginRequest = async (path) => {
    try {
        return await axios.post(API_URL1, {
            "memberId":"06000",
            "loginId":"ApiUser06000",
            "password":"0CxUgThnqlK6gaKU2HnL2A=="
            })
          
    } catch (err) {
        return { token:"qwettyttttyuytuuu" }
    }

}

module.exports = {
    generateURL,
    sendRequest,
    LoginRequest
}