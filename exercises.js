// 5) URLify a string

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

// search each element in the array, if it is a space ' '  then replace with %20 O(n)
// function URLify (string) {
//   const newArray = string.split('');
//   let fixedArray = newArray.map(char => {
//     if(char === ' '){
//       return '%20';
//     }
//     return char;
//   });

//   return fixedArray.join('');
// }

// let result = URLify('www.thinkful.com /tauh ida parv een');
// console.log(result);

// 6) Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 
// INPUT: [1, 2, 3, 4, 5, 6, 7]
// OUTPUT: [5, 6, 7]

// Naive: for loop, if number < 5 then remove those values (splice). O(n)'
// its probably possible to get O(log(n)) but we spent too much time trying to get the answer and had to move on lol
// function filter(arr) {

//   const filteredArray = [];
//   for(let i=0; i < arr.length; i++) {
//     if(arr[i] >= 5) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// result = filter([1, 2, 3, 4, 5, 6, 7]);
// console.log(result);

// 7) Max sum in the array
// start at first element
// if its not negative, then add first element to the second, set that to maxResult
// then add first element + second + third, check if that result is greater than maxResult. if it is, replace maxResult
// continue for each continous sequence starting at the first element
// THEN look for the next POSITIVE element that is after a NEGATIVE element and begin the sequence there

// function maxSumInArray(arr) { // O(n^2)
//   let maxResult = 0;
//   let leftIndex = 0, rightIndex = arr.length - 1;
  
//   for (let i = 0; i < arr.length; i++) {
//     let maxSum = 0;

//     for (let j = i; j < arr.length; j++) {
//       maxSum += arr[j];

//       if (maxResult < maxSum) {
//         maxResult = maxSum;
//         leftIndex = i;
//         rightIndex = j;
//       }
//     }
//   }
//   return { maxResult, leftIndex, rightIndex};
// }

// let result1 = maxSumInArray([4, 6, -3, 5, -2, 1]);
//console.log(result1);

// Better approach. This is 0(n)
// This is Kadane's Algorithm

// function maxSumInArray3(arr) {
//   let currentSum = 0;
//   let maxSum = 0;

//   for(let i=0; i < arr.length; i++) {
    
//     let currentNum = arr[i];
//     currentSum = Math.max((currentSum + currentNum), 0);
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(maxSumInArray3([4, 6, -3, 5, -2, 1]));

// 8) Merge Arrays

// function mergeArrays(arr1, arr2) {
//   const mergedArray = [...arr1, ...arr2];
//   return mergedArray.sort((a, b) => a-b);
// }

// let result = mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);
//console.log(result);



// 9) REMOVE CHARACTERS

function removeCharacters (string, vowels) {

  
  let newString = string;
  // console.log(newString);
  for (let i = 0; i < string.length; i++) { // O(n)
    
    if(string[i] === 'a') {
      newString = string.replace('a', '');
    }
    newString.replace('e', '');
    newString.replace('i', '');
    newString.replace('o', '');
    newString.replace('u', '');
  }
  return newString;
}

let result = removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
console.log(result);


// function URLify (string) {
//   const newArray = string.split('');
//   let fixedArray = newArray.map(char => {
//     if(char === ' '){
//       return '%20';
//     }
//     return char;
//   });

//   return fixedArray.join('');
// }

// let result = URLify('www.thinkful.com /tauh ida parv een');
// console.log(result);