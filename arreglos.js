//Funciones 03/09/2021

let num1 = prompt('Numero 1');
let num2 = prompt('Numero 2');
let num3 = prompt('Numero 3');

let arreglo = [];

arreglo.push(num1);
arreglo.push(num2);
arreglo.push(num3);

console.log(arreglo); 

arreglo.sort();
console.log(arreglo);

alert('El numero mayor es: ' + arreglo[2]);