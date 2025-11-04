const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

// let nome = 'Luiz'; //criando
// var nome2 = 'Luiz';

// if (verdadeira) {
//     let nome = 'Otávio'; //criando
//     console.log(nome, nome2); 

//     if (verdadeira) {
//         let nome = 'Outra coisa'; //criando
//         console.log(nome, nome2);
//     }
// }


// let nome = 'Luiz'; 
// var nome2 = 'Luiz';

// if (verdadeira) {
//     let nome = 'Otávio'; 
//     var nome2 = 'Rogério'; //redeclarando

//     if (verdadeira) {
//         var nome2 = 'Ronaldo' //redeclarando
//         let nome = 'Outra coisa'; 
//     }
// }

// console.log(nome, nome2);


function falaOi () {
    let nome = 'Fernanda';
}

console.log (nome);
falaOi();