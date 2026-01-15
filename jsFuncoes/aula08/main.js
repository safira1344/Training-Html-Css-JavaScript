function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();