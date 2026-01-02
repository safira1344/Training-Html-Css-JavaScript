function funcao() {
    console.log('Oie');
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


//arguments que sustenta todos os argumentos enviados
//arguments funciona em functions normais e function expression, NAO funciona em Arrow function
function funcao1() {
    console.log(arguments);
}
funcao1('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcao2(a,b,c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a,b,c);
}
funcao2(1, 2, 3, 4, 5, 6, 7);


function funcao3 (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao3(1,2,3);


function funcao4 (a, b = 2, c = 4) {
    b = b || 0;
    console.log(a + b + c);
}
funcao4(2, undefined); //undefined faz pegar o valor estabelecido do parâmetro


function funcao5 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao5({ nome:'Fernanda Mirely', sobrenome:'Barbosa', idade: 21});


function funcao6 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome:'Fernanda', sobrenome:'Barbosa', idade: 21 };
funcao6(obj);


// o "..." é o rest ele pega todo o restante dos argumentos da chamada de função
function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);


//function expression
const conta2 = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta2('+', 0, 20, 30, 40, 50);


//Arrow Function
const conta3 = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
conta3('+', 0, 20, 30, 40, 50);