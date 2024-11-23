const express=require('express')
const app=express();
const path=require('path');
const methodOverride=require('method-override');
const {v4:uuid}=require('uuid')
//array instead of DB
let comments=[
{    id:uuid(),
    username:"rajesh",
    comment:"tere liye"
},

{    
    id:uuid(),
    username:"raj",
    comment:"bam bam bhole"
},

{    
    id:uuid(),
    username:"raju",
comment:"bohemia tere liye",},

    
{
    id:uuid(),
    username:"rajesh",
    comment:"pesha nasha pyar"
},
]
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(methodOverride('_method'));//methodoverriding and name is same as require and .use and _method ->when i need to mo 



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
    // console.log(id);
    let foundcomment=comments.find((comment)=>comment.id==id)
        console.log(foundcomment);
        res.render('show',{foundcomment});
        
        // console.log(req.params);//param always return and acccept value in string only
        // console.log(`{Username:${foundcomment.username} && comment: ${foundcomment.comment}}`);
        
        
})


//task-5=show edit form of one blog
app.get('/blogs/:id/edit',(req,res)=>{
    let{id}=req.params;
    let foundcomment=comments.find((comment)=>comment.id==id);
    console.log(foundcomment);//will print all the form data for particular id's
    res.render('edit',{foundcomment});//to view the page and render the object to edit.ejs using {}


})

// task=6 actually editing the form not all so i used patch
app.patch('/blogs/:id',(req,res)=>{
    let{id}=req.params;
    let foundcomment=comments.find((comment)=>comment.id==id);
    // res.send('patch request sent');
    let{comment}=req.body;
    foundcomment.comment=comment;//changing allredy change data to newly data
    res.redirect('/blogs');
        

})

// task=7 to delete the blog from form

app.delete('/blogs/:id',(req,res)=>{
    let{id}=req.params;
    console.log(id);
    
    let newArray=comments.filter((comment)=>{return comment.id!=id })//here in this route when the id is match it goes to deleted from the blogs
    comments=newArray;
    res.redirect('/blogs');
})

app.listen(8090, ()=>{
    console.log("server is at 8090");
})