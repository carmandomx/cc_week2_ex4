/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    // var for loops
    let i = 0, j = 0;
    // aux var for storage a temporal value
    let aux = 0;
    // store de length method
    let len = arr.length;

    // First loop is to go thru the full array
    for (i = 0; i < len-1; i++) {
        // sencond loop is to compare value 1 and value 2
        for (j = 0; j < len-1; j++) {
            // If previous value is bigger than the one on the right, change positions
            if(arr[j] > arr[j+1]) {
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }            
        }
    }
    
    // Return array with order smaller to bigger
    return arr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;