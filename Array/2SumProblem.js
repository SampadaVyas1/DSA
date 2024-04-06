// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

const nums = [2, 7, 11, 15];
const target = 9;
let newArray = [];

//brute force
var twoSum = function (nums, target) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newArray.push(i, j);
        break;
      }
    }
  }
  return newArray;
};

//optimal

let hasMap = {};
for (let i = 0; i < nums.length; i++) {
  let hasElement = target - nums[i];
  if (hasMap[hasElement] != undefined) {
    // console.log([hasMap[hasElement], i]);
  }
  hasMap[nums[i]] = i;
}

// console.log(hasMap);

var twoSum = function (nums, target) {
  let hasMap = {};
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let hasElement = target - nums[i];
    if (hasMap[hasElement] != undefined) {
      newArray.push([hasMap[hasElement], i]);
    }
    hasMap[nums[i]] = i;
  }
  return newArray;
};

console.log(twoSum(nums, target));
