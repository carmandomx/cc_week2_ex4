/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */
  let len = arr.length; //The size of the array to sort is stored in a variable.

  //Two iterations are made, the first, i, is made to repeat the second iteration a number of times equal to the size of the array.
  //The second iteration, j, goes until the penultimate element of the array, since it will do a comparison with the current element and the next one.
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      //In each iteration of j it does a comparison of the current element with the next one and if the current one is greater than the next one, it changes its position.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; //For the position change, a temporary variable is created that stores the current value.
        arr[j] = arr[j + 1]; //Then the current value is changed to the next one in the array
        arr[j + 1] = temp; //And the next one is changed to the value of the temporary variable, which was the previous value.
      }
    }
  }
  return arr; //When the entire array is traversed X number of times (with X being the size of the array) the sorted array is returned.
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
