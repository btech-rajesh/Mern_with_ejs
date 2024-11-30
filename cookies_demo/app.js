const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser());//this is for cookies

app.use(cookieParser('secret-key'));//this id for unsiged cookies with value



app.get('/',(req,res)=>{
    // let{location,username,mode}=req.cookies;
    // console.log(req.cookies)
    // res.send("this is root cookie");
    // res.send(req.cookies);//all easy cookie get
    res.send(req.signedCookies);//for signed cookie print the secret cookies 
});


//signed cookie
app.get('/getsignedcookies',(req,res)=>{
    res.cookie('bindas','rajesh',{signed:true});//for secure we need a obj to send i.e true in this we not know about key-value pari and no such info is hacked 
    res.send('cookie sent succesfully');//signed true for not seeining anyone my and we send obj true for secure purpose
})



//cooies=>
// since server res the cookie as it a dataset-key-value pair
// app.get('/setcookies',(req,res)=>{
//     res.cookie('mode','dark');//so we use res.cookie() for storing 
//     res.cookie('location','delhi');
//     res.cookie('username','rajesh');
//     res.send('server send you cookies');
    

// });

// app.get('/getcookies',(req,res)=>{
//    let{mode,location,username}= req.cookies;//for dekhne ke liye we use client side
//    res.send(`my name is ${username},i stay in ${location} and i love mode ${mode}`);


// })









app.listen(8080,()=>{
    console.log("server is connected at port 8000");
})