//Time Complexity: O(log N)  --> Binary

function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let firstOccurrence = -1;
  let lastOccurrence = -1;

  // Find the last occurrence of val
  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      firstOccurrence = middleIdx;
      rightIdx = middleIdx - 1; // Continue searching for the first occurrence in the left half
    }
  }

  // Reset the indices for the second pass
  leftIdx = 0;
  rightIdx = arr.length - 1;

  // Find the last occurrence of val
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      lastOccurrence = middleIdx;
      leftIdx = middleIdx + 1; // Continue searching for the last occurrence in the right half
    }
  }

  if (firstOccurrence !== -1 && lastOccurrence !== -1) {
    return lastOccurrence - firstOccurrence + 1; // Count occurrences between first and last
  } else {
    return -1; // Value not found
  }
}

module.exports = sortedFrequency;

//Given a sorted array and a number,
//write a function called sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
