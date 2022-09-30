/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    // Loop to evaluate evey item in the array
    for (let i = 0; i < arr.length; i++) {
        // loop to compare pair of items (the first item with the next one)
        for (let j = 0; j < arr.length; j++) {
            // iff the "first" item is greater than the "next"  item then change their respective positions
            if(arr[j] > arr[j + 1]) {
                // store the "first" item in the position "j"
                let saved = arr[j];
                // assign the "next" item to the position of the "first" item
                arr[j] = arr[j + 1];
                // finally the "next" position will have the value of the original "first" item that is the value in "saved"
                arr[j + 1] = saved;
            }
            
        }
    }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;