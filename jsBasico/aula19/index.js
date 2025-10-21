const alunos = ['Luiz', 'Maria', 'Joao'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

console.log(typeof alunos);
console.log(alunos instanceof Array);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);

console.log(alunos.length);

alunos.push('Safira');  //adiciona dados no array ao final
alunos.unshift('Eris'); //adiciona dados no array no início
alunos.unshift('Nat');
console.log(alunos);

console.log('-------------------------------------')
alunos.pop(); //remove o último dado no array
const removido = alunos.pop(); //dá para armazenar o dado removido
console.log(removido);
console.log(alunos);

console.log('----------------------------------')
alunos.shift();  //remove o primeiro dado do array
console.log(alunos);

console.log('------------------------------------')
delete alunos[1];  //remove um dado do array sem modificar os índices
console.log(alunos);
console.log(alunos[1]);

console.log('------------------------------')
console.log(alunos[12]);  //retorna undefined se a posicao n existe

console.log('---------------------------------------')
console.log(alunos.slice(0,3));  // fatia o array de 0 até o índice 2
console.log(alunos.slice(0, -2));