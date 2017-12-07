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

// const getMultipleLengths = (array) => {
//   let arrOfStringLengths = [];
//   for (let i = 0; i < array.length; i++) {
//     arrOfStringLengths.push(array[i].length);
//   }
//   return arrOfStringLengths;
// }
//
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// const maxOfThree = (num1, num2, num3) => {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }
//
// console.log(maxOfThree(6, 9, 1));
//
//
// const printLongestWord = (strArray) => {
//   let longestWord = strArray[0];
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].length > longestWord.length) {
//       longestWord = strArray[i];
//     }
//   }
//   return longestWord;
// }
//
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// const transmogrify = (num1, num2, num3) => {
//   return Math.pow((num1 * num2), num3);
// }
//
// console.log(transmogrify(5, 3, 2));

// const generateFibonacciToNum = (num) => {
//   let fibonacciSeq = [];
//   let currentFibValue = 1;
//   fibonacciSeq.push(currentFibValue);
//   while (currentFibValue < num) {
//     if (currentFibValue === 1) {
//       currentFibValue = currentFibValue + fibonacciSeq[fibonacciSeq.length - 1];
//     }
//     fibonacciSeq.push(currentFibValue);
//     currentFibValue = currentFibValue + fibonacciSeq[fibonacciSeq.length - 2];
//   }
//   return fibonacciSeq;
// }
//
// console.log(generateFibonacciToNum(90));

// const generateEvenFibonacciToNum = (num) => {
//   let fibonacciSeq = [];
//   let currentFibValue = 1;
//   fibonacciSeq.push(currentFibValue);
//   while (currentFibValue < num) {
//     if (currentFibValue === 1) {
//       currentFibValue = currentFibValue + fibonacciSeq[fibonacciSeq.length - 1];
//     }
//     fibonacciSeq.push(currentFibValue);
//     currentFibValue = currentFibValue + fibonacciSeq[fibonacciSeq.length - 2];
//   }
//   let evenFibSeq = [];
//   for (let i = 0; i < fibonacciSeq.length; i++) {
//     if (fibonacciSeq[i] % 2 === 0) {
//       evenFibSeq.push(fibonacciSeq[i]);
//     }
//   }
//   return evenFibSeq;
// }
//
// console.log(generateEvenFibonacciToNum(90));

const generateEvenFibonacciToNumSum = (num) => {
  let fibonacciSeq = [];
  let currentFibValue = 1;
  fibonacciSeq.push(currentFibValue);
  while (currentFibValue < num) {
    if (currentFibValue === 1) {
      currentFibValue = currentFibValue + fibonacciSeq[fibonacciSeq.length - 1];
    }
    fibonacciSeq.push(currentFibValue);
    currentFibValue = currentFibValue + fibonacciSeq[fibonacciSeq.length - 2];
  }
  let sumOfEvenFib = 0;
  for (let i = 0; i < fibonacciSeq.length; i++) {
    if (fibonacciSeq[i] % 2 === 0) {
      sumOfEvenFib = sumOfEvenFib + fibonacciSeq[i];
    }
  }
  return sumOfEvenFib;
}

console.log(generateEvenFibonacciToNumSum(90));
