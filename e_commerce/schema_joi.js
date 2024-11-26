const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().required(),
    img:Joi.string().required(),
    price:Joi.string().min(0).required(),
    img:Joi.string().required(),

    
});
const reviewSchema = Joi.object({
    rating:Joistring().min(0).max(5).required(),
    comment:Joistring().required()

    

    
});
module.exports={productSchema,reviewSchema}