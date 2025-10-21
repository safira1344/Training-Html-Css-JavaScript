//IEEE 754-2008  (pode lidar com uma certa imprecisão)
let num1 = 0.7// number
let num2 = 0.1// number

num1 += num2; //0.8
num1 += num2; //0.8
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2);  (essa forma conseguimos fazer a concatenação entre os dois números como se num1 fosse string '12.5')

// num1 = num1.toString();  //lembrando que somente se guardar o valor do método em uma string que num1 se torna string
// console.log(num1.toString(2)); //conseguimos obter o binário do numero 
// console.log(num1.toFixed(4));//conseguimos controlar quantas casas decimais aparece, porém somente toFixed não resolve problema de imprecisão do javascript
// console.log(num1.toInteger(num1));

let temp = num1 * '5';  // 5  (o motor do js ele vai tentar o possível pra tentar reconhecer números por mais q seja string)
console.log(Number.isNaN(temp)); //false
