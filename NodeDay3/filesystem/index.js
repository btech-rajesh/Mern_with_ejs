let fs=require('fs');
// console.log(fs.readfile);

//we will perform CRUD(create,read,update,delete)

//CREATE or write
// fs.writeFile('abc.text',data,optional parameters=>{},callbackfunction)
// fs.writeFile('abc.text',data,{},callbackfunction)


// let data1='rajesh photo bhej d bhai and hd m'
// fs.writeFile('abc.txt',data1,{
//     //in this mention 2 things as a object

//     //1 encoding->
//     encoding:'utf-8',

//     //2 ->
//     flag:'w',
// },(err)=>{//call back fun throw err have parameter
//     if(err){throw err}
//     // console.log("file written succesfully")
    
// })


// or second method for the same purpose 
// js is synchronous

// let data2="tu hi h meri heer and changed data";
// fs.writeFileSync('abc.txt',data2)

//-----------------

//READ
// let data='rajesh photo bhej d bhai and hd m'

// fs.readFile('abc.txt',{
//     encoding:'utf-8',//to avoid buffer-encoding utf-8 and we use utf-8 to get our data in our readable form or workinh data so we use this
//     flag:'r',
// },(err,data)=>{
//     if(err){throw err}
//     console.log(data)
// })

// or
// let data1=fs.readFileSync('abc.txt')

// console.log(data1.toString())//tostring also avoid buffer 

// --------------------------------------------


//UPDATE
// fs.appendFile('abc.txt',' rajesh hi h raja',(err)=>{
//     if(err){throw err}

    // console.log('update kr diya h ')
// })

// or
// fs.appendFileSync('abc.txt','m distrub ho rha hu')

// -------------------------------------------

DELETE
fs.unlink('abc.txt',(err)=>{
if(err){throw err
   
}
console.log('file delete succefully')
})

//or 
fs.unlinkSync('abc.txt');
console.log('delete succefully')