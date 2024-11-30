//Authentication and authorisation

//we will do here using passport.js
//its a tool for nodejs and technique it isnot a middleware for nodejs only

//OAuth-usees facebook,email login purpose for these we have 1000 of staties but we use here passport-local


//for authentication i need user-schema-name,eail,username,password

//we will store password directly-it will be hashed first-it will be stored then 

//to get o/p se i/p directly it is not  a hashing algo so i need a  key for this
//here i have done this SHA technique

//ex-123pass-using hashing function -rajesh-login


//ques=>
//now how will i get the data 123 but in my db is stored only rajesh so tell me how i get 123(pass)


// ---------------------------------------------------------------------
//  ex- 123 (i/p)pass-hashfunction convert-o/p -it will check in db if ur email is matches then login 
//otherwise need authenticate it so any unique identity of a user will act a key i.e-email here in this senario\



//hashing done by-baycrpt(we will se it later)
//but here we will use
//1.passport-passport-local-this is local stategy
//passport-local-mongoose-plm(this is tool) jo hashing m milta h(this is hashing)
//it will store 2 field auto ie. username and password
//ex.-instagram have unique username and password uses as a key there 
//so plm stores these automatically

//so for the schema field i will not put these two things becoz plm add these entity will add into db