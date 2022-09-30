/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    
    let temp = 0;                                                   //  Temporable variable to store a number.
    for (let index = 0; index < arr.length; index++) {              //  For loop to compare each number of the array.
        for (let index2 = 0; index2 < arr.length; index2++) {       //  For loop to compare the current number with all the next numbers.
            if (arr[index] <= arr[index2]){                         //  If first number is lower or equal than second element, trade positions. 
                temp = arr[index];                                  //  Temporable variable that hold the lowest number.
                arr[index] = arr[index2];                           //  Swap the lowest number with the highest number.
                arr[index2] = temp;                                 //  Swap the lowest number in the temporable variable to the next position on the array. 
            }
        }
    }
    return arr                                                      //  Return the array sorted.
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;