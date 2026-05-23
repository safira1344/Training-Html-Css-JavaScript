const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://safiraaabarbosaaa_db_user:<db_password>@cursojs01.vvnaehq.mongodb.net/?appName=cursojs01';
mongoose.connect();

const routes = require('./routes');
const path = require('path');
const {middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});