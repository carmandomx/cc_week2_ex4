/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    let done = false; //Variable to confirm that the array is sorted.

    while (!done) { //Iterate until I confirm that the arrangement is in order.

        done = true; //I turn the variable true.

        for (let index = 0; index < arr.length; index++) { //I go through all the elements of the array.

            if (arr[index] > arr[index + 1]) { //Condition to know if the present position is less than the future position.

                let x = arr[index]; //I create a temporary variable to store the value of the present position of the array.

                arr[index] = arr[index + 1]; //I move the future position (which is smaller) to the present position (which is larger).
                //This way I can order one step at a time.

                arr[index + 1] = x; //I move the present position (which is greater) to the future position (which is less).

                done = false; //As I don't know if there are more positions that are smaller than the previous one, I change the state to false in order to go back through the whole process.
            }
        }
    }

    return arr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;