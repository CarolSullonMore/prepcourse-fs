//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
  }
  
  //Función: cuidadoConElConsoleLog
  function cuidadoConElConsoleLog(nombre) {
      console.log(nombre);
      return nombre;
    }
  //Precedencia de valores
  var a = 1;
  var b = 2;
  var c = a = b;
  console.log (c); 



  function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');
    }
  };
  viajar('Brasil');
  viajar('Argentina');

function puedeManejar(edad) {
  if(edad >= 18) {
           console.log( true );
  } 
  console.log( false );
}

puedeManejar(17);
