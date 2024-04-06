function isPower(arr) {
  // Write your code here
  function isPowerOfTwo(num) {
    return num && (num & (num - 1)) === 0;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPowerOfTwo(arr[i])) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
}
console.log(isPower([2,3,4,8,12,16]))

console.log(5 & 2)