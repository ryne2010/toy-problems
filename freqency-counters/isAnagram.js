// PROMPT
/*
  * Check if given strings are anagrams of each other
  * Should be O(n) time complexity
*/

// SOLUTION
const isAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let char in first) {
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }

  for (let char in second) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1
    }
  }

  return true;
};

// TESTS
const test1Result = isAnagram('anagrams', 'nagaramm');
console.log(test1Result);

const test2Result = isAnagram('test', 'testfalse');
console.log(test2Result);
