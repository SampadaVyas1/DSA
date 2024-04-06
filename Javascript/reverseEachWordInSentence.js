const str = "Welcome to javascript world";

console.log(str.split(" ").map((element) => element.split("").reverse().join("")).join(" "));
