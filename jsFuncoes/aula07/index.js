function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Fernanda', 'Mirely', 1.8, 80);
console.log(p1.imc());
console.log(p1.fala('falando sobre JS'));