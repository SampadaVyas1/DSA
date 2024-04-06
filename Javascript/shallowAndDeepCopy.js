//shallow
const originalObject = { a: 1, b: 2 };
const shallowCopy = { ...originalObject };
originalObject.a = 8;
// console.log(originalObject, shallowCopy);

//shallow
const shallowCopyObject = Object.assign({}, originalObject);
// console.log((shallowCopyObject.a = 5433));

//deepcopy

const obj = { a: 1, b: { c: 3 } };

const newObj = JSON.parse(JSON.stringify(obj));
newObj.b.c = 54;
console.log(newObj, obj);
