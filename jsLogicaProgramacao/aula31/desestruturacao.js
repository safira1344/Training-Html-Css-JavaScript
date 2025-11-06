const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Mirely',
    idade: 20,
    endereço: {
        rua: 'Av Brasil',
        numero: 97,
    }
};

// const nome = pessoa.nome;
// console.log(nome);

const {nome} = pessoa;
console.log(nome);