// const nome = ['Fernanda', 'Mirely', 'Safi'];

const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Mirely'
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For In - Retorna o índice ou chave (string, array ou objetos)  OBS: ÓTIMO PARA OBJETOS!
// For Of - Retorna o valor em si (iteráveis, arrays ou strings)


// for (let i = 0; i < pessoa.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in pessoa) {
//     console.log(i, pessoa[i]);
// }

for (let valor of pessoa) {
    console.log(valor);
}