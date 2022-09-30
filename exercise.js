/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    for(let i = 0; i < arr.length; i++){
       
     
      for(let j = 0; j < ( arr.length - i -1 ); j++){
         
        // Checking if the item at present iteration is greater than the next one in the iteration
        if(arr[j] > arr[j+1]){
           
          // If the condition is true then swap them
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
    return arr
    /* Only make changes below this comment */
}

   let arr = [17, 15, 22, 6, 24, 13, 28];
        
   console.log(bubbleSort(arr));



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;