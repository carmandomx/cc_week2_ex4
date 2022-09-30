/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    
    /* We will compare the first and second numbers of the array
    if the first number is greater than the second number we swap them}
    and continue with the next to numbers*/

    let temp;

    // Iterates through the array
    for (let i = 0; i < arr.length; i++) {

        // This for loop makes comparisons between each element in the list
        for (let j = 0; j < arr.length; j++) {
            
            // checks if the number on the left of a comparison is greater than the number on the right
            if (arr[j] > arr[j + 1]) {
                
                // Swaps the numbers
                temp = arr[j]; // Saves the arr index value to not to lose it
                arr[j] = arr[j + 1]; // Swap A for B
                arr[j + 1] = temp; // Swap B for A which is in the temporal variable
            }
        }

    }

    return arr // Return the sorted arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;