// ordem dos middlewares importam, porque o express executa em sequência
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
};