/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    // I created a for loop to look into each element of the array
    for (let i = 0; i < arr.length - 1; i++) {
        // This second foor loop is gonna be executed the length of the merged array times.
        for (let j = 0; j < arr.length - 1; j++) {
            // So we ask if the first position is bigger than the second position of the array
            if (arr[j] > arr[j + 1]) {
                // If true, I created a variale to store that value
                let auxiliar = arr[j];
                // As we want to sort from lower to bigger, we change the lower value(which is the one that is in the second position)
                // to the first position as below:
                arr[j] = arr[j + 1];
                // Now in the second position we need to put the exactly first position, but as we just change that value, we need to use 
                // the variale that we created above.
                arr[j + 1] = auxiliar;
            }
            // If the element of the first position of the array is the same as the second one, the elements remain in their positions
            else if (arr[j] === arr[j + 1]) {
                arr[j] = arr[j];
                arr[j + 1] = arr[j + 1];
            }
        }
    }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;