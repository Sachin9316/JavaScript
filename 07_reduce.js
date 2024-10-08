const myNums = [1,2,3,4]

const total = myNums.reduce((acc, currval)=> acc + currval , 0)

// console.log(total);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 2999
  },
  {
    itemName: "Android Course",
    price: 5999
  },
  {
    itemName: "Java Course",
    price: 1599,
  },
]

const shoppingTotal = shoppingCart.reduce((acc,item)=> (acc + item.price) , 0)
console.log(shoppingTotal);