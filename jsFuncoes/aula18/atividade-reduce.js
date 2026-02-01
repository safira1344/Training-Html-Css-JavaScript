//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)




//Some todos os números (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);