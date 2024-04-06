const array = [2, 3, 4, 5, 7];
let d = 3;
for (let j = 0; j < 3; j++) {
  let lastNo = array[array.length - 1];
  for (let i = array.length - 2; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = lastNo;
}
console.log(array);
