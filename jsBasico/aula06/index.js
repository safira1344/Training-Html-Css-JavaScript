let nome = 'Henrique'; //string

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');



let teste; //declarou a variável
console.log(teste);

let teste2;
teste2 = 'Qualquer valor';
console.log(teste2);
teste2 = 'Fernanda';
console.log(teste2);


// NÃO UTILIZE VAR, UTILIZE LET. 

//O let utilizamos quando se sabe que aquele dado guardado na variável pode mudar no decorrer do código

// Não podemos criar variáveis com palavras reservadas
// -> let if;

// Variáveis precisam ter nomes significativos
// ->let n = campoBaseDeDados;
// console.log(n);

// Não pode começar o nome de uma variável com um número
// let 1nome;

// O padrão em javascript é camelCase
// nomeCliente;

// Não podem conter espaços ou traços
// nome-cliente;

// javascript é Case-sensitive
// let nomeCliente é diferente de let nomecliente;

// Não pode redeclarar variáveis com let
// let nome;
// let nome;
