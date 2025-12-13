const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.btn-tarefa');

function criaTarefa(textoInput) {
    console.log(textoInput);
}

btnTarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});