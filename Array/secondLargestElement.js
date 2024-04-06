// const arr = [1, 2, 4, 7, 7, 5];
// const arr = [1, 2, 7, 7, 7, 7, 7];

let numbers =
  "61 30 28 47 42 25 41 56 27 45 44 34 46 35 58 36 60 29 53 55 32 31 33 59 50 51 52 37 39 38 43 49 54 57 40 26 48";
let arr = numbers.split(" ").map(Number);

// O(nlogn)+o(n)

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let swap = arr[i];
//       arr[i] = arr[j];
//       arr[j] = swap;
//     }
//   }
// }
// console.log(arr);
// let secondLargest;
// for (let i = arr.length - 2; i >= 0; i--) {
//   if (arr[arr.length - 1] !== arr[i]) {
//     secondLargest = arr[i];
//     break;
//   }
// }

// console.log(secondLargest);

//better

let largest = -1;
let seconlarg = -1;
//o(n)
arr.forEach((element) => {
  return element > largest && (largest = element);
});
//o(n)
console.log(largest);
arr.forEach(
  (element) => element > seconlarg && element < largest && (seconlarg = element)
);
//o(2n)
console.log(seconlarg);

//optimial

let lar = arr[0];
let secondlar = -1;

// arr.forEach((element) =>
//   element > lar
//     ? (lar = element)
//     : element < lar && element > secondlar && (secondlar = element)
// );

//o(n)
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > lar) {
    secondlar = lar;
    lar = arr[i];
  }
  if (arr[i] > secondlar && arr[i] != lar) {
    secondlar = arr[i];
  }
}

console.log(lar, secondlar);
