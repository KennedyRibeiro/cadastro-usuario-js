const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('cliente', {'extensions': ['html'] }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));

//console.log(__dirname);
//console.log(path.join(__dirname, '..', 'cliente', 'index.html'));

const diretorioHtml = path.join(__dirname, '..', 'cliente', 'index.html');

app.get('/', (req, res) => {
    res.contentType('.html');
    res.sendFile(diretorioHtml);
});

const rotasUsuario = require('./rotas/rotasUsuario');
app.use('/usuarios', rotasUsuario);

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor em execução na porta ${PORTA}`);
});