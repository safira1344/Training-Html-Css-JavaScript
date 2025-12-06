function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 100);
    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    alert('cliquei no iniciar');
});

pausar.addEventListener('click', function(event) {
    alert('cliquei no pausar');
});

zerar.addEventListener('click', function(event) {
    alert('Cliquei no zerar');
})