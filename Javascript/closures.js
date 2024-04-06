function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}

const inner = outer();

inner();
