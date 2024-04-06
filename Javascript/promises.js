const promise = new Promise((resolve, reject) => {
  let value = 1;
  if (value === 1) {
    resolve("resolved");
  } else {
    reject("reject");
  }
});

promise
  .then((resolve) => console.log(resolve))
  .catch((err) => console.log(err));

//promises all example
// Example asynchronous functions that return promises
function asyncTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task1");
    }, 2000);
  });
}
function asyncTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 completed");
    }, Math.random() * 2000);
  });
}

function asyncTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 completed");
    }, Math.random() * 2000);
  });
}

// Using Promise.all() to wait for all tasks to complete
const allPromises = Promise.all([asyncTask1(), asyncTask2(), asyncTask3()]);
console.log(allPromises);
// Handling the result of Promise.all()
allPromises
  .then((results) => {
    console.log(results);
    console.log("All tasks completed successfully:", results);
  })
  .catch((error) => {
    console.error("Error occurred during execution:", error);
  });

//2nd api call

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
];

const promi = urls.map((element) => fetch(element).then((res) => res.json()));

const allPromise = Promise.all(promi);

allPromise
  .then((res) => console.log("sucess", res))
  .catch((err) => console.log("fail", err));
