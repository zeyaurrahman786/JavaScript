// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  // array ke last me insert hota hai
// myArr.push(7)
// myArr.pop()  // array ke last se ek element remove karta hai

// myArr.unshift(9)  // array ke start me insert hota hai
// myArr.shift()  // array ke start se ek element remove karta hai

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // join sarri value ko string me convert kar deta hai

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


/* A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ] */