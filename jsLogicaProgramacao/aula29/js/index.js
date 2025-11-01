const h1 = document.querySelector('.container h1');

const data = new Date();

function formataData (data) {
    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    return `${formataDiasSemana(diaSemana)}, ${dia} de ${formataMeses(mes)} de ${ano} ${hora} : ${minuto}`;
}


function formataDiasSemana (dia) {
    let diaSemanaTexto;
    switch (dia) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function formataMeses (mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 3:
            mesTexto = 'Março';
            return mesTexto;
        case 4:
            mesTexto = 'Abril';
            return mesTexto;
        case 5:
            mesTexto = 'Maio';
            return mesTexto;
        case 6:
            mesTexto = 'Junho';
            return mesTexto;
        case 7:
            mesTexto = 'Julho';
            return mesTexto;
        case 8:
            mesTexto = 'Agosto';
            return mesTexto;
        case 9:
            mesTexto = 'Setembro';
            return mesTexto;
        case 10:
            mesTexto = 'Outubro';
            return mesTexto;
        case 11:
            mesTexto = 'Novembro';
            return mesTexto;
        case 12:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;   
    }
}

h1.innerHTML = formataData(data);

