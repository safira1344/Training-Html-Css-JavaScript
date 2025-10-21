// pode fazer isso, com colchetes é criação de array
let array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
console.log(array);

// não pode fazer isso (reatribuir array para outro tipo de dado já que ele é const)
array = 'Outra';

console.log('-------------------------------------')

// aqui com chaves é criação de objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


const pessoa2 = {
    nome: 'maria',
    sobrenome:'Oliveira',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);

console.log('-------------------------------------')

// esse tipo de função se chama factory (fábrica de objeto)
function criaPessoa (nome,sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoaUm = criaPessoa('Luiz', 'Miranda', 25);
const pessoaDois = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('Joao', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoaUm.nome, pessoaDois.nome);

