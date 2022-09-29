/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    
    // I did it 2 weeks ago as extra activity
    //https://replit.com/@Yumil22/Bubblesrt-1#index.js
    function bubblesrt(arr) {
        //lenght in variable, I like it to simplify the code
        let size = arr.length;
        //double for to inspect and compare the values inside the array
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size - i - 1; j++) {
            
            //change values: if the value in the position j+1 is smaller, I change the values to orderer
            if (arr[j] > arr[j + 1]) {
                //temp it is a pivot
              temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
            }
          }
        }
      
        return arr;
      }
      
    return bubblesrt(arr);
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;