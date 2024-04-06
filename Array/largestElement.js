const arr = [20, 10, 20, 4, 100];

//sol1
// sort always use O(nlogn)
let largest = arr.sort((a, b) => a - b)[arr.length - 1];
console.log(largest);

//sol2
// O(n)

largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);
