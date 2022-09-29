/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    /* We need to swap adjacent elements if the first one is bigger than
    the next one until the array is sorted */
    

    //We declare a function that will help us do the swapping
    const swapElements = (indexA, indexB) => {
        let temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }

    /*We go through the entire array until there are no more sorts necesary.
    In each instance, we check every adjacent elements and check if they need to be swapped,
    if they do, we just call the previous function*/
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                swapElements(j, j+1);
            }
        }
    }

    //Now we just return the sorted array
    return arr;
    
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;