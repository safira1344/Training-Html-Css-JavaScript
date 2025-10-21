//               01234567
let umaString = "Um texto";
let texto = "O rato roeu a roupa do rei de roma.";

console.log(umaString[9]); //undefined

console.log(umaString.charAt(6)); //t

console.log(umaString.concat(' em um'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('o', 3)); //7
console.log(umaString.lastIndexOf('o', 3)); //-1

console.log(umaString.match(/[a-z]/g)); //match não pega o índice zero [ 'm', 't', 'e', 'x', 't', 'o' ]

console.log(umaString.search('t'));//retorna o pimeiro índice que encontrar o termo

console.log(umaString.replace('Um', 'Outra'));
console.log(texto.replace(/r/g,'#')); //a máscara g indica que é para pegar todos os r.

console.log(texto.length);

console.log(texto.slice(2,6));//deve pegar um a mais
console.log(texto.slice(-3));//ma.  
console.log(texto.substring(texto.length - 5));
console.log(texto.substring(texto.length - 5, texto.length - 1));

console.log(texto.split(' ', 3));

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());