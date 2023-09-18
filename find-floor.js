//value = x

function findFloor(arr, x, left, right) {
  let left = 0; //beginning value
  let right = arr.length - 1; //last value
  let floor = -1;

  while (left <= right) {
    //when left is less than right
    // find the middle value
    let middle = Math.floor((left + right) / 2); //average of left and right

    if (arr[middle] === x) {
      return arr[middle];
    } else if (arr[middle] < x) {
      floor = arr[middle];
      //if middle element has zero, then check the left
      // move left up to new middle to keep searching
      left = middle + 1;
    } else {
      right = middle - 1;
      //else check the right and move right down to new middle
      //arr[middle] > x  then do the right side
    }
  }

  return floor;
}

module.exports = findFloor;

//Write a function called findFloor which accepts a sorted array and a value x,
//and returns the floor of x in the array.
//The floor of x in an array is the largest element in the array which is smaller than or equal to x.
//If the floor does not exist, return -1.

findFloor([1, 2, 8, 10, 10, 12, 19], 9); // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1
