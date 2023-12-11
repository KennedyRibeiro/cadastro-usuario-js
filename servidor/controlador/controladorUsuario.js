const Usuario = require('../model/usuario');

exports.criar = (req, res) => {
    Usuario.create(req.body).then((usuario) => {
        res.json(usuario);
    });
};

exports.listar = (req, res) => {
    Usuario.findAll().then((usuarios) => {
        res.json(usuarios);
    });
};