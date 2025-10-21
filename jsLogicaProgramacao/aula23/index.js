/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)********* não recomendado
=== igualdade estrita (valor e tipo)
/!= diferente (valor) *********** não recomendado
/!== diferente estrito (valor e tipo)

esses que não são recomendados é devido ao js ser fracamente tipado
*/

console.log(10>5);

const comp = 10 >= 5;
const comp1 = 10 >= 10;
const comp2 = 10 >= 11;
const comp3 = 10 <= 11;

console.log(comp, comp1, comp2, comp3);



const num1 = 10;
const num2 = '10';
const valor = num1 == num2;
console.log(valor);

const num3 = 10;
const num4 = '10';
const valor1 = num3 === num4;
const valor2 = num3 !== num4;
console.log(valor1, valor2);