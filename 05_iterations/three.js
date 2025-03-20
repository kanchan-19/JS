const coding = ["JS", "Java", "Python", "Ruby", "CPP"];

let values = coding.forEach((item) => {
    // console.log(item);
    /* o/p: JS
Java
Python
Ruby
CPP */
})

// console.log(values); // o/p: undefined

values = coding.forEach((item) => {
    // console.log(item);
    return item;
    /* o/p: JS
Java
Python
Ruby
CPP */
})

// console.log(values); // o/p: undefined

// This means that forEach loop doesn't return any value.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.filter((num) => num > 4); // filter() also uses callback like forEach and returns filtered value unlike forEach. Here, num > 4 is condition which is used to filter.
// console.log(newNums); // o/p: [ 5, 6, 7, 8, 9, 10 ]

newNums = myNums.filter((num) => {
    num > 4;
})
// console.log(newNums); // o/p: [] // Here, implicit return is not working as we have used curly braces

newNums = myNums.filter((num) => {
    return num > 4;
})
// console.log(newNums); // o/p: [ 5, 6, 7, 8, 9, 10 ]

const nums = [];
myNums.forEach((num) => {
    if(num > 4){
        nums.push(num);
    }
})
// console.log(nums); // o/p: [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((book) => book.genre === 'History');
//   console.log(userBooks);
userBooks = books.filter((book) => book.publish >= 1995);
// console.log(userBooks);

userBooks = books.filter((book) => book.publish >= 1995 && book.genre === 'History');
// console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newNums = myNumbers.map((num) => num+10); // map iterate over every value unlike filter
// console.log(newNums); 
/* o/p: [
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ] 
*/

newNums = myNumbers.map((num) => num*10).map((num) => num+1); // It's chaining. In chaining, output of one chain will be taken as input in another chain. e.g. - 2nd map will take values which is already multiplied by 10 in 1st map as input and then will perform operation on it.
// console.log(newNums);
/* o/p: [
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]*/

newNums = myNumbers.map((num) => num*10).map((num) => num+1).filter((num) => num >= 40);
console.log(newNums);
/* o/p: [
  41, 51,  61, 71,
  81, 91, 101
] */