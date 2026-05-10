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

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar Formulário</button>
        </form>
        `);
});

app.get('/testes/{/:idUsuarios}/{/:parametro}', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});