// Falsy Value 
// ---> false , 0, -0 , BigInt 0n , null , "" , undefined , NaN

// Truthy Value
// ---> true , "0" , [] , 'false',  {} , 1 , 1n , Infinity , -Infinity , 1.0 

const price = 200;
(price < 180) ? console.log("GEt It For 180") : console.log("Get  it for 200");