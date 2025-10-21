let num1 = 9.54578;
// let num2 = Math.floor(num1); //arredonda para baixo
// let num2 = Math.ceil(num1); //arredonda para cima
// let num2 = Math.round(num1); //arredonda para o mais próximo

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9)); //retorna o maior valor da lista
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //retorna o menor valor da lista

const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);

console.log(Math.pow(2,10)); //faz o cálculo de potência
console.log(2 ** 10); //faz o cálculo de potência

console.log(100 / 0); //em js cálculos por 0 conseguem ser realizados mas o resultado é infinity

console.log(!! (100 / 0)); //duas exclamações retorna o tipo 