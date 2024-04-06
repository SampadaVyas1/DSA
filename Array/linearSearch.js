//linear search
let n = 4;
let arr = [6, 7, 8, 4, 1,4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == n) {
    console.log(i);
    break;
  }
  if (i === arr.length - 1) {
    console.log(-1);
  }
}

console.log(arr.indexOf(n));

console.log(arr.lastIndexOf(n));
