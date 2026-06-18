require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const { default: MongoStore } = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

mongoose.connect(process.env.CONNECTIONSTRING);

// console.log(process.env.CONNECTIONSTRING);

mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão com o MongoDB:', err);
});

mongoose.connection.on('open', () => {
    app.emit('pronto');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: false
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);

app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(7000, () => {
        console.log('Acessar http://localhost:7000');
        console.log('Servidor executando na porta 7000');
    });
});