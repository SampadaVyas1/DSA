// First negative integer in every window of size k
// N = 5
// A[] = {-8, 2, 3, -6, 10}
// K = 2
// Output :
// -8 0 -6 -6

let N = 5;
let a = [-8, 2, 3, -6, 10];
// let a = [12, -1, -7, 8, -15, 30, 16, 28];
let K = 2;
let i = 0;
let j = 0;
let newArray = [];
let list = [];

for (let i = 0; i < array.length; i++) {
  if (a[i] < 0) {
    list.push(a[i]);
  }
  
}
console.log(newArray);
