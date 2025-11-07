const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Mirely',
    idade: 20,
    endereco: {
        rua: 'Av Brasil',
        numero: 97
    }
};

// const nome = pessoa.nome;
// console.log(nome);


//atribuiçao via desestruturação
// const {nome, sobrenome, idade} = pessoa;
// console.log(nome, sobrenome, idade);


// const { nome = 'Não existe', sobrenome } = pessoa;
// console.log(nome, sobrenome);


//atribuição de varíavel por meio da desestruturação
// const { nome: teste = '', sobrenome } = pessoa;
// console.log(teste, sobrenome);


// const { 
//     endereco: {rua, numero}, 
//     endereco
// } = pessoa;
// console.log(rua, numero, endereco);


//atrubuição de variável por desestruturação
// const {
//     endereco: { rua: r = 12345, numero },
//     endereco
// } = pessoa;
// console.log(r, numero, endereco);


// ... rest  ...spread
// const { nome, ...resto } = pessoa;
// console.log(resto);

for (let i = 0; i <= 10; i++) {
    const par = i % 2 == 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i);
}