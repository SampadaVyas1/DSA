// left roatet the array by one

//o(n)
let arr = [1, 2, 3, 4, 5];
let temp = arr[0];
for (let i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}
arr[arr.length - 1] = temp;

console.log(arr);

//left roatet the array by d places
arr = [1, 2, 3, 4, 5];
let d = 3;
for (let i = 0; i < d; i++) {
  let temp = arr[0];
  for (let j = 1; j < arr.length; j++) {
    arr[j - 1] = arr[j];
  }
  arr[arr.length - 1] = temp;
}
// console.log(arr);

//what if d=7
arr = [1, 2, 3, 4, 5];
d = 3;
let newArr = arr.slice(0, d);
let oldArr = arr.slice(d, arr.length);
console.log(oldArr.reverse());
console.log(newArr.reverse());

const sum = [...newArr, ...oldArr];
console.log(sum.reverse());

