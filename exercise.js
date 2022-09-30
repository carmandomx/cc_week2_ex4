/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    let counter=0;
    do{
    counter=0;
    for(let i=0; i<arr.length; i++){ //Here we go through the array an swap numbers if necessary
        if(arr[i]>arr[i+1]){
            swap=arr[i+1];
            arr[i+1]=arr[i];
            arr[i]=swap;
            counter++;
        }
    }
    }while(counter>0);//this do while is to do the swap cycle as many times as needed 

    
    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;