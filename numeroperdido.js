// Función para encontrar el numero unico en un conjunto de numeros (numbers) proporcionado.
function findLostNumber(numbers) {
  // Inicializo la variable para almacenar el numero unico.
  let uniqueNumber = null;

  // Itero a través del conjunto de numeros.
  for (let index = 0; index < numbers.length; index++) {
    // Filtro los numeros iguales al numero actual en el bucle.
    const element = numbers.filter((num) => num === numbers[index]);
    // Verifico si la longitud del array filtrado es 1.
    if (element.length === 1) {
      // Si es 1, asigno el numero unico y salgo del bucle.
      uniqueNumber = element[0];
      break;
    }
  }

  if (uniqueNumber !== null) {
    console.log('El numero unico es:', uniqueNumber);
  } else {
    console.log(
      'El conjunto de numeros proporcionado no contiene un numero unico.'
    );
  }
}

const numbers = [1, 3, 2, 4, 2, 1, 3];
findLostNumber(numbers);
