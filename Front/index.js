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

// API

let button = document.getElementById('handleSubmit');

button.onclick = async function(e) {
    e.preventDefault();
    //cancela o comportamento padrão de um formulario, tem que colocar o "e" no parametro
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = {name, email, password}

    const response = await fetch('http://localhost:3008/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);
    if (content.sucess) {
        alert ("Sucesso!!");
        window.location.reload();
        //recarrega a página
    } else {
        console.error()
        alert("Não deu!!");
    };
};