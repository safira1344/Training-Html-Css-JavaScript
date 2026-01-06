//Global
// Closure é formada quando uma função interna tem acesso às variáveis de uma função externa mesmo após a função externa ter sido executada.
// Closure é a capacidade que uma função tem de “lembrar” o escopo em que foi criada, mesmo depois que esse escopo já foi encerrado.

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
} 

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.log(funcao(), funcao2());