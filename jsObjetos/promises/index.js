function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Promise: representa uma operação assíncrona (que demora)
// resolve: quando deu tudo certo
// reject: quando deu erro

// JavaScript é assíncrono
// Promises vão para a fila de execução (event loop)

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// o then() executa um código quando a Promise é resolvida (sucesso)
// .then() recebe o valor do resolve(msg)
// Cada .then() pode retornar outra Promise
// O próximo .then() espera isso
// se um then() falhar interrompe todo o encadeamento

esperaAi('Conexão com o BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    }) 
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch (e => {
        console.log('ERRO:', e);
    });

    console.log('Isso aqui será exibido antes de qualquer promisse.');

//Promise.all Promice.race Promise.resolve Promise.reject
const promises  = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise 3', 3000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });