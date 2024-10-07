function name(){
  console.log("Sachin");
}

name()

function addTwoNum(a,b){
  return a+b;
}
// addTwoNum(5,6)
// console.log(addTwoNum(5,"5"));

const result = addTwoNum(4,5);

console.log(result);

function loginUser(username = "Hitesh") {
  if(!username) {
    console.log("pls enter a username");
    return;
  }
  return `${username} just logged in!!!`
}

console.log(loginUser("sachin"));