//question if no div by 3=<fixx and by 5=buzz
// const n=20;
// for(let i =0;i<=n;i++ ){
//      if(i%3 ==0 && i%5==0){
        // console.log("fizz && buzz")
    // }
    // if(i%3==0){
        // console.log("fizz");
    // }
    //  if(i%5==0){
        // console.log("buzz");
    // }
   
    //  if(i%3 !=0 && i%5!=0){
        // console.log(i);
//     }
// }


//aproch2 -->little approch

// function fizzbuzz2(n){
// for(let i=1;i<=n;i++){
//     let str="";
//     if(i%3===0){
//         str+="fizz";
//     }
//     if(i%5===0){
//         str+="buzz";
//     }
//     if(str===""){
//         str+=i;
//     }
// console.log(str);
// }
// }
// fizzbuzz2(20);


//approch 3=>most optimised till date
function fizzbuzz3(n){
    let cnt3=1;
    let cnt5=1;
for(let i=1;i<=n;i++){
    let str="";
    if(cnt3==3){
        str+="fizz";
        cnt3=0;

    }
    if(cnt5==5){
        str+="buzz";
        cnt5=0;
    }
    if(str==""){
        str+=i;
        // i+1;
    }
    console.log(str);
    cnt3++;
    cnt5++;
}

}
fizzbuzz3(20);