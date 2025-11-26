//o front-end sempre deve tratar seus próprios erros, não é legal mostrar uma stack trace pro usuário final

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser números.'); 
        // throw new Error('x e y precisam ser números.'); // esse new cria o nosso próprio erro criado como se fosse do js
    }

    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1', 2));
} catch (error) { //linha responsável por capturar o erro na stack trace
    console.log(error);
}