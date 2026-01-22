//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
// String, Objetos, Funções, Números
nomes[2] = 'João';
console.log(nomes);
delete nomes[2];
console.log(nomes);


//Valor por referência
//                 0         1        2
const nomes1 = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes1]; //spread (fez uma cópia do valor)

novo.pop(); //retira o último elemento da direita
console.log(nomes1);
console.log(novo);
console.log(nomes1.length);

const removido = nomes1.pop(); //pop retorna o elemento removido
const removido2 = nomes1.shift(); //retira o 1 elemento a esquerda
console.log(removido, removido2);

nomes.push('João'); //adiciona novo item ao final do array
nomes.unshift('Wallace'); //adiciona no inicio do array
console.log(nomes);


const nomes2 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo2 = nomes2.slice(1, -2); //extrai parte do array e string
console.log(novo2);


const nome3 = 'Luiz, Otávio, Miranda';
const nomes3 = nome3.split(','); //divide string em várias partes
console.log(nomes3);