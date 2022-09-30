/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    //Start looping from the end of the array toward the beginning
    for (let i = arr.length - 1; i > 0; i--) {
    //Start an inner loop 
        for (let j = 0; j < i; j++) {
                    if (arr[j] > arr[j + 1]) {
            // SWAP
            ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          }
        }
      }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;