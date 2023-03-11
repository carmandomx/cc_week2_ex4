/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for(let i=0; i<arr.length;i++){ //New for and nested for for making an bubblesort algorithm
        for(let j=0; j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){ //comparison between a number in the array with the next one to the right, if value on left is greater they switch places
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; //they will continue switching places over and over again until the array is finaly sorted
            }
        }
    }
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;