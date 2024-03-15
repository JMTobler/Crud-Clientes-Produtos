const EMAIL  = "admin@empresa.com";
const SENHA = "123456";

let campoEmail = document.querySelector("#email");
let campoSenha = document.querySelector("#senha");
let btnEntrar = document.querySelector("#btn-login");

btnEntrar.addEventListener("click", () =>{
    // captura email e senha digitados
    let emailDigitado = campoEmail.value.toLowerCase();
    let senhaDigitada = campoSenha.value;

    // Chamando a função de autenticação
    autenticar(emailDigitado, senhaDigitada);
});

function autenticar (email, senha) {
    // definindo a url da api
    const URL = 'http://localhost:3400/login';

    // Criando um request para api
    fetch (URL, {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, senha})
    })
    .then(response => response = response.json())
    .then(response =>{
        if(!!response.mensagem){
            alert(response.mensagem);
            return;
        }

        MostrarLoad();

        salvarToken(response.token)

        setTimeout(() => {
            window.open('home.html', '_self');
        }, 500)
        
        
    })
    .catch(erro => console.log(erro))
}

function MostrarLoad() {
    // capturando e mostrando o campo de loading
    const divLoading = document.getElementById('loading');
    divLoading.style.display = 'block';

    // capturando e escondedendo a caixa de login
    const divLoginBox = document.querySelector('div.login-box');
    divLoginBox.style.display = 'none';
}