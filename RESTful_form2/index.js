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


app.use(express.urlencoded({ extended:true }));// to get form data and it is a middleware for the use of app.body
app.use(express.json());//middleware for the data for body post



app.get('/',(req,res)=>{
    res.send('index meri root h isme');

})
//route for blogs task=1
app.get('/blogs',(req,res)=>{
    res.render('index',{comments});
})


// task 2route=blog/new 
//file name new.ejs
app.get('/blog/new',(req,res)=>{
    res.render('new')//here we have to render the view file
})

//task 3 using post method and putting as db 
app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    let{username,comment}=req.body;//to deconstruct the the post mehod and here i have add a new data to the blogs path 
    comments.push({
        username:username,
        comment:comment,
        id:comments.length});
    res.redirect('/blogs');//here use / for redirect 

    // res.send('post method k through data to DB')
})


//task 4=>to info about one particular blog
app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let foundcomment=comments.find((comment)=>comment.id==id)

        res.render('show',{foundcomment});
        console.log(req.params);
        console.log(`{Username:${foundcomment.username} && comment: ${foundcomment.comment}}`);
        
        
})


//task-5=show edit form of one blog
app.get('/blogs/:id/edit',(req,res)=>{
    
})


app.listen(8090, ()=>{
    console.log("server is at 8090");
})