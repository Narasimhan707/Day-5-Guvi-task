// Print odd numbers in an array:

// Anonymous function
let printOddNumbers = (arr) => {
  arr.map((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
}
console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 33, 12, 31, 13]))
// IIFE
let oddNumber = ((arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);
// Convert all the strings to title caps in a string array:
// Anonymous function
let convertToTitleCase = (strArr) => {
  let resultArr = strArr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  return resultArr;
}

// IIFE
let titleCaseArr = (function (strArr) {
  let resultArr = strArr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  return resultArr;
})(['hello', 'WORLD', 'tEsT']);

console.log(titleCaseArr); // ["Hello", "World", "Test"]
// Sum of all numbers in an array:

// Anonymous function
let sumArray = function (arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum;
}

// IIFE
let totalSum = (function (arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum;
})([1, 2, 3, 4, 5]);

console.log(totalSum); // 15
//Return all the prime numbers in an array:
// Anonymous function
let getPrimeNumbers = function (arr) {
  let primeArr = arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
  return primeArr;
}

// IIFE
let primeNums = (function (arr) {
  let primeArr = arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
  return primeArr;
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(primeNums); // [2, 3, 5, 7]

// Return all the palindromes in an array:
// Anonymous function
let getPalindromes = function (arr) {
  let palindromeArr = arr.filter(function (str) {
    return str === str.split('').reverse().join('');
  });
  return palindromeArr;
}

// IIFE
let palindromeArr = (function (arr) {
  let palindromeArr = arr.filter(function (str) {
    return str === str.split('').reverse().join('');
  });
  return palindromeArr;
})(['racecar', 'hello', 'madam', 'world']);

console.log(palindromeArr); // ["racecar", "madam"]
// Return median of two sorted arrays of the same size:
// Anonymous function
let getMedianOfArrays = function (arr1, arr2) {
  let mergedArr = arr1.concat(arr2).sort(function (a, b) { return a - b; });
  let medianIndex = Math.floor(mergedArr.length / 2);
  let median;
  if (mergedArr.length % 2 === 0) {
    median = (mergedArr[medianIndex - 1] + mergedArr[medianIndex]) / 2;
  } else {
    median = mergedArr[medianIndex];
  }
  return median;
}

// IIFE
let median1 = (function (arr1, arr2) {
  let mergedArr = arr1.concat(arr2).sort(function (a, b) { return a - b; });
  let medianIndex = Math.floor(mergedArr.length / 2);
  let median;
  if (mergedArr.length % 2 === 0) {
    median = (mergedArr[medianIndex - 1] + mergedArr[medianIndex]) / 2;
  } else {
    median = mergedArr[medianIndex];
  }
  return median1;
})([1, 3, 5], [2, 4, 6]);

console.log(median); // 3.5
// Remove duplicates from an array:
// Anonymous function
let removeDuplicates1 = (arr) => {
  let uniqueArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return uniqueArr;
}

// IIFE
let uniqueArr = (arr) => {
  let uniqueArr = arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
  return uniqueArr;
}; ([1, 2, 2, 3, 3, 3, 4, 4, 5]);

console.log(uniqueArr); // [1, 2, 3, 4, 5]
// Rotate an array by k times:
// Anonymous function
let rotateArray1 = function (arr, k) {
  let rotatedArr1 = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArr1;
}

// IIFE
let rotatedArr = (function (arr, k) {
  let rotatedArr = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArr;
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArr); // [3, 4, 5, 1, 2]


// Using Anonymous Function:


let median2 = function (arr1, arr2) {
  let mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  let midIndex = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2;
  } else {
    return mergedArr[midIndex];
  }
}

console.log(median2([1, 2, 3], [4, 5, 6])); // Output: 3.5
// Using IIFE:

let median = (function (arr1, arr2) {
  let mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  let midIndex = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[midIndex - 1] + mergedArr[midIndex]) / 2;
  } else {
    return mergedArr[midIndex];
  }
})([1, 2, 3], [4, 5, 6]);

console.log(median); // Output: 3.5
// Remove duplicates from an array
// Using Anonymous Function:


let removeDuplicate = function (arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 4])); // Output: [1, 2, 3, 4]
// Using IIFE:


let removeDuplicates = (function (arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
})([1, 2, 2, 3, 4, 4, 4]);

console.log(removeDuplicates); // Output: [1, 2, 3, 4]

// Rotate an array by k times
// Using Anonymous Function:


let rotateArray2 = function (arr, k) {
  let n = arr.length;
  let rotations = k % n;
  let firstPart = arr.slice(n - rotations);
  let secondPart = arr.slice(0, n - rotations);
  return [...firstPart, ...secondPart];
}

console.log(rotateArray2([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// Using IIFE:

let rotateArray = (function (arr, k) {
  let n = arr.length;
  let rotations = k % n;
  let firstPart = arr.slice(n - rotations);
  let secondPart = arr.slice(0, n - rotations);
  return [...firstPart, ...secondPart];
})([1, 2, 3, 4, 5], 2);

console.log(rotateArray); // Output: [4, 5, 1, 2, 3]


