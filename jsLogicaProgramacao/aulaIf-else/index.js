// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes 
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else


const hora = 30;

if (hora <= 11){
    console.log('Bom dia');
} else if (hora <= 17) {
    console.log('Boa tarde');
} else if (hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}