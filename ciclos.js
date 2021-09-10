//Ciclo For 06/09/2021
console.log('REPETICIÓN DE SALUDO DE FORMA MANUAL');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');

console.log('**********************');
console.log('REPETICIÓN DE SALUDO CON EL CICLO FOR');

for (let contador = 0; contador <= 10; contador++) {
    console.log(`Hola desde el ciclo For. Vuelta ${contador}`);
    document.write(`Hola desde el ciclo For. Vuelta ${contador}` + '</br>');
}

console.log('**********************');
console.log('IMPRESIÓN DE LAS POSICIONES DEL ARREGLO DE FORMA MANUAL');
const frutas = ['Manzana', 'Mango', 'Pera', 'Piña', 'Sandia', 'Melon'];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);

console.log('**********************');
console.log('IMPRESIÓN DE LAS POSICIONES DEL ARREGLO CON EL CICLO FOR');

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    document.write(frutas[i] + '</br>');
}