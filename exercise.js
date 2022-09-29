/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for (i=0; i<arr.length; i++) { //create a for loop to iterate through the array
        for(j=i+1; j<arr.length; j++) { //create another for loop to be able to grab 2 elements at the same time
            if(arr[i] > arr [j]) { //if our first element is higher than the next one..
                let temp = arr[i]; //save the first element in a temporal variable so its value is not lost
                arr[i] = arr[j]; //set our first element to have the value of the next, which is lesser
                arr[j] = temp; //set our second element to have the value of the first one, stored in the temporal variable
            }
        }
    }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;