/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */

 /*
 creamos 3 variables, la primera es para controlar el largo del arreglo,
 menor y mayor para comparar los valores.
 */ 
  let control = arr.length;
  let menor=0;
  let mayor=0;
  let temp=0;
  //the first loop helps us to control the length of the arrangement
  for (let i = 0; i < control; i++) {
    //the second is to analyze each of the values ​​inside the array 
    for (let j = 0; j < control; j++) {
      //We give the minor variable the first number of the array.
      //we give the grater variable the second number of the array
      menor=arr[j];
      mayor=arr[j+1];
      //we compare if the variable "minor" is greater than "greater" 
      
      if (menor > mayor) {
        //if "menor" > "mayor" then we temporarily store the value of less so that we don't lose it
        // menor now is mayor and mayor now is temp
        /*ej:
        menor=9
        mayor=2
        if(menor>mayor){
          temp= menor(9)
          menor=mayor(2)
          mayor=temp (9) [2,9]
        }
         */
        temp = menor;
        menor = mayor;
        mayor= temp;
        //so we can loop through a place and be able to compare the next value
        //with the value "mayor"
        //we reassign the values ​​of the array to our variables;
        arr[j]=menor;
        //This is in case there is a smaller number than all the previous ones we can
        //put in the correct place. ej=[1,1,1,2,2,2,3,3,3,1]
        //[1,1,1,1,2,2,2,3,3,3]
        arr[j+1]=mayor;
      }
    }
  }
  return arr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
