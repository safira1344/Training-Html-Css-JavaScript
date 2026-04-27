// const nome = 'Fernanda'
// const sobrenome = 'Mirely';

// const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';
// console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.sobrenome = this.sobrenome;
    }
}

const nome = 'Fernanda';
const sobrenome = 'Mirely';

exports.Pessoa = Pessoa;