/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    let aux; //This variable wil be so helpfull to do the burble sort

/*  We are going to do two "for", the firts  to go through the array from
    the beginning as many times as possible */
    for (let i = 0; i < arr.length; i++) {

        //the second one we help us to compare the order of the numbers
        for (let j = 0; j < arr.length -1; j++) { 
            //Comparing arr[j] with the next number in the array

            if(arr[j] > arr[j+1]){ //if the next one is smaller than arr[j], then

                aux = arr[j]; //the variable aux will be fill with arr[j] tha is bigger than arr[j+1]

                arr[j] = arr[j+1] //the number of arr[j+1] will be move one place (arr[j]) back cause is smaller

                arr[j+1] = aux // finally  arr[j+1] will be replace for the biger number tha was arr[j]

            }
            //otherwise each number keeps its position
        }
    }

    return arr
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;