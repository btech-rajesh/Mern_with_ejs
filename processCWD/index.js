
// cwd=>current working directory
let arr1=process.cwd()//as cwd is method/function so ()
// cwd->it will provide where we ,jhan pr khde hain not a index.js 
// kis folder structure s aap run kr rhe ho apne project
// console.log(arr1);


//__dirname
console.log(process.cwd())//kha khade hai
console.log(__dirname)//apka process kha chl rha h 

//question if no div by 3=<fixx and by 5=buzz
const n=20;
for(let i =0;i<=n;i++ ){
     if(i%3 ==0 && i%5==0){
        console.log("fizz && buzz")
    }
    if(i%3==0){
        console.log("fizz");
    }
     if(i%5==0){
        console.log("buzz");
    }
   
     if(i%3 !=0 && i%5!=0){
        console.log(i);
    }
}
