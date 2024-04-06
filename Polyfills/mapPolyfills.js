const array = [1, 2, 3, 4, 5];

Array.prototype.mymap = function (cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }
  return newArray;
};

const newArray = array.mymap((element) => element > 2);
console.log(newArray)