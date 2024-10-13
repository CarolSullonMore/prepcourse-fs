function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
//  return 'Es vocal';
//  if (letra === 'a') {
//  } else if (letra === 'e') {
//    return 'Es vocal';
//  } else if (letra === 'i') {
//    return 'Es vocal';
//  } else if (letra === 'o') {
//    return 'Es vocal';
//  } else if (letra === 'u') {
//    return 'Es vocal';
//  } else {
//    return 'Dato incorrecto';
//  }
  // Verifica si la longitud de la letra es 1 y si es una vocal
  if (letra.length === 1 && 'aeiou'.includes(letra)) {
    return 'Es vocal'; // Retorna si es vocal
  } else {
    return 'Dato incorrecto'; // Retorna si no es vocal o si no es un solo carácter
  }
}

module.exports = esVocal;
