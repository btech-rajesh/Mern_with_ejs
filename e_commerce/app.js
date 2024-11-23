const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const seedDB=require('./seed');
const productRoutes =require('./routes/Product');
mongoose.connect('mongodb://127.0.0.1:27017/shoping')
    .then(()=>{
        console.log("Db connected succesfully")
    })

    .catch(()=>{
        console.log("Db error",err);
    })

    //seeding Databse DB
    //due to nodemon bar bar seed hoga as nodemon auto change save and run
    //so i ek bar chalke rok dunga
    // seedDB();





app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));//views folder
app.use(express.static(path.join(__dirname,'public')));//public folder




app.use(productRoutes);//so that har incoming request pe 










app.listen(8080,()=>{
    console.log("server is connected at port 8080");
})