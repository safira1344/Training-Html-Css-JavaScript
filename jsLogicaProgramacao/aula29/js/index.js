const container = document.querySelector('#container');

function formataData (data) {
    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    return `${formataDiasSemana(diaSemana)}, ${dia} de ${formataMeses(mes)} de ${ano} ${hora} : ${minuto}}`;
}




function formataDiasSemana (dia) {
    let diaSemanaTexto;
    switch (dia) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }
}

function formataMeses (mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 3:
            mesTexto = 'Março';
            break;
        case 4:
            mesTexto = 'Abril';
            break;
        case 5:
            mesTexto = 'Maio';
            break;
        case 6:
            mesTexto = 'Junho';
            break;
        case 7:
            mesTexto = 'Julho';
            break;
        case 8:
            mesTexto = 'Agosto';
            break;
        case 9:
            mesTexto = 'Setembro';
            break;
        case 10:
            mesTexto = 'Outubro';
            break;
        case 11:
            mesTexto = 'Novembro';
            break;
        case 12:
            mesTexto = 'Dezembro';
            break;
        default:
            mesTexto = '';
            break;   
    }
}