const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

// funcao para limpar input
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// função criaTarefa
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
}

btnTarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});