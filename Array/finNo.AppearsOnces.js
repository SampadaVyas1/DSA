const arr = [12, 1, 12, 3, 12, 1, 1, 2, 3, 3,2,4,5];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}

for(let i in obj)
{
if(obj[i]===1)
{
    console.log(i)
}
}