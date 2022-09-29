/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */
  //First iterarion for elements of arr.
  for (let i = 0; i < arr.length; i++) {
    //Second iteration for elements of arr. in this one will be comparate each of one elements acording them value and we will reassign the order.
    for (let j = 0; j < arr.length; j++) {
      /* We create a temporary item "tempItemJ" to store the value of arr[j]. this value will serve us for reassign the new value of the new element to be evaluated.*/
      let tempItemJ = arr[j];
      //If the value of arr[j] it is bigger than next one arr[j+i] then.
      if (arr[j] > arr[j + 1]) {
        //We reassign the value of arr[j] to the next (j+1), which has a smaller value.
        arr[j] = arr[j + 1];
        ////then the new adjacent value (j+1) will be the new value at index j,that is tempItemJ that we will evaluate in the next index.
        arr[j + 1] = tempItemJ;
      }
    }
  }
  //we return the sorted array.
  return arr;
  /* Only make changes below this comment */
};

console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]) /* [
        1,    1,   2,   2,   4,
        8,   32,  43,  43,  55,
       63,   92, 123, 123, 234,
      345, 5643
    ] */
);
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
