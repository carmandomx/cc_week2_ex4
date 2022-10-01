/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for (let i = 0; i < arr.length; i++) {
        //the bubble sort will work as a loop that will take the array length, inside of this loop there will be another one that will also take the length in effect moving the largest value to the end of said array
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            // what the second loop is doing is checking if the next index is smaller or greater than the current index, by the end of each iteration the highest number should be in the last place. and it will reiterate as many times as the length of the array
        }
    }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;