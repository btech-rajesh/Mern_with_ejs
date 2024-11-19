let f=require('figlet')
f('Rajesh pachauri' ,(err,data)=>{
if(err){throw err};
console.log(data)
})

let color=require('colors');
 
console.log('Rajesh Pachauri'.green); // outputs green text
console.log('Rajesh Pachauri'.underline.red) // outputs red underlined text
console.log('Rajesh Pachauri'.inverse); // inverses the color
console.log('Rajesh Pachauri'.rainbow); // rainbow
console.log('Rajesh Pachauri'.trap); // Drops the bass