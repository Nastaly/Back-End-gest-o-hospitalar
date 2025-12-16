const express = require('express');
const UsuarioController = require('../controllers/Usuariocontrollers');
const usuarioroutes = express.Router();

usuarioroutes.post('/usuario', new UsuarioController().create);
usuarioroutes.get('/usuario', new UsuarioController().get);
usuarioroutes.put('/usuario/:id', new UsuarioController().update);
usuarioroutes.delete('/usuario/:id', new UsuarioController().delete);

module.exports = usuarioroutes;