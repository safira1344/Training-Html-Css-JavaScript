// Aritméticos
// + Adição / Concatenação (- / *)
// ** Potenciação
// % Resto da divisão

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3) //resultado é 25, pois tem a ordem de precedência dos sinais aritméticos. 

console.log((num1 + num2) *num3)//resultado 70, pois alterou a ordem de precedência ao usar os parênteses



// Ordem de precedência dos operadores aritméticos
// 1. ()
// 2. ** (potenciação)
// 3. * / %
// 4. + -

let contador = 1;
contador ++;
++contador;
console.log(contador); //é boa prática de programação colocar o resultado de cálculos em variáveis, para posteriormente exibir o resultado com o console.log. *NÃO É RECOMENDADO COLOCAR OPERAÇÕES MATEMÁTICAS PARA SER RESOLVIDAS DENTRO DO CONSOLE.LOG*


// Incremento = ++
// Decremento = --

const passo = 50;
let contador1 = 0;
contador1 += passo;
// contador1 **= passo; // (potenciação)
contador1 += passo;
contador1 -= passo;
contador1 *= passo;
console.log(contador1);


//O javascript vai tentar o possível para executar os cálculos solicitados e quando o cálculo que estiver tentando fazer não for com um dado que seja número, ele irá retornar o "NaN" - Not a Number
let numero1 = 10;
let numero2 = 'Luiz';
console.log(numero1 * numero2); //NaN

numero1 = 10;
numero2 = '5';
console.log(numero1 * numero2); //50
console.log(typeof numero2);



//Caso queira garantir que o dado se torne um número tem 3 maneiras distintas para fazer a conversão (cast) da String: parseInt(), parseFloat(), Number()
numero1 = 10;
numero2 = parseInt('5.2'); //por ter colocado o parseInt ele irá fazer o casting para inteiro, logo, não vai pegar a casa decimal
console.log(numero1 * numero2); //50
console.log(typeof numero2);


numero1 = 10;
numero2 = Number('5.9');
console.log(numero1 * numero2); //59
console.log(typeof numero2);
