// let arr=process.argv//this process obj returns an array
// let arr=process.argv.slice(2);
// console.log(arr);

const { lstat } = require("fs");

//aplly loop using process obj argv
// for(const i of arr){
// console.log(`hello supriya ${i}`);
// }
// node index.js 'rajesh' 'punit' 'somya'


//applying loop for argv
// let arr=process.argv.slice(2);// without the use of slice as argv no 2 is not fixed it can be differ

const arr=parseInt(process.argv.pop())//here pop willl provide a number not a string but for good case we use parseInt
// console.log(`arr last value is ${arr}`);
for(let i=0;i<=arr;i++){
    console.log(`No is=>${i}`)
}


