// const tinderUser = new Object() ---> SingleTon object
// const tinderUser = {} ----> Non singleton object
const tinderUser = {}

tinderUser.id = 123
tinderUser.name = "sachin"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUSer = {
  email: "someemail@gmail.com",
  fullName: {
    fname: "Sachin",
    lName: "Upadhyay"
  }
}

// console.log(regularUSer.fullName?.fname);


const obje1 = {
  1: "a",
  2: "b"
}

const obje2 = {
  3: "c",
  4: "d"
}

const obje3 = {
  4: "e",
  5: "f"
}

// const obj = Object.assign({}, obje1, obje2,obje3)
const obj = {...obje1,...obje2,...obje3}
console.log(obj);

const users = [
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:2,
    email:"g@gmail.com"
  },
  {
    id:3,
    email:"d@gmail.com"
  },
]

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));