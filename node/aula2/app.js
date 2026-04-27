//no camninho do require não precisa colocar o tipo de arquivo .js no final, melhor colocar quando for um arquivo diferente como .cs

// const Cachorro = require('./Z/mod2');

// const cachorrinho = new Cachorro('Dog');
// cachorrinho.latir();

console.log(__filename); //nome do arquivo
console.log(__dirname); //nome do diretório

//ou essa forma

const path = require('path'); //module nativo (já vem com node.js dentro)
console.log(path.resolve(__filename));
console.log(path.resolve(__dirname, '..', '..'));