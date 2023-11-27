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
    });
})