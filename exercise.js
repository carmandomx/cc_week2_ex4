/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
  /* Only make changes below this comment */
  let len = arr.length; //Se guarda en una variable el tamaño del array a ordenar

  //Se hacen dos iteraciones, la primera, i, se hace para repetir la segunda iteracion un número de veces igual al tamaño del array.
  //La segunda iteracion, j, llega hasta el penúltimo elemento del array, ya que hará una comparación con el elemento actual y el siguiente.
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.bubbleSort = bubbleSort;
