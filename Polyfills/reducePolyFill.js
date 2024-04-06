let array = [1, 3, 4];

console.log(array.reduce((acc, curr) => acc + curr, 0));

Array.prototype.myReduce = function (cb, initial) {
  let acc = initial;
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  console.log(acc);
  //   console.log(initial);
};
array.myReduce((acc, curr) => acc + curr,1);
