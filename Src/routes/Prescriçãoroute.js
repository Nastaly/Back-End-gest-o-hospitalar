const express = require('express');
const PrescricaoController = require('../controllers/Prescriçãocontrollers');
const prescricaoroutes = express.Router();

prescricaoroutes.post('/prescricao', new PrescricaoController().create);
prescricaoroutes.get('/prescricao', new PrescricaoController().get);
prescricaoroutes.put('/prescricao/:id', new PrescricaoController().update);
prescricaoroutes.delete('/prescricao/:id', new PrescricaoController().delete);

module.exports = prescricaoroutes;