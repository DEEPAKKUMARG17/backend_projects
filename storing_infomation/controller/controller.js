const{Comment,UserComment}=require('../models/comment')
const axios = require('axios')
const utils=require('../utils/util')
exports.storeuserdetails=async(req,res)=>
{
    // UserComment.deleteMany({}).then(()=>
    // {console.log("deleted")})
 
    let response = await utils.sendRequest('comments')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for(var i=0; i<response.data.comments.length; i++)
    {
        
            let data = await UserComment.find({user_id:response.data.comments[i].user.id})

            if(data.length == 0)
            {
                UserComment.create({
                    "user_id": response.data.comments[i].user.id,
                    "username": response.data.comments[i].user.username
                })
            }
        
        
       
    }
    //res.redirect('/success')
    // let data = await Comment.create(response.data.comments);
    // if (data) console.log(data)
    res.send('{ data }')
}
exports.success=(req,res)=>
{
    res.send("data is inserted successfully in mongodb")
}
exports.storecomments=async(req,res)=>
{

  
    let response = await utils.sendRequest('comments')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for(var i=0;i<response.data.comments.length;i++)
    {
        let data = await Comment.find({comment_id:response.data.comments[i].id})
        if(data.length==0)
        {
            let obj={
                comment_id:response.data.comments[i].id,
                body:response.data.comments[i].body,
                post_id:response.data.comments[i].postId,
                user:
                {
                   "user_id": response.data.comments[i].user.id,
                    "username": response.data.comments[i].user.username
                }
            }
                
            Comment.create(obj)
        }
        }
        
     
    // if (data) console.log(data)
    res.send(`{ data }`)
//   res.redirect('/success')
}
