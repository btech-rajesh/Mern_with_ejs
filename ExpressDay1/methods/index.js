const express=require('express');
const app=express();




//get -bydefalut method

app.get('/',(req,res)=>{  //Path,cb  //route='/'
    res.send('<h3>ye mera "/" path hai</h3>')
})
app.get('/cat',(req,res)=>{  //Path,callback function
    res.send('<h3>ye mera "/cat" path hai</h3>')
})

app.get('/dog',(req,res)=>{  //Path,cb
    res.send('<h3>ye mera "/dog" path hai</h3>')
})

//invalid path route
app.get('*',(req,res)=>{
    res.send('abey saale')
    })
    


const port=8090;
app.listen(port,()=>{
    console.log('server is connected at port 8090');
})