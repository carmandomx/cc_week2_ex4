/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */
  //Create two for loops for iterate the array with two pointers
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //Make the condition for when we want the swap is executed
      if (arr[i] < arr[j]) {
        //Create a new variable for help us to do the swap positions and do the swap
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
