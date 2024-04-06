//filter

const array = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArray.push(this[i]);
    }
  }
  return  newArray
};

const newArray=array.myFilter((element) => element > 2);
console.log(newArray)