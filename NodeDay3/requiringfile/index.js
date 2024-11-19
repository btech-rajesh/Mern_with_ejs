//file 1
let pi=Math.PI;
console.log(pi);

let ans1=(num)=>num*num;
let ans2=(a,b)=>a+b;

console.log(ans1);
console.log(ans2);

//this js file will act as =>export behaviour show krega becoz require dekh liya
//by default exports an empty object{}

// module.exports={};//by default empty obj show

// if a file acting as module if it not export then by defalut it exports an empty obj
 
// module.exports={pi,ans1,ans2};//we can also change the module object from by defalut empty obj to our choice
//hence :-empty obj is override


//hence this is obj so it have key:value
// module.exports={//here key could be anything
//      pii:pi,
//      ans11:ans1,
//      ans22:ans2,
// }

//we can send anything expect using the object
module.exports="rajesh pachauri a web developer";