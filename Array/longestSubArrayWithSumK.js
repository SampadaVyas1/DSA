//longest sub array with sum k
const arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
// k = 3;
// let sum = 0;
// let count = 0;
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   count++;
//   if (sum === k) {
//     if (count > max) {
//       max = count;
//     }
//     count = 0;
//     sum = 0;
//   }
// }

// console.log(max);

//hashing

// let sum = 0;
// let length = 0;
// let obj = {};
// let k = 3;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   obj[i] = sum;
//   if (sum % 3 == 0) {
//     console.log(i - (i - 1));
//     length = Math.max(length, i - (i - 1));
//   }
//   if (k == sum) {
//     length = i + 1; //3
//   }
// }
// console.log(obj);
// console.log(length);

let str = "abcdefg";

// console.log(str.split(""),join());
let newArray = [];
let split = 2;
if (str.length % 2 === 0) {
  for (let i in str) {
    if (i % 2 === 0) {
      newArray.push(str.slice(i, split));
      split = split + 2;
    }
  }
} else {
  for (let i in str) {
    if (i == str.length - 1) {
      // console.log("first");
      newArray.push(`${str[i]}_`);
    } else if (i % 2 === 0) {
      newArray.push(str.slice(i, split));
      split = split + 2;
    }
  }
}
console.log(newArray);
