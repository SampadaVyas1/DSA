const array = [1, 2, 3, [9, 10, 12, 13, [6, 7, 8, [44, 43, 32]]]];

let handleNewArray = [];
function recursion(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      recursion(array[i]);
      break;
    } else if (!Array.isArray(array[i])) {
      handleNewArray.push(array[i]);
      console.log("<<", handleNewArray);
    }
  }
}
recursion(array);
