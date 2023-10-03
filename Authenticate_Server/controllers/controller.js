const User=require('../models/User_information')
const axios = require('axios');
// User.create({first_name:"hulk",last_name:"Banner",full_name:"Hulk banner",
//     age:47,
//     dob:"17-09-1908",
//     address:"Manchester united",
//     password:"vain",
//     confirm_password:"vain"})
    // exports.register_user=(req,res)=>
    // {
    //     axios.post('')
    // }
exports.view_all_users=(req,res)=>
{
    axios.get('http://localhost:3003/viewalldetails').then(function(response)
    {
        console.log(response.data)
    })

}
exports.modify_users=(req,res)=>{
    var name=req.params.name;
    User.updateOne({username:name},{$set:req.body}).then(()=>
    {
        console.log("updated")
    })
    res.send("updated")
}
exports.view_single_users=(req,res)=>{
    User.find({username:req.body.username}).then((users)=>{
        if(users.length==0)
        {
            res.send("There is no such user")
        }
        else
        {
            res.send(users)
        }
        
    })
}
exports.view_single_details=(req,res)=>{
    User.find({username:req.body.username},{full_name:1,age:1,dob:1,address:1,_id:0}).then((users)=>{
        if(users.length==0)
        {
            res.send("There is no such user")
        }
        else
        {
            res.send(users)
        }
        
        
    })
}
