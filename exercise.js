/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    //Setin' a loop
    let count=1;
    while (count>0)
    { 
        count=0;
for(let i=0; i<arr.length; i++) //Taking a value and comparing 
    {
        if (arr[i]>arr[i+1])
        {
            //Stakin a single value each time excedes the next one
            let numerex=arr[i+1];
            arr[i+1]=arr[i];
            arr[i]=numerex;
            count++;
        }
        }
    }

    return arr
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
