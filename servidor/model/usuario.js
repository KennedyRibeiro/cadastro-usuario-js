const Sequelize = require('sequelize');
const sequelize = new Sequelize('controle_usuario_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

const Usuario = sequelize.define('usuario', {
    nome: Sequelize.STRING, 
    email: Sequelize.STRING,
    profissao: Sequelize.STRING
});

sequelize.sync();

module.exports = Usuario;

   
