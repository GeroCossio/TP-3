//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write('<ul>')
for (let listameses=0; listameses < meses.length; listameses++) {
     document.write(`<li>${ meses [listameses]}</li>`) 
    }
document.write('</ul>')