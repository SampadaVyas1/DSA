const promise = async () => {
    return await Promise.resolve("hello");
  };
  
  // Using async/await
  (async () => {
    console.log(await promise()); // Logs: hello
  })();
  
  // Using .then()
  promise().then(result => {
    console.log(result); // Logs: hello
  });