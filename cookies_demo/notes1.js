// -----------------------------------------------


//          cookies and sesion

//cookies->
//it is client side storage not in server side storage
//key-value pair

//q->who sent clinet->server or s->client
//ans=>cookies set first ,then sent to all outcoming req ke sath store hota h
//means req ke hisab s set hoga mtlb koi login kra to uske hisab s info dega or signup kra to
//from c->s n req bheja server then s is sending cookies to all req

//ex->for user we store info for buyer or seller need here cokkies 

//cookies->have 3 work-personilastion(i.e darkmode etc),session management,tracking usage

//cookies are stateful(stateful -jo previous req pe depend krte h use sf bolte h);
//package used here cookie-parser


// for this to set a cookie we need a middleware app.use()
//npm cookie-parser see on it


//security provide more cookies(client side storage) and average info stored in this & session(as it is server side storage)and server side stores sensitive info as server side storage are better and more secure
//advance version in cookies which is signed cookies i.e {Bakaar} as cookies are not secure 

//signed cookies package- we get using cookie-parse documentation package


// -----------------
//session-store object key pair
// (stores session Id)<-cookies k andar <-res
// session-it is server side storage and sever allocate some space for sensitive info
//hr req k sath cookies bhi jati hai
//it have session packages i.e express-session



