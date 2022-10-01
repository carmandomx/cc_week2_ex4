/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    
    for (let i = 0; i < arr.length; i++){
        
        for (let j = 0; j < arr.length - i - 1; j++){

            if (arr[j] > [arr[j+1]] ) {
                
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }

        }
    }
    
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;