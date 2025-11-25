//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Numero e divisivel por 5 = Buzz
//Numero e divisivel por 3 e 5 = FizzBuzz
//Numero nao e divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero
//use a funcao com numeros de 0 a 100


// minha versão
// function fizzBuzz (numero) {
//     if(typeof numero !== 'number') return numero;

//     if(numero < 0 && numero > 100 && typeof numero !== 'number') return "Não é possível verificar";

//     if (numero%3 === 0 && numero%5 === 0) return "FizzBuzz";

//     else if (numero%3 !== 0 && numero%5 !== 0) return numero;

//     else if (numero%3 === 0) return "Fizz";

//     else return "Buzz";
// }

// console.log(fizzBuzz('34'));



//é muito importante que ifs que verificam mais de uma condição venham antes dos ifs que verificam 1 condição somente.
function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}