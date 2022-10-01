/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for(let i = 0; i < arr.length-1; i++) {              //Create Loop to iterate through every number of the array excluding the last one

        //Create another loop to make the comparisons for each "i" loop with the (arrLength-LoopNumber-1)
        //This will avoid the last number in each comparison loop as it has already been sorted in ascending order i.e. Loop 3(arrLength-3-1)
        for(let j = 0; j < (arr.length - i - 1); j++) {
        if(arr[j] > arr[j+1]) {                          //Check if the first number is greater than the second number
            let temp = arr[j];                           //Create a temporal variable to store the greater number
            arr[j] = arr[j+1];                           //Swap the greater number with the lower number
            arr[j+1] = temp;                             //Retrieve the greater number in the temporal variable
        }
    }                                                    //If False, do nothing as the numbers are already sorted in ascending order
    }
    return arr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;