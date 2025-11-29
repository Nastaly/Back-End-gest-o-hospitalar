const express = require('express');
const ProfissionalController = require('../controllers/profissionalcontroller');
const profissionalRoutes = express.Router();

profissionalRoutes.post('/profissional', new ProfissionalController().create);
profissionalRoutes.get('/profissional', new ProfissionalController().get);
profissionalRoutes.put('/profissional/:id', new ProfissionalController().update);
profissionalRoutes.delete('/profissional/:id', new ProfissionalController().delete);

module.exports = profissionalRoutes;