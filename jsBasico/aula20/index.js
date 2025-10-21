function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
    return 123456;
}

saudacao('Luiz');
saudacao('Maria');
saudacao('Felipe');

const variavel = saudacao('Safira'); //como a funcao saudacao não retorna nada, a const variavel não guardou nada. Por isso deve colocar o return na funcao
console.log(variavel);

function saudacao2(nome) {
    return `Bom dia ${nome}!`;
}

const variavel2 = saudacao2('Eris');
console.log(variavel2);

function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,3));
console.log(soma(3,9));
console.log(soma(5,5));

function soma2(x,y) {
    const resultado = x + y;
    return resultado;
    console.log('Olá mundo');  //linhas abaixo de return nunca serão executadas
}

const resultado = soma(2,2);
console.log(resultado);

function soma3(x=1, y=1) {
    const resultado = x + y;
    return resultado;
}

const resultado3 = soma3();
console.log(resultado3);

const raiz = (n) => {  //arrow function
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

