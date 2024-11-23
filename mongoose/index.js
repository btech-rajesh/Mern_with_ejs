const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
//ports 27017 uses best ...18,19 and nobita is our databse name


    .then(() => {
console.log("DB is connected succefuly");
})

.catch((err)=>{
    console.log("error while connecting DB",err);
});


//schema(blue-print)
const moviesSchema=new mongoose.Schema({
    name: String,
    rating: Number,
    year: Number,
    isWatched:Boolean
})

//for models we have convention
//model return class or a js class
//model is always singular
//i.e roducts is wrong product is right
//model 1st letter will be capital i.e Product


//model js class=>
const Movie = mongoose.model('Movie', moviesSchema);
//here 1st para is a singular with capital letter
// In this model is depend on this schema
//  console.log(Movie);

let raja=new Movie({//in this db is have its plural and small letter first auto
    name:"Raja",
    rating:8,
    year:2019,
    isWatched:true,
})
raja.save();//db ke andr ise store kr dega permanently movie obejct ko and we should explicity savr this
console.log(raja);




