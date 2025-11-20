// function maiorNumero (num1, num2) {
//     const numeros = [num1, num2];
//     const valor = Math.max(...numeros);
//     return valor;
// }

// console.log(maiorNumero(2,4));

function maiorNumero (num1, num2) {
    if(num1 > num2) return num1;
    return num2;
}

// function maiorNumero (num1, num2) {
//     return (num1 > num2)? num1 : num2;
// }


//arrow function
const max2 = (x,y) => {
    return x>y ? x:y;
};

console.log(maiorNumero(50,30));
console.log(max2(50,30));
