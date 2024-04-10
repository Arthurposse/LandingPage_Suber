// Alterando placeholder na tela do celular 

const input_cidade = document.getElementById('input_cidade');
const input_retirada = document.getElementById('input_retirada');
const input_devolucao = document.getElementById('input_devolucao');

// Celular

const mediaQuery = window.matchMedia('(min-width: 481px) and (max-width: 820px)');

function responsividadeCeluar(mediaQuery) {
    if (!mediaQuery.matches) {
        input_cidade.placeholder = 'Cidade';
        input_retirada.placeholder = 'Data de retirada';
        input_devolucao.placeholder = 'Data de devolução';
    }
};

window.addEventListener('resize', function() {
    responsividadeCeluar(mediaQuery);
});


