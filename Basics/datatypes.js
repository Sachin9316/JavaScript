// primitive datatype : call by value

// 7 types : String , number , boolean, null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
let userEmail;

const id = Symbol("1230")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 545615545n
console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
  name: "sachin",
  age: 22
}

console.log(myObj.name);
console.log(heros);

const myFunc = function () {
  console.log("hello world");
}

myFunc()

//Reference (Non primitive)

// Array , Objects , Functions


console.log(typeof null); 
console.log(typeof id);