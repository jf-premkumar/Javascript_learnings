// // The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// // Array Declarations:
// //1. Array literal notation
// const fruits = ["Apple", "Banana"];

// console.log(fruits.length); // 2
// console.log(fruits[0]); // "Apple"

// //2. Array constructor with a single parameter
// const fruits = new Array(2);

// console.log(fruits.length); // 2
// console.log(fruits[0]); // undefined

// const fruits = new Array("Apple", "Banana");

// console.log(fruits.length); // 2
// console.log(fruits[0]); // "Apple"

// Array.prototype[@@iterator]() : The @@iterator method of an Array object implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an iterator that yields the value of each index in the array.

// let cars = ["tata", "honda", "kia"];
// let iterator = cars[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// Array.prototype.at() : The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.at(2));
// console.log(arr.at(-2));

// Array.prototype.concat() : The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let arr1 = [1, 2, 3];
let arr2 = [-4, -5, -6];
console.log(arr1.concat(arr2));
