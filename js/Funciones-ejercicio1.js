//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parImpar(numero) {
    if (numero % 2 === 0) {
      return "El numero es par";
    } else {
      return "El numero es impar";
    }
  }
  
  let numero = prompt("Porfavor ingresa un numero ");
  let resultado = parImpar(numero);
  document.write(resultado);
  