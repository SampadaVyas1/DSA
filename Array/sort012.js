const array = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
let count0 = 0;
let count1 = 0;
let count2 = 0;
let obj = {};
array.map((element) => {
  if (element === 0) {
    count0++;
  } else if (element === 1) {
    count1++;
  } else if (element === 2) {
    count2++;
  }
});
console.log(count0, count1, count2);

for (let i = 0; i < count0; i++) {
  array[i] = 0;
}
for (let i = count0; i < count1 + count0; i++) {
  array[i] = 1;
}
for (let i = count1 + count0; i < array.length; i++) {
  array[i] = 2;
}

console.log(array);

//dutche algorithm

function swap(low, mid) {
  const swapNumber = array[low];
  array[low] = array[mid];
  array[mid] = swapNumber;
}
let mid = 0;
let high = array.length - 1;
let low = 0;
while (mid <= high) {
  if (array[mid] === 0) {
    swap(low, mid);
    mid++;
    low++;
  } else if (array[mid] === 1) {
    mid++;
  } else if (array[mid] === 2) {
    swap(high, mid);
    high--;
  }
}

console.log(array);
