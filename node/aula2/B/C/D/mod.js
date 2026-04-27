// No Node.js, um módulo é basicamente um arquivo (ou conjunto de arquivos) que encapsula código reutilizável.
// Eles ajudam a:

// Organizar o projeto
// Reutilizar código
// Evitar poluição do escopo global
// Separar responsabilidades

// Você vai trabalhar com:

// core modules (nativos)
// custom modules (seus arquivos)
// third-party modules (npm)

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está fazendo au au`);
    }
};