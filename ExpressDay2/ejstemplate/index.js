const express=require('express')
const app=express();
const path=require('path');

let todo=['wake up', 'go to college','go to gym','follow the same'];

app.set('view engine','ejs');//view engine is set to see the template
//alll files will be made inside a folder nameliy views folder 
// with a extension .ejs as it is an langauge but we call it temp engines

//to change my by default of set () 
// i have used __dirname as i take u to process directly by using path i.e In reddit by putting / it open templates for vies without reloading the page
app.set('views',path.join(__dirname,'views'));//to join __dirname+'/views'; i have use the path.join()

//to make root route  for index file
app.get('/',(req,res)=>{// to view the templete or to see .ejs template/page then we should do res is render
    res.render('index'); //as views is default path in render   

//to make route for random.ejs  file with logic
app.get('/random',(req,res)=>{
    //for the logic part not write in views ejs as it is bad things for developer

    let number=Math.floor (Math.random()*100);

    res.render('random',{number});
    
});

//3rd route-/'todo' for file todo.ejs with logic part
app.get('/todo',(req,res)=>{
    res.render('todo',{todo});
})

    
})

app.listen(8080,()=>{
    console.log("mera server chal gya at 8080")
})