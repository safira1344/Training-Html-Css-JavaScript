// const pessoa = {
//     nome: 'Fernanda',
//     sobrenome: 'Mirely'
// };

// const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Fernanda';
// pessoa1.sobrenome = 'Mirely'

// const pessoa2 = {
//     nome: 'Safi',
//     sobrenome: 'Mirely'
// };

// console.log(pessoa1, pessoa2);


// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 21;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.getDataNascimento());


//Factory functions 
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }     

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto());

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this -> this
const p1 = new Pessoa('Fernanda', 'Souza');
console.log(p1);

const p2 = {};
p2.nome = 'Luiz';
console.log(p2);