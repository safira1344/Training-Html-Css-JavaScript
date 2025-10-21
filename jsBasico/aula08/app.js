const nome = 'Fernanda Mirely';
const sobrenome = 'Barbosa Souza';
const idade = 20;
const peso = 52;
const altura = 1.68;
let imc;
let anoNascimento;

imc = peso / Math.sqrt(altura);
anoNascimento = 2025 - idade - 1;

console.log(nome, sobrenome,"tem", idade, "anos, pesa", peso,"kg tem", altura, "de altura e seu IMC é de", imc);
console.log(nome,"nasceu em", anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`); //se chama interpolação de string