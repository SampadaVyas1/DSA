const array = [1, 2, 2];
let i = 0;
let string1 = "";
let string2 = "";
while (i < array.length) {
  string1 = string1 + array[i];
  string2 = array[i] + string2;
  i++;
}
console.log(string1, string2);
