//Singalton

//object literals

const jsUSer = {
  name:"sachin upadhyay",
  course:"BCA",
  age:22,
  location:"surat",
  email:"sachin@gmail.com",
  lastLoginDays:["monday","Tuesday"]
}

// console.log(jsUSer.email);
console.log(jsUSer["email"]);

// Object.freeze(jsUSer)
jsUSer.email = "manishChatGPT"

console.log(jsUSer);

jsUSer.greetingss = function() {
  console.log(`hello ${this.name} Good Evening!!!`);
}

console.log(jsUSer.greetingss());