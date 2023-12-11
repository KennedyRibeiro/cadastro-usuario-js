const express = require('express');
const rotas = express.Router();
const controladorUsuario = require('../controlador/controladorUsuario');

rotas.post('/criar', controladorUsuario.criar);
rotas.get('/listar', controladorUsuario.listar);

module.exports = rotas;