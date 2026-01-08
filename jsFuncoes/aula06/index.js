// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'barbosa';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('mirely'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30,80,1.80);