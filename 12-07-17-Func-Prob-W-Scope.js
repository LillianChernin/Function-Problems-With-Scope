// const printCool = (name) => {
//   return name + " is cool";
// }
//
// console.log(printCool("Tinker Bell"));

// const calculateCube = (num) => {
//   return num * num * num;
// }
//
// console.log(calculateCube(5));

// const isAVowel = (character) => {
//   let char = character.toLowerCase();
//   return (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
// }
//
// console.log(isAVowel("a"));
// console.log(isAVowel("s"));

// const getTwoLengths = (str1, str2) => {
//   let arrOfStringLengths = [];
//   arrOfStringLengths.push(str1.length, str2.length);
//   return arrOfStringLengths;
// }
//
// console.log(getTwoLengths("Hank", "Hippopopalous"));

const getMultipleLengths = (array) => {
  let arrOfStringLengths = [];
  for (let i = 0; i < array.length; i++) {
    arrOfStringLengths.push(array[i].length);
  }
  return arrOfStringLengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
