const express=require('express');
const app=express();

app.use((req,res,next)=>{
// console.log(req);
res.send('<h1> middleware chal gya </h1>')
})
const PORT=8080;

app.listen(PORT,()=>{
    
console.log('server is connect at port');
});
