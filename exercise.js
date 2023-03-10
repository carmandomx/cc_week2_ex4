/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let arr_length = arr.length //length of the array
    for (let i=0;i<arr_length;i++){ //given that we sort the largest element one by one we need as many iterations as elements in the array
        for (let j=0;j<arr_length-i;j++){ // we swap two elements until the last sorted element (thats why we rest the number of iterations done (i) to array length)
            if (arr[j]>arr[j+1]){ //we put the largest element between to adjacent elements on the front
                let temp_array=arr[j]
                arr[j]=arr[j+1] 
                arr[j+1]=temp_array // swap elements
            }
        }
    }
    

    return arr
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;