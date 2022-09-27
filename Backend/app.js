const  axios  = require("axios");
const express=require("express");
const app=express();
const port =3000

 
app.get('/tweets',(req,res)=>{
    //console.log(req.query); 
    const query=req.query.q;
    const count=req.query.count;
    const url="https://api.twitter.com/1.1/search/tweets.json";
    axios.get(url,{ 
        headers:{
        "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAACeidwEAAAAAI%2BHGoNMbIqG0yj%2F24S68cHtlYo8%3DtQlbsK0J4bWiEHpUr1vWdAXo84qsUbOTpDb5N7248UaVYf7pAA",
    },

        params:{
            q:query,
            count:count
        }
       
    }).then((response)=>{
       console.log(response);
        // res.send(response.data);  
    }).catch((error)=>{
        res.send(error);
    })

    res.send("hello");
})

app.listen(port,()=> console.log(`Twitter on port${port}`));