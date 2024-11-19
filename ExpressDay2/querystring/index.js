const express=require('express')

const app=express();

app.get('/search',(req,res)=>{
console.log(req.query);
console.log(req.query.search);//key1 o/p 1
let {search}=req.query//destructure
console.log(search);//o/p 2

// res.send(search);//to stop the gumne wale ko //o/p search ki value jo hogi
// res.send(req.query)
// res.send(req.query.search)

})




app.listen(8080,()=>{
    console.log("mera server chal gya at 8080")
})