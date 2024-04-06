// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation

//   var string = "The quick brown fox jumps over the lazy dog."
//   assert.strictEqual(isPangram(string), true)
//   var string = "This is not a pangram."
//   assert.strictEqual(isPangram(string), false)

function panagram(string) {
  //   const str = string.toLowerCase("").split(" ").join("");
  //   console.log(str);
  //   const alphabet = "abcdefghikjkmlmnopqrstuvwxyz".split("");
  //   let isPangram = true;
  //   for (let letter of alphabet) {
  //     if (!str.includes(letter)) {
  //       isPangram = false;
  //     }
  //   }
  //   return isPangram;
  const str = string.toLowerCase("");
  console.log(str);
  const val = "abcdefghikjkmlmnopqrstuvwxyz"
    .split("")
    .every((element) => str.indexOf(element) !== -1);
  console.log(val);
}

console.log(panagram("The quick brown fox jumps over the lazy dog."));
