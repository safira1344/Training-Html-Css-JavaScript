const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.sucedd(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     request({
//         method:'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response);
//         },
//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// }

// async function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//         method: 'GET',
//         url: href
//     };

//     try {
//         const response = await request(objConfig);
//         carregaResultado(response); 
//     } catch(e) {
//         console.log(e);
//     }
// }

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404!');
        
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

//fetch API ------------------------------

// fetch('pagina4.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('Erro 404 nosso');
//         return resposta.text();
//     })
//     .then(html => console.log(html)) //console.log()  console.warn()  console.error()
//     .catch(e => console.error(e));