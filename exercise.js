/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let arr_length = arr.length
    //let sorted_until = arr.length-1 //Given that the sort method finds the largest element one by one, we use the position of the last sorted element
    for (let i=0;i<arr_length;i++){ //we sort largest element one by one (as many iteration as elements in the array)
        for (let j=0;j<arr_length-i;j++){ // we swap two elements until the last
            if (arr[j]>arr[j+1]){
                let temp_array=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp_array
            }
        }
    }
    

    return arr
    /* Only make changes below this comment */
}


console.log(bubbleSort([504,38,1,3,5,6,7,9,23,45,123,533,43,90,75,36,65,6,7,1999]))


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;