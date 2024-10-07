// nested Scope

function one() {
  const username = "sachin"

  function two() {
    const website = "youtube"
    console.log(username);
  }

  // console.log(website);

  two()
}

// one()

if (true) {
  const username = "sachin"

  if (username === "sachin") {
    const website = "Youtube"
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
}

console.log(addTwo(10));