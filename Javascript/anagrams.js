function anagrams(one, two) {
  let val1 = one.toLowerCase();
  let val2 = two.toLowerCase();

  console.log(val1.split("").sort().join(""), val2.split("").sort().join(""));
  val1.split("").sort().join("") === val2.split("").sort().join("");
}
anagrams("Silent", "Listen");
