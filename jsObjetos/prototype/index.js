//JavaScript usa herança prototipal

// Procura a propriedade no próprio objeto.
// Se não encontrar, procura no protótipo.
// Continua subindo na cadeia até chegar em null.

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

// __proto__ é legado
// Não é recomendado oficialmente
// Pode ser removido no futuro

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

// Em vez de usar setPrototypeOf, prefira:
// Object.create() (assim o protótipo já é definido na criação - muito mais eficiente).