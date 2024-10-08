// for loop

// for(let a =1; a <= 10;a++){

//   if(a == 5){
//     console.log("5 is best number");
//   }
//   console.log(a);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`------------------Table of ${i}------------------------`);
//   for(let j = 1;j <= 10;j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

// let myArray = ["sachin","flash",'superman','batman']

// for(let i = 0;i < myArray.length;i++){
//   console.log(myArray[i]);
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if(i == 5){
//     console.log(`detected 5`);
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if(i == 5){
    console.log(`detected 5`);
    continue;
  }
  console.log(`value of i is ${i}`);
}

