const str = "sampada";
let count = 0;
function findVowels() {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let val of str) {
    vowels.includes(val) && count++;
  }
  console.log(count);
}
findVowels();
