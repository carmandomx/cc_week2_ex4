/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let arrA = arr;//we start by creating an array with the two past arrays
    for (let i = 0; i < arr.length; i++) { //create a for loop inside a for loop   
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {//we use a bubble sort and arrange everything from the smallest number to the biggest number 
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            } 
        }
    }
    
    return arrA
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;