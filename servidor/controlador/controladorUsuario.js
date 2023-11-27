const Usuario = require('../model/usuario');

exports.criar = (req, res) => {
    Usuario.create(req.body).then((usuario) => {
        res.json(usuario);
    });
};