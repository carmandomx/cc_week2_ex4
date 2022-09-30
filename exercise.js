/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */

  /* for loop that goes through arr[] */
  for (let i = 0; i < arr.length; i++) {
    /* for loop that goes through arr[] until arr[(length - i)] */
    for (let j = 0; j < arr.length - i - 1; j++) {
      const el = arr[j];
      const el2 = arr[j + 1];

      /* if checking if el is grater than el2 to swap them */
      if (el > el2) {
        arr[j] = el2;
        arr[j + 1] = el;
      }
    }
  }

  /* return with arr[] bubble sorted */
  return arr;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
