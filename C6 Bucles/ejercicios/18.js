function productoEntreNumeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  
  // Inicializamos el producto en 1
  let producto = 1;  
  // Encontramos el número más pequeño y el más grande
  let min = Math.min(a, b);  
  let max = Math.max(a, b);  

  // Verificamos si el rango incluye 0
  if (min <= 0 && max >= 0) {
    return 0;  // Si el rango incluye 0, el producto es 0
  }

  // Recorremos desde min hasta max
  for (let i = min; i <= max; i++) {  
    producto *= i;  // Multiplicamos cada número en el rango
  }

  return producto;  // Devolvemos el producto final
}

// Asegúrate de exportar la función
module.exports = productoEntreNumeros;
