const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newArr = myNum.map((num)=> num + 10)

const newArr = myNum.map((num)=> num * 10).filter((i)=> i >= 50)
console.log(newArr);