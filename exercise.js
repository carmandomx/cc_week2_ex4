/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */
  // Declare variable with the length of the given array
  let len = arr.length;
  // Loop through each element of the array
  for (let i = 0; i < len; i++) {
    // Loop that allows to compare each element in the array with the one to its right
    for (let j = 0; j < len - i - 1; j++) {
      // If the value of the element in the left is greater than the one at its right,
      // Swap their position in the array
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
