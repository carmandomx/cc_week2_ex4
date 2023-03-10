/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for (let i = 0; i <= arr.length-1; i++){ //To iterate all elements
        for(let j = 0; j < (arr.length - i - 1); j++){//To iterate the elements minus the last one (it will be repeated)
            if(arr[j] > arr[j+1]){//Check if the first number is greater than the adjacent one
                let number = arr[j]//if is true, swap those elements by creating a temporal number
                arr[j] = arr[j + 1]
                arr[j + 1] = number
            }
    }
}
    return arr
    /* Only make changes below this comment */
}

arr1 = [2, 15, 8, 5, 33, 6]
console.log(bubbleSort(arr1))



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;