// PROMPT
/*
Write a function which accepts an array of integers and a number, n.
The function should calculate the max sum of n consecutive integers in the array.
*/

// SOLUTION
const maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  };

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  };

  return maxSum;
};

// TESTS
const test1Result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(test1Result); // 19
