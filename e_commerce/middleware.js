const{productSchema,reviewSchema}=require('./schema_joi');



//this is middlewae for product

const validateProduct=(req,res,next)=>{
   const {name,img,price,desc}= req.body;//body ke andr sb samana ayega
   const {error}=productSchema.validate({name,img,price,desc});//here i deconstruct-so validate return (value,error)
   if(error){
    // return res.render('error', { err: error.details.map((e) => e.message).join(', ')});
    return res.render('error');
   }
   next();//if there is no error then it goes to next step after validate

}

const validateReview=(req,res,next)=>{
    const {rating,comment}= req.body
    const {error}=reviewSchema.validate({rating,comment});
    if(error){
      // return res.render('error', { err: error.details.map((e) => e.message).join(', ') });   
      return res.render('error');
       }

    next();
 
}


module.exports={validateProduct,validateReview};//use these in prodcut add and edit part so i add these in product 