//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um numero
//Não podem conter espaços ou traços
//Utilizamos  camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST

const nome = 'João';
console.log(nome);
// nome = 'Paula';
// console.log(nome);

const primeiroNumero=26;
const segundoNumero=10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //porém aqui na ressignificação do valor, perdeu o primeiro resultado de resultadoTriplicado
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);

console.log(typeof(primeiroNumero + segundoNumero));

//Como javascript tem tipagem dinâmica conseguimos fazer cálculos com string/char e número, porém é feito uma concatenação apenas no caso de adição.  '5' + 10 = 510. Para o js ele considera esse resultado de 510 como uma string.