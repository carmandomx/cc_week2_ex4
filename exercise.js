/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    
    // using two for loops, one nested inside another
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length+1; j++) {
            // check by "pairs" of numbers, which one is greater, and reorganize the array
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]]=[arr[j],arr[i]]; // swap places when the value in i > j
            }
        }
        
    }
    return arr
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;