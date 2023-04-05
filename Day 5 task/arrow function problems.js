// Arrow function for printing odd numbers in an array:


const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
// Arrow function for converting all the strings to title caps in a string array:


const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};
// Arrow function for sum of all numbers in an array:


const sumOfNumbers = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
// Arrow function for returning all the prime numbers in an array:


const getPrimeNumbers = (arr) => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  return arr.filter((num) => {
    return isPrime(num);
  });
};
// Arrow function for returning all the palindromes in an array:


const getPalindromes = (arr) => {
  const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
  };

  return arr.filter((str) => {
    return isPalindrome(str);
  });
};