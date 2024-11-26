
const express=require('express');
const router=express.Router();//mini intance to use routers in place of app
const Product=require('../models/Product');
const Review=require('../models/Review');
const {validateReview}=require('../middleware');


// To post a review
router.post('/products/:id/review',validateReview, async(req, res) => {
    try{
    // console.log('Product ID:', req.params.id);
    // console.log('Form Data:', req.body);
    // res.send('req review');

    let {id}=req.params;
    let{rating,comment}=req.body

   const product=await Product.findById(id);//here review is populate and//here product is find 
   //now we make a review for product using model or js fun
   const review=new Review({rating,comment});

   //in product uske ander array m push for review
   product.reviews.push(review);
   await review.save();
   await product.save();
   res.redirect(`/products/${id}`);
}
catch(e){
    res.status("500").render('error',{err:e.message});
}

});








module.exports=router;// to use this in mainfile i.e app.js uske bad sb m jata h
