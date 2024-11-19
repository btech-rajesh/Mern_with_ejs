const express=require('express')
const app=express();
const path=require('path');

//array instead of DB
let comments=[
{    id:0,
    username:"rajesh",
    comment:"tere liye"
},

{    
    id:1,
    username:"raj",
    comment:"bam bam bhole"
},

{    
    id:2,
    username:"raju",
comment:"bohemia tere liye",},

    
{
    id:3,
    username:"rajesh",
    comment:"pesha nasha pyar"
},
]
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));





app.get('/',(req,res)=>{
    res.render('index meri root h isme');

})

app.get('/blogs',(req,res)=>{
    res.render('index');
})


//get request handles
app.get('/rajesh',(req,res)=>{
    // console.log(req.query());

   console.log( req.query);
    let{username,age}=req.query;
    console.log(username);
res.send('get req send succefully')
})
app.use(express.urlencoded({ extended:true }));// to get form data and it is a middleware for the use of app.body
app.use(express.json());//middleware for the data for body post


//post reuest handle
app.post('/user',(req,res)=>{
    // console.log(req.body);

    //here i have redirect the new object through form 
    let{username,comment}=req.body;
    comments.push({username,comments,id:comments.length})//i need to push the object and decontruct
    res.redirect('/blogs');//use / for redirect 
    res.send('post method k through have same path no matter as method us diffrent')
})

app.listen(8090, ()=>{
    console.log("server is at 8090");
})