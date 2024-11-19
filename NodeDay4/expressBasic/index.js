const express=require('express');//express returrn a function 
const app=express();//it stores also a function and return a entire object
//while run it app return entire object=>since it is an instance to our entire application

// console.log(app);

app.listen(8080,()=>{//we can use a ports(2000-9000)
    console.log('my server is connected at 8080 port')//this creates a local host my  machine not over a cloud
})


//by removing a function it will give any response 
// app.listen(8080)//()=>{//we can use a ports(2000-9000)
// //     console.log('my server is connected at 8080 port')//this creates a local host my  machine not over a cloud
// // )}
