//Union of two sorted array

let arr1 = [1, 1, 2, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5, 6];

const arr = [...new Set([...arr1, ...arr2])];

console.log(arr);
let i = 0;
let union = [];
let j = 0;
while (i < arr1.length || j < arr2.length) {
  if (arr[i] < arr[j] && union[union.length - 1] !== arr[i]) {
    union.push(arr[i]);
    i++;
  } else if (arr[i] !== arr[j]) {
    union.push(arr[j]);
    j++;
    i++;
  }
  i++;
}

console.log(union);
