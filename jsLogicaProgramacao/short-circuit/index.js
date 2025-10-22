/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> vai retornar "o valor verdadeiro"

FALSY
*false -> falso literal
*0
*'' "" ``
*null / undefined
*NaN
*/

console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && true && 'Maria');
console.log('Luiz Otávio' && true && NaN);


console.log('Luiz' && 'Maria');
console.log('Luiz' && '' && 'Maria');
console.log('Luiz' && undefined && 'Maria');
console.log('Luiz' && NaN && 'Maria');


console.log(0 || false || null || 'Luiz Otávio' || true);

// -------------------------------------------------------------
function falaOi () {
    return 'OI';
}

const vaiExecutar = 'Joaozinho';

console.log(vaiExecutar && falaOi());

let vaiExecutar2;
console.log(vaiExecutar2 && falaOi());

// --------------------------------------------------------------

const corUsuario = undefined;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || 'Joaozinho' || c || d || e);
