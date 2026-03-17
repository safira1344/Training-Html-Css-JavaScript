// O map() percorre cada elemento de um array, executa uma função em cada item e retorna um novo array com os valores transformados.
// -Não altera o array original
// -Sempre retorna um novo array

// A diferença entre um Map() e um forEach() é que o forEach ele apenas executa algo, apenas itera. Enquanto que o Map() vai ser usado se além de precisar iterar, precisa transformar os elementos de um objeto ou Array, além de precisar retornar um novo array com os valores modificados.


const pessoas = [
    { id: 3, nome: 'Fernanda' },
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
];

//const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

// for (const pessoas of novasPessoas.values) {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);