const express = require('express');
const EstoqueController = require('../controllers/estoquecontroller');
const estoqueroutes = express.Router();

estoqueroutes.post('/estoque', new EstoqueController().create);
estoqueroutes.get('/estoque', new EstoqueController().get);
estoqueroutes.put('/estoque/:id', new EstoqueController().update);
estoqueroutes.delete('/estoque/:id', new EstoqueController().delete);

module.exports = estoqueroutes;