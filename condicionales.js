//Condicionales 02/09/2021

/*var edad = prompt('Introduce tu edad');

if (edad >= 18) {
    //console.log('Eres mayor de edad');
    document.write('Eres mayor de edad'); //Muestra el texto en el HTML
}else {
    //console.log('Eres menor de edad');
    document.write('No eres mayor de edad');
}*/

/*Pregunta al usuario su edad. Despues hacer una condicional if con las siguientes situaciones, si el usuario es mayor de 18 y menor de 29 años mostrar mensaje 'Felicidades has sido aceptado en el Bootcamp de Generation', en caso contrario mostrar el mensaje 'No cumples con los requisitos del programa' */

var edad = prompt('Introduce tu edad', '19');

if (edad >= 18 && edad <= 29) {
    console.log(`Tu edad es ${edad}. Felicidades has sido aceptado en el Bootcamp de Generation`);
} else {
    console.log(`Tu edad es ${edad}. No cumples con los requisitos del programa`);
}