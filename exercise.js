/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    // store the lenght of the array in len
    let len = arr.length;
    let checked;
    //loop until is false, meaning no need to sort
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            //sort if the current value is bigger then next value
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return arr;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;