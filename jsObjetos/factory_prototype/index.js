//Factory function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,

//         falar() {
//             console.log(`${this.nome} está falando.`);
//         },

//         comer() {
//             console.log(`${this.nome} está comendo.`);
//         },

//         beber() {
//             console.log(`${this.nome} está bebendo.`);
//         },
//     };
// }

//ou
// function criaPessoa(nome, sobrenome) {
//     const pessoaPrototype = {
//         falar() {
//             console.log(`${this.nome} está falando.`);
//         },

//         comer() {
//             console.log(`${this.nome} está comendo.`);
//         },

//         beber() {
//             console.log(`${this.nome} está bebendo.`);
//         },
//     };

//     return Object.create(pessoaPrototype, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome}
//     });
// }

//ou

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};

// const pessoaPrototype = Object.assign({}, falar, comer, beber);
const pessoaPrototype = {...falar, ...beber, ...comer};

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Fernanda', 'Mirely');
console.log(p1);