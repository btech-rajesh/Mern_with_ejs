//file 2
//require is an methid/fun
// require('index.js')//same
// let math=require('./index')// './' it act as module file now  of index.js file using require
// console.log(math);

// console.log(math.pi);
// console.log(math.ans1(5));
// console.log(math.ans2(484,928));



//destructure =>in this i will pass the same parameters of index file which is of the key 
// let {pii:Hello,ans11,ans22}=require('./index');


// console.log(pii);//it will take updated things object
// console.log(Hello);
// console.log(ans11(5));
// console.log(ans22(484,928));

let ans=require('./index');
console.log(ans);