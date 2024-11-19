const express=require('express')
const app=express();


//adding app.use
//without path i.e for all incoming request as path is optional in use application
// app.use((req,res)=>{//middleware function .use()//call back fun

//     //when i am sending the req to server it have 2 obj and in return it gives res
//     // console.log(req);
//     // console.log(res);
//     console.log('u made a req akshay')
//     res.send('<h1>Rajesh pachauri</h1>')//for sending response to user from the server 

// })

//giving path to use method which is for specific path only 

app.use('/middleware',(req,res)=>{//middleware function .use()//call back fun

    //when i am sending the req to server it have 2 obj and in return it gives res
    // console.log(req);
    // console.log(res);
    console.log('u made a req at specific middleware')
    res.send('<h1>server specific path pr hi chl rha h bs</h1>')//for sending response to user from the server 

})




const port=8080;
app.listen(port,()=>{
    console.log('server is connected at port 8080');
})