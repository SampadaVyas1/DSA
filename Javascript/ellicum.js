//react question

import { useRef } from "react";
export default function Counter() {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
  }
  return (
    <>
      <div>Clicked + {ref.current} + times</div>
      <button onClick={handleClick}> Click me!</button>
    </>
  );
}
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

//

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2)); //7
console.log(add10(2)); //12

//2nd question
const people = [
  { name: "Alice", age: 21 },

  { name: "Max", age: 20 },

  { name: "Jane", age: 20 },
];
// output
// {
// 	'20': [{name: 'Max', age: 20}, {name: 'Jane', age: 20}],
// 	'21': [{name: 'Alice', age: 21}]
// }

function getTheRequiredObject() {
  const ageData = [...new Set(people.map((element) => element.age))];
  console.log(ageData);
  let obj = {};
  for (let i of ageData) {
    obj = Object.assign({
      ...obj,
      [i]: people.filter((element) => element.age === i),
    });
  }
  return obj;
}
console.log(getTheRequiredObject());

//3rd Question

let a = [1, 3];
let b = [1, 3];
let c = a.toString();
let d = b.toString();
console.log(c, d);
console.log(a === b); //false
console.log(c === d); //true

//4th question

const ab = 3;

let bc = ab;

bc += 1;

console.log(ab); //3
console.log(bc); //4

//5th question

let obj1 = {};

let obj2 = {};

console.log(obj1 === obj2); //false
