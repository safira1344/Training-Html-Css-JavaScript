//No ECMAScript (padronização do js) 2015 (ES6) foi colocado o let e o const, mas antes era possível redeclarar uma mesma variável com var, códigos antigos ainda possuem a variável Var, mas não é recomendado de forma alguma que continue a utilização.
var nome = 'Luiz';
var nome = 'Otávio';

console.log(nome);


nome = 'Luiz'; //NÃO USAR VAR E NÃO DEIXAR DE UTILIZAR O VAR E O CONST
console.log(nome);