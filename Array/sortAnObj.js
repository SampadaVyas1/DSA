function sortObject(array) {
  const hashMap = {};
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    if (!hashMap[array[i]]) {
      for (let j = i; j < array.length; j++) {
        if (array[i] === array[j]) {
          hashMap[array[i]] = count;
          count++;
        }
      }
    }
  }
  let entries = Object.entries(hashMap);
  entries = entries.sort((a, b) => a[1] - b[1]);
  const arr = entries.map((element) => ({ [element[0]]: element[1] }));
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let count=0
      for (let j in arr[i]) {
        console.log(arr[i][j]);
      while (count< arr[i][j]) {
        newArray.push(Number(j));
        count++
      }
    }
  }
  console.log(newArray);
}

sortObject([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5]);
