// Maximum Sum Subarray of size K | Sliding Window

// Link: https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1
let array = [100, 200, 300, 400];
let k = 4;

let i = 0;
let j = 0;
let max = 0;
let sum = 0;

while (j < array.length) {
  sum += array[j]; // Add current element to the sum

  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    max = Math.max(max, sum); // Update max with the maximum sum found
    sum -= array[i]; // Subtract the element going out of the window
    i++; // Move the window forward
    j++; // Move j to the next element
  }
}

console.log(max);
