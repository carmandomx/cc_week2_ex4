/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for (let i = arr.length - 1; i > 0; i--) { //counter to go through the length of the array starting from the last one
        for (let j = 0; j < i; j++) { //2nd counter that starts from the beginning
          if (arr[j] > arr[j + 1]) {
           
            ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] //compare then swap if the conditional is proven true
          }
        }
      }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;