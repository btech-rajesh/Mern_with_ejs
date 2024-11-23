const express=require('express');
const Product = require('../models/Product');
const router=express.Router();//mini intance to use routers in place of app


//routers is a method a mini instance
router.get('/products',async (req,res)=>{
let products=await Product.find({});//use this to diplay all products
    res.render('products/index',{products});
})


module.exports=router;// to use this in mainfile i.e app.js uske bad sb m jata h
