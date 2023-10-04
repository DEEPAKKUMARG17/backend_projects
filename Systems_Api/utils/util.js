const API_URL = process.env.API_URL;
const axios=require('axios');

const genvalue=async()=>
{
    try{
    return await axios.get(API_URL);
    }
    catch(err)
    {
        return err.message
    }
}
module.exports={genvalue};