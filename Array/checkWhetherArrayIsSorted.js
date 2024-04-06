// Input : 20 21 45 89 89 90
// Output : Yes

// Input : 20 20 45 89 89 90
// Output : Yes

// Input : 20 20 78 98 99 97
// Output : No

const checkWheheArrayIsSorted = (arr) => {
  //   let isSorted;
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] < arr[i + 1]) {
  //       console.log(arr[i], arr[i + 1]);
  //       isSorted = "Yes";
  //     } else if (arr[i] != arr[i + 1]) {
  //       isSorted = "NO";
  //       return isSorted;
  //     }
  //   }
  //   return isSorted;

  let sorted;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      sorted = 1;
    } else if (arr[i] > arr[i + 1] && arr[i] != arr[i + 1]) {
      sorted = 0;
      return sorted;
    }
  }
  return sorted;
};

console.log(checkWheheArrayIsSorted([90, 80, 100, 70, 40, 30]));
