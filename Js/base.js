// Salva o token no localstorage
function salvarToken(token) {
    return localStorage.setItem('token', token);
}

// pega o token do localstorage
function obterToken(token) {
    return localStorage.getItem("token");
}

// salva o usuario no localstorage
function salvarUsuario(usuario) {
    return localStorage.setItem('usuario', JSON.stringify(usuario));
}

// pega o usuario salvo no localstorage
function obterUsuario(usuario) {
    let usuarioStore = localStorage.getItem("usuario");
    return JSON.parse(usuarioStore);
}

function salvarProduto(produto) {
    return localStorage.setItem('produto', JSON.stringify(produto));
}

function obterProduto(produto) {
    let produtoStore = localStorage.getItem("produto");
    return JSON.parse(produtoStore);
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.open('login.html', '_self');
}
