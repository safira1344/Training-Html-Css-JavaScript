//O map transforma cada elemento do array e sempre retorna um novo array com o mesmo tamanho do original. Não altera o original. Use quando você quer modificar os valores, não remover elementos.

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosMapeados = numeros.map(function(valor, indice, array){
//     console.log(valor, indice, array);
// }) 

const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);  


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// const nomes = pessoas.map((valor) => valor.nome);
// console.log(nomes);
// const idade =  pessoas.map((obj) => {
//     delete obj.nome;
//     return obj.idade;
// });
// console.log(idade);

const comIds = pessoas.map((valor, indice) => {
    valor.id = indice;
    return valor;
});
console.log(comIds);

// const comIds = pessoas.map((valor, indice) => {
//     valor.id = (indice + 1) * 10;
//     return valor;
// });
// console.log(comIds);

// const comIds = pessoas.map((obj, indice) => {
//     const newObj = {...obj};
//     newObj.id = indice;
//     return newObj;
// });
// console.log(comIds);
