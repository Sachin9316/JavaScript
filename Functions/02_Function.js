function calCulateCartPrice(val1,val2,...num1) {
  return num1 + val1 + val2;
}

console.log(calCulateCartPrice(200,400,500,600,700,800,900));

const user = {
  usrname:"sachin",
  price:199
}

function handleObject(anyObj) {
  console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user)
handleObject({
  username:"Manish",
  price: 299
})

const arr = [200,400,500,100,600]

function AcceptArr(getArr) {
  console.log(`${getArr}`);
}

AcceptArr(arr)