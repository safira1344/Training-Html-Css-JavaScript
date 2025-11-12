// For in -> lê os índices ou chaves do objeto
//                 0       1       2
const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (i in frutas) {
//     console.log(i);
// }

const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Mirely',
    idade: 20
};

for (chave in pessoa) {
    console.log(chave, pessoa[chave]);
}