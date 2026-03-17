//Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };
}

const p1 = criaPessoa('Fernanda', 'Mirely');
console.log(p1);