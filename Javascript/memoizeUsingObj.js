const obj = {};

const array = [2, 3, 4];
for (let i = 0; i < array.length; i++) {
  let val = 1;
  if (!obj.hasOwnProperty(array[i])) {
    for (let j = array[i]; j > 0; j--) {
      if (!obj.hasOwnProperty(j)) {
        val = val * j;
      } else {
        obj[array[i]] = val * obj[j];
        break;
      }
      obj[array[i]] = val;
    }
  }
}
console.log(obj);
