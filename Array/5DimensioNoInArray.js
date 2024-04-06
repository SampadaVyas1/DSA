const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 5;

let arr = [];
for (let i = arr1.length - 5; i < arr1.length; i++) {
  arr.push(arr1[i]);
}

console.log(arr.reverse().join(""));

