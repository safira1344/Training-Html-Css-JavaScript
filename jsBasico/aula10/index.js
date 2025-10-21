const nome = 'Fernanda'; //string
const nome1 = "safi"; //string
const nome2 = `safi`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta para local nenhum da memória (apenas o let pode ficar sem nenhum valor)
const sobrenomeAluno = null; //nulo -> não aponta para local nenhum da memória (não é possível mandar printar um null)
const aprovado = false; //Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a,b); //2, 2

a=3;
console.log(a,b) //3, 2
