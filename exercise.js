/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    
 //Nested loop to compare each elemet
 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        //bubble sort
        //This 'if' is to check if the iteration happening is greater than the next one, and if the condition is true then swap them
        //we go checking each element to compare them and swap
        if (arr[j] > arr[j + 1]) {
            let array = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = array
        }
    }
}

    return arr
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;