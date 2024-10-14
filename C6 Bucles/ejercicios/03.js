function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
//   if (x > y) {
//     return x; 
//   } else if (y > x) {
//     return y;
//   } else {
//     return x, y;
//   }
// Math.max() is a built-in JavaScript function that returns the largest of the given numeric arguments, allowing you to compare two or more numbers and find the maximum value among them.
  return Math.max(x, y);
}

module.exports = obtenerMayor;
