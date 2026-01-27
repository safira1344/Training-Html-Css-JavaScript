//Filter -> Sempre retorna um novo array filtrado. É possível capturar o valor, indice e array completo. Não altera o array original. Ele retorna apenas os elementos que satisfazem a condição (true).

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((function callbackFilter(valor) {
//     return valor > 10;
// }));

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice);
//     return valor > 10;
// });
// console.log(numerosFiltrados);

const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);


//Retorna as pessoas que tem o nome com 5 letras ou mais
//Retorna as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com "a"
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomesGrandes);

const pessoasIdadeAvancada = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasIdadeAvancada);

const pessoasTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
});
console.log(pessoasTerminaComA);

