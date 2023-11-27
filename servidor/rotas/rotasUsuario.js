const express = require('express');
const rotas = express.Router();
const controladorUsuario = require('../controlador/controladorUsuario');

rotas.post('/criar', controladorUsuario.criar);

module.exports = rotas;