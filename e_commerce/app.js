const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const seedDB=require('./seed');
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');

const productRoutes = require(path.join(__dirname,'./routes/product'));
const reviewRoutes = require('./routes/review');


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




app.engine('ejs',ejsMate);//to see ejs file using ejs-mate engine
app.set('view engine','ejs');//to see views files
app.set('views',path.join(__dirname,'./views'));//views folder
app.use(express.static(path.join(__dirname,'public')));//public folder
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));




app.use(productRoutes);//so that har incoming request pe 
app.use(reviewRoutes);










app.listen(8000,()=>{
    console.log("server is connected at port 8000");
})