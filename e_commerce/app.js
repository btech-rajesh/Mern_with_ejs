const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const seedDB=require('./seed');
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');
const flash=require('connect-flash');//this is uses for pop notify
const session=require('express-session')

const productRoutes = require(path.join(__dirname,'./routes/product'));
const reviewRoutes = require('./routes/review');
const { resolveAny } = require('dns');


mongoose.connect('mongodb://127.0.0.1:27017/shoping')
    .then(()=>{
        console.log("Db connected succesfully")
    })

    .catch((err)=>{
        console.log("Db error",err);
    })

    //seeding Databse DB
    //due to nodemon bar bar seed hoga as nodemon auto change save and run
    //so i ek bar chalke rok dunga
    // seedDB();

    let configSession={//i will not run this only define sesion here
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        
      }


app.engine('ejs',ejsMate);//to see ejs file using ejs-mate engine
app.set('view engine','ejs');//to see views files
app.set('views',path.join(__dirname,'./views'));//views folder
app.use(express.static(path.join(__dirname,'public')));//public folder
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session(configSession));//sesion middleware
app.use(flash());//flash middleware 
app.use((req,res,next)=>{//these middleware are for the flash messges
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})





app.use(productRoutes);//so that har incoming request pe 
app.use(reviewRoutes);










app.listen(8000,()=>{
    console.log("server is connected at port 8000");
})