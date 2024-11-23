const mongoose=require('mongoose');


//schema blur-print-
const productSchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true,//extra sapcing will be removed from name
        required:true
    },
    img: {
        type:String,
        trim:true,
        // default:
    },
    price:{
        type:Number,
        min:0,
        required:true

    } ,
    desc: {
        type:String,
        trim:true,
    },

})


//Schema for the model
let Product=mongoose.model('Product',productSchema);

//to use this product i need to exports this means two js file interchage something\


module.exports=Product;

