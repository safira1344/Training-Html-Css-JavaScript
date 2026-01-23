//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// splice retorna um array com o que retirou ou adicionou
// const removidos = nomes.splice(3,2);
// const removidos = nomes.splice(-1,1); // pop
// const removidos = nomes.splice(3,0,'Luiz');
// const removidos = nomes.splice(3,2,'Luiz', 'Fernanda');
// const removidos = nomes.splice(nomes.length,0,'Luiz', 'Fernanda'); //push
const removidos = nomes.splice(0,0,'Luiz', 'Fernanda'); //unshift
console.log(nomes, removidos);