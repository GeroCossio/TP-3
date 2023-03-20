/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/

function calcularPerimetro() {
    let ladoA = parseFloat(prompt("Ingresa la longitud del lado A"));
    let ladoB = parseFloat(prompt("Ingresa la longitud del lado B"));
    let perimetro = 2 * (ladoA + ladoB);
    document.write("El perimetro del rectangulo es " + perimetro);
  }
  
  calcularPerimetro();