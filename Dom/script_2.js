const parent = document.querySelector('.parent')
// console.log(parent.children[2].innerHTML);

for(let i = 0;i < parent.children.length;i++){
  const ele = parent.children[i].innerHTML;
  // console.log(ele);
}

parent.children[0].style.color = 'orange'
console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);

const day = document.querySelector('.day')
console.log(day.parentElement.innerHTML);