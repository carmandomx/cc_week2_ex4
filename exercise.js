/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    //
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            // comparing two items that are side by side
            if(arr[i]>arr[j]){
                //Ordering elements
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }

    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;