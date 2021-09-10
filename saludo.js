/*
1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o por html.
*/

/*
let nombre = prompt('¿Cual es tu nombre?', 'Valeria' );
document.write(`Hola ${nombre.toUpperCase()}, saludos desde javascript
`)
*/

/*
2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/

let num1 = parseInt(prompt('Ingresa El Primer Valor'));
let num2 = parseInt(prompt('Ingresa El Segundo Valor'));

function operaciones(num1, num2) {
    let suma = num1 + num2,
        resta= num1 - num2,
        multiplicacion = num1 * num2,
        division = num1 / num2;

    document.write(`El resultado de la suma es: ${suma}`+ '</br>');
    document.write(`El resultado de la resta es: ${resta}`+ '</br>');
    document.write(`El resultado de la multiplicacion es: ${multiplicacion}`+ '</br>');
    document.write(`El resultado de la division es: ${division}`+ '</br>');
}

operaciones(num1,num2);

