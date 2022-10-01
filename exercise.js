/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    //we make two nested for cycles to compare the first value
    //of my array and the next one
    
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
    //then if the second one is smaller than the first one we change the order
    //we use a temporal variable and we proceed to make the change, if the contidion
    //doesnt apply we keep the two variable in the same place
            if(arr[j]<arr[i]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
    }
   
    //at the end, we return the ordered array
    return arr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;