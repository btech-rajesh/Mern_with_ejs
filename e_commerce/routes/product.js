const express=require('express');
const Product = require('../models/Product');
const router=express.Router();//mini intance to use routers in place of app
const Review=require('../models/Review');
const {validateProduct}=require('../middleware');
//now i wiill use this middle for new product to add on



//routers is a method a mini instance
//to show all the product 
router.get('/products',async (req,res)=>{
    try{
let products=await Product.find({});//use this to diplay all products
    res.render('products/index',{products});
    }
    catch(e){
        res.status("500").render('error',{err:e.message});
    }
})

router.get('/product/new',(req,res)=>{//this route will pass in anchor tag for navbar speciality
res.render('products/new');
})


//to add the product in products

router.post('/products',validateProduct, async(req,res)=>{
    try{
let {name,img,price,desc}=req.body;
await Product.create({name,img,price,desc});
res.redirect('/products') 
    
}
catch(e){
    res.status("500").render('error',{err:e.message});
}



});

//task 4=>to info about one particular product
router.get('/products/:id',async(req,res)=>{
    try{
    // next();
    let {id}=req.params;
    let foundProduct=await Product.findById(id).populate('reviews');
        
        res.render('products/show',{foundProduct});       
    }
    catch(e){
        res.status("500").render('error',{err:e.message});
    }
        
})


//task-5=show edit form of one Product
router.get('/products/:id/edit',async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById((id));
    
    res.render('products/edit',{foundProduct});//to view the page and render the object to edit.ejs using {}
}
catch(e){
    res.status("500").render('error',{err:e.message});
}


})

// task=6 actually editing the form not all so i used patch
router.patch('/products/:id'validateProduct,async(req,res)=>{
    try{
        let {id}=req.params;
    let{name,img,price,desc}=req.body;//to decontruct thsese field from req.body
    //update the db
    await Product.findByIdAndUpdate(id, {name,img,price,desc});
        //pass the currect ID from params
        //it accept two parameters

    res.redirect(`/products/${id}`);// i have to update it using the id 
}
catch(e){
    res.status("500").render('error',{err:e.message});
}
});

// task=7 to delete the blog from form

router.delete('/products/:id',async (req,res)=>{
    try{
    let{id}=req.params;//extract id 
    //here i m del the review of obj first then obj to save storage
    const product=await Product.findById(id);//product find

    //ek ek krke del krungs using loop produc ki entries dele krungs
    // for(let id of product.reviews){
        // let product=Product.findById(id);
        // for(let id of product.reviews){
        //    await  Review.findByIdAndDelete(id);
        // }
    //  await  Review.findByIdAndDelete(id);
    // }

      await  Product.findByIdAndDelete(id);
    res.redirect('/products');
    }
catch(e){
    res.status("500").render('error',{err:e.message});
}
});

router.delete('/products/:productId/reviews/:reviewId',async(req,res)=>{
    try{
    const{productId,reviewId}=req.params;
    await Product.findByIdAndUpdate(productId,{$pull:{reviews:reviewId},});

    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/products/${productId}`);
}
catch(e){
    res.status("500").render('error',{err:e.message});
}
});







module.exports=router;// to use this in mainfile i.e app.js uske bad sb m jata h
