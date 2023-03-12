/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let repeat = false;
    let newArr = arr;

    do {
        repeat = false;

        // do a map of newArray and if the first number is minor that the next one, both nombers switch places
        // if any switch is made, repeat become true and start repeat the secuence. only if no switch is made
        // the loop is done
        
        newArr = newArr.map((element, index, arr) => {
            if (index + 1 < arr.length) {
                if (element > arr[index+1]) {
                    repeat = true;
                    let temp = element;
                    element = arr[index+1];
                    arr[index+1] = temp;
                }
            }
            return element
        });
    } while (repeat);

    return newArr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;