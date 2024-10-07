const user = {
  username: "Sachin",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  }

}

// user.welcomeMessage()
// user.username = "Manish"
// user.welcomeMessage()

// console.log(this);

// function one(){
//   console.log(this);
// }

// one()

const chai = () => {
  console.log("Sachin");
}

// chai()

// const add = (num1, num2) => {
//   return num1 + num2;
// }
// const add = (num1, num2) => num1 + num2;

const add = (num1, num2) => (num1 + num2);

console.log(add(5, 2));