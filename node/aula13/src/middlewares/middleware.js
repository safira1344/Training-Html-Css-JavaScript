// ordem dos middlewares importam, porque o express executa em sequência
exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
};