const addTwoNumber = (count, name) => {
  if (count <= 5) {
    count = count + 1;
    console.log(name);
    addTwoNumber(count, name);
  }
};
addTwoNumber(1, "sam");

//print n value

let arr = [];
let n = 0;
let count = 5;
const printNthElements = (count) => {
  console.log(count);
  if (count > n) {
    count = count - 1;
    printNthElements(count);
    arr.push(count);
  }
};

printNthElements(count);
console.log(arr);
