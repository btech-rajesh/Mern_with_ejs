const express=require('express');
const app=express();

app.get('/r/:subreddit',(req,res)=>{  //Path,cb  //route='/' // jo bhi m : ke bad likhunga i.e is my subreddit (path parameter)
   console.log(req.params);//to extract  subreddit we use req.params
   //destructring with the same name 
   let { subreddit }=req.params;//here same name is coming
   res.send(`<h1>my route was ${subreddit}</h1>`)
})
// 
const port=8090;
app.listen(port,()=>{
    console.log('server is connected at port 8090');
})