/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */
  let len = arr.length; //Se guarda en una variable el tamaño del array a ordenar

  //Se hacen dos iteraciones, la primera, i, se hace para repetir la segunda iteracion un número de veces igual al tamaño del array.
  //La segunda iteracion, j, llega hasta el penúltimo elemento del array, ya que hará una comparación con el elemento actual y el siguiente.
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      //En cada iteración de j hace una comparación del elemento actual con el siguiente y si el actual es mayor que el siguiente, cambia de posición.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; //Para el cambio de posición se crea una variable temporal que guarda el valor actual
        arr[j] = arr[j + 1]; //Después el valor actual se cambia por el siguiente
        arr[j + 1] = temp; //Y el siguiente se cambia por el valor de la variable temporal, que era el valor anterior.
      }
    }
  }
  return arr; //Cuando se recorra todo el array por X número de veces (siendo X el tamaño del array) se retorna el array ordenado.
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
