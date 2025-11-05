let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

// const numeros = [1, 2, 3];
// [a, b, c] = numeros;
// console.log(a, b, c);

const letras = [b,c,a]; //desestruturação de array
[a, b, c] = letras;
console.log(a,b,c);


// -----------------------------------------------------------

// ... rest     ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ... resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);


// --------------------------------------------------------------
//                   0         1       2
//                 0 1 2    0 1 2    0 1 2
const numerosArray = [ [1,2,3], [4,5,6], [7,8,9] ];
const [lista1, lista2, lista3] = numerosArray; //desestruturação de array
console.log(lista3[2]);