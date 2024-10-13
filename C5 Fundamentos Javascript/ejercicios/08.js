function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

// Usamos Number.isInteger() para verificar si el número es un entero
    if (Number.isInteger(numero)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(esNumeroEntero(24));      // true (es entero)
  console.log(esNumeroEntero(121.212)); // false (no es entero)
  console.log(esNumeroEntero(0));       // true (es entero)

module.exports = esNumeroEntero;