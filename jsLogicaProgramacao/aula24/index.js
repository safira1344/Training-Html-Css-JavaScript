/*
Operadores lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
/! -> NOT -> NAO
*/

const expressaoAND = true && true && false && true && true;
console.log(expressaoAND);

const expressaoOR = false || false || true || false;
console.log(expressaoOR);

const usuario = 'Luiz';
const senha = '123456';
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);


console.log(!true);