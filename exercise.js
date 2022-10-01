/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    //Create a loop to go through every character from the string(str). 
    for(let i = 0; i < arr.length; i++){
       
     //Create a loop to go through every character from the string(str) to later compare it with the upper one.
      for(let j = 0; j < ( arr.length - i -1 ); j++){
         
        // This is to check if the number to the left is greater than the right number next to it.
        if(arr[j] > arr[j+1]){
           
          // If this conditions is met, it will swap places between them.
          let temp = arr[j]

          arr[j] = arr[j + 1]

          arr[j+1] = temp
        }
      }
    }
   
    return arr
    /* Only make changes below this comment */
}

   let arr = [17, 15, 22, 6, 24, 13, 28];
        
   console.log(bubbleSort(arr));



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;