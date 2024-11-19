const express=require('express')
const app=express();
const path=require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

//static files ko use krne do
app.use(express.static(path.join(__dirname,'public')));//as this is a middleware which reuired over this 
//we have given path becoz __dirname as we are not at public folder always so.


//to crete route for index.js file
app.get('/',(req,res)=>{
res.render('index');//to show the file of views we use render so i have given path as it also know it defalut path views folder
})










app.listen(8080,()=>{
    console.log("mera server chal gya at 8080")
})