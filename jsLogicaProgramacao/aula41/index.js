//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Numero e divisivel por 5 = Buzz
//Numero e divisivel por 3 e 5 = FizzBuzz
//Numero nao e divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero
//use a funcao com numeros de 0 a 100

function verificaDivisivel (numero) {
    if(numero < 0 && numero > 100) return "Não é possível verificar";

    if (numero%3 == 0 && numero%5 == 0) return "FizzBuzz";

    else if (numero%3 !== 0 && numero%5 !== 0) return numero;

    else if (numero%3 == 0) return "Fizz";

    else return "Buzz";
}

console.log(verificaDivisivel(15));