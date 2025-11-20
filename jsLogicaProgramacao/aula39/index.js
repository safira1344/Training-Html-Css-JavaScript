// function maiorNumero (num1, num2) {
//     const numeros = [num1, num2];
//     const valor = Math.max(...numeros);
//     return valor;
// }

// console.log(maiorNumero(2,4));

// function maiorNumero (num1, num2) {
//     const numeros = [num1, num2];
//     if(num1 > num2) return num1;
//     else return num2;
// }

function maiorNumero (num1, num2) {
    const numeros = [num1, num2];
    return (num1 > num2)? num1 : num2;
}

console.log(maiorNumero(10,30));