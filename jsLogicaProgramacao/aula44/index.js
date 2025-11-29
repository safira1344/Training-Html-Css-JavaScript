function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


//é possível criar funções anônimas "function()" dentro de argumento de chamada de função
const timer = setInterval(function() {
    console.log(mostraHora());
}, 10000); //esse 10000 é 10 seg

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);