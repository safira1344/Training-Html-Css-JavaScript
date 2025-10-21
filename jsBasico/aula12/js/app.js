let num1 = prompt("Digite o primeiro número");
let num2 = prompt("Digite o segundo número");

num1 = Number(num1);
num2 = Number(num2);//aqui o dado foi alterado e atribuído a variável

// let resultado = Number(num1) + Number(num2); //nesse exemplo só é feito o cast para exibir o resultado, mas não muda o tipo de dado "string" do num1 e num2 

let resultado = num1 + num2;
// alert('O resultado é ' + resultado); 
alert(`O resultado é: ${resultado}`);
alert(typeof num1);
alert(typeof num2);