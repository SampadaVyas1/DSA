const arr = [1, 2, 4, 5];
let n = 5;

let hash = {};

for (let i = 0; i < arr.length; i++) {
  if (!hash[arr[i]]) {
    hash[arr[i]] = true;
  }
}

let missingNumber = -1;

for (let i = arr[0]; i <= n; i++) {
  if (!hash[i]) {
    missingNumber = i;
    break;
  }
}
console.log(hash, missingNumber);

//optimal

let sum = (n * n + n) / 2;
console.log(sum);
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  sum2 = sum2 + arr[i];
}

console.log(sum - sum2);

//

let XOR1 = 0;
let XOR2 = 0;
for (let i = 0; i < n; i++) {
  XOR1 = XOR1 ^ i;
}
for (let i = 0; i < n; i++) {
  XOR2 = XOR2 ^ arr[i];
}
console.log("<<<", XOR1^XOR2);
