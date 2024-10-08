const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "Ruby",
};

// for (const key in myObject) {
//   console.log(myObject[key]);
// }


const myArr = ['java','ruby','python']

// for(const key in myArr) {
//   console.log(myArr[key]);
// }

// myArr.forEach(element => {
//     console.log(element);
// });

// myArr.forEach((i, index , arr)=> {
//   console.log(i , index , arr);
// })

const coding = [
  {
    lname:"upadhyay",
    fname:"Sachin"
  },
  {
    lname:"patel",
    fname:"Tushar"
  },
  {
    lname:"Thakur",
    fname:"Manish"
  },
]

coding.forEach((i)=> {
  console.log(i.fname);
})