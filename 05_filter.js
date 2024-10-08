// const coding = ['ruby','python','java','javascript']

// const values = coding.forEach((i)=> {
//   // console.log(i);
//   return i;
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((num)=> {
//   return num > 4
// })
// console.log(newNums);

// const newNums = []
// myNums.forEach((i)=> {
//   i > 4 ? (newNums.push(i)) : null
// })

// console.log(newNums);

const books = [
  {title: "The Great Gatsby",genre: "Fiction",publish: "1925",edition: "1st"},
  {title: "To Kill a Mockingbird",genre: "Fiction",publish: "1960",edition: "1st"},
  {title: "The Gallilio",genre: "Dystopian",publish: "1949",edition: "1st"},
  {title: "Moby Dick",genre: "Adventure",publish: "1851",edition: "1st",},
  {title: "War and Peace",genre: "Historical",publish: "1869",edition: "2nd"},
  {title: "Pride and Prejudice",genre: "Romance",publish: "1813",edition: "1st"},
  {title: "The Catcher in the Rye",genre: "Fiction",publish: "1951",edition: "1st"},
  {title: "The Hobbit",genre: "Fantasy",publish: "1937",edition: "1st"},
  {title: "Crime and Punishment",genre: "Psychological Fiction",publish: "1866",edition: "3rd"},
  {title: "Brave New World",genre: "Science Fiction",publish: "1932",edition: "1st"},
];

const fiction = books.filter((bk)=> bk.genre === "Adventure")
fiction.filter((bk)=> bk.publish >= "1850")
// const publish = books.filter((bk)=> bk.publish > 1900)
// const edition = books.filter((bk)=> bk.edition === "1st")

console.log(fiction);
// console.log(publish);
// console.log(edition);
