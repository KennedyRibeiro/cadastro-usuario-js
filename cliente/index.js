function criarUsuario(usuario) {
    const listaUsuarios = document.querySelector('#lista-usuarios tbody');
    let novaLinha = document.createElement('tr');

    let colunaNome = document.createElement('td');
    colunaNome.textContent = usuario.nome;

    let colunaEmail = document.createElement('td');
    colunaEmail.textContent = usuario.email;

    let colunaProfissao = document.createElement('td');
    colunaProfissao.textContent = usuario.profissao;

    let colunaAcoes = document.createElement('td');
    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('btn');
    botaoExcluir.classList.add('btn-danger');
    /*botaoExcluir.addEventListener('click', () => {
        excluirUsuario(usuario.id);
    })*/

    colunaAcoes.appendChild(botaoExcluir);

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEmail);
    novaLinha.appendChild(colunaProfissao);
    novaLinha.appendChild(colunaAcoes);

    listaUsuarios.appendChild(novaLinha);
}

function listarUsuarios() {
    const listaUsuarios = document.querySelector('#lista-usuarios tbody');
    fetch('/usuarios/listar')
        .then((response) => response.json())
        .then((usuarios) => {
            listaUsuarios.innerHTML = '';
            usuarios.forEach((usuario) => {
                criarUsuario(usuario);
            });
        });
}

document.addEventListener('DOMContentLoaded', () => {

    const formularioUsuario = document.querySelector('#formulario-usuario');

    formularioUsuario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const profissao = document.querySelector('#profissao').value;

        const dados ={
            nome: nome,
            email: email,
            profissao: profissao,
        }

        fetch('/usuarios/criar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dados),
        })
        listarUsuarios();
    });

    listarUsuarios();
});

