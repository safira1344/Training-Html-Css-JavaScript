const express = require('express');
const app = express();

// A Query String é a parte da URL usada para enviar dados/parâmetros pela URL.
// Ela começa com:

// ?

// Exemplo:
// https://site.com/busca?produto=mouse&marca=logitech&preco=100

// https://	        protocolo
// site.com	        domínio
// /busca	        rota
// ?	            início da query string
// produto=mouse    parâmetro
// &	            separador
// marca=logitech	outro parâmetro

// Tudo depois do ? é a query string.

app.use(
    express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        Outro campo: <input type="text" name="aquioutrocampo">
        <button>Enviar Formulário</button>
        </form>
        `);
});

app.get('/testes/{/:idUsuarios}/{/:parametro}', (req, res) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    // 
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});