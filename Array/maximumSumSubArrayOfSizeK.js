// Maximum Sum Subarray of size K

const arr = [2, 5, 1, 18, 2, 9, 10];
let k = 4;
let i = 0;
let max = 0;
let sum = 0;
let j = 0;

function maxSubString() {
  while (j <= arr.length) {
    if (j - i + 1 <= k) {
      sum = sum + arr[j];
      j++;
    } else {
      max = Math.max(max, sum);
      i++;
      j = i;
      sum = 0;
    }
  }
  return max;
}
console.log(maxSubString());
