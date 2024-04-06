const arr = [1, 1, 2, 2, 2, 3, 3, 4, 5];

// console.log([...new Set(arr)]);

let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = true;
  }
}
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.keys(obj).map(Number));

//o(n)
function removeDuplicate() {
  let index = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[index] === arr[j]) {
    } else {
      index++;
      arr[index] = arr[j];
    }
  }
  return arr.slice(0, index + 1);
}
console.log(removeDuplicate());

