function countZeroes(arr) {
  let left = 0; //beginning value
  let right = arr.length - 1; //last value

  while (left <= right) {
    //when left is less than right
    // find the middle value
    let middle = Math.floor((left + right) / 2); //average of left and right

    if (arr[middle] === 0) {
      //if middle element has zero, then check the left
      // move left up to new middle to keep searching
      left = middle + 1;
    }
    //else check the right and move right down to new middle
    else {
      right = middle - 1;
    }
  }
  if (left === 0) {
    return 0;
  }

  return arr.length - left;
}

module.exports = countZeroes;

// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

//Constraints:

// Time Complexity: O(log N)

// Examples:

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
