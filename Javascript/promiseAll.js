const promise = Promise.resolve(3);
const promise2 = 23;
const promise3 = new Promise((res, reject) => {
  setTimeout(res, 100, "foo");
});

Promise.all([promise,promise2,promise3]).then((val)=>console.log(val))
