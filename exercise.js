/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let temp;//a temporal var to save a value
    
        for (let i = 0; i < arr.length; i++) { //a loop to run over the array 
            for (let j = 0; j < arr.length; j++) {//a loop to change positions over the array for comparing purposes 
                 if (arr[i]<arr[j]) { //if the value of the position i is less than the value of the position j, the program would follow the instructions
                    temp=arr[j]; //save the value of position j in the temporal var
                    arr[j]=arr[i];//change the value of the position j with the value of the position i
                    arr[i]=temp;//the value of the position i is going to change for the value saved in temp var
                }  
            }
        }

    return arr
    /* Only make changes below this comment */
}

bubbleSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ])



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;