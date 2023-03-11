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
  //el primer loop nos sirve para tener control del largo del arreglo
  for (let i = 0; i < control; i++) {
    //el segundo es para analizar cada uno de los valores adentro del arreglo 
    for (let j = 0; j < control; j++) {
      //le damos a la variable menor el primer numero del arreglo
      //le damos a la variable mayor el segundo numero del arreglo
      menor=arr[j];
      mayor=arr[j+1];
      //comparamos si la variable "menor" es mayor que "mayor" 
      
      if (menor > mayor) {
        //si "menor" > "mayor" entonces almacenamos temporalmente el valor de menor para que no se nos pierda
        // menor ahora es mayor y mayor ahora es el temp
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
        //para que podamos recorrer un lugar y poder comparar el siguiente valor
        //con el valor que salio "mayor"
        //volvemos a asignar los valores del arreglo a nuestras variables;
        arr[j]=menor;
        //este es por si hay un numero menor que todos los anteriores podamos 
        //ponerlo en el lugar correcto. ej=[1,1,1,2,2,2,3,3,3,1]
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
