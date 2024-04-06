//move all zeros to the end

//o(2n)-time
//o(n)-space
let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let temp = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    temp.push(arr[i]);
  }
}
for (let i = 0; i < arr.length; i++) {
  if (i < temp.length) {
    arr[i] = temp[i];
  } else {
    arr[i] = 0;
  }
}
// console.log(temp);
// console.log(arr);

//optimal approch
arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let index = arr.indexOf(0);
console.log(index);
for (let i = index + 1; i < arr.length; i++) {
  if (arr[i] !== 0 && arr[index] === 0) {
    let swap = arr[i];
    arr[i] = arr[index];
    arr[index] = swap;
    index++;
  }
}
console.log(arr);

//my solution

// let arr = [0, 0, 2, 3, 2, 0, 0, 4, 5, 1];

// let low = 0;
// let high = 1;
// while (high < arr.length) {
//   if (arr[low] !== 0) {
//     low++;
//     high++;
//   }
//   if (arr[low] === 0 && arr[high] > 0) {
//     let temp = arr[low];
//     arr[low] = arr[high];
//     arr[high] = temp;
//     low++;
//     high++;
//   } else if (arr[high] === 0) {
//     high++;
//   }
// }

//similar
let low = 0;
let high = 0;

while (high < arr.length) {
  if (arr[high] !== 0) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
  }
  high++;
}

console.log(arr);
