const{productSchema,reviewSchema}=require('./schema_joi');


const validateProduct=(req,res,next)=>{
   const {name,img,price,desc}= req.body
   const {error}=validateProduct.validate({username,img,price,desc});
   if(error){
 return  res.render('error');
   }
   next();

}

const validateReview=(req,res,next)=>{
    const {rating,comment}= req.body
    const {error}=validateProduct.validate({rating,comment});
    if(error){
  return  res.render('error');
    }
    next();
 
}


module.export={validateProduct,validateReview};