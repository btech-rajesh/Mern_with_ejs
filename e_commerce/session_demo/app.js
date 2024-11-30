const express=require('express');
const app=express();
const session=require('express-session');//for backend server side storage with security




//this is server side storage example 
app.use(session({
    secret: 'keyboard cat',//it can be anyname
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));
  app.get('/',(req,res)=>{
    res.send('welcome to session');
  })

  //to see viewcount
  app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count=1;

    }
    res.send(`u visited the site of ${req.session.count} times`)
  })
  //we can also change the username here
  app.get('/setname',(req,res)=>{
    req.session.username='rajesh pachori';
    res.redirect('/greet');

  })
  app.get('/greet',(req,res)=>{

    let{username="anonymous"}=req.session;
    res.send(`hi from ${username}`);
  })

  
app.listen(8000,()=>{
    console.log("server is connected at port 8000");
})
