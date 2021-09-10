//Bootcamp Cohorte-5 01/09/2021

/*alert('Hola Mundo');
alert('Comentario multilinea')*/

//*VARIABLES*  

//Forma antigua
var nombre = "Valeria";
var apellido = "Mojica Castañeda";
var edad = 22;

edad = 27;

//Forma actual
let telefono;
let colorFavorito = 'Negro';
let comidaFavorita = 'Rabioles';
telefono = 5618103555

//02/09/2021
//Constantes
//el valor de las constantes no se puede cambiar
const gravedad = 9.8;
//gravedad = 'No hay gravedad';
const estudiantes = 20;

//Diferencias entre let y var
var numero = 40;
if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

console.log('*****************');

var numero2 = 100;
console.log(numero2);

if (true) {
    let numero2 = 5;
    console.log(numero2);
    let numero3 = 27; //Solo existe dentro del bloque
    //var numero3 = 27; //Existe incluso fuera del bloque
    console.log(numero3);
}

console.log(numero2);
//console.log(numero3);

//01/09/2021
//Tipos de datos
console.log(typeof(nombre));
console.log(typeof(apellido));
console.log(typeof(edad));

//alert(nombre);

