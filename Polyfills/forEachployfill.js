const array = [1, 2, 3, 4, 5];
// array.forEach((element) => console.log(element));

Array.prototype.myForEach = function (cb) {
  cb(this[i]);
};
array.forEach((element) => console.log(element));
