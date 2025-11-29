function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

//setInterval agenda a execução de uma função repetidamente, com um intervalo fixo entre invocações (também em ms).
//setTimeout agenda a execução de uma função uma única vez depois de um atraso (em milissegundos).


//é possível criar funções anônimas "function()" dentro de argumento de chamada de função
// const timer = setInterval(function() {
//     console.log(mostraHora());
// }, 10000); //esse 10000 é 10 seg

// setTimeout(function() {
//     clearInterval(timer);
// }, 3000);

// setTimeout(function() {
//     console.log('Olá mundo!');
// }, 5000);

function saudacao(nome) {
    console.log('Olá,', nome);
}
setTimeout(saudacao, 5000, 'Fernanda'); // "Olá, Fernanda" após 5s
