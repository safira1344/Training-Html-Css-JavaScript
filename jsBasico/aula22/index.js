// Primitivos (imutáveis) - String, number, Boolean, undefined, null (BigInt, symbol) - Valor

         // 0123
let nome = 'Luiz';
nome[0] = 'R'; //nome por ser string é imutavel, nao vai alterar
console.log(nome[0], nome);



// let a = 'A';
// let b = a;  //Copia
// console.log(a,b);
// a = 'Outra coisa';
// console.log(a,b); //b ainda continua com copia do antigo valor



// Referencia (mutável) - array, object, function - Passados por referência

let a = [1,2,3];
let b = a;
let c = [...b]; //dessa forma "c" só terá a cópia do valor de "b" não estará apontado para o endereço de memória de "b"

console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);



const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const pessoa2 = pessoa1;
console.log(pessoa2);

pessoa1.nome = 'Joao';
console.log(pessoa2);