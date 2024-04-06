//Maximum Sum of Distinct SubArrays with length K

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

// let i = 0;
// let j = 0;
// nums = [1, 5, 4, 2, 9, 9, 9];
// // nums = [4, 4, 4];
// let k = 3;
// let max = 0;
// let sum = 0;
// let newArray = [];
// function MaximumSumOfDistinctSubArray() {
//   while (j <= nums.length) {
//     if (j - i + 1 <= k) {
//       if (i !== j) {
//         if (nums[i] === nums[j]) {
//           return max;
//         } else {
//           if (nums[j] === nums[j - 1]) {
//             return max;
//           }
//         }
//       }

//       sum = sum + nums[j];
//       j++;
//     } else {
//       newArray = [];
//       max = Math.max(max, sum);
//       i++;
//       j = i;
//       sum = 0;
//     }
//   }
//   return max;
// }

// console.log(MaximumSumOfDistinctSubArray());

var maximumSubarraySum = function (nums, k) {
  let i = 0;
  let j = 0;
  let max = 0;
  let set = new Set();
  let sum = 0;
  while (j <= nums.length) {
    if (j - i + 1 <= k) {
      if (set.has(nums[j])) {
        sum -= nums[i];
        set.delete(nums[i]);
        i++;
      } else {
        set.add(nums[j]);
        sum = sum + nums[j];
        j++;
      }
    } else {
      max = Math.max(max, sum);
      sum = sum - nums[i];
      set.delete(nums[i]);
      i++;
    }
  }
  return max;
};

console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3));
