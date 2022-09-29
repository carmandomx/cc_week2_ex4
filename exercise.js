/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    //This is just and auxiliary variable to help with the swap
    let tempAuxiliaryVariable;

    //This is a variable to determine if the array is already sorted 
    let sortedChecker = 1;

    //The only way to break this 'while' is for 'sortedChecker' to remain "0" at the end of the process
    while(sortedChecker > 0){
        sortedChecker = 0;

        //This 'for' check all indexes. The last index should be "arr.length-1"
        //But I am putting "arr.length-2" as limit because I have to keep in mind that 
        //I am cheking the current number and the next.
        for(i=0; i <= arr.length-2; i++ ){
            
            //If the first number is greater than the second, I have to swap them.
            if(arr[i] > arr[i+1]){

                //I used this aux variable to save the first number
                tempAuxiliaryVariable = arr[i];
                //The first index receives the second number
                arr[i] = arr[i+1]
                //The second index receives the first number
                arr[i+1] = tempAuxiliaryVariable;

                //The variable 'sortedChecker' increments by 1 each time a swap is detected
                sortedChecker++;
                //the only way it doesn't increase is if there are no more swaps (array already sorted)
            }
        }
    }

    //when 'sortedChecker' stays at '0' the while will break and the function will return the sorted array
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;