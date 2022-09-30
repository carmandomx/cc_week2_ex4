/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {

    let temp = 0;
    
    //It is necessary to iterate through all the elements
    for (let i = 0; i < arr.length; i++) {
        //Comparing the actual element to the next element to check who is bigger, since we want to
        //save up memory, iteration to elements already arranged is forbiden
        for(let j = 0; j < arr.length - i; j++){

            //If we wanted to improve the code, a flag
            if(arr[j + 1] < arr[j]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        
    }
    
    return arr

}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;