//return
//Retorna um valor
//Termina a função

function criaPessoa(nome,sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
}

const p1 = criaPessoa('fernanda', 'mirely');
const p2 = {
    nome: 'nathalia',
    sobrenome: 'barbosa'
};
console.log(p1);
console.log(p2);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo);
console.log(olaMundo('Mundo.'));



function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);


console.log(duplica(3));
console.log(triplica(4));
console.log(quadruplica(10));
